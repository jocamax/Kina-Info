import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/kinaimage.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={Logo} alt="" /> 
          <h2>KinaInfo</h2>
        </div>
        <div className="navbar-items">
          <Link to='/politika'>Politika</Link>
          <Link to='/vesti'>Vesti</Link>
          <Link to='/zanimljivosti'>Zanimljivosti</Link>
          <Link to='/hrana'>Hrana</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
