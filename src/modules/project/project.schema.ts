/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Client } from '../client/client.schema';
export type ProjectDocument = Project & Document;

@Schema()
export class Project {
    @Prop({ type: 'string', trim: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    start_date: string

    @Prop()
    end_date: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ret: 'Client', default: '6408385966fe24442ac3c01d' })
    client: Client



}

export const ProjectSchema = SchemaFactory.createForClass(Project);