import { uploadToSupabase } from "../shared/upload-to-supabase";
import { visionBoardRepository } from "./vision-board.repository";

export const visionBoardService = {
	createVisionBoard: async (params: {
		name: string;
		message: string;
		file: Express.Multer.File | null;
	}) => {
		const { name, message, file } = params;

		let url = "";
		if (file) {
			({ url } = await uploadToSupabase(file, "audience"));
		}

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

