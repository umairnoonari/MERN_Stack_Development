import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
const Update = () => {
  const [credentials,setCredentials]=useState({username:"N",email:"N",password:""})
  const {id}=useParams()
  const [data,setData]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3001/auth/update/'+id,{headers:{
      "Content-Type":'application/json',
      'auth-token':localStorage.getItem("User")

    }}).then(res=>setData(res.data))
  },[])
  async function handleClick(){
    const {username,email,password}=credentials
    const response=await axios.post('http://localhost:3001/auth/update1/'+id,{username:username,email:email,password:password}, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem("User")
      }
    })
    if(response.data.msg==="Updated")
    {
       navigate('/userdata')
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
            value={credentials.username!=="N"?credentials.username:data.username}
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
            value={credentials.email!=="N"?credentials.email:data.email}
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
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;