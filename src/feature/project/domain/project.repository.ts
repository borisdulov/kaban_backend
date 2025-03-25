import { Project } from "./project.entity";

export interface ProjectRepository {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project>;
  createProject(project: Project): Promise<Project>;
  updateProject(id: string, project: Project): Promise<Project>;
  deleteProject(id: string): Promise<void>;
  addMember(projectId: string, userId: string): Promise<Project>;
  removeMember(projectId: string, userId: string): Promise<Project>;
}