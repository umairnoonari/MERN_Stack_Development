import React from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import styles from './styles.module.css'
const Navbar = () => {
  const location=useLocation()
  const navigate=useNavigate()
  function handleLogout()
  {
      localStorage.removeItem("User")
      navigate("/signin")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?"active":""} ${styles.font}`} aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/signup'?"active":""} ${styles.font}`} to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/signin'?"active":""} ${styles.font}`} to="/signin">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/userdata'?"active":""} ${styles.font}`} to="/userdata">
                  UserData
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/renderprops'?"active":""} ${styles.font}`} to="/renderprops">
                  Render Props Function
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/wrappedcommponent'?"active":""} ${styles.font}`} to="/wrappedcommponent">
                  Wrapped Commponent Function
                </Link>
              </li>
            </ul>
            </div>
            {
                  localStorage.getItem("User")&&<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
