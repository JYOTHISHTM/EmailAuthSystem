

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import appRoute from './routes/auth.js'

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())
app.use('/auth',appRoute)

const mongoDB=async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mongo connected');
}

mongoDB()






app.listen(5000,()=>{
    console.log('server started');                    
})







