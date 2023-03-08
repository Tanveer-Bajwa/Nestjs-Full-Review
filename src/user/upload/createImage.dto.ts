/* eslint-disable prettier/prettier */
import { Prop } from '@nestjs/mongoose';

export class CreateImageDto {

    @Prop({ data: Buffer, contentType: String })
    image: string;

}