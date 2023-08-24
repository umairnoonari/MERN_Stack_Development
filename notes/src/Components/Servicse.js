import React from 'react'
import { useContext } from "react";
import Context from "../Context/Context";
import style from '../CSS/Services.module.css'
const Services = () => {
  const context = useContext(Context);
  const { sidebar } = context;
  console.log("Hello")
  return (
    <div className={!sidebar ? style.container : style.container1}>
        <div className={sidebar ? style.box1 : style.box2}>
            This is Service page
        </div>
    </div>
  )
}

export default Services