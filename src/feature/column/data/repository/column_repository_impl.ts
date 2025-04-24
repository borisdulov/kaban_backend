import { ColumnRepository } from "../../domain/repository/column_repository";
import { CreateColumnDTO } from "../../dto/create_column_dto";
import { UpdateColumnDTO } from "../../dto/update_column_dto";
import { Column } from "../../domain/entity/column_entity";
import { ColumnModel } from "../model/column_model";
import { AppError } from "../../../../core/error/app_error";
import { BoardModel } from "../../../board/data/model/board_model";
import { TaskModel } from "../../../task/data/model/task_model";
import { Task } from "../../../task/domain/entity/task_entity";
import { Types } from "mongoose";

export class ColumnRepositoryImpl extends ColumnRepository {
  async createColumn(dto: CreateColumnDTO): Promise<Column> {
    // Создаем модель
    const board = await BoardModel.findById(dto.boardId);
    if (!board) {
      throw AppError.BOARD_NOT_FOUND;
    }

    const column = new ColumnModel({
      name: dto.title,
      board: new Types.ObjectId(dto.boardId),
      tasks: [],
    });
    await column.save();

    // Добавляем ссылку в доску
    const updatedBoard = await BoardModel.findByIdAndUpdate(
      dto.boardId,
      { $push: { columns: column._id } },
      { new: true }
    );

    if (!updatedBoard) {
      throw AppError.BOARD_NOT_FOUND;
    }

    return column.toObject();
  }

  async getColumnsByBoardId(board: string): Promise<Column[]> {
    const boardd = await BoardModel.findById(board);
    if (!boardd) {
      throw AppError.BOARD_NOT_FOUND;
    }

    const objectId = new Types.ObjectId(board);
    const columns = await ColumnModel.find({ board: objectId }).lean();
    return columns;
  }

  async getTasksByColumnId(columnId: string): Promise<Task[]> {
    const tasks = await TaskModel.find({ columnId }).lean();
    return tasks;
  }

  async getColumnById(columnId: string): Promise<Column> {
    const column = await ColumnModel.findById(columnId).lean();
    if (!column) {
      throw AppError.COLUMN_NOT_FOUND;
    }
    return column;
  }

  async updateColumn(dto: UpdateColumnDTO): Promise<Column> {
    const updatedColumn = await ColumnModel.findByIdAndUpdate(
      dto.columnId,
      { $set: dto },
      { new: true, runValidators: true }
    ).lean();

    if (!updatedColumn) {
      throw AppError.COLUMN_NOT_FOUND;
    }
    return updatedColumn;
  }

  async deleteColumn(columnId: string): Promise<Column> {
    // Delete the column
    const deletedColumn = await ColumnModel.findByIdAndDelete(columnId).lean();
    if (!deletedColumn) {
      throw AppError.COLUMN_NOT_FOUND;
    }

    // Remove the column reference from the board's columns array
    await BoardModel.findByIdAndUpdate(
      deletedColumn.board,
      { $pull: { columns: deletedColumn._id } },
      { new: true }
    );

    return deletedColumn;
  }
}
