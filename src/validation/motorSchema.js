import Joi from "joi";

const addMotorValidation = Joi.object({
  id_user: Joi.number().required(),
  id_kategori: Joi.number().required(),
  nama_barang: Joi.string().max(191).required(),
  deskripsi: Joi.string().max(191).required(),
  harga: Joi.number().required(),
  gambar_card: Joi.string().max(191).required(),
});

const getDetailMotorValidation = Joi.number().positive().required();

const updateMotorValidation = Joi.object({
  id_motor: Joi.number().positive().required(),
  id_kategori: Joi.number().positive().optional(),
  nama_barang: Joi.string().max(191).optional(),
  deskripsi: Joi.string().max(191).optional(),
  harga: Joi.number().optional(),
  gambar_card: Joi.string().max(191).optional(),
});

const searchMotorValidation = Joi.object({
  page: Joi.number().min(1).positive().default(1),
  size: Joi.number().min(1).positive().max(100).default(10),
  nama_barang: Joi.string().max(191).optional(),
});
export {
  addMotorValidation,
  getDetailMotorValidation,
  updateMotorValidation,
  searchMotorValidation,
};
