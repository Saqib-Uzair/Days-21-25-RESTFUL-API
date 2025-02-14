"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.getUserByIdController = exports.getUsersController = exports.createUserController = void 0;
const userService_1 = require("../services/userService");
const createUserController = (req, res) => {
    const newUser = (0, userService_1.createUser)(req.body);
    res.status(201).json(newUser);
};
exports.createUserController = createUserController;
const getUsersController = (req, res) => {
    const users = (0, userService_1.getUsers)();
    res.status(200).json(users);
};
exports.getUsersController = getUsersController;
const getUserByIdController = (req, res) => {
    const user = (0, userService_1.getUserById)(parseInt(req.params.id));
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.getUserByIdController = getUserByIdController;
const updateUserController = (req, res) => {
    const updatedUser = (0, userService_1.updateUser)(parseInt(req.params.id), req.body);
    if (updatedUser) {
        res.status(200).json(updatedUser);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => {
    const success = (0, userService_1.deleteUser)(parseInt(req.params.id));
    if (success) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.deleteUserController = deleteUserController;
