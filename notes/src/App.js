import React from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route index path='/' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
