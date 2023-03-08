/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";

export class CreateClientDto {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: number;

}
