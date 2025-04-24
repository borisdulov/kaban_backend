import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateUserDTO } from "../../dto/create_user_dto";
import { User } from "../entity/user_entity";

export abstract class UserRepository extends Dependency {
  abstract createUser(data: CreateUserDTO): Promise<User>;
  abstract findUserByUsername(username: String): Promise<User | null>;
}
