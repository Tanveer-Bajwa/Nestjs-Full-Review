/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeProjectDto } from './dto/create-employee-project.dto';
import { UpdateEmployeeProjectDto } from './dto/update-employee-project.dto';
import { EmployeeProject, EmployeeProjectDocument } from './employee-project.schema';

@Injectable()
export class EmployeeProjectService {

  constructor(
    @InjectModel(EmployeeProject.name) private readonly employeeProjectModel: Model<EmployeeProjectDocument>
  ) { }


  create(createEmployeeProjectDto: CreateEmployeeProjectDto): Promise<EmployeeProject> {
    const employeeProject = new this.employeeProjectModel(createEmployeeProjectDto)
    return employeeProject.save();
  }

  findAll() {
    return this.employeeProjectModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeProject`;
  }

  update(id: number, updateEmployeeProjectDto: UpdateEmployeeProjectDto) {
    return `This action updates a #${id} employeeProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeProject`;
  }
}
