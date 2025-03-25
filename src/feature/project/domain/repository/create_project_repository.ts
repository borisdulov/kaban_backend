import { Dependency } from "../../../../core/domain/entity/dependency";
import { Project } from "../entity/project_entity";

export abstract class ICreateProjectRepository extends Dependency {
    abstract createProject(projectData: Partial<Project>): Promise<Project>;
}