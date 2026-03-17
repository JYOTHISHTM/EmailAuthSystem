import User from "../models/User";
import crypto from 'crypto'


const register=async (req,res)=>{
    const {email,password}=req.body
    try{
        const existUser=await User.findOne({email})
        if(existUser){
            res.status(400).json({message:'already exist'})
        }

        const newUser=new User({email,password})
        await newUser.save()
        res.status(201).json({message:'user registered successfully'})
    }catch(err){
        res.status(500).json({message:'server error'})
    }
}
