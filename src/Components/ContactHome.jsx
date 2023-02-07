import React from 'react'
import lab1 from "../images/lab-1-min.jpg"
import lab2 from "../images/lab-2-min.jpg"
import patron from "../images/patron.png"
import sucursal from "../images/sucursales.svg"
import Services from './Services'

const ContactHome = () => {
  return (
    <div className='flex relative justify-center w-full bg-blue-100 pt-56 prueba sm:flex-col sm:overflow-hidden sm:pt-44 md:pt-52 md:flex-col'>
      <div className='flex  relative w-1/2 justify-end items-start px-20 sm:justify-center md:justify-center md:w-full md:p-0'>
        {/* <img className="w-52 rounded-3xl relative top-32" src={lab1} alt="imagen de laboratorio" />
        <img className="w-52 rounded-3xl relative bottom-10 right-12" src={lab2} alt="laboratorio con muestras"  /> */}
        {/* <img className='img-sucursal' src={sucursal} alt="" /> */}
        <Services />
      </div>
      <div className='flex flex-col w-1/3 pl-14 pr-0 py-0 sm:w-full sm:pr-10 sm:pl-10  md:items-center md:w-2/3 md:mx-auto md:pl-0'>
        <p className='text-md font-light sm:hidden'>Horarios que se ajustan a sus necesidades</p>
        <h2 className='uppercase text-3xl font-bold pb-4 sm:text-center sm:tracking-wider'>Horarios y sucursales</h2>
        <p className='pb-4 sm:text-justify'>Atención 24/7 en nuestra en nuestra sucursal en Clínica Hospital Mar del Sur.</p>
        <div className='flex gap-1 sm:flex-col  md:w-full  md:justify-center'>
            <div className='flex flex-col gap-1 md:w-full '>
                <div className='text-center border-2 py-2 border-turquoise md:w-full'>
                    <h3  className='text-grayl underline font-semibold w-56 sm:w-full'>SAN MIGUELITO</h3>
                    <div>
                        <p>Lunes a Viernes:</p>
                        <p>6:00am - 5:00pm</p>
                    </div>
                    <div>
                        <p>Sábados </p>
                        <p>7:00am - 3:00pm</p>
                    </div>
                </div>
                <div className='text-center border-2 py-2 border-turquoise'>
                    <h3 className='text-grayl underline font-semibold w-56 sm:w-full'>CHORRERA</h3>
                    <div>
                        <p>Lunes a Viernes:</p>
                        <p>7:00am - 4:00pm</p>
                    </div>
                    <div>
                        <p>Sábados</p>
                        <p>7:00am - 12:00pm</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1 md:w-full'>
                <div className='text-center border-2 py-2 border-turquoise'>
                    <h3 className='text-grayl underline font-semibold w-56 sm:w-full'>OCU</h3>
                    <div className=''>
                        <p>Lunes a Viernes:</p>
                        <p>7:00am - 4:00pm</p>
                    </div>
                    <div className=''>
                        <p>Sábados</p>
                        <p>7:00am - 12:00pm</p>
                    </div>
                </div>
                <div className='text-center border-2 py-2 border-turquoise '>
                    <h3 className='text-grayl underline font-semibold w-56 sm:w-full'>CHITRÉ</h3>
                    <div className=''>
                        <p>Lunes a Viernes:</p>
                        <p>7:00am - 5:00pm</p>
                    </div>
                    <div className=''>
                        <p>Sábados </p>
                        <p>7:00am - 3:00pm</p>
                    </div>
                </div>
            </div>
        </div>
        <button className='button w-44 mt-6 bg-grayl text-white sm:mx-auto sm:mb-10 md:mb-14'>Agendar cita</button>
      </div>

        {/* <div className='hidden md:flex md:mt-16 relative w-1/2 justify-end items-start px-20 sm:justify-center md:justify-center md:w-full'>
        <Services />
      </div>  */}

        <div className="custom-shape-divider-top-1675099209">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
        </div>
    </div>
  )
}

export default ContactHome
