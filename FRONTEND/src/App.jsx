import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App