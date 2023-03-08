/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>
  ) { }

  create(createProjectDto: CreateProjectDto,): Promise<Project> {
    const project = new this.projectModel(
      { createProjectDto }
    )
    return project.save();
  }

  findAll() {
    return this.projectModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
