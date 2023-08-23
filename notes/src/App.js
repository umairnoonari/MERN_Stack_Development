import React from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route index path='/' element={<Login/>}></Route>
            <Route index path='/home' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
