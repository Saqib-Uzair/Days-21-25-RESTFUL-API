import { Request,Response } from "express";

import { Book } from "../models/book";

let books: Book[]=[{id:1, title:"Python", author:"Saqib"},{id:2, title:"TypeScript",author:"Uzair"}];

export const getBooks = (req:Request,res:Response)=>{
    res.json(books);
};

export const getBookID = (req:Request, res:Response)=>{
    const bookId = parseInt(req.params.id);
    const book = books.find(b=> b.id === bookId);
    book ? res.json(book): res.status(404).json({message: 'Book not found'});
};

export const addBook = (req: Request, res: Response): void => {
    const { title, author } = req.body;
    if (!title || !author) {
        res.status(400).json({ message: 'Title and author are required' });
        return;
    }

    const newBook: Book = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response): void => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        res.status(404).json({ message: 'Book not found' });
        return;
    }

    books[bookIndex] = { id: bookId, title, author };
    res.json(books[bookIndex]);
};


export const deleteBook = (req: Request, res: Response)=>{
    const bookId = parseInt(req.params.id);
    books = books.filter(b=> b.id! == bookId);
    res.json({message: 'Book deleted successsfully'});
};