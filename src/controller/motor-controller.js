import motorServices from "../services/motor-services.js";

const addMotor = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await motorServices.addMotor(user, request);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export default { addMotor };
