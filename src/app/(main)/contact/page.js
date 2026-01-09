"use client"
import { useLenis } from '@/utils/hook/useLensi'
import React from 'react'

export default function page() {
  useLenis()
  return (
    <div className=' maxw pt-[150px] space-y-6' >
      
      <h6 className=''>
        Contact
      </h6>

      <h1 className='  '>  Get in touch</h1>
      <h4 className=' md:w-[30%]'>
        Get in touch to learn more about our automation platform and how we can help you achieve your business goals.
      </h4>

    </div>
  )
}
