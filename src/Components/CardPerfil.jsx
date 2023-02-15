import React from 'react'

const CardPerfil = ({name,description,price,benefit1,benefit2,benefit3}) => {
  return (
    <div class="plan-card">
        <h2>{name}<span>{description}</span></h2>
        <div class="etiquet-price">
            <p>{price}</p>
            <div></div>
        </div>
        <div class="benefits-list">
            <ul className='flex flex-col gap-3'>
                <li><span>{benefit1}</span></li>
                <li><span>{benefit2}</span></li>
                <li><span>{benefit3}</span></li>
            </ul>
        </div>
    
    </div>
  )
}

export default CardPerfil
