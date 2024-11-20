import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
	@Input() title: string;
	@Input() author: string;

	constructor() {
		this.title = '';
		this.author = '';
	}
}
