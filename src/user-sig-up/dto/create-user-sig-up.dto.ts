/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";

export class CreateUserSigUpDto {
    @Prop({ type: 'string', required: true, trim: true })
    username: string;

    @Prop({ type: 'string', required: true, trim: true })
    fullname: string;

    @Prop({ type: 'string', required: true, trim: true })
    @IsEmail()
    email: string;

    @Prop({ type: 'string', required: true, trim: true })
    password: string;
}
