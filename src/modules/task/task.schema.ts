/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

import mongoose from 'mongoose';
import { EmployeeProject } from '../employee-project/employee-project.schema';
export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ type: 'string', trim: true })
    name: string;

    @Prop({})
    description: string;

    @Prop()
    start_date: string

    @Prop()
    end_date: string

    @Prop()
    status: string

    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'EmployeeProject', default: '64073a863ee815d8b25c68fd' })
    employeeProject: EmployeeProject
}

export const TaskSchema = SchemaFactory.createForClass(Task);