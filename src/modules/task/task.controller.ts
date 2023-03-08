/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { EmployeeProjectService } from './../employee-project/employee-project.service'
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateEmployeeProjectDto } from '../employee-project/dto/create-employee-project.dto';
import { ProjectService } from '../project/project.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { EmployeeService } from '../employee/employee.service';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
import { ClientService } from '../client/client.service';
import { CreateClientDto } from '../client/dto/create-client.dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    // private readonly employeeProject: EmployeeProjectService,
    // private readonly projectServices: ProjectService,
    // private readonly employeeService: EmployeeService,
    // private readonly clientService: ClientService
  ) { }

  @Post()
  async create(@Body()
  createTaskDto: CreateTaskDto,
    //   createEmployeeProject: CreateEmployeeProjectDto,
    //   createProjectDto: CreateProjectDto,
    //   createemployeeDto: CreateEmployeeDto,
    //   createClientDto: CreateClientDto
  ) {
    // const client = await this.clientService.create(createClientDto)

    // const task = await this.taskService.create(createTaskDto);

    // const employeeProject = await this.employeeProject.create(createEmployeeProject,);

    // const project = await this.projectServices.create(createProjectDto)

    // const employee = await this.employeeService.create(createemployeeDto)


    // return {
    //   message: 'Succesfully Create ...........',
    //   data: {
    //     task,
    //     employeeProject,
    //     project,
    //     employee,
    //     client
    //   }
    // }
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
