import React from 'react'
import '../CSS/task2.css'
import Login from '../assets/login.png'
const Task2 = () => {
  return (
    <div className='container'>
        <img src={Login}></img>
        <label>Username:<input type='text'></input></label>
        <label>Password:<input type='text'></input></label>
        <input type='submit' value="Submit"></input>
    </div>
  )
}

export default Task2