import { ProjectPrivacy } from "../domain/entity/board_privacy";

export interface CreateBoardDTO {
  name: String;
  description?: String;
  owner: String;
  privacy?: ProjectPrivacy;
}
