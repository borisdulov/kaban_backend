import { Elysia } from "elysia";
import { AuthGroup } from "./feature/auth/auth_group";
import swagger from "@elysiajs/swagger";
import { CategoryGroup } from "./feature/column/category_group";
import { TaskGroup } from "./feature/task/task_group";
import { UserGroup } from "./feature/user/user_group";
import mongoose from "mongoose";
import { BoardGroup } from "./feature/board/presentation/route/project_group";

try {
  await mongoose.connect("mongodb://178.209.127.118:27017/mydb", {});
  console.log("MongoDB connected");
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}

const app = new Elysia()
  .onError(({ error, code }) => {
    console.error(`Код ошибки: ${code}\n`, error);
  })
  .use(swagger())
  .use(AuthGroup)
  .use(BoardGroup)
  .use(CategoryGroup)
  .use(TaskGroup)
  .use(UserGroup)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
