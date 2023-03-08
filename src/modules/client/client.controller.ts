/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateEmployeeProjectDto } from '../employee-project/dto/create-employee-project.dto';
import { EmployeeProjectService } from '../employee-project/employee-project.service';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
import { EmployeeService } from '../employee/employee.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { ProjectService } from '../project/project.service';
import { CreateTaskDto } from '../task/dto/create-task.dto';
import { TaskService } from '../task/task.service';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly projectServices: ProjectService,
    private readonly employeeService: EmployeeService,
    private readonly employeeProject: EmployeeProjectService,
    private readonly taskService: TaskService,
  ) { }

  @Post()
  async create(@Body()
  createClientDto: CreateClientDto,
    createProjectDto: CreateProjectDto,
    createEmployeeProject: CreateEmployeeProjectDto,
    createemployeeDto: CreateEmployeeDto,
    createTaskDto: CreateTaskDto,
  ) {
    const client = await this.clientService.create(createClientDto)

    const project = await this.projectServices.create(createProjectDto,)

    const employee = await this.employeeService.create(createemployeeDto)

    const employeeProject = await this.employeeProject.create(createEmployeeProject,);

    const task = await this.taskService.create(createTaskDto);


    return {
      client,
      project,
      employee,
      employeeProject,
      task

    }
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
