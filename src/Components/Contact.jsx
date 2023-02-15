import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-2/3 flex mx-auto py-20 items-center justify-center text-center sm:w-full sm:'>
        <div className='flex gap-4 flex-col'>
            <h2 className='text-4xl font-bold'>Contáctanos</h2>
            <p>Elige como quieres contactarnos</p>
            <div className='flex gap-4 justify-center sm:flex-col'>
                <button className='button border-2 border-grayl'>Llamanos</button>
                <button className='button border-2 border-grayl'>Envia un mail</button>
                <button className='button border-2 border-grayl'>WhatsApp</button>
            </div>
            <p className='py-2'>Tambien puedes llenar el formulario...</p>
            <form className='flex flex-col gap-2 justify-center items-center' action="">
                <input className='p-6 rounded-md w-full h-16  bg-gray-200 focus:outline-grayl' type="text" placeholder='Nombre y Apellido'/>
                <input className='p-6 rounded-md w-full h-16  bg-gray-200 focus:outline-grayl' type="email" placeholder='Correo electrónico' />
                <input className='p-6 rounded-md w-full h-32 bg-gray-200 focus:outline-grayl' type="textarea" placeholder='Escribe tu consulta...' />
                <button className='button mt-4 text-turquoise border-2 border-turquoise' type='submit'>Enviar consulta</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
