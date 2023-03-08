import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ItemImageDocument = HydratedDocument<ItemImage>;

export class ItemImage {

    @Prop({ type: 'string' })
    name: string;

    @Prop({ type: 'string' })
    size: number;
}

export const ItemImageSchema = SchemaFactory.createForClass(ItemImage);
