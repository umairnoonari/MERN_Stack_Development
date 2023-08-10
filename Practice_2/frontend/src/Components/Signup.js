import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "./Context";
const Signup = () => {
  const [credentials, setCredentails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const context=useContext(Context)
  const navigate = useNavigate();
  function handleChange(e) {
    setCredentails({ ...credentials, [e.target.name]: e.target.value });
  }
  async function handleSubmit() {
    context.Signup(credentials)
    if(context.data1.msg==="Success")
    {
        navigate('/signin')
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
            value={credentials.username}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
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

export default Signup;
