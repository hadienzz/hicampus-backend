import { Request, Response, NextFunction } from "express";
import { APIResponse } from "../utils/response.util";
import { uploadSchema } from "./vision-board.schema";
import { visionBoardService } from "./vision-board.service";

const visionBoardPost = async (
  req: Request,
  res: Response<APIResponse>,
  next: NextFunction,
) => {
  try {
    const body = req.body ?? {};

    const parsed = uploadSchema.parse({
      name: body.name,
      message: body.message,
    });

    const visionBoard = await visionBoardService.createVisionBoard({
      name: parsed.name,
      message: parsed.message,
      file: req.file ?? null,
    });

    return res.status(201).json({
      status: "success",
      message: "Vision board uploaded",
      data: visionBoard,
    });
  } catch (err) {
    next(err as Error);
  }
};

const getVisionBoard = async (
  req: Request,
  res: Response<APIResponse>,
  next: NextFunction,
) => {
  try {
    const boards = await visionBoardService.getVisionBoards();

    return res.status(200).json({
      status: "success",
      message: "Vision board list",
      data: boards,
    });
  } catch (err) {
    next(err as Error);
  }
};

export const visionBoardController = {
  visionBoardPost,
  getVisionBoard,
};
