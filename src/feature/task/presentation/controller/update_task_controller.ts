import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { TaskRepository } from "../../domain/repository/task_repository";
import { TaskPriority } from "../../domain/entity/task_priority_enum";

export const UpdateTaskController = new Elysia().use(DIContainerPlugin).post(
  "/update",
  async ({ container, body }) => {
    const taskRepo = container.get(TaskRepository);
    const updatedTask = await taskRepo.updateTask(body);
    return updatedTask;
  },
  {
    body: t.Object({
      taskId: t.String(),
      title: t.Optional(t.String()),
      description: t.Optional(t.String()),
      isCompleted: t.Optional(t.Boolean()),
      taskPriority: t.Optional(t.Enum(TaskPriority)),
    }),
  }
);
