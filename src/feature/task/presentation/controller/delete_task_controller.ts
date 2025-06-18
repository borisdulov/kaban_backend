import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { TaskRepository } from "../../domain/repository/task_repository";

export const DeleteTaskController = new Elysia().use(DIContainerPlugin).get(
  "/delete/:taskId",
  async ({ container, params }) => {
    const { taskId: id } = params;
    const taskRepository = container.get(TaskRepository);
    const deletedTask = await taskRepository.deleteTask(id);
    return deletedTask;
  },
  {
    params: t.Object({
      taskId: t.String(),
    }),
  }
);
