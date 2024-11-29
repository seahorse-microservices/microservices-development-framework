import { HttpCode, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoRequest } from './dto/create-todo-request.dto';
import { UpdateTodoRequest } from './dto/update-todo-request.dto';

@Injectable()
export class TodoService {

	constructor(
    @InjectModel(Todo.name) private todoModel: Model<Todo>,
  ) {}

	@HttpCode(201)
  create(todo: CreateTodoRequest): Promise<Todo> {
		const newTodo = new this.todoModel(todo);
		return newTodo.save();
  }

  findAll(): Promise<Todo[]> {
		return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
		const foundTodo: Todo = await this.todoModel.findById(id).exec();
		if (!foundTodo) throw new NotFoundException(`Todo not found`)
		return foundTodo;
  }

  async update(id: string, todoUpdateData: UpdateTodoRequest): Promise<Todo> {
		const updatedTodo = await this.todoModel.findOneAndUpdate({ _id: id }, todoUpdateData, {new: true}).exec();
		if(!updatedTodo) throw new NotFoundException(`Todo to update not found`);
		return updatedTodo;
  }

  async delete(id: string): Promise<boolean> {
    const deletedTask = await this.todoModel.findByIdAndDelete(id).exec();
		if (!deletedTask) throw new NotFoundException(`Todo to delete not found`);
		return true;
  }
}
