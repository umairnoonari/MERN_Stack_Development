import React from 'react'
// import style from '../CSS/navbar.module.css'
import '../CSS/nav_style.css'
const Navbar = () => {
  return (
    <div>
      <nav className='container'>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact Us</li>
          </ul>
          <input type='text' placeholder='Search you name'/>
      </nav>
    </div>
  )
}

export default Navbar