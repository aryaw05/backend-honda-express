import { prisma } from "../src/application/database.js";
import bcrypt from "bcrypt";
export const removeTestUser = async () => {
  await prisma.user.deleteMany({
    where: {
      username: "test",
    },
  });
};
