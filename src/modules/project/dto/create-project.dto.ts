/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Client } from "src/modules/client/client.schema";

export class CreateProjectDto {

    @Prop({ type: 'string', trim: true })
    name: string;

    @Prop({ type: 'string', trim: true })
    description: string;

    @Prop({})
    start_date: string;

    @Prop({})
    end_date: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ret: 'Client' })
    clientId: string

}