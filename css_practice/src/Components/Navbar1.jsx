import React from 'react'
import '../CSS/nav_style1.css'
import {CiSearch} from 'react-icons/ci'
const Navbar1 = () => {
  return (
    <div className='container'>
        <nav>
            <ul className='navigation'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact us</li>
            </ul>
        </nav>
        <div className='btn'>
            <button type="submit"><CiSearch className='s'/></button>
            <input type='text' placeholder='Search you name'/>
        </div>
    </div>
  )
}

export default Navbar1
