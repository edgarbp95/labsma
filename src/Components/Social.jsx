import React from 'react'
import { FaWhatsapp,FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Social = ({socialClass}) => {
    return (
        <div className={`${socialClass}`}>
        <a href="" className='h-14 w-14 flex items-center justify-center  pulse'><FaWhatsapp size={"30"} color="#1bd741" /></a>
        <a href="" className='h-14 w-14 flex items-center justify-center  pulse'><FaInstagram size={"30"} color="#DD2A7B " /></a>
        <a href="" className='h-14 w-14 flex items-center justify-center pulse'><FaTwitter size={"30"} color="#5ea9dd" /></a>
        <a href="" className='h-14 w-14 flex items-center justify-center pulse'><FaFacebook size={"30"} color="#1b4788" /></a>
        </div>
      )
}

export default Social



