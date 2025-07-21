import { prisma } from "../application/database.js";

export const authMiddleware = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    res.status(401).json({ message: "Unauthorized" }).end();
  } else {
    const user = prisma.user.findFirst({
      where: {
        token,
      },
    });
    if (!user) {
      res.status(401).json({ message: "Unauthorized" }).end();
    } else {
      req.user = user;
      next();
    }
  }
};
