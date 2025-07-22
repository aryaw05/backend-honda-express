import kategoriServices from "../services/kategori-service.js";

const addKategori = async (req, res, next) => {
  try {
    const result = await kategoriServices.addKategori(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { addKategori };
