import { addMotorValidation } from "../validation/motorSchema.js";
import { prisma } from "../application/database.js";
import { validate } from "../validation/validate.js";

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

const getMotor = async () => {
  return prisma.motor.findMany(
    {
      select: {
        id_motor: true,
        id_kategori: true,
        nama_barang: true,
        deskripsi: true,
        harga: true,
        gambar_card: true,
      },
    },
    {
      orderBy: {
        id_motor: "asc",
      },
    }
  );
};
export default { addMotor, getMotor };
