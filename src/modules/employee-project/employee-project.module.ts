/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './employee-project.service';
import { EmployeeProjectController } from './employee-project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeProjectSchema } from './employee-project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "EmployeeProject", schema: EmployeeProjectSchema }
    ])
  ],
  controllers: [EmployeeProjectController],
  providers: [EmployeeProjectService],
  exports: [EmployeeProjectService]

})
export class EmployeeProjectModule { }
