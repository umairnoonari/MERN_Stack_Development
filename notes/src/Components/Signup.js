import React from 'react'
// import styled from 'styled-components'
import style from '../CSS/signup1.module.css'
import Note_img from '../img/digital_notes.png'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate()
  return (
        <div className={style.container}>
            <div className={style.imga1}>
                <img src={Note_img} className={style.img1}></img>
            </div>
            <div className={style.cont1}>
                <form>
                    <input type="text" name="username" placeholder='Enter Username' className={style.input}/>
                    <input type="text" name="username" placeholder='Enter Email' className={style.input}/>
                    <input type="password" name="password" placeholder='Enter Password' className={style.input}/>
                    <button className={style.btn} onClick={()=>{
                        navigate('/')
                    }}>Signup</button>
                </form>
            </div>
        </div>
  )
}
export default Signup