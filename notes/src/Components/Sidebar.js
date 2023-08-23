import React from 'react'
import style from '../CSS/sidebar.module.css'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {TbArrowRoundaboutRight} from 'react-icons/tb'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContactPage} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
const Sidebar = (props) => {
  const sidebar=props.sidebar
  return (
    <div className={sidebar?style.nav_menu_active:style.nav_menu}>
        <ul>
          <li><AiFillHome className={style.ic_1}/><Link>Home</Link></li>
          <li><TbArrowRoundaboutRight className={style.ic_1}/><Link>About</Link></li>
          <li><MdMiscellaneousServices className={style.ic_1}/><Link>Services</Link></li>
          <li><MdContactPage className={style.ic_1}/><Link>Contact</Link></li>
        </ul>
        <hr style={{border:"0.5px solid black",boxShadow:"0px 1px black"}}></hr>
        <li className={style.li_1}>
        <BiLogOut className={style.ic_2}/><Link className={style.a}>Logout</Link></li>
    </div>
  )
}

export default Sidebar
