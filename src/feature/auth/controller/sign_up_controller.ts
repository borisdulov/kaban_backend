import Elysia from "elysia";

export const SignUpController = new Elysia().post("/sign_up", () => {}, {
  detail: { description: "Регистрация нового аккаунта" },
});
