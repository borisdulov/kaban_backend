import Elysia from "elysia";

export const CreateCategoryController = new Elysia().post(
  "/create/:projectId",
  () => {},
  {
    detail: { description: "Создание новой категории задач в проекте" },
  }
);
