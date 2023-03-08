/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './task.schema';
import { EmployeeProjectModule } from '../employee-project/employee-project.module';
import { ProjectModule } from '../project/project.module';
import { EmployeeModule } from '../employee/employee.module';
import { ClientModule } from '../client/client.module';

@Module({

  imports: [
    MongooseModule.forFeature([
      { name: 'Task', schema: TaskSchema }
    ]),
    // EmployeeProjectModule, ProjectModule, EmployeeModule, ClientModule
  ],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService]
})
export class TaskModule { }
