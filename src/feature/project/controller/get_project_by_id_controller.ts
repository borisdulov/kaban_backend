import { Elysia, NotFoundError } from "elysia";
import { ProjectModel } from "../data/model/project_schema";
import { ProjectResponseValidation } from "../dto/response/project_response";

export const GetProjectByIdController = new Elysia().get(
    "/project/:id",
    async({params}) => {
        const { id } = params;
        const project = await ProjectModel.findById(id);
        if (!project) throw new NotFoundError("Project not found");
        return ProjectResponseValidation.parse(project.toObject());
    },
    {
        detail: { description: "Получить проект по его id" },
    }
);
