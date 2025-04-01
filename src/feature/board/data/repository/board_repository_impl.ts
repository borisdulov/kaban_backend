import mongoose from "mongoose";
import { Board } from "../../domain/entity/board_entity";
import { BoardRepository as BoardRepository } from "../../domain/repository/board_repository";
import { CreateBoardDTO } from "../../dto/create_board_dto";
import { BoardModel } from "../model/board_model";
import { AppError } from "../../../../core/error/app_error";
import { UserModel } from "../../../user/data/model/user_model";
import { UpdateBoardDTO } from "../../dto/update_board_dto";

export class BoardRepositoryImpl extends BoardRepository {
  async deleteBoard(boardId: string): Promise<Board> {
    throw new Error("Method not implemented.");
  }

  async addUsersToBoard(userId: string, projectId: string): Promise<Board> {
    const project = await BoardModel.findById(projectId);
    if (!project) throw AppError.PROJECT_NOT_FOUND;

    const user = await UserModel.findById(userId);
    if (!user) throw AppError.USER_NOT_FOUND;

    await Promise.all([
      BoardModel.findByIdAndUpdate(
        projectId,
        { $addToSet: { users: userId } },
        { new: true }
      ).lean(),
      UserModel.findByIdAndUpdate(
        userId,
        { $addToSet: { projectsIds: projectId } },
        { new: true }
      ).lean(),
    ]);
    const updatedProject = await BoardModel.findById(projectId).populate(
      "members"
    );
    if (!updatedProject) {
      throw AppError.PROJECT_NOT_FOUND;
    }
    return updatedProject;
  }

  async getBoardsByUserId(userId: string): Promise<Board[]> {
    const user = await UserModel.findById(userId);
    if (!user) throw AppError.USER_NOT_FOUND;

    const projects = await BoardModel.find({
      _id: { $in: user.projectsIds },
    })
      .populate("owner")
      .populate("members");

    return projects as Board[];
  }

  async removeUserFromBoard(userId: string, projectId: string): Promise<Board> {
    const project = await BoardModel.findById(projectId);
    if (!project) throw AppError.PROJECT_NOT_FOUND;

    const user = await UserModel.findById(userId);
    if (!user) throw AppError.USER_NOT_FOUND;

    await Promise.all([
      BoardModel.findByIdAndUpdate(
        projectId,
        { $pull: { users: userId } },
        { new: true }
      ).lean(),
      UserModel.findByIdAndUpdate(
        userId,
        { $pull: { projectsIds: projectId } },
        { new: true }
      ).lean(),
    ]);

    const updatedProject = await BoardModel.findById(projectId).populate(
      "members"
    );
    if (!updatedProject) {
      throw AppError.PROJECT_NOT_FOUND;
    }
    return updatedProject;
  }

  async createBoard(dto: CreateBoardDTO): Promise<Board> {
    const project = new BoardModel({
      ...dto,
      owner: new mongoose.Types.ObjectId(),
    });
    await project.save();
    return project.toObject();
  }

  async Project(projectId: string): Promise<Board> {
    const project = await BoardModel.findByIdAndDelete(projectId).exec();
    if (!project) throw AppError.PROJECT_NOT_FOUND;

    return project.toObject();
  }

  async getBoard(projectId: string): Promise<Board> {
    const project = await BoardModel.findById(projectId).exec();
    if (!project) throw AppError.PROJECT_NOT_FOUND;

    return project.toObject();
  }

  async updateBoard(dto: UpdateBoardDTO): Promise<Board> {
    const project = await BoardModel.findOneAndUpdate(
      { _id: dto.boardId },
      { $set: dto },
      { new: true, runValidators: true }
    ).lean();

    if (!project) throw AppError.PROJECT_NOT_FOUND;

    return project;
  }
}
