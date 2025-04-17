import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { TaskRepository } from "../../domain/repository/task_repository";

export const GetTaskController = new Elysia().use(DIContainerPlugin).get(
  "/getTask/:taskId",
  async ({ params, container }) => {
    const { taskId: _id } = params;
    const taskRepository = container.get(TaskRepository);
    const task = await taskRepository.getTaskById(_id);
    return task;
  },
  {
    params: t.Object({
      taskId: t.String(),
    }),
  }
);
