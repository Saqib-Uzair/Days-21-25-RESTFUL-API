// src/controllers/userController.ts
import { Request, Response } from 'express';
import { CreateUserRequest, UpdateUserRequest } from '../types';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../services/userService';

export const createUserController = (req: Request<{}, {}, CreateUserRequest>, res: Response) => {
  const newUser = createUser(req.body);
  res.status(201).json(newUser);
};

export const getUsersController = (req: Request, res: Response) => {
  const users = getUsers();
  res.status(200).json(users);
};

export const getUserByIdController = (req: Request<{ id: string }>, res: Response) => {
  const user = getUserById(parseInt(req.params.id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUserController = (req: Request<{ id: string }, {}, UpdateUserRequest>, res: Response) => {
  const updatedUser = updateUser(parseInt(req.params.id), req.body);
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUserController = (req: Request<{ id: string }>, res: Response) => {
  const success = deleteUser(parseInt(req.params.id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};