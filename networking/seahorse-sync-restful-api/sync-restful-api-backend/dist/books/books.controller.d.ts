import { BooksService } from './books.service';
import { Book } from './book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Book[];
    findOne(id: string): Book;
    create(book: Omit<Book, 'id'>): Book;
    update(id: string, bookData: Partial<Book>): Book;
    delete(id: string): boolean;
}
