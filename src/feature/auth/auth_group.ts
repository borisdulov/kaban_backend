import Elysia from "elysia";
import { SignInController } from "./presentation/controller/sign_in_controller";
import { SignOutController } from "./presentation/controller/sign_out_controller";
import { SignUpController } from "./presentation/controller/sign_up_controller";

export const AuthGroup = new Elysia().group("/auth", (app) =>
  app.use(SignInController).use(SignOutController).use(SignUpController)
);
