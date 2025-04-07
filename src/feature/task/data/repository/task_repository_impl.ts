import mongoose, { Types } from "mongoose";
import { AppError } from "../../../../core/error/app_error";
import { ColumnModel } from "../../../column/data/model/column_model";
import { Task } from "../../domain/entity/task_entity";
import { TaskRepository } from "../../domain/repository/task_repository";
import { CreateTaskDto } from "../../dto/create_task_dto";
import { UpdateTaskDto } from "../../dto/update_task_dto";
import { TaskModel } from "../model/task_model";
import { FilterTaskDTO } from "../../dto/filter_task_dto";

export class TaskRepositoryImpl extends TaskRepository {
  async createTask(dto: CreateTaskDto): Promise<Task> {
    const task = new TaskModel({ ...dto });
    await task.save();
    return task.toObject();
  }
  async getTaskById(taskId: string): Promise<Task> {
    const task = await TaskModel.findById({ taskId }).exec();
    if (!task) {
      throw AppError.TASK_NOT_FOUND;
    }
    return task.toObject();
  }
  async getTasksByColumnId(columnId: string): Promise<Task[]> {
    const column = await ColumnModel.findById(columnId);
    if (!column) {
      throw AppError.COLUMN_NOT_FOUND;
    }
    const tasks = await TaskModel.find({
      _id: { $in: column.tasks },
    }).populate("tasks");

    return tasks as Task[];
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

  async filterTask(dto: FilterTaskDTO): Promise<Task[]> {
    const query: Record<string, any> = {};
    if (dto.columnId) query.columnId = dto.columnId;
    if (dto.tagId) query.tagId = dto.tagId;
    if (dto.userIds) query.userIds = { $in: dto.userIds };
    if (dto.taskPriority) query.taskPriority = dto.taskPriority;
    if (dto.isCompleted !== undefined) query.isCompleted = dto.isCompleted;
    return TaskModel.find(query).exec();
  }
}
