import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
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
// allows us to view json request from server 
app.use(express.json());
const port = 3000

app.use('/server/user',userRouter);
app.use('/server/auth',authRouter)

app.listen(port,()=>{
console.log(`App running on port ${port}`)
})
