import express from 'express';
import { loggingMiddleware } from './middleware/logging';

const app = express();
app.use(express.json());
app.use(loggingMiddleware);


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});