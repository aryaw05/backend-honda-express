import express from "express";
import { logger } from "./application/logger.js";
import { publicRouter } from "./routes/public-api.js";
import { privateRouter } from "./routes/api.js";
import cors from "cors";
import { errorMiddleware } from "./middleware/error-middleware.js";

const web = express();
web.listen(3000, () => {
  logger.info("App start");
});
web.use(cors());

web.use(express.json());
web.use(express.static("public"));
web.use(publicRouter);
web.use(privateRouter);
web.use(errorMiddleware);
