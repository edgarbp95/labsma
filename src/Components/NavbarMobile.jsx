import React from 'react'
import MenuNav from './MenuNav'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const NavbarMobile = () => {
  return (
    <div className='navbar-mobile sm:flex'>
      <Link to="/"><img className='logo-mobile'  src={logo} alt="Logo de laboratorio san miguel" /></Link>
      <MenuNav/>

    </div>
  )
}

export default NavbarMobile
