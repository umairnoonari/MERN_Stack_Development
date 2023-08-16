import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
// import { clearAllUsers } from '../store/slices/Userslice'
import { clearAllUsers } from '../store/actions/index'
const DeleteAllUser = () => {
  const dispatch=useDispatch()
  const deleteUsers=()=>{
    dispatch(clearAllUsers())
  }
  return (
    <Wrapper>
      <button className='btn clear-btn'onClick={deleteUsers}>Clear All Users</button>
    </Wrapper>
  )
}
const Wrapper=styled.section`
  .clear-btn{
    text-transfrom:capitalize;
    background-color:#db338a;
    margin-top:2rem;
  }
`
export default DeleteAllUser
