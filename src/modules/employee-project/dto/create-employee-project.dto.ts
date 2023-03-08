/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Employee } from "src/modules/employee/employee.schema";
import { Project } from "src/modules/project/project.schema";

export class CreateEmployeeProjectDto {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ret: 'Project' })
    project: Project
    @Prop({ type: mongoose.Schema.Types.ObjectId, ret: 'Employee' })
    employee: Employee


}
