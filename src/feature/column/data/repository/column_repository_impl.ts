import { ColumnRepository } from "../../domain/repository/column_repository";
import { CreateColumnDTO } from "../../dto/create_column_dto";
import { UpdateColumnDTO } from "../../dto/update_column_dto";
import { Column } from "../../domain/entity/column_entity";
import { ColumnModel } from "../model/column_model";
import { AppError } from "../../../../core/error/app_error";
import { BoardModel } from "../../../board/data/model/board_model";

export class ColumnRepositoryImpl extends ColumnRepository {
  async createColumn(dto: CreateColumnDTO): Promise<Column> {
    // Создаем модель
    const column = new ColumnModel({
      ...dto,
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

  async getColumnsByBoardId(boardId: string): Promise<Column[]> {
    const columns = await ColumnModel.find({ boardId }).lean();
    return columns;
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
