import React from 'react'

import { Logo } from '../../svgs/Logo'

const CheckoutHeader = (props) => {
  return (
    <header className={props.className} >
      <div className='w-full bg-white px-7 md:px-12 lg:px-20 py-3.5 flex items-center justify-between' >
        <div className='flex items-center gap-x-3 text-pink-500 cursor-pointer' >
            <Logo className='w-8 h-8' />
            <h1 className='text-lg font-semibold' >Munch</h1>
        </div>
        <div>
          <h1 className='text-lg font-semibold text-pink-500' >Checkout</h1>
        </div>
      </div>
      
    </header>
  )
}

export default CheckoutHeader
