import { ObjectId } from "mongoose";
import { Dependency } from "../../../../core/domain/entity/dependency";
import { Task } from "../../../task/domain/entity/task_entity";
import { CreateColumnDTO } from "../../dto/create_column_dto";
import { UpdateColumnDTO } from "../../dto/update_column_dto";
import { Column } from "../entity/column_entity";

export abstract class ColumnRepository extends Dependency {
  abstract createColumn(dto: CreateColumnDTO): Promise<Column>;

  abstract getColumnsByBoardId(board: string): Promise<Column[]>;

  abstract getTasksByColumnId(columnId: string): Promise<Task[]>;

  abstract getColumnById(columnId: string): Promise<Column>;

  abstract updateColumn(dto: UpdateColumnDTO): Promise<Column>;

  abstract deleteColumn(columnId: string): Promise<Column>;
}
