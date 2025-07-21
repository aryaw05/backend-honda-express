import motorServices from "../services/motor-services.js";

const addMotor = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await motorServices.addMotor(request);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export default { addMotor };
