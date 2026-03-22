
import express from 'express'
import {register,generateOtp,verifyOtp} from '../controller/auth.js'

const router=express.Router()

router.post('/register',register)

router.post('/generate-otp',generateOtp)

router.post('/verify-otp',verifyOtp)


export default router