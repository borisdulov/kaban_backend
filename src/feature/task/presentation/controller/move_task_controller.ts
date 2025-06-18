import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { TaskRepository } from "../../domain/repository/task_repository";

export const MoveTaskController = new Elysia().use(DIContainerPlugin).post(
  "/moveTask",
  async ({ container, body }) => {
    const { taskId, newColumnId } = body;
    const taskRepo = container.get(TaskRepository);
    const updatedTask = await taskRepo.moveTaskToColumn(taskId, newColumnId);
    return updatedTask;
  },
  {
    body: t.Object({
      taskId: t.String(),
      newColumnId: t.String(),
    }),
  }
);
