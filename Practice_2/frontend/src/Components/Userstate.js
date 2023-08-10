import React, { useState } from 'react'
import Context from './Context'
import axios from 'axios'
const Userstate = (props) => {
  const [data1,setData1]=useState([])
  function Signup(credentials)
  {
     axios.post('http://localhost:3001/auth/signup',{username:credentials.username,email:credentials.email,password:credentials.password},{
        headers:{
            'Content-Type':'application/json'
        }
     }).then(res=>setData1(res.data))
  }
  function Signin(credentials)
  {
     axios.post("http://localhost:3001/auth/signin",{username:credentials.username,password:credentials.password},{
        headers:{
            'Content-Type':"application/json",
        }}).then(res=>localStorage.setItem("token",res.data))
  }
  function fetchData(setData)
  {
     axios.get("http://localhost:3001/auth/fetchdata",{headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem("token")
     }}).then(res=>setData(res.data))
  }
  function fetchUser(id,setData)
  {
     axios.get("http://localhost:3001/auth/update/"+id,{headers:{
        'Content-Type':"application/json",
        'auth-token':localStorage.getItem("token")
     }}).then(res=>setData(res.data))
  }
  function Updateone(credentials,id)
  {
     axios.put("http://localhost:3001/auth/update1/"+id,{username:credentials.username,email:credentials.email,password:credentials.password},{headers:{
        'Content-Type':"application/json",
        'auth-token':localStorage.getItem("token")
     }}).then(res=>setData1(res.data))
  }
  function Delete(id,setData)
  {
    axios.delete("http://localhost:3001/auth/delete/"+id,{headers:{
        'Content-Type':"application/json",
        'auth-token':localStorage.getItem('token')
    }}).then(res=>setData(res.data))
  }
  return (
    <Context.Provider value={{data1,fetchData,Delete,fetchUser,Updateone,Signin,Signup}}>
        {props.children}
    </Context.Provider>
  )
}

export default Userstate
