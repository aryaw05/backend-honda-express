import { prisma } from "../application/database.js";
import {
  addKategoriValidation,
  deleteKategoriValidation,
  updateKategoriValidation,
} from "../validation/categorySchema.js";
import { validate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";

const addKategori = async (data) => {
  const category = validate(addKategoriValidation, data);

  return await prisma.kategori.create({
    data: category,
    select: { id_kategori: true, nama_kategori: true },
  });
};

const get = async () => {
  const kategori = await prisma.kategori.findMany({
    select: {
      nama_kategori: true,
    },
  });

  if (!kategori) {
    throw new ResponseError(404, "Kategori Is not found");
  }
  return kategori;
};

const update = async (request) => {
  const result = validate(updateKategoriValidation, request);
  const totalDataInDatabase = await prisma.kategori.count({
    where: {
      id_kategori: result.id_kategori,
    },
  });

  if (totalDataInDatabase === 0) {
    throw new ResponseError(404, "Kategori is not found");
  }
  const data = {};
  if (request.nama_kategori) {
    data.nama_kategori = request.nama_kategori;
  }
  if (request.id_kategori) {
    data.id_kategori = request.id_kategori;
  }
  return prisma.kategori.update({
    where: {
      id_kategori: data.id_kategori,
    },
    data: data,
    select: {
      nama_kategori: true,
    },
  });
};

const remove = async (id_kategori) => {
  const result = validate(deleteKategoriValidation, id_kategori);
  const totalDataInDatabase = await prisma.kategori.count({
    where: {
      id_kategori: result,
    },
  });

  if (totalDataInDatabase === 0) {
    throw new ResponseError(404, "Kategori is not found");
  }
  return prisma.kategori.delete({
    where: {
      id_kategori: result,
    },
  });
};
export default { addKategori, get, update, remove };
