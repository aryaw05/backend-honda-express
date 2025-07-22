import Joi from "joi";

const addKategoriValidation = Joi.object({
  nama_kategori: Joi.string().max(191).required(),
});

export { addKategoriValidation };
