import Elysia from "elysia";
import { UpdateMeController } from "./controller/update_me_controller";
import { GetUserController } from "./controller/get_user_controller";
import { SignUpController } from "../auth/controller/sign_up_controller";

export const UserGroup = new Elysia().group("/user", (app) =>
  app
    // .use(GetMeController)
    .use(UpdateMeController)
    .use(GetUserController)
    .use(SignUpController)
);
