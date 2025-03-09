import { Project } from "../../project/domain/project.entity";

export class ProjectResponse {
  constructor(public project: Project) {
    Object.assign(this, project);
  }
}