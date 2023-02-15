import React from 'react'

const BannerHome = () => {
  return (
    <div className='w-full relative banner-home sm:h-auto sm:pt-32 pb-10 sm:px-6'>

    <div className='flex flex-col gap-3 mx-10 items-center relative bottom-16 sm:mx-0 sm:text-center md:gap-5'>
        <h4 className='text-xl text-white sm:text-base'>Laboratorio Panameño con 7 sucursales a nivel Nacional</h4>
        <h2 className='text-5xl text-white text-center w-1/2 sm:text-2xl md:text-4xl md:w-2/3 sm:w-full'>Exámenes de Laboratorio, Pruebas de Sangre, Diagnóstico, Perfiles, Análisis Bacteriológico</h2>
        <h3 className='text-lg text-white sm:text-base '>AVALADOS PARA DIAGNÓSTICO DE COVID-19</h3>
        <a href="#services" >
            <button className='button w-96 scroll-smooth text-white border-white border-2 sm:w-2/3 sm:text-sm'>DIRIGETE A LA SUCURSAL MÁS CERCANA</button>
        </a>

    </div>

    <div className="custom-shape-divider-bottom-1674652798 sm:hidden">
    <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
    >
        <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="shape-fill"
        />
    </svg>
    </div>

    <div className="custom-shape-divider-bottom-1675689397 hidden sm:flex">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  )
}

export default BannerHome
