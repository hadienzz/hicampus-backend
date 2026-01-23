import { Router } from "express";
import multer from "multer";
import { visionBoardController } from "./vision-board.controller";

const router = Router();

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 10 * 1024 * 1024,
		fieldSize: 10 * 1024 * 1024,
	},
});

router.post(
	"/upload",
	upload.single("photo"),
	visionBoardController.visionBoardPost,
);
router.get("/get", visionBoardController.getVisionBoard);

export default router;
