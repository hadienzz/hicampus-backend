import prisma from "../database/prisma";

export const visionBoardRepository = {
  createVisionBoard: async (params: {
    name: string;
    message: string;
    photoUrl: string;
  }) => {
    const { name, message, photoUrl } = params;
    const visionBoard = await prisma.visionBoard.create({
      data: {
        name,
        message,
			photo_url: photoUrl,
      },
    });
    return visionBoard;
  },

  getVisionBoards: async () => {
    const boards = await prisma.visionBoard.findMany({
      orderBy: { id: "desc" },
    });
    return boards;
  },
};
