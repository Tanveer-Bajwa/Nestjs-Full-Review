/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { HydratedDocument } from 'mongoose';
export type UserSignUpDocument = HydratedDocument<UserSignUp>;

@Schema()
export class UserSignUp {
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

export const UserSignUpSchema = SchemaFactory.createForClass(UserSignUp);