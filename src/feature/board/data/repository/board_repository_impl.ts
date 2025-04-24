import mongoose from "mongoose";
import { Board } from "../../domain/entity/board_entity";
import { BoardRepository as BoardRepository } from "../../domain/repository/board_repository";
import { CreateBoardDTO } from "../../dto/create_board_dto";
import { BoardModel } from "../model/board_model";
import { AppError } from "../../../../core/error/app_error";
import { UserModel } from "../../../user/data/model/user_model";
import { UpdateBoardDTO } from "../../dto/update_board_dto";

export class BoardRepositoryImpl extends BoardRepository {
  async addUsersToBoard(userId: string, boardId: string): Promise<Board> {
    const board = await BoardModel.findById(boardId);
    if (!board) throw AppError.PROJECT_NOT_FOUND;

    const user = await UserModel.findById(userId);
    if (!user) throw AppError.USER_NOT_FOUND;

    await Promise.all([
      BoardModel.findByIdAndUpdate(
        boardId,
        { $addToSet: { users: userId } },
        { new: true }
      ).lean(),
      UserModel.findByIdAndUpdate(
        userId,
        { $addToSet: { boardsIds: boardId } },
        { new: true }
      ).lean(),
    ]);
    const updateBoard = await BoardModel.findById(boardId).populate("members");
    if (!updateBoard) {
      throw AppError.PROJECT_NOT_FOUND;
    }
    return updateBoard;
  }

  async getBoardsByUserId(userId: string): Promise<Board[]> {
    const user = await UserModel.findById(userId);
    if (!user) throw AppError.USER_NOT_FOUND;

    const projects = await BoardModel.find({
      _id: { $in: user.boardsIds },
    })
      .populate("owner")
      .populate("members");

    return projects as Board[];
  }

  async removeUserFromBoard(userId: string, boardId: string): Promise<Board> {
    const board = await BoardModel.findById(boardId);
    if (!board) throw AppError.PROJECT_NOT_FOUND;

    const user = await UserModel.findById(userId);
    if (!user) throw AppError.USER_NOT_FOUND;

    await Promise.all([
      BoardModel.findByIdAndUpdate(
        boardId,
        { $pull: { users: userId } },
        { new: true }
      ).lean(),
      UserModel.findByIdAndUpdate(
        userId,
        { $pull: { boardsIds: boardId } },
        { new: true }
      ).lean(),
    ]);

    const updateBoard = await BoardModel.findById(boardId).populate("members");
    if (!updateBoard) {
      throw AppError.PROJECT_NOT_FOUND;
    }
    return updateBoard;
  }

  async createBoard(dto: CreateBoardDTO): Promise<Board> {
    const board = new BoardModel({
      ...dto,
      owner: new mongoose.Types.ObjectId(),
    });
    await board.save();
    return board.toObject();
  }

  async deleteBoard(boardId: string): Promise<Board> {
    const board = await BoardModel.findByIdAndDelete(boardId).exec();
    if (!board) throw AppError.PROJECT_NOT_FOUND;

    return board.toObject();
  }

  async getBoard(boardId: string): Promise<Board> {
    const board = await BoardModel.findById(boardId).exec();
    if (!board) throw AppError.PROJECT_NOT_FOUND;

    return board.toObject();
  }

  async updateBoard(dto: UpdateBoardDTO): Promise<Board> {
    const updatedBoard = await BoardModel.findOneAndUpdate(
      { _id: dto.boardId },
      { $set: dto },
      { new: true, runValidators: true }
    ).lean();

    if (!updatedBoard) throw AppError.PROJECT_NOT_FOUND;

    return updatedBoard;
  }
}
