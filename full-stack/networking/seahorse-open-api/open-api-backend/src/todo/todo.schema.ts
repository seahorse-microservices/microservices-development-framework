import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Todo {
    @Prop()
    _id: string;
		
    @Prop()
    name: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);