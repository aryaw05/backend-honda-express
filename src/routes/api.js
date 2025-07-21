import motorController from "../controller/motor-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

import express from "express";

const privateRouter = new express.Router();

privateRouter.use(authMiddleware);

// Motor Routes
privateRouter.post("/api/motor", motorController.addMotor);

export { privateRouter };
