import { User } from "../../domain/entity/user_entity";
import { UserRepository } from "../../domain/repository/user_repository";
import { CreateUserDTO } from "../../dto/create_user_dto";
import { UserModel } from "../model/user_model";
import { UpdateUserDTO } from "../../dto/update_user_dto";
import { AppError } from "../../../../core/error/app_error";

export class UserRepositoryImpl extends UserRepository {
  async deleteUser(id: String): Promise<User> {
    const user = await UserModel.findByIdAndDelete(id).exec();
    if (!user) throw AppError.USER_NOT_FOUND;
    return user;
  }
  async getUser(id: String): Promise<User> {

    const user = await UserModel.findById(id).populate("boards");
    if (!user) {

      throw AppError.USER_NOT_FOUND;
    }
    return user;
  }
  async updateUser(data: UpdateUserDTO): Promise<User> {
    const updatedUser = await UserModel.findByIdAndUpdate(
      data.userId,
      { $set: { username: data.username, password: data.password } },
      { new: true }
    );

    if (!updatedUser) {
      throw AppError.USER_NOT_FOUND;
    }

    return updatedUser.toObject();
  }
  async findUserByUsername(username: String): Promise<User | null> {
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw AppError.USER_NOT_FOUND;
    }
    return user;
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    const user = new UserModel({
      ...data,
    });
    const savedUser = await user.save();
    const userObject = savedUser.toObject();
    return userObject;
  }
}
