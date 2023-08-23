import React from 'react'
import style from '../CSS/navbar.module.css'
import notebook from '../img/notebook.png'
import menu from '../img/menu.png'
import Sidebar from './Sidebar'
import { useState } from 'react'
const Navbar = () => {
  const [sidebar,setSidebar]=useState(false)
  const showSidebar=()=>{
     setSidebar(!sidebar)
  }
  return (
    <>
      <div className={style.container}>
          <img className={style.img1} src={menu} onClick={showSidebar}></img>
          <img className={style.img} src={notebook}></img>
          <h1 className={style.h1}>Notebook</h1>
      </div>
      <nav >
        <Sidebar sidebar={sidebar}/>
      </nav>
    </>
  )
}

export default Navbar
