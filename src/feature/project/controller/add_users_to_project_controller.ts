import { Elysia } from "elysia";

export const AddUsersToProjectController = new Elysia().post(
  "/:projectId/users/add",
  async (request) => {},
  {
    detail: { description: "Добавление пользователей в проект" },
  }
);
