import { Dependency } from "../../../../core/domain/entity/dependency";

export abstract class UserRepository extends Dependency {
  abstract createUser(): String;
}
