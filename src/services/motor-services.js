import { addMotorValidation } from "../validation/motorSchema.js";
import { prisma } from "../application/database.js";
import { validate } from "../validation/validate.js";

const addMotor = async (request) => {
  const motors = validate(addMotorValidation, request);

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

export default { addMotor };
