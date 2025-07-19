import { registerUserValidation } from "../validation/userSchema";
import { validate } from "../validation/validate";
import { ResponseError } from "../error/response-error";

import bcrypt from "bcrypt";
import { prisma } from "../application/database";

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
    username: user.username,
    password: user.password,
    email: user.email,
    name: user.name,
  });
};

export default { register };
