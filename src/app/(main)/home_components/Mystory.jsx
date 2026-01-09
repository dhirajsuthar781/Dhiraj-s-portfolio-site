import React from 'react'
import CButton from '../_components/ui/CButton'

export default function Mystory() {
  return (
    <div className='   '>
      <div className=' flex md:flex-row flex-col  justify-between gap-10'>
        <div className='  font-manrope font-medium md:w-[20%]'>
          My Story
        </div>
        <div className='  md:w-[65%]'>
          <h2 className=' text-[38px]  leading-[140%]'>
            Explore the journey and learn what sets me apart in
            <span className=' text-[#969696]'> crafting impactful digital experiences.</span>
          </h2>
        </div>
        <div className='  flex  justify-end md:w-[15%]'>
          <CButton width={180} text='About Us' />
        </div>
      </div>

    </div>
  )
}
