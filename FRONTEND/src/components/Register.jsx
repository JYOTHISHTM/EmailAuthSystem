

import React,{useState} from 'react'
import axios from 'axios'


const Register = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')

    const handleSubmit=async()=>{
        try{

            const response=await axios.post(`http://localhost:5000/auth/register`,{email,password})
            
            if(response.status===201){
                setMessage(response.data.message)
            }
        }catch(e){
            console.log('registration failed',e);
        }
    }

  return (
    <div>
    <h2>register</h2>
    <form onSubmit={handleSubmit}>
        
        <label>email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <label >password</label>
        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>

    <div>
        <button type='submit'>register</button>
    </div>

    </form>
{message&&<p>{message}</p>}
    </div>
  )
}

export default Register