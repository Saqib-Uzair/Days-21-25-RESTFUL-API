import express, {Request, Response} from 'express';

import { User, CreateUserRequest,UpdateUserRequest } from './types';


const app = express();
app.use(express.json());

let users: User[]=[];

app.post('/users',(req:Request,res:Response<User>)=>{
    const newUser:User={
        id: users.length + 1,
        ...req.body,
    };
    users.push(newUser);
    res.status(201).json(newUser);

});

app.get('/users',(req:Request, res:Response<User[]>)=>{
    res.json(users);
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});