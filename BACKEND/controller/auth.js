import User from "../models/User";
import crypto from 'crypto'


const register = async (req, res) => {
    const { email, password } = req.body
    try {
        const existUser = await User.findOne({ email })
        if (existUser) {
            res.status(400).json({ message: 'already exist' })
        }

        const newUser = new User({ email, password })
        await newUser.save()
        res.status(201).json({ message: 'user registered successfully' })
    } catch (err) {
        res.status(500).json({ message: 'server error' })
    }
}


const generateOtp = async (req, res) => {
    const { email } = req.body

    try {
        const user = await User.findOne({ email })
        if (user) {
            const otp = crypto.randomInt(100000, 999999).toString()
            user.otp = otp
            user.otpExpires = Date.now() + 10 * 60 * 1000
            await user.save()

            await sendOtp(email,otp)
            res.status(200).json({message:'otp send successfully to mail Id'})
        } else {
            res.status(400).json({ message: 'user not found' })
        }

    } catch (err) {
        res.status(500).json({ message: 'server error' })
    }
}