import Elysia from "elysia";
import { UpdateMeController } from "./controller/update_me_controller";
import { GetUserController } from "./controller/get_user_controller";

export const UserGroup = new Elysia().group("/user", (app) =>
  app
    // .use(GetMeController)
    .use(UpdateMeController)
    .use(GetUserController)
);
