"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const logging_1 = require("./middleware/logging");
const userControllers_1 = require("./controllers/userControllers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(logging_1.loggingMiddleware);
app.post('/users', userControllers_1.createUserController);
app.get('/users', userControllers_1.getUsersController);
app.get('/users/:id', userControllers_1.getUserByIdController);
app.put('/users/:id', userControllers_1.updateUserController);
app.delete('/users/:id', userControllers_1.deleteUserController);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
