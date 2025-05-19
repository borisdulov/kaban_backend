import Elysia from "elysia";
import { UpdateUserController } from "./controller/update_me_controller";
import { GetUserController } from "./controller/get_user_controller";
import { CreateUserController } from "./controller/create_user_controler";
import { GetUserByUsernameController } from "./controller/get_user_by_username_controller";
import { DeleteUserController } from "./controller/delete_user_controller";

export const UserGroup = new Elysia().group("/user", (app) =>
  app
    // .use(GetMeController)
    .use(UpdateUserController)
    .use(GetUserController)
    .use(CreateUserController)
    .use(GetUserByUsernameController)
    .use(DeleteUserController)
);
