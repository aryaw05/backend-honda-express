import userServices from "../services/user-services.js";

// controller disini berfungsi untuk menerima request yang dikirim dari route

const register = async (req, res, next) => {
  try {
    const result = await userServices.register(req.body);

    // controller juga mengembalikan status 200 (ok)

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const result = await userServices.login(req.body);

    // controller juga mengembalikan status 200 (ok)

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { register, login };
