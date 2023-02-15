import React, { useState } from 'react'
import {AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai"

const LabTest = () => {

    const [height, setHeight] = useState("close")

    const setTest = ()=>{
        if(height=="close"){
            setHeight("open")
        }else{
            setHeight("close")
        }
    }

  return (
    <div className={`flex flex-col gap-3 bg-slate-100 ${height} rounded-md overflow-hidden py-4 px-6 `}>
        <div className='flex justify-between'>
            <h3 className='text-xl font-semibold'>Ejemplo de Prueba</h3>
            <div className='' onClick={setTest}>
                {height=="close" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
            </div>
        </div>
        <p className='text-justify  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex facilis quo voluptas sapiente recusandae a quae minus ipsam illo amet, accusantium iste dignissimos voluptatibus voluptate nihil suscipit corporis officia.</p>
    </div>
  )
}

export default LabTest
