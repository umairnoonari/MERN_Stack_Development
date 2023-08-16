import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import {MdDeleteForever} from 'react-icons/md'
import { removeUser } from '../store/slices/Userslice'
const DisplayUsers = () => {
  const state=useSelector(state=>state.users)
  const dispatch=useDispatch()
  const deleteUser=(id)=>{
    dispatch(removeUser(id))
  }
  return (
    <Wrapper>
      {state.map((itm,id)=>{
        return <li key={id}>
          {itm}
          <button className="btn-delete" onClick={()=>{deleteUser(id)}}>
            <MdDeleteForever className="delete-icon"/>
          </button>
          </li>
      })}
    </Wrapper>
  )
}
const Wrapper=styled.section`
 li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:spece-between;
    padding:1rem;
    border-bottom:1px solid #eee;

    &:first-child{
      border-top:1px solid #eee;
    }    
 }
 .btn-delete{
  background:white;
  border:none;
  justify-self:end;
 }
`
export default DisplayUsers
