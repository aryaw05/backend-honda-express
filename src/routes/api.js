import kategoriController from "../controller/kategori-controller.js";
import motorController from "../controller/motor-controller.js";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

import express from "express";
import { upload } from "../middleware/mutler-middleware.js";
import mutlerController from "../controller/mutler-controller.js";

const privateRouter = new express.Router();

privateRouter.use(authMiddleware);

// Motor Routes
privateRouter.post(
  "/api/motor",
  upload.single("gambar"),
  motorController.addMotor
);
privateRouter.get("/api/motor/:motorId", motorController.getDetailMotor);
// Kategori Routes
privateRouter.post("/api/kategori", kategoriController.addKategori);
privateRouter.get("/api/kategori/get", kategoriController.get);
privateRouter.patch("/api/kategori/update", kategoriController.update);
privateRouter.delete(
  "/api/kategori/delete/:id_kategori",
  kategoriController.remove
);

privateRouter.delete("/api/users/logout", userController.logout);
privateRouter.get("/api/users/current", userController.getUser);
privateRouter.patch("/api/users/update", userController.update);

// FIle Routes
privateRouter.post(
  "/api/upload",
  upload.single("file"),
  mutlerController.uploadFile
);

export { privateRouter };
