import Joi from "joi";

const addKategoriValidation = Joi.object({
  nama_kategori: Joi.string().max(191).required(),
});

const deleteKategoriValidation = Joi.number().positive().required();

const updateKategoriValidation = Joi.object({
  id_kategori: Joi.number().positive().required(),
  nama_kategori: Joi.string().max(191).optional(),
});

export {
  addKategoriValidation,
  deleteKategoriValidation,
  updateKategoriValidation,
};
