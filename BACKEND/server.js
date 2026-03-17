

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())


const mongoDB=async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mongo connected');
}

mongoDB()






app.listen(5000,()=>{
    console.log('server started');                    
})







