import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	listOfUsers: User[] = [
		{name: 'Lura', email: 'ilzuaso@kisofeba.lu'},
		{name: 'Christian', email: 'cegpusnuk@kuba.gov'},
		{name: 'Marguerite', email: 'kesje@livbeg.ng'}
	]

  constructor() { 

	}

	retrieveUsers() {
		return this.listOfUsers;
	}
}