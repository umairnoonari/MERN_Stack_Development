import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Signup = () => {
  const [credentials,setCredentials]=useState({username:"",email:"",password:""})
  const navigate=useNavigate()
  async function handleClick(){
    const {username,email,password}=credentials
    const response=await axios.post('http://localhost:3001/auth/signup',{username:username,email:email,password:password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(response.data.msg==="Success")
    {
      console.log(response)
       navigate('/signin')
    }
  }
  function handleChange(e)
  {
     setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className="d-flex justify-content-center row mt-5">
      <div className="col-6">
        <div>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div >
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2" onClick={handleClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
