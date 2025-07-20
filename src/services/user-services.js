import { registerUserValidation } from "../validation/userSchema.js";
import { validate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";

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

  return await prisma.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

export default { register };
