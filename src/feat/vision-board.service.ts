import { uploadToSupabase } from "../shared/upload-to-supabase";
import { visionBoardRepository } from "./vision-board.repository";

export const visionBoardService = {
	createVisionBoard: async (params: {
		name: string;
		message: string;
		file: Express.Multer.File;
	}) => {
		const { name, message, file } = params;

		const { url } = await uploadToSupabase(file, "audience");

		const visionBoard = await visionBoardRepository.createVisionBoard({
			name,
			message,
			photoUrl: url,
		});

		return visionBoard;
	},

	getVisionBoards: async () => {
		const boards = await visionBoardRepository.getVisionBoards();
		return boards;
	},
};

