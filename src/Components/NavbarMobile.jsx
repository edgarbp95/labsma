import React from 'react'
import MenuNav from './MenuNav'
import logo from "../images/logo.png"

const NavbarMobile = () => {
  return (
    <div className='navbar-mobile sm:flex'>
      <img className='logo-mobile'  src={logo} alt="Logo de laboratorio san miguel" />
      <MenuNav/>

    </div>
  )
}

export default NavbarMobile
