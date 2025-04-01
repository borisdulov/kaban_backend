import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateColumnDTO } from "../../dto/create_column_dto";
import { UpdateColumnDTO } from "../../dto/update_column_dto";
import { Column } from "../entity/column_entity";

export abstract class ColumnRepository extends Dependency {
  abstract createColumn(dto: CreateColumnDTO): Promise<Column>;

  abstract getColumnsByBoardId(boardId: string): Promise<Column[]>;

  abstract getColumnById(columnId: string): Promise<Column>;

  abstract updateColumn(dto: UpdateColumnDTO): Promise<Column>;

  abstract deleteColumn(columnId: string): Promise<Column>;
}
