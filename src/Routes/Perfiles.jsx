import React from 'react'
import CardPerfil from '../Components/CardPerfil'

const Perfiles = () => {
  return (
    <div>
      <div className='w-full mx-auto h-96 bg-neutral-800 text-white flex justify-center items-center flex-col sm:px-10'>
        <h2 className='text-3xl font-bold text-center mt-10 my-4'>Ofrecemos una gran variedad en tipos de perfil: renal, hepático, lipídico...</h2>
        <p className='text-center'>Conoce las promociones disponibles:</p>
      </div>
      <div className='w-2/3 mx-auto  py-20 place-items-center  content-center self-center gap-6  grid-perfiles sm:w-full sm:px-4'>
        <CardPerfil name="SALUD PLUS" price="176" benefit1="Hemocultivo, Ácido úrico (Orina)" benefit2="Creatinina, Microproteínas en Orina" benefit3="Triglicéridos, LDL-Colesterol (Calculado)"/>
        <CardPerfil name="INFANTIL" price="128" benefit1="Electroforesis de HB, Heces Generales" benefit2="Hemocultivo" benefit3="Tipaje y RH" />
        <CardPerfil name="DIABETICOS" price="96" benefit1="Glucosa" benefit2="Ácido úrico (Orina)" benefit3="Hb Glicosilada A1c"/>
        <CardPerfil name="PERFIL ALERGICO" price="96" benefit1="IgE" benefit2="Panel Aéreo de 110 Alérgenos" benefit3="Panel de Alimentos de 110 Alérgenos"/>
        <CardPerfil name="SALUD PREMIUM" price="86" benefit1="Hemocultivo, Ácido úrico (Orina)" benefit2="Creatinina en orina, Colesterol Total, Triglicéridos" benefit3="HDL-Colesterol, LDL-Colesterol (Calculado)"/>
        <CardPerfil name="SALUD GOLD" price="111" benefit1="Heces Generales, Hemocultivo, Ácido úrico, Ácido úrico (Orina)" benefit2="Creatinina, Colesterol Total, Triglicéridos" benefit3="HDL-Colesterol, Bilirrubina Total, Amilasa"/>
      </div>
    </div>
  )
}

export default Perfiles
