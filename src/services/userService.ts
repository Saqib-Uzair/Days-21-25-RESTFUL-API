// src/services/userService.ts
import { User, CreateUserRequest, UpdateUserRequest } from '../types';

let users: User[] = [];

export const createUser = (userData: CreateUserRequest): User => {
  const newUser: User = {
    id: users.length + 1,
    ...userData,
  };
  users.push(newUser);
  return newUser;
};

export const getUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const updateUser = (id: number, userData: UpdateUserRequest): User | undefined => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
  }
  return undefined;
};

export const deleteUser = (id: number): boolean => {
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  return users.length !== initialLength;
};