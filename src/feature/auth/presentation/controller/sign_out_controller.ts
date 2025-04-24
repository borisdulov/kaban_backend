import Elysia from "elysia";

export const SignOutController = new Elysia().get("/sign_out", () => {}, {
  detail: { description: "Выход из аккаунта" },
});
