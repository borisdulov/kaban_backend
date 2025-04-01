import { ProjectPrivacy as BoardPrivacy } from "../domain/entity/board_privacy";

export interface UpdateBoardDTO {
  boardId: String;
  name?: String;
  description?: String;
  privacy?: BoardPrivacy;
}
