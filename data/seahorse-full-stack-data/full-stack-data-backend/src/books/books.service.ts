import { Injectable } from '@nestjs/common';

import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
    private books: Book[] = [];
    

    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
      ) {}


    create(book: Omit<Book, 'id'>): Promise<Book> {
        const newBook = { ...book };
        const createdBook = new this.bookModel(newBook);
        return createdBook.save();
    }

    findAll(): Promise<Book[]>{
        //return this.books;
        return this.bookModel.find().exec();
    }

    //todo

    findOne(id: number): Book {
        return this.books.find((book) => book.id === id);
    }

    update(id: number, bookData: Partial<Book>): Book {
        const book = this.findOne(id);
        if (!book) return null;

        Object.assign(book, bookData);
        return book;
    }

    delete(id: number): boolean {
        const index = this.books.findIndex((book) => book.id === id);
        if (index === -1) return false;

        this.books.splice(index, 1);
        return true;
    }
}
