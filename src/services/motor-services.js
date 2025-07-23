import {
  addMotorValidation,
  geDetailMotorValidation,
} from "../validation/motorSchema.js";
import { prisma } from "../application/database.js";
import { validate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";

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
  motorId = validate(geDetailMotorValidation, motorId);

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
export default { addMotor, getDetailMotor };
