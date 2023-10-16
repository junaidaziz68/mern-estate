import express from 'express';
import mongoose from 'mongoose';
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

app.get('/', (req,res)=> {
res.send('Hello world')
})

app.listen(port,()=>{
console.log(`App running on port ${port}`)
})
