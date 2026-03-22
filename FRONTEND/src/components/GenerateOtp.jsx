import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GenerateOtp = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5000/auth/generate-otp`, { email })
            if (response.status === 200) {
                setMessage(response.data.message)
                navigate('/verify-otp',{state:{email}})
            }
        } catch (err) {
            setMessage('Failed to send OTP', err);

        }
    }
    return (
        <div>
            <h2>generate otp</h2>

            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>generate</button>

            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default GenerateOtp