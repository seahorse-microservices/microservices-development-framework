import { Book } from './book.entity';
export declare class BooksService {
    private books;
    private idCounter;
    findAll(): Book[];
    findOne(id: number): Book;
    create(book: Omit<Book, 'id'>): Book;
    update(id: number, bookData: Partial<Book>): Book;
    delete(id: number): boolean;
}
