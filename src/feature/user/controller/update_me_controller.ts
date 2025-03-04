import { Elysia } from "elysia";

export const UpdateMeController = new Elysia().post(
  "/update",
  async (request) => {},
  {
    detail: { description: "Изменение пользователем данных о себе" },
  }
);
