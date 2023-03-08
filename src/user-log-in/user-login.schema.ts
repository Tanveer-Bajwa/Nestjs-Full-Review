/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UserLogInDocument = HydratedDocument<UserLogIn>;

@Schema()
export class UserLogIn {
    @Prop({ type: 'string', required: true, trim: true })
    username: string;

    @Prop({ required: true, type: Object })
    password: { password: string };
}

export const UserLogInSchema = SchemaFactory.createForClass(UserLogIn);