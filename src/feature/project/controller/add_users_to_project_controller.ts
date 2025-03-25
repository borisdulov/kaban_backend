import { Elysia } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";

export const AddUsersToProjectController = new Elysia()
  .use(DIContainerPlugin)
  .post("/:projectId/users/:userId/add", async ({ container, params }) => {}, {
    detail: { description: "Добавление пользователей в проект" },
  });
