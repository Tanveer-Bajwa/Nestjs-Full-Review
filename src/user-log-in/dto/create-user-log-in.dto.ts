/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";

export class CreateUserLogInDto {
    @Prop({ type: 'string', required: true, trim: true })
    username: string;

    @Prop({ type: 'string', required: true, trim: true })
    password: string;
}
