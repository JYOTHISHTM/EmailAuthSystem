import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import GenerateOtp from './components/GenerateOtp'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path='/generate-otp' element={<GenerateOtp></GenerateOtp>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App