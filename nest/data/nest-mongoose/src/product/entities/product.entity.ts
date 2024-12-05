import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductHydratedDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  
  @Prop()
  name: string;

  @Prop()
  reference: number;

  @Prop()
  price: number;
}

export const CatSchema = SchemaFactory.createForClass(Product);
