import { User } from "../../domain/entity/user_entity";
import { UserRepository } from "../../domain/repository/user_repository";
import { CreateUserDTO } from "../../dto/create_user_dto";
import { UserModel } from "../model/user_model";

export class UserRepositoryImpl extends UserRepository {
  async createUser(data: CreateUserDTO): Promise<User> {
    const user = new UserModel({
      ...data,
    });
    const savedUser = await user.save();
    const userObject = savedUser.toObject();
    return userObject;
  }
}
