import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateProjectDTO } from "../../dto/request/create_project_dto";
import { UpdateProjectDTO } from "../../dto/request/update_project_dto";
import { Project } from "../entity/project_entity";

export abstract class ProjectRepository extends Dependency {
  abstract createProject(data: CreateProjectDTO): Promise<Project>;

  abstract Project(projectId: string): Promise<Project>;

  abstract updateProject(data: UpdateProjectDTO): Promise<Project>;

  abstract getProjectById(projectId: string): Promise<Project>;

  abstract getProjectsByUserId(userId: string): Promise<Project>;
}
