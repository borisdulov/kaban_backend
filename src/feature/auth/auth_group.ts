import Elysia from "elysia";
import { SignInController } from "./controller/sign_in_controller";
import { SignOutController } from "./controller/sign_out_controller";
import { SignUpController } from "./controller/sign_up_controller";

export const AuthGroup = new Elysia().group("/auth", (app) =>
  app.use(SignInController).use(SignOutController).use(SignUpController)
);
