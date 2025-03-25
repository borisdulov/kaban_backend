import mongoose from "mongoose";
import { Project } from "../../domain/entity/project_entity";
import { ProjectRepository } from "../../domain/repository/project_repository";
import { CreateProjectDTO } from "../../dto/request/create_project_dto";
import { UpdateProjectDTO } from "../../dto/request/update_project_dto";
import { ProjectModel } from "../model/project_schema";
import { AppError } from "../../../../core/error/app_error";

export class ProjectRepositoryImpl extends ProjectRepository {
  async createProject(data: CreateProjectDTO): Promise<Project> {
    const project = new ProjectModel({
      ...data,
      owner: new mongoose.Types.ObjectId(),
    });
    await project.save();
    return project.toObject();
  }

  async Project(projectId: string): Promise<Project> {
    const project = await ProjectModel.findByIdAndDelete(projectId).exec();
    if (!project) throw AppError.PROJECT_NOT_FOUND;

    return project.toObject();
  }

  async getProjectById(projectId: string): Promise<Project> {
    const project = await ProjectModel.findById(projectId).exec();
    if (!project) throw AppError.PROJECT_NOT_FOUND;

    return project.toObject();
  }

  updateProject(data: UpdateProjectDTO): Promise<Project> {
    throw new Error("Method not implemented.");
  }

  getProjectsByUserId(userId: string): Promise<Project> {
    throw new Error("Method not implemented.");
  }
}
