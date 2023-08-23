import React from 'react'
import style from '../CSS/navbar.module.css'
import notebook from '../img/notebook.png'
import menu from '../img/menu.png'
const Navbar = () => {
  return (
    <div className={style.container}>
        <img className={style.img1} src={menu}></img>
        <img className={style.img} src={notebook}></img>
        <h1 className={style.h1}>Notebook</h1>
    </div>
  )
}

export default Navbar
