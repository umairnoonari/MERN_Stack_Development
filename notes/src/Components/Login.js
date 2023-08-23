import React from 'react'
// import styled from 'styled-components'
import style from '../CSS/login1.module.css'
import Note_img from '../img/digital_notes2.png'
import {Link,useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  return (
        <div className={style.container}>
            <div className={style.imga}>
                <img src={Note_img} className={style.img}></img>
            </div>
            <div className={style.cont1}>
                <form>
                    <input type="text" name="username" placeholder='Enter Username' className={style.input}/>
                    <input type="password" name="password" placeholder='Enter Password' className={style.input}/>
                    <button className={style.btn} onClick={()=>{
                        navigate('/home')
                    }}>Login</button>
                    <label>Not a member?<Link to='/signup' className={style.a}>  Signup Now</Link></label>
                </form>
            </div>
        </div>
  )
}
export default Login
