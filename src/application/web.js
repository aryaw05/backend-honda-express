import express from "express";
import { publicRouter } from "../routes/public-api.js";
import { privateRouter } from "../routes/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";
export const web = express();

web.use(express.json());
web.use(express.static("public"));
web.use(cors());
web.use(publicRouter);
web.use(errorMiddleware);
web.use(privateRouter);
