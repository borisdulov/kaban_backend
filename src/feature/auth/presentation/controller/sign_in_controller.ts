import Elysia from "elysia";

export const SignInController = new Elysia().post("/sign_in", () => {}, {
  detail: { description: "Вход в аккаунт" },
});
