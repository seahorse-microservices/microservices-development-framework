import { Injectable } from '@nestjs/common';
import { Todo, TodoDocument } from './todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { TodoWithId } from './dto/todo-with-id.dto';


@Injectable()
export class TodoService {


	constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  async create(todoName: string): Promise<TodoWithId> {
		const newTodo = new this.todoModel({name: todoName});
		await newTodo.save();

		const newTodoWithId: TodoWithId = {id: newTodo.id, name: newTodo.name};

		return newTodoWithId;
  }

  async findAll(): Promise<TodoWithId[]> {
		const foundTodos = await this.todoModel.find().exec();

		const foundTodosWithId: TodoWithId[] = [];
		foundTodos.forEach((todo) => foundTodosWithId.push({id: todo.id, name: todo.name}));

		return foundTodosWithId;
  }

  async update(id: string, todoName: string): Promise<TodoWithId | false> {
		const todoToUpdateId = new mongoose.Types.ObjectId(id);
		const updatedTodo = await this.todoModel.findByIdAndUpdate(todoToUpdateId, {name: todoName}, {new: true}).exec();
		if(!updatedTodo) return false;

		const updatedTodoWithId: TodoWithId = {id: updatedTodo.id, name: updatedTodo.name};

		return updatedTodoWithId;
  }

  async delete(id: string): Promise<boolean> {
    const deletedTask = await this.todoModel.findByIdAndDelete(id).exec();
		if (!deletedTask) return false;
		
		return true;
  }
}