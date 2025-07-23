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
const logout = async (req, res, next) => {
  try {
    const token = req.user.id;
    await userServices.logout(token);
    res.status(200).json({
      data: "OK",
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const result = await userServices.getUser(userId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const result = await userServices.update(req.body, userId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export default { register, login, logout, getUser, update };
