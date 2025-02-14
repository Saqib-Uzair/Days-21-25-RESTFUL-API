"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let users = [];
app.post('/users', (req, res) => {
    const newUser = Object.assign({ id: users.length + 1 }, req.body);
    users.push(newUser);
    res.status(201).json(newUser);
});
app.get('/users', (req, res) => {
    res.json(users);
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
