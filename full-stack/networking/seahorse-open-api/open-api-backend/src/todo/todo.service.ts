import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

	todos: Todo[] = [];
	idCounter: number = 1;

  create(todo: Omit<Todo, 'id'>): Todo {
		const newTodo = {...todo, id: this.idCounter++};
		this.todos.push(newTodo);
		return newTodo;
  }

  findAll(): Todo[] {
		return this.todos;
  }

  findOne(id: number): Todo {
    const matchingTask = this.todos.find(task => task.id === id);
		return matchingTask;
  }

  update(id: number, todoUpdateData: Partial<Todo>): Todo {
		const todoToUpdate = this.findOne(id);
		if(!todoToUpdate) return null;

		const updatedTodo = Object.assign(todoToUpdate, todoUpdateData);
		return updatedTodo;
  }

  remove(id: number): boolean {
		const index = this.todos.findIndex(task => task.id === id);
		if(index === -1) return false;

		this.todos.splice(index, 1);
		return true;
  }
}
