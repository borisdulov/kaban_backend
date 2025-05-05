import { AppError } from "../../../../core/error/app_error";
import { ColumnModel } from "../../../column/data/model/column_model";
import { Task } from "../../domain/entity/task_entity";
import { TaskRepository } from "../../domain/repository/task_repository";
import { CreateTaskDto } from "../../dto/create_task_dto";
import { UpdateTaskDto } from "../../dto/update_task_dto";
import { TaskModel } from "../model/task_model";

export class TaskRepositoryImpl extends TaskRepository {
  async createTask(dto: CreateTaskDto): Promise<Task> {
    const task = new TaskModel({ ...dto, column: dto.columnId, creatorId: "1"});
    await task.save();

    const updatedColumn = await ColumnModel.findByIdAndUpdate(
      dto.columnId,
      { $push: { tasks: task._id } },
      { new: true }
    );

    if (!updatedColumn) {
      throw AppError.COLUMN_NOT_FOUND;
    }

    return task.toObject();
  }

  async getTaskById(taskId: string): Promise<Task> {
    const task = await TaskModel.findById(taskId).lean();
    if (!task) {
      throw AppError.TASK_NOT_FOUND;
    }
    return task;
  }

  async updateTask(dto: UpdateTaskDto): Promise<Task> {
    const task = await TaskModel.findOneAndUpdate(
      { _id: dto.taskId },
      { $set: dto },
      { new: true, runValidators: true }
    ).lean();
    if (!task) {
      throw AppError.TASK_NOT_FOUND;
    }
    return task;
  }
  async deleteTask(taskId: string): Promise<Task> {
    const task = await TaskModel.findByIdAndDelete(taskId).exec();
    if (!task) {
      throw AppError.TASK_NOT_FOUND;
    }
    return task.toObject();
  }
  async moveTaskToColumn(taskId: string, newColumnId: string): Promise<Task> {
    const task = await TaskModel.findById(taskId);
    if (!task) {
      throw AppError.TASK_NOT_FOUND;
    }

    const oldColumnId = task.columnId;

    const newColumn = await ColumnModel.findById(newColumnId);
    if (!newColumn) {
      throw AppError.COLUMN_NOT_FOUND;
    }

    const oldColumn = await ColumnModel.findById(oldColumnId);
    if (!oldColumn) {
      throw AppError.COLUMN_NOT_FOUND;
    }

    await Promise.all([
      ColumnModel.findByIdAndUpdate(
        newColumnId,
        { $addToSet: { tasks: taskId } },
        { new: true }
      ).lean(),
      ColumnModel.findByIdAndUpdate(
        oldColumnId,
        { $pull: { tasks: taskId } },
        { new: true }
      ).lean(),
      TaskModel.findByIdAndUpdate(
        taskId,
        { $set: { columnId: newColumnId } },
        { new: true }
      ).lean(),
    ]);
    const updatedTask = await TaskModel.findById(taskId);
    if (!updatedTask) {
      throw AppError.TASK_NOT_FOUND;
    }
    return updatedTask;
  }
}
