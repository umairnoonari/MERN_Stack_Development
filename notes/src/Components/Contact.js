import React from 'react'
import { useContext } from "react";
import Context from "../Context/Context";
import style from '../CSS/Contact.module.css'
const Contact = () => {
  const context = useContext(Context);
  const { sidebar } = context;
  console.log("Hello")
  return (
    <div className={!sidebar ? style.container : style.container1}>
        <div className={sidebar ? style.box1 : style.box2}>
            This is Contact page
        </div>
    </div>
  )
}

export default Contact
