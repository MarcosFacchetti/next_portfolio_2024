import React from 'react'
import Jebus from "./jebusDance.gif"
import Image from 'next/image'

const Sandbox = () => {
  return (
    <div>
      <Image className='mt-40 h-40' src={Jebus} alt='jebus'></Image>
    </div>
  )
}

export default Sandbox