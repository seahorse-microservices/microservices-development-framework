import { Component } from '@angular/core';
import { User } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	users: User[] = [];

	constructor(private userService: UserService) {
		this.users = this.userService.retrieveUsers();
	}
}