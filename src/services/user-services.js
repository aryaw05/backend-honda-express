import {
  registerUserValidation,
  loginUserValidation,
} from "../validation/userSchema.js";
import { validate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";
import { v4 as uuid } from "uuid";

import bcrypt from "bcrypt";
import { prisma } from "../application/database.js";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prisma.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser > 0) {
    throw new ResponseError(404, "Username already exist");
  }
  user.password = await bcrypt.hash(user.password, 10);

  return prisma.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prisma.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      username: true,
      password: true,
    },
  });
  if (!user) {
    throw new ResponseError(404, "Username or password not found");
  }
  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid)
    throw new ResponseError(404, "Username or password not found");

  // tambah token
  const token = uuid().toString();

  return prisma.user.update({
    data: {
      token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
    },
  });
};
export default { register, login };
