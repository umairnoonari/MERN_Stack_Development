import React from 'react'

const Showme = (props) => {
  const {count,IncNumber,DecNumber}=props
  return (
    <div className='row' style={{position:"relative",top:"250px"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button className='btn btn-primary' onClick={()=>IncNumber()} style={{height:"100px",width:"100px",fontSize:"50px"}}>+</button>
      <input
            type="text"
            className="form-control text-center"
            aria-describedby="emailHelp"
            style={{height:"100px",width:"150px",fontSize:"40px"}}
            value={count}
      ></input>
      <button className='btn btn-danger' onClick={()=>DecNumber()} style={{height:"100px",width:"100px",fontSize:"50px"}}>-</button>
      </div>
    </div>
  )
}

export default Showme
