import { Elysia } from "elysia";

export const RemoveUsersFromProjectController = new Elysia().post(
  "/:projectId/users/remove",
  async (request) => {},
  {
    detail: { description: "Удаление пользователей из проекта" },
  }
);
