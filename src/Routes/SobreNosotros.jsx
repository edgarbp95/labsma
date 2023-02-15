import React from 'react'
import Social from '../Components/Social'


const SobreNosotros = () => {
  return (
    <div className='w-full flex sm:flex-col'>
      <div className='w-1/2 flex about-us-txt justify-center pt-16 sm:w-full'>
        <div className='w-2/3 text-justify flex flex-col gap-6 sm:w-full sm:mx-10'>
            <h2 className='text-3xl font-semibold text-bluew sm:text-center tracking-wider'>Laboratorio San Miguel Arcangel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, laboriosam qui? Debitis accusantium ea facere molestias cum dolores provident maxime cumque velit, itaque, voluptates, expedita soluta. Voluptate velit iusto temporibus.
            Fugiat ad dolores quae laborum minus totam minima ullam sequi error! Incidunt enim fugiat, explicabo repellendus dolor nulla quos modi saepe temporibus obcaecati illo, ratione quam amet, impedit tenetur tempore.
            Blanditiis iste odio officia, labore placeat rem, aperiam voluptatum qui omnis impedit odit cum exercitationem cumque temporibus molestiae amet magnam expedita asperiores rerum eligendi autem doloremque nisi vero. Natus, veritatis.</p>
            <div>
                <h3 className='font-medium text-xl text-bluew'>Misión</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima eos tenetur cum repellat corrupti magnam itaque! Impedit inventore dolorum dolores iure consequuntur sit harum enim doloremque maxime. Minima, rem.</p>
            </div>
            <div>
                <h3 className='font-medium text-xl text-bluew'>Visión</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis dolorem reiciendis cum voluptate corporis quae rerum eos iusto architecto veritatis itaque officia doloribus porro, repellendus obcaecati laudantium vel id.</p>
            </div>
            <div className='mx-auto mt-4 mb-10 sm:m-0'>
                <Social socialClass={"flex gap-1 border-dashed border-2 border-grayl w-fit py-1 px-4 mb-10 mx-auto"}/>
            </div>
        </div>
      </div>
      <div className='w-1/2 flex about-us-img sm:w-full'></div>
    </div>
  )
}

export default SobreNosotros
