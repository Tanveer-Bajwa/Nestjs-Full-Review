/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {

  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>
  ) { }


  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = await new this.taskModel(createTaskDto).save();
    return task;
  }

  async findAll() {
    const task = await this.taskModel.aggregate([
      {
        $lookup: {
          from: 'employeeProject',
          localField: '_id',
          foreignField: 'employeeProjectId',
          as: 'EmployeeProject',
        },
      }
    ])
    return task
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
