"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
let users = [];
const createUser = (userData) => {
    const newUser = Object.assign({ id: users.length + 1 }, userData);
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
const getUsers = () => {
    return users;
};
exports.getUsers = getUsers;
const getUserById = (id) => {
    return users.find(user => user.id === id);
};
exports.getUserById = getUserById;
const updateUser = (id, userData) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), userData);
        return users[userIndex];
    }
    return undefined;
};
exports.updateUser = updateUser;
const deleteUser = (id) => {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length !== initialLength;
};
exports.deleteUser = deleteUser;
