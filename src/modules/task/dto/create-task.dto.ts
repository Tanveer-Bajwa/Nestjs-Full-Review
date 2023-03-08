/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { EmployeeProject } from "src/modules/employee-project/employee-project.schema";

export class CreateTaskDto {

    @Prop({ type: 'string', trim: true })
    name: string;

    @Prop({ type: 'string', trim: true })
    description: string;

    @Prop({ type: 'string', trim: true })
    start_date: string;

    @Prop({ type: 'string', trim: true })
    end_date: string;

    @Prop({ type: 'number', trim: true })
    status: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'EmployeeProject', default: '64073a863ee815d8b25c68fd' })
    employeeProject: EmployeeProject

}