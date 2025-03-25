import { Project } from "../../domain/entity/project_entity";
import { ICreateProjectRepository } from "../../domain/repository/create_project_repository";
import { ProjectModel } from "../model/project_schema";

export class CreateProjectRepositoryImp extends ICreateProjectRepository {
    async createProject(projectData: Partial<Project>): Promise<Project> {
        try {
            const createdProject = await ProjectModel.create(projectData);
            return createdProject.toObject();
        } catch (error) {
            console.error("Error creating project:", error);
            throw new Error("Failed to create project");
        }
    }
}