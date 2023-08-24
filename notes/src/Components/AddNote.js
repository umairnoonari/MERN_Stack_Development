import React from 'react'
import style from '../CSS/addnote.module.css'
import { useContext } from 'react'
import Context from '../Context/Context'
import {BsSearch} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
const AddNote = () => {
  const context=useContext(Context)
  const {sidebar}=context
  return (
    <div className={!sidebar?style.container:style.container1}>
        <div className={sidebar?style.box1:style.box2}>
            <input type='text' className={style.input}>
            </input><BsSearch className={style.input1}></BsSearch>
            <button className={style.btn}><AiOutlinePlus className={style.ic_4}/> Add Note  </button>
        </div>
    </div>
  )
}

export default AddNote