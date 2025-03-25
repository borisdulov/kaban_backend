import { Dependency } from "../../../../core/domain/entity/dependency";

export abstract class IAddUsersToProjRepository extends Dependency{
    abstract addUserToProject(projectId: string, userId: string): Promise<boolean>;
  }