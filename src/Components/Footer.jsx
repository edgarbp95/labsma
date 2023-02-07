import SocialMediaHome from "./SocialMediaHome"
import facebook from "../images/social/icon-facebook.svg"
import instagram from "../images/social/icon-instagram.svg"
import twitter from "../images/social/icon-twitter.svg"
import whatsapp from "../images/social/icon-whatsapp.svg"
import { FaWhatsapp,FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logoFooter from "../images/logo-footer.png"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
      <div className="bg-neutral-800 w-full  px-72 pt-12 pb-12 flex sm:text-xs bottom-0 sm:px-4 sm:flex-col sm:h-96 md:px-12 md:pt-6 md:gap-4"> 
        <div className="flex flex-col gap-5 w-3/4 mt-2 sm:w-full sm:text-justify sm:items-center"> 
          <NavLink className="text-xl tracking-widest font-extrabold text-black sm:text-sm " to="/" ><img className='w-36 relative' src={logoFooter} alt="logo" /></NavLink>
          <div className='flex gap-1 w-full justify-start sm:justify-center sm:pt-2'>
            <a href="" className='h-14 w-14 flex  rounded-full border-solid border-0  pulse'><FaWhatsapp size={"30"} color="#fafafa" /></a>
            <a href="" className='h-14 w-14 flex rounded-full pulse'><FaInstagram size={"30"} color="#fafafa " /></a>
            <a href="" className='h-14 w-14 flex  rounded-full pulse'><FaTwitter size={"30"} color="#fafafa" /></a>
            <a href="" className='h-14 w-14 flex  rounded-full pulse'><FaFacebook size={"30"} color="#fafafa" /></a>
          </div>
          <span className="text-xl text-turquoise font-bold hidden sm:flex sm:justify-center sm:relative sm:bottom-3">+507 6515-6604</span>
          
        </div>
        <div className="w-full flex flex-col">
          <ul className="text-white mt-10 flex h-6 gap-5 w-full justify-end sm:gap-2 sm:grid sm:grid-cols-2 sm:content-center ">
            <li className="duration-300 cursor-pointer hover:text-turquoise font-normal text-sm relative md:text-xs sm:text-center uppercase">Perfiles</li>
            <li className="duration-300 cursor-pointer hover:text-turquoise font-normal text-sm relative md:text-xs sm:text-center uppercase">Pruebas</li>
            <li className="duration-300 cursor-pointer hover:text-turquoise font-normal text-sm relative md:text-xs sm:text-center uppercase">Pruebas COVID-19</li>
            <li className="duration-300 cursor-pointer hover:text-turquoise font-normal text-sm relative md:text-xs sm:text-center uppercase">Solicitar Servicios</li>
          </ul>
          
          <span className="text-xl text-turquoise font-bold flex justify-end sm:justify-center sm:hidden">+507 6515-6604</span>
        </div>
        
      </div>
    )
  }
  
  export default Footer
  