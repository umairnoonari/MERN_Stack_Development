import React from 'react'
import { useContext } from 'react'
import Context from './Context'
import { useDispatch, useSelector } from 'react-redux'
import { Actioncreators } from '../Redux/action'
import { bindActionCreators } from 'redux'
const Home = (props) => {
  const username=useContext(Context)
  const mystate=useSelector(state=>state.ChangeTheNumber)
  const dispatch=useDispatch()
  const action=bindActionCreators(Actioncreators,dispatch)
  return (
    <div className='row' style={{position:"relative",top:"250px"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button className='btn btn-primary' onClick={()=>action.Increment()} style={{height:"100px",width:"100px",fontSize:"50px"}}>+</button>
      <input
            type="text"
            className="form-control text-center"
            aria-describedby="emailHelp"
            style={{height:"100px",width:"150px",fontSize:"40px"}}
            value={mystate}
      ></input>
      <button className='btn btn-danger' onClick={()=>action.Decrement()} style={{height:"100px",width:"100px",fontSize:"50px"}}>-</button>
      </div>
    </div>
  )
}

export default Home
