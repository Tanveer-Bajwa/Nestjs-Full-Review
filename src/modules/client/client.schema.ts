/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ClientDocument = Client & Document;

@Schema()
export class Client {
    @Prop({ type: 'string', required: true, trim: true })
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string


}

export const ClientSchema = SchemaFactory.createForClass(Client);