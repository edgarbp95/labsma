import React from 'react'
import InputSearch from '../Components/InputSearch'
import pruebasLab from "../images/pruebas-laboratorio.jpg"

const PruebasLaboratorio = () => {
  return (
    <div>
      <div className='h-96 bg-grayl relative px-40 bg-pruebas'>
        <h2 className='text-4xl text-white font-bold flex absolute bottom-16 border-l-8 pl-2 border-turquoise'>Pruebas de Laboratorio</h2>
        {/* <img className='w-full' src={pruebasLab} alt="" /> */}
      </div>
      <div className='px-40'>
        <InputSearch />
      </div>
    </div>
  )
}

export default PruebasLaboratorio
