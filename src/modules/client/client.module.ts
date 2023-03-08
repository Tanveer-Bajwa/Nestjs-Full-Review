/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './client.schema';
import { EmployeeProjectModule } from '../employee-project/employee-project.module';
import { EmployeeModule } from '../employee/employee.module';
import { TaskModule } from '../task/task.module';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Client', schema: ClientSchema },
    ]),
    EmployeeProjectModule, ProjectModule, EmployeeModule, TaskModule
  ],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientModule { }
