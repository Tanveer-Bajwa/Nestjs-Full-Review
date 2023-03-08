/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
    @Prop({ type: 'string', trim: true })
    name: string;

    @Prop({})
    email: string;

    @Prop({})
    phone: number

    @Prop({})
    role: string;

    @Prop({})
    salary: number
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);