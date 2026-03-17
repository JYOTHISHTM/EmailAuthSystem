
import express from 'express'
import {register,generateOtp,verifyOtp} from '../controller/auth'

const router=express.Router()

router.post('/register',register)

router.post('/generate-otp',generateOtp)

router.post('/verifyOtp',verifyOtp)


export default router