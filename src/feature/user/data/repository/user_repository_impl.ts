import { UserRepository } from "../../domain/repository/user_repository";

export class UserRepositoryImpl extends UserRepository {
  createUser(): String {
    throw new Error("Method not implemented.");
  }
}
