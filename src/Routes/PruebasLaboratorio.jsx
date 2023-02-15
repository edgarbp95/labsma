import React from 'react'
import InputSearch from '../Components/InputSearch'
import LabTest from '../Components/LabTest'
import pruebasLab from "../images/pruebas-laboratorio.jpg"

const PruebasLaboratorio = () => {
  return (
    <div>
      <div className='h-screen  relative px-36 bg-pruebas flex justify-center items-center sm:px-4'>
        <div className='rounded-lg  w-full py-24 servicios-container z-40 sm:py-6'>
          <div className='flex items-center flex-col gap-6'>
            <h2 className='text-4xl text-center font-bold sm:text-3xl sm:w-2/3'>Pruebas e Indicaciones</h2>
            <InputSearch/>
            <div className=' w-5/6 h-96 grid grid-cols-2 gap-8 overflow-y-scroll z-40 auto-rows-min probando pr-3 sm:grid-cols-1 '>
                <div className='flex flex-col gap-4'>
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                </div>
                <div className='flex flex-col gap-4'>
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                  <LabTest />
                </div>                     
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default PruebasLaboratorio
