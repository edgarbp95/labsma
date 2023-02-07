import React from 'react'
import { FaWhatsapp,FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMediaHome = () => {
  return (
    <div className='flex gap-4 w-full justify-end relative bottom-28 right-32 sm:bottom-0 sm:right-0 sm:justify-center sm:my-4 sm:pb-4'>
    <a href="" className='h-14 w-14 flex items-center justify-center rounded-full border-solid border-0 border-grayl bg-white shadow-md shadow-grayl pulse'><FaWhatsapp size={"30"} color="#1bd741" /></a>
    <a href="" className='h-14 w-14 flex items-center justify-center rounded-full border-grayl border-0 shadow-md shadow-grayl bg-white pulse'><FaInstagram size={"30"} color="#DD2A7B " /></a>
    <a href="" className='h-14 w-14 flex items-center justify-center rounded-full border-grayl border-0 shadow-md shadow-grayl bg-white pulse'><FaTwitter size={"30"} color="#5ea9dd" /></a>
    <a href="" className='h-14 w-14 flex items-center justify-center rounded-full border-grayl border-0 shadow-md shadow-grayl bg-white pulse'><FaFacebook size={"30"} color="#1b4788" /></a>
    </div>
  )
}

export default SocialMediaHome
