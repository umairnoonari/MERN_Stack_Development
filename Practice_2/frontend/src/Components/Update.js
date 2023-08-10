import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "./Context";
const Update = () => {
  const [credentials, setCredentails] = useState({
    username: "N",
    email: "N",
    password: "",
  });
  const context=useContext(Context)
  const {id}=useParams()
  const navigate = useNavigate();
  const [data,setData]=useState([])
  function handleChange(e) {
    setCredentails({ ...credentials, [e.target.name]: e.target.value });
  }
  useEffect(()=>{
    context.fetchUser(id,setData)
  },[])
  async function handleSubmit() {
    context.Updateone(credentials,id)
    if(context.data1==="Updated")
    {
        navigate('/userdata')
    }
  }
  return (
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-6">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={credentials.username==="N"?data.username:credentials.username}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={credentials.email==="N"?data.email:credentials.email}
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Update;

