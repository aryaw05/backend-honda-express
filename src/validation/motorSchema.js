import Joi from "joi";

const addMotorValidation = Joi.object({
  id_user: Joi.number().required(),
  id_kategori: Joi.number().required(),
  nama_barang: Joi.string().max(191).required(),
  deskripsi: Joi.string().max(191).required(),
  harga: Joi.number().required(),
  gambar_card: Joi.string().max(191).required(),
});

const geDetailMotorValidation = Joi.number().positive().required();
export { addMotorValidation, geDetailMotorValidation };
