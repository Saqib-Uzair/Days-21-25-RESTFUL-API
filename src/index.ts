// src/index.ts
import express from 'express';
import { loggingMiddleware } from './middleware/logging';
import { createUserController, getUsersController, getUserByIdController, updateUserController, deleteUserController } from './controllers/userControllers';

const app = express();
app.use(express.json());
app.use(loggingMiddleware);

app.post('/users', createUserController);
app.get('/users', getUsersController);
app.get('/users/:id', getUserByIdController);
app.put('/users/:id', updateUserController);
app.delete('/users/:id', deleteUserController);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});