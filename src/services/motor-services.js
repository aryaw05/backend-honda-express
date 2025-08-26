import {
  addMotorValidation,
  getDetailMotorValidation,
  searchMotorValidation,
  updateMotorValidation,
} from "../validation/motorSchema.js";
import { prisma } from "../application/database.js";
import { validate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";

import fs from "fs/promises";
import path from "path";
const addMotor = async (user, request) => {
  const motors = validate(addMotorValidation, request);

  motors.id_user = user.id;

  const motor = await prisma.motor.create({
    data: {
      id_kategori: motors.id_kategori,
      id_user: motors.id_user,
      nama_barang: motors.nama_barang,
      deskripsi: motors.deskripsi,
      harga: motors.harga,
      gambar_card: motors.gambar_card,
    },
    select: {
      id_motor: true,
      id_user: true,
      id_kategori: true,
      nama_barang: true,
      deskripsi: true,
      harga: true,
      gambar_card: true,
    },
  });

  if (motors.gambar_details) {
    motors.gambar_details.forEach(async (value) => {
      await prisma.gambar.create({
        data: {
          url_gambar: value.url_gambar,
          id_motor: motor.id_motor,
          id_user: motor.id_user,
        },
        select: {
          url_gambar: true,
          id_motor: true,
          id_user: true,
        },
      });
    });
  }
  return motor;
};

const getDetailMotor = async (user, motorId) => {
  motorId = validate(getDetailMotorValidation, motorId);

  const motors = await prisma.motor.findFirst({
    where: {
      id_user: user.id,
      id_motor: motorId,
    },
    select: {
      id_motor: true,
      nama_barang: true,
      harga: true,
      gambar_card: true,
      deskripsi: true,
      gambarMotors: {
        select: {
          url_gambar: true,
        },
      },
    },
  });

  if (!motors) {
    throw new ResponseError(404, "Motor is not found");
  }

  return motors;
};

const remove = async (user, motorId) => {
  const result = validate(getDetailMotorValidation, motorId);

  const totalDataInDatabase = await prisma.motor.count({
    where: {
      id_user: user,
      id_motor: result,
    },
  });

  if (totalDataInDatabase === 0) {
    throw new ResponseError(404, "Data Motor is not found");
  }
  const data = await prisma.motor.delete({
    where: {
      id_user: user,
      id_motor: result,
    },
    select: {
      gambar_card: true,
      id_motor: true,
      gambarMotors: {
        select: {
          url_gambar: true,
        },
      },
    },
  });
  await Promise.all(
    data.gambarMotors.map((img) =>
      fs.unlink(path.join("public", "uploads", img.url_gambar)).catch(() => {
        console.log("File detail tidak ditemukan:", img.url_gambar);
      })
    )
  );

  const filePath = path.join("public", "uploads", data.gambar_card);
  await fs.unlink(filePath).catch(() => {
    console.log("File utama tidak ditemukan:", filePath);
  });
};

const update = async (request, user) => {
  const result = validate(updateMotorValidation, request);

  const dataInDataBase = await prisma.motor.findFirst({
    where: {
      id_motor: result.id_motor,
      id_user: user,
    },
  });

  if (!dataInDataBase) {
    throw new ResponseError(404, "Data Motor is not found");
  }
  const data = {};
  if (request.nama_barang) {
    data.nama_barang = request.nama_barang;
  }

  if (request.deskripsi) {
    data.deskripsi = request.deskripsi;
  }

  if (request.harga) {
    data.harga = request.harga;
  }

  if (request.gambar_card) {
    data.gambar_card = request.gambar_card;
    const filePath = path.join("public", "uploads", dataInDataBase.gambar_card);
    await fs.access(filePath);
    fs.unlink(filePath);
  }

  return prisma.motor.update({
    where: {
      id_motor: result.id_motor,
      id_user: user,
    },
    data: data,
    select: {
      id_motor: true,
      nama_barang: true,
      harga: true,
      gambar_card: true,
      deskripsi: true,
    },
  });
};

// const updateDetailGambar = async (request, user) => {

// };
const searchAndGet = async (user, request) => {
  request = validate(searchMotorValidation, request);

  // 1 ((page - 1) * size) = 0
  // 2 ((page - 1) * size) = 10
  const skip = (request.page - 1) * request.size;

  const filters = [];

  filters.push({
    id_user: user,
  });

  if (request.id_kategori) {
    filters.push({
      id_kategori: request.id_kategori,
    });
  }
  if (request.nama_barang) {
    filters.push({
      nama_barang: {
        contains: request.nama_barang,
      },
    });
  }
  // where: { AND: filters } pada Prisma digunakan untuk menggabungkan banyak kondisi pencarian sekaligus, dan semuanya harus terpenuhi (logika AND) agar sebuah data dianggap cocok.

  // Bertujuan agar semua kondisi yang dimasukkan user (nama_barang) harus terpenuhi,

  const motors = await prisma.motor.findMany({
    where: {
      AND: filters,
    },
    take: request.size,
    skip: skip,
  });

  const totalItems = await prisma.motor.count({
    where: {
      AND: filters,
    },
  });

  return {
    data: motors,
    paging: {
      page: request.page,
      total_item: totalItems,
      total_page: Math.ceil(totalItems / request.size),
    },
  };
};

export default { addMotor, getDetailMotor, remove, update, searchAndGet };
