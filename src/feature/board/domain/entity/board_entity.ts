import { User } from "../../../user/domain/entity/user_entity";
import { Column } from "../../../column/domain/entity/column_entity";

export interface Board {
  _id: string;
  title: string;
  ownerId: string;
  owner?: User;
  usersId: string[];
  users: User[];
  columnsId: string[];
  columns: Column[];
}
