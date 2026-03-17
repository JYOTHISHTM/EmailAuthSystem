
import express from 'express'

const router=express.Router()

router.post('/register',register)

router.post('/generate-otp',generateOtp)



export default router