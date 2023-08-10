import React, { useState } from "react";
import { useContext } from "react";
import Context from "./Context";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const context=useContext(Context)
  const [credentials, setCredentails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    setCredentails({ ...credentials, [e.target.name]: e.target.value });
  }
  async function handleSubmit() {
    context.Signin(credentials)
    if(localStorage.getItem("token"))
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
            value={credentials.username}
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
          Signin
        </button>
      </div>
    </div>
  );
};

export default Signin;