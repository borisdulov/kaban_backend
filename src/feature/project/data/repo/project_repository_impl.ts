import { ProjectRepository } from "../../domain/project.repository";
import { Project, ProjectPrivacy } from "../../domain/project.entity";
import { PrismaClient } from "@prisma/client";

export class ProjectRepositoryImpl implements ProjectRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllProjects(): Promise<Project[]> {
    const projects = await this.prisma.project.findMany({
      include: { owner: true, members: true, columns: true },
    });
    return projects.map((project: { privacy: ProjectPrivacy; }) => ({
      ...project,
      privacy: project.privacy as ProjectPrivacy,
    }));
  }

  async getProjectById(id: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: { owner: true, members: true, columns: true },
    });
    if (!project) throw new Error("Project not found");
    return { ...project, privacy: project.privacy as ProjectPrivacy };
  }

  async createProject(projectData: Project): Promise<Project> {
    const project = await this.prisma.project.create({
      data: {
        name: projectData.name,
        description: projectData.description,
        ownerId: projectData.ownerId,
        memberIds: projectData.memberIds,
        privacy: projectData.privacy,
      },
      include: { owner: true, members: true, columns: true },
    });
    return { ...project, privacy: project.privacy as ProjectPrivacy };
  }

}