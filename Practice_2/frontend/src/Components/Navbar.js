import React from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location=useLocation()
  const navigate=useNavigate()
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-center">
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/signup"?"active":""}`} to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/signin"?"active":""}`} to="/signin">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/userdata"?"active":""}`} to="/userdata">
                  UserData
                </Link>
              </li>
            </ul>
          </div>
          {localStorage.getItem("token")&&<button className="btn btn-primary"onClick={()=>{
            localStorage.removeItem("token")
            navigate('/signin')
          }}>Logout</button>}
        </div>
      </nav>
  );
};

export default Navbar;
