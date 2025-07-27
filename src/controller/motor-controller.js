import motorServices from "../services/motor-services.js";

const addMotor = async (req, res, next) => {
  try {
    const gambarFile = req.file;
    if (!gambarFile) throw new Error("File tidak ditemukan");

    const jsonData = JSON.parse(req.body.data);
    const data = { ...jsonData, gambar_card: gambarFile.filename };
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
    const request = JSON.parse(req.body.data);
    const gambarFile = req.file;
    const user = req.user.id;
    request.id_motor = motorId;
    request.gambar_card = gambarFile?.filename;

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
