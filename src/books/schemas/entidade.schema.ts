import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Produto = HydratedDocument<produto>;

@Schema()
export class produto extends Document {
  @Prop()
  id: number;

  @Prop()
  nome: string;

  @Prop()
  quantidade: number;
}

export const Produto = SchemaFactory.createForClass(produto);
