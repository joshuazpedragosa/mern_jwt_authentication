import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoDBURI : string = process.env.DB_URI || '';

mongoose.connect(mongoDBURI)
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((error)=>{
    console.log(process.env.DB_URI)
    console.error('Error connecting to MongoDB', error)
})

export const db = mongoose;