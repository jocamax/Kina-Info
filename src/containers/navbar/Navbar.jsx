import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/kinaimage.png'
import {FaBars, FaWindowClose} from 'react-icons/fa'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <Link to='/' className="navbar-logo" onClick={() => setToggleNav(false)}>
          <img src={Logo} alt="" /> 
          <h2>KinaInfo</h2>
        </Link>
        <div className="navbar-items">
          <Link to='/politika'>Politika</Link>
          <Link to='/vesti'>Vesti</Link>
          <Link to='/zanimljivosti'>Zanimljivosti</Link>
          <Link to='/hrana'>Hrana</Link>
        </div>
        {
          toggleNav ? <FaWindowClose className='fabars' onClick={() => setToggleNav(false)}/> :
          <FaBars className='fabars' onClick={() => setToggleNav(true)}/>
        }
        {toggleNav && (
          <div className="navbar-items-menu">
          <Link onClick={() => setToggleNav(false)} to='/politika'>Politika</Link>
          <Link onClick={() => setToggleNav(false)} to='/vesti'>Vesti</Link>
          <Link onClick={() => setToggleNav(false)} to='/zanimljivosti'>Zanimljivosti</Link>
          <Link onClick={() => setToggleNav(false)} to='/hrana'>Hrana</Link>
        </div>
        )}
        

      </div>
    </div>
  )
}

export default Navbar
