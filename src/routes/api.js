import kategoriController from "../controller/kategori-controller.js";
import motorController from "../controller/motor-controller.js";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

import express from "express";

const privateRouter = new express.Router();

privateRouter.use(authMiddleware);

// Motor Routes
privateRouter.post("/api/motor", motorController.addMotor);
privateRouter.get("/api/motor/:motorId", motorController.getDetailMotor);
// Kategori Routes
privateRouter.post("/api/kategori", kategoriController.addKategori);

privateRouter.delete("/api/users/logout", userController.logout);
privateRouter.get("/api/users/current", userController.getUser);
privateRouter.patch("/api/users/update", userController.update);

export { privateRouter };
