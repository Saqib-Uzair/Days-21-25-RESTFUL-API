import express from 'express';
import { getBooks, getBookID,addBook,updateBook,deleteBook } from '../controller/bookController';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookID);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);


export default router;