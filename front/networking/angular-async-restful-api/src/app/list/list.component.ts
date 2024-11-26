import { Component } from '@angular/core';
import { User } from './user.interface';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  users: User[] = [];
  
  constructor(protected listService : ListService) {}

	loadUsers() {
		this.listService.getUsers().subscribe(
      {
				next: res => this.users = res,
       	error: () => {},
       	complete: () => {}
      });
	}
}