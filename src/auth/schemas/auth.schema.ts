/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AuthDocument = Auth & Document;

@Schema({
    timestamps: true
})

export class Auth {

    @Prop()
    name: string

    @Prop({ unique: [true, 'Dublicate email entered'] })
    email: string

    @Prop()
    password: string

}

export const AuthSchema = SchemaFactory.createForClass(Auth);