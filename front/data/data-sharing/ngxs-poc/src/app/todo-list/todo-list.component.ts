import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTodo } from '../todo.state';

@Component({
  selector: 'todo-list',
  template: `
  <h1>This the list</h1>
    <ul>
      @for (todo of todos$ | async; track $index)
      {
        <li>
          {{ todo }}
          <button (click)="removeTodo(todo)">Remove</button>
        </li>
      }
    </ul>
    `
})
export class TodoListComponent {
  @Select((state: { todo: { todos: any; }; }) => state.todo.todos) todos$!: Observable<string[]>;

  constructor(private store: Store) {}

  removeTodo(todo: string) {
    this.store.dispatch(new RemoveTodo(todo));
  }
}
