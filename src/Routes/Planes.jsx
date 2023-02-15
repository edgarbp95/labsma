import React from 'react'
import Social from '../Components/Social'

const Planes = () => {
  return (
    <div>
      <div className='w-full mx-auto h-96 bg-neutral-800 bg-gradient-to-tr text-white flex justify-center items-center flex-col sm:px-10 '>
        <h2 className='text-3xl font-bold text-center mt-10 my-4'>Planes Corporativos</h2>
        <p className='text-center'>Ofrecemos los mejores planes dirigidos a tu personal corporativo, con servicio a domicilio gratuito</p>
      </div>
      <div className='flex px-40 mx-auto sm:flex-col sm:p-0 md:px-16'>
        <div className='w-2/3 flex flex-col gap-8 pr-10 text-justify mt-10 sm:w-full sm:pl-6 sm:pr-6 sm:pb-4'>
            <div>
                <h2 className='text-3xl font-bold mb-3'>Servicio Corporativo</h2>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate similique dolores maiores? Porro corporis saepe adipisci minima quas, placeat rem, hic incidunt in veritatis fugit at vero omnis dolores. Quo.
                Provident, sit modi! Aliquid deserunt mollitia temporibus enim quo id, nemo corporis laborum quos ex iste. Tempora voluptates cumque dolores ut qui vero ipsam, quibusdam esse architecto sed. Perspiciatis, laudantium?</p>
            </div>
            <div className='flex flex-col gap-4 '>
                <h2 className='text-2xl font-semibold'>Te ofrecemos:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum ratione itaque doloremque vero fugit commodi a delectus nihil amet impedit quibusdam, cum autem assumenda tenetur quam asperiores quo? Quia!</p>
                <div className='flex gap-8 pt-3 sm:flex-col pb-10'>
                    <div>
                        <h3 className='font-semibold text-lg'>Variedad de Pruebas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum labore quidem cumque voluptatem eveniet nisi, aliquid adipisci ducimus voluptas quis tempore, nihil ipsum culpa! Distinctio ducimus aliquam similique aspernatur!</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Atencion Personalizada</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum labore quidem cumque voluptatem eveniet nisi, aliquid adipisci ducimus voluptas quis tempore, nihil ipsum culpa! Distinctio ducimus aliquam similique aspernatur!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/3 flex flex-col gap-4 py-4 sm:w-full'>
            <div className='flex flex-col p-10  justify-center gap-4 bg-gray-100 sm:py-10 px-14'>
                <h2 className='text-2xl font-semibold mb-4 text-center sm:text-xl'>Te brindamos:</h2>
                <div className='flex flex-col gap-3'>
                    <li className='list-none flex gap-4'>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='w-4'>
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                    </svg>
                    <p>Comodidad</p>
                    </li>
                    <li className='list-none flex gap-4'>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='w-4'>
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                    </svg>
                    <p>Tranquilidad</p>
                    </li>
                    <li className='list-none flex gap-4'>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='w-4'>
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                    </svg>
                    <p>Horarios Flexibles</p>
                    </li>
                </div>
                
            </div>
            <div className='flex flex-col items-center justify-center p-4 bg-gray-200 sm:p-10'>
                <h3 className='text-center text-xl font-semibold'>Contáctanos y solicita informacion</h3>
                <Social socialClass={"flex gap-1 w-fit py-1 px-4 sm:my-4 mx-auto md:px-0"} />
            </div>
            <div className='flex flex-col items-center justify-center p-4 bg-gray-300 sm:p-10 sm:gap-4'>
                <h3 className='text-center text-xl font-semibold'>Horarios de Atención</h3>
                <div>
                    <p>Lunes a viernes: 7am - 5pm </p>
                    <p>Sabados: 7am - 3pm </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Planes
