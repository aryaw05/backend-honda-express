import motorServices from "../services/motor-services.js";

const addMotor = async (req, res, next) => {
  try {
    const imageCard = req.files.gambar[0];
    if (!imageCard) throw new Error("Gambar Card tidak ditemukan");

    const data = JSON.parse(req.body.data);
    data.gambar_card = imageCard.filename;
    data.gambar_details = req.files.gambar_details.map((value) => ({
      url_gambar: value.filename,
    }));
    const user = req.user;

    const result = await motorServices.addMotor(user, data);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const getDetailMotor = async (req, res, next) => {
  try {
    const user = req.user;
    const motorId = req.params.motorId;
    const result = await motorServices.getDetailMotor(user, motorId);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const user = req.user.id;
    const motorId = req.params.motorId;
    const result = await motorServices.remove(user, motorId);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const motorId = req.params.motorId;
    const imageCard = req.files.gambar[0];
    const request = JSON.parse(req.body.data);
    request.gambar_card = imageCard?.filename;
    request.gambar_details = req.files.gambar_details.map((value) => ({
      url_gambar: value.filename,
    }));
    request.id_motor = motorId;
    const user = req.user.id;

    const result = await motorServices.update(request, user);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const searchAndGet = async (req, res, next) => {
  try {
    const user = req.user.id;
    const request = {
      nama_barang: req.query.nama_barang,
      page: req.query.page,
      size: req.query.size,
    };

    const result = await motorServices.searchAndGet(user, request);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
export default { addMotor, getDetailMotor, remove, update, searchAndGet };
