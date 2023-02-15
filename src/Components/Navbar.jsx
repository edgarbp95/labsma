import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
   
    <>
    <div className='flex gap-5 w-full py-2 mx-auto px-20 border-b-2 border-turquoise bg-blackp items-center justify-between text-black text-base font-medium sm:py-1 sm:px-1 sm:ml-0 sm:hidden md:px-6'>
      <div className='flex gap-10 p-5 items-center mx-10 sm:mx-0 md:mx-0'>
      <div className='flex gap-5 items-center w-36'>
        <NavLink className="text-xl tracking-widest font-extrabold text-black sm:text-sm " to="/" ><img className='w-36 relative' src={logo} alt="logo" /></NavLink>
                
      </div>
      <div className='flex gap-10 items-center'>
        <NavLink className="hover:text-bluew font-bold relative nav_menu_option sm:text-sm" to="/sobre-nosotros">LABSMA</NavLink>
        <NavLink className="hover:text-bluew font-bold relative nav_menu_option sm:text-sm" to="/pruebas-laboratorio">SERVICIOS</NavLink>
        <NavLink className="hover:text-bluew font-bold relative nav_menu_option sm:text-sm" to="/contacto">CONTACTO</NavLink>
      </div>
      
      </div>
      <div className='flex gap-2'>
        <NavLink className="hover:text-bluew font-bold relative sm:text-sm" to="/"><button class="button uppercase text-grayl border-2 border-grayl"> Agendar Turno </button></NavLink>
        <NavLink className="hover:text-bluew font-bold relative sm:text-sm" to="/"><button class="button uppercase text-turquoise border-2 border-turquoise"> Resultados </button></NavLink>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
