import React from 'react'
import LogicCom from './LogicCom'
const WrapComp = (props) => {
  return (
    <div className='row' style={{position:"relative",top:"250px"}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <button className='btn btn-primary' onClick={()=>props.increment()} style={{height:"100px",width:"100px",fontSize:"50px"}}>+</button>
    <input
          type="text"
          className="form-control text-center"
          aria-describedby="emailHelp"
          style={{height:"100px",width:"150px",fontSize:"40px"}}
          value={props.count}
    ></input>
    <button className='btn btn-danger' onClick={()=>props.decrement()} style={{height:"100px",width:"100px",fontSize:"50px"}}>-</button>
    </div>
  </div>
  )
}

export default LogicCom(WrapComp)
