import {
  addMotorValidation,
  getDetailMotorValidation,
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

  return prisma.motor.create({
    data: motors,
    select: {
      id_kategori: true,
      nama_barang: true,
      deskripsi: true,
      harga: true,
      gambar_card: true,
    },
  });
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
    },
  });

  const filePath = path.join("public", "uploads", data.gambar_card);

  if (filePath) {
    fs.unlink(filePath);
    console.log("File dihapus:", filePath);
  }
  // console.error("Gagal hapus file:", err.message);
  // Optional: throw err kalau ingin error dihentikan
  return data;
};

const update = async (request, user) => {
  const result = validate(updateMotorValidation, request);

  const totalDataInDatabase = await prisma.motor.count({
    where: {
      id_motor: result.id_motor,
      id_user: user,
    },
  });
  if (totalDataInDatabase === 0) {
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
export default { addMotor, getDetailMotor, remove, update };
