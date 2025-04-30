import Elysia from "elysia";
import { UpdateMeController } from "./controller/update_me_controller";
import { GetUserController } from "./controller/get_user_controller";
import { CreateUserController } from "./controller/create_user_controler";

export const UserGroup = new Elysia().group("/user", (app) =>
  app
    // .use(GetMeController)
    .use(UpdateMeController)
    .use(GetUserController)
    .use(CreateUserController)
);
