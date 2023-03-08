/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Employee } from '../employee/employee.schema';
import { Project } from '../project/project.schema';
export type EmployeeProjectDocument = EmployeeProject & Document;

@Schema()
export class EmployeeProject {


    @Prop({ type: mongoose.Schema.Types.ObjectId, ret: 'Project', default: '6408377994af5153ab513d17' })
    project: Project
    @Prop({ type: mongoose.Schema.Types.ObjectId, ret: 'Employee', default: '6408379094af5153ab513d19' })
    employee: Employee
}

export const EmployeeProjectSchema = SchemaFactory.createForClass(EmployeeProject);