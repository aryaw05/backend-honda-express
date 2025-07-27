import kategoriServices from "../services/category-service.js";

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

const get = async (req, res, next) => {
  try {
    const result = await kategoriServices.get();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await kategoriServices.update(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const kategoriId = req.params.id_kategori;
    await kategoriServices.remove(kategoriId);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  }
};
export default { addKategori, get, update, remove };
