import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { TaskRepository } from "../../domain/repository/task_repository";

export const GiveTaskToUserController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/giveTask",
    async ({ container, body }) => {
      const { userId, taskId } = body;
      const taskRepo = container.get(TaskRepository);
      const updatedTask = await taskRepo.giveTaskToUser(userId, taskId);
      return updatedTask;
    },
    {
      body: t.Object({
        userId: t.String(),
        taskId: t.String(),
      }),
    }
  );
