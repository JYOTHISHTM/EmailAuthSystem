import Nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transport=Nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    }   
})

const sendOtp=async(email,otp)=>{
    const mailOptions={
        from:process.env.EMAIL_USER,
        to:email,
        subject: "Your OTP",
        text:`otp is ${otp}`
    }

    try{
        await transport.sendMail(mailOptions)
    }catch(err){
        throw new Error('failed to send email')
    }
}


export default sendOtp