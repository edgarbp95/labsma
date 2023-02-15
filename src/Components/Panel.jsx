import React from 'react'
import pruebas from "../images/variedad-pruebas.png"
import perfiles from "../images/perfiles.png"
import planes from "../images/planes-corporativos.png"
import { Link } from 'react-router-dom'

const Panel = () => {

    const scrollTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  return (
    <div className='flex gap-14 w-full justify-center py-2 pb-10  w-2/3 mx-auto sm:w-full sm:px-0 sm:flex-col md:w-full'>
        <div class="card card-1 sm:w-full sm:p-3 sm:h-60">
            <img className='w-44 mx-auto' src={pruebas} alt="" />
            <div class="card-details mt-6 sm:mt-2 ">
                <p class="text-title text-center sm:text-base ">Variedad de pruebas</p>
            </div>
            <Link onClick={scrollTop} to="/pruebas-laboratorio"><button class="card-button">Ver más</button></Link> 
        </div>
        <div class="card card-2 sm:w-full sm:p-3 sm:h-60">
            <img className='w-44 mx-auto' src={perfiles} alt="" />
            <div class="card-details mt-6 sm:mt-2 ">
                <p class="text-title text-center sm:text-base ">Analisis de Perfiles</p>
               
            </div>
            <Link onClick={scrollTop} to="/perfiles"><button class="card-button">Ver más</button></Link> 
        </div>
        <div class="card card-3 sm:w-full sm:p-3 sm:h-60">
            <img className='w-44 mx-auto' src={planes} alt="" />
            <div class="card-details mt-6 sm:mt-2 ">
                <p class="text-title text-center sm:text-base ">Planes Corporativos</p>
            </div>
            <Link onClick={scrollTop} to="/planes-corporativos"><button class="card-button">Ver más</button></Link> 
        </div>
    </div>
  )
}

export default Panel
