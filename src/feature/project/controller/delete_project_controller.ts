import { Elysia, NotFoundError } from "elysia";
import { ProjectModel } from "../data/model/project_schema";

export const DeleteProjectController = new Elysia().delete(
  "/project/:id",
  async ({params}) => {
    const { id } = params;
    const project = await ProjectModel.findByIdAndDelete(id);
    if (!project) throw new NotFoundError("Project not found");
    return { message: "Project deleted successfully" };
  },
  {
    detail: { description: "Удаление проекта по его id" },
  }
);
