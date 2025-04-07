import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { TaskPriority } from "../../domain/entity/task_priority_enum";
import { TaskRepository } from "../../domain/repository/task_repository";

export const CreateTaskController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ body, container }) => {
    const taskRepo = container.get(TaskRepository);
    const createdTask = await taskRepo.createTask(body);
    return createdTask;
  },
  {
    body: t.Object({
      title: t.String(),
      description: t.String(),
      isCompleted: t.Boolean(),
      taskPriority: t.Enum(TaskPriority),
    }),
  }
);
