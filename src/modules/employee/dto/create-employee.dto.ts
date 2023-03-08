/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";

export class CreateEmployeeDto {

    @Prop({ type: 'string', trim: true })
    name: string;

    @Prop({ type: 'string', trim: true })
    email: string;

    @Prop({ type: 'number', trim: true })
    phone: number;

    @Prop({ type: 'string', trim: true })
    role: string;

    @Prop({ type: 'number', trim: true })
    salary: number;

}