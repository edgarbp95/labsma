import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col  mx-auto px-10 mb-6 justify-center items-center services w-2/3 sm:hidden '>
        <div className='flex flex-col items-center gap-10 relative'>
         <div className="ball relative bottom-20 text-2xl">SERVICIOS</div>
         <div className='ball1 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball  cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Hematología General</div>
         <div className='ball2 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball  cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Química General y Especial</div>
         <div className='ball3 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Biología Celular</div>
         <div className='ball4 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Inmunología y Autoinmunidad</div>
         <div className='ball5 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Urinalisis y Parasitología</div>
         <div className='ball6 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Prueba de PCR Antígeno</div>
         <div className='ball7 opacity-1 flex items-center justify-center text-center absolute h-36 w-36 p-4 ball cursor-pointer animation-up opacity-1 sm:w-28 sm:h-28'>Microbiología molecular y ambiental</div>
          {/* <div className='flex gap-10 '>
            <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
              <img src="" alt="" />
              <p>Hematología General</p>
            </div>
            <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
              <img src="" alt="" />
              <p>Química General y Especial</p>
            </div>
            <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
              <img src="" alt="" />
              <p>Biología Celular</p>
            </div>
            <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
              <img src="" alt="" />
              <p>Inmunología y Autoinmunidad</p>
            </div>
          </div>
            <div className='flex gap-8'>
              <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
                <img src="" alt="" />
                <p>Urinalisis y Parasitología</p>
              </div>
              <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
                <img src="" alt="" />
                <p>Prueba de PCR Antígeno</p>
              </div>
              <div className='h-48 w-44 p-2 bg-turquoise text-white flex flex-col items-center justify-center text-center animation-up cursor-pointer'>
                <img src="" alt="" />
                <p>Microbiología molecular y ambiental</p>
              </div>
            </div> */}
        </div>
    </div>
  )
}

export default Services
