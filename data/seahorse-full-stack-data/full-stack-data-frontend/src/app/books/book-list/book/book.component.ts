import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
	@Input() book: Book;
	@Output() onDeleteBook = new EventEmitter<Book>();

	constructor() {
		this.book = {id: 1, title: '', author: ''};
	}
}
