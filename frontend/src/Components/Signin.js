import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Signin = () => {
  const navigate=useNavigate()
  const [change,setChange]=useState("")
  const [credentials,setCredentials]=useState({email:"",password:""})
  const [flag,setFlag]=useState(false)
  function handleChange(e)
  {
     setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  async function handleClick(){
    const response=await axios.post('http://localhost:3001/auth/signin',{email:credentials.email,password:credentials.password},{
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res=>localStorage.setItem("User",res.data))
     console.log(localStorage.getItem("User"))
     navigate('/userdata')
  }
  return (
    <>
    {flag===true?
    <div class="alert alert-danger" role="alert" data-bs-dismiss="alert">
        {change}
    </div>:""}
    <div className="d-flex justify-content-center row mt-5">
      <div className="col-6">
        <div >
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="email"
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
          Sign In
        </button>
      </div>
    </div>
    </>
  )
}
export default Signin
