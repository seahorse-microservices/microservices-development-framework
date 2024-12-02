import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoWithId as Todo } from './dto/todo-with-id.dto';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

	todoList: Todo[] = [];
	todoToUpdate: Todo | false = false;

	constructor(private todoService: TodoService) {

	}

	ngOnInit() {
		this.getEveryTodo();
	}

	getEveryTodo(): void {
		this.todoService.getEveryTodo().subscribe((response) => this.todoList = response.todosWithId);
	}

	createTodo(todoName: string): void {
		this.todoService.createNewTodo(todoName).subscribe((newTodo) => this.todoList.push({ id: newTodo.id, name: newTodo.name }));
	}

	updateTodo(id: string, todoName: string): void {
		this.todoService.updateTodo(id, todoName).subscribe((updatedTodo) => {
			const todoToUpdateIndex: number = this.todoList.findIndex(todo => todo.id === updatedTodo.id);

			this.todoList.splice(todoToUpdateIndex, 1, updatedTodo);
			this.todoToUpdate = false;
		});
	}

	deleteTodo(id: string): void {
		this.todoService.deleteTodo(id).subscribe(() => { 
			const todoToRemoveIndex: number = this.todoList.findIndex(todo => todo.id === id)!;

			this.todoList.splice(todoToRemoveIndex, 1);
			this.todoToUpdate = false;
		});
	}
}