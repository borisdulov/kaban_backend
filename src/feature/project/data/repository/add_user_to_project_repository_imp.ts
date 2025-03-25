import {ProjectModel} from "../model/project_schema"
import {User} from "../../../user/data/model/user_model"
import {IAddUsersToProjRepository} from "../../domain/repository/add_user_to_project_repository"

export class AddUsersToProjRepositoryImp extends IAddUsersToProjRepository {
  async addUserToProject(projectId: string, userId: string): Promise<boolean> {
    try {
      const project = await ProjectModel.findByIdAndUpdate(
        projectId,
        { $addToSet: { members: userId } }, 
        { new: true }
      );

      if (!project) {
        throw new Error("Project not found");
      }

      const user = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { projectsIds: projectId } },
        { new: true }
      );

      if (!user) {
        throw new Error("User not found");
      }

      return true;
    } catch (error) {
      console.error("Error adding user to project:", error);
      return false; 
    }
  }
}