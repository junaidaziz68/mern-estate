import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';

dotenv.config();

// creating databse connection here 
mongoose.connect(process.env.db).then(()=>{
    console.log('connection succesfull')
})
.catch((err)=>{
    console.log(err);
})
// main config to setup server
const app = express()
const port = 3000

app.use('/server/user',userRouter);

app.listen(port,()=>{
console.log(`App running on port ${port}`)
})
