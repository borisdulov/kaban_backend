import { Elysia } from "elysia";

export const GetMeController = new Elysia().get("/", async (request) => {}, {
  detail: { description: "Получение пользователем данных о себе" },
});
