import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";



const VerifyOtp = () => {

    const [otp, setOtp] = useState('')
    const [message, setMessage] = useState('')
    const location = useLocation('')
    const email = location.state?.email

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5000/auth/verify-otp`, { email, otp })
            if (response.status == 200) {
                setMessage(response.data.message)
            }
        } catch (e) {
            setMessage('err', e)
        }
    }
    return (
        <div>
            <h2>verify otp</h2>

            <form onSubmit={handleSubmit} >
                <label >otp</label>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                <button type="submit">verify otp</button>

            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default VerifyOtp





