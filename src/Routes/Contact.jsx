import React from 'react'
import Contact from '../Components/Contact'
import Social from '../Components/Social'


const ContactRoute = () => {
  return (
    <div className='w-full flex sm:flex-col'>
        <div className='w-1/2 flex contact-img sm:w-full'></div>
        <div className='w-1/2 flex about-us-txt justify-center sm:w-full'>
            <div className='w-2/3 text-justify flex flex-col gap-6 items-start justify-start sm:w-full'>
                <Contact/>
                <div className='mx-auto relative bottom-14'>
                    <Social socialClass={"flex gap-1 border-dashed border-2 border-grayl w-fit py-1 px-4 mb-10 mx-auto sm:hidden"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactRoute
