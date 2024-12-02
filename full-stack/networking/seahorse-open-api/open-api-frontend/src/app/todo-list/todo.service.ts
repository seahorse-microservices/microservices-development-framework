import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTodoRequest } from './dto/create-todo-request.dto';
import { UpdateTodoRequest } from './dto/update-todo-request.dto';
import { GetAllTodosResponse } from './dto/get-all-todos-response.dto';
import { UpdateTodoResponse } from './dto/update-todo-response.dto';
import { DeleteTodoResponse } from './dto/delete-todo-response.dto';
import { CreateTodoResponse } from './dto/create-todo-response.dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

	readonly apiUrl = "http://localhost:3000/todos"

  constructor(private httpClient: HttpClient) { 

	}

	createNewTodo(taskName: string): Observable<CreateTodoResponse> {
		const createTodoRequest: CreateTodoRequest = {name: taskName};
		return this.httpClient.post<CreateTodoResponse>(this.apiUrl, createTodoRequest);
	}

	getEveryTodo(): Observable<GetAllTodosResponse> {
		return this.httpClient.get<GetAllTodosResponse>(this.apiUrl);
	}

	updateTodo(id: string, taskName: string): Observable<UpdateTodoResponse> {
		const updateTodoRequest: UpdateTodoRequest = {name: taskName};
		return this.httpClient.patch<UpdateTodoResponse>(`${this.apiUrl}/${id}`, updateTodoRequest);
	}

	deleteTodo(id: string): Observable<DeleteTodoResponse> {
		return this.httpClient.delete<DeleteTodoResponse>(`${this.apiUrl}/${id}`);
	}
}