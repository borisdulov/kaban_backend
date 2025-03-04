import { Elysia } from "elysia";
import { AuthGroup } from "./feature/auth/auth_group";
import swagger from "@elysiajs/swagger";
import { ProjectGroup } from "./feature/project/project_group";
import { CategoryGroup } from "./feature/category/category_group";
import { TaskGroup } from "./feature/task/task_group";
import { UserGroup } from "./feature/user/user_group";

const app = new Elysia()
  .use(swagger())
  .use(AuthGroup)
  .use(ProjectGroup)
  .use(CategoryGroup)
  .use(TaskGroup)
  .use(UserGroup)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
