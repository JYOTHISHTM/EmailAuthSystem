import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import GenerateOtp from './components/GenerateOtp'
import VerifyOtp from './components/VerifyOtp'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path='/generate-otp' element={<GenerateOtp></GenerateOtp>}></Route>
          <Route path='/verify-otp' element={<VerifyOtp></VerifyOtp>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App