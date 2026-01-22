import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import visionBoardRouter from "./feat/vision-board.route";
import { APIResponse } from "./utils/response.util";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://hicampus2k26.vercel.app/"],
  }),
);

app.use("/api/vision-board", visionBoardRouter);

app.get(
  "/api/health",
  (req: Request, res: Response<APIResponse>, next: NextFunction) => {
    try {
      return res.status(200).json({
        message: "API is healthy",
        status: "success",
      });
    } catch (err) {
      next(err);
    }
  },
);

app.use(errorHandler);
export default app;
