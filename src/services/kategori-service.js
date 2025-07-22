import { prisma } from "../application/database.js";
import { addKategoriValidation } from "../validation/kategoriSchema.js";
import { validate } from "../validation/validate.js";

const addKategori = async (data) => {
  const category = validate(addKategoriValidation, data);

  return await prisma.kategori.create({
    data: category,
    select: { id_kategori: true, nama_kategori: true },
  });
};

export default { addKategori };
