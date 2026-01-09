'use client'
import { useLenis } from '@/utils/hook/useLensi'
import React from 'react'
import Mystory from '../home_components/Mystory'
import AllProjects from './_component/AllProjects'
import InProgress from './_component/InProgress'

export default function page() {
  useLenis()
  return (
    <div className=' maxw pt-[150px]  space-y-[180px] md:space-y-[280px] pb-[150px]'>

      <div className=' '>
        <h1>
          Showcasing My Work
        </h1>
        <h2 className=' pt-5 md:w-[65%]'>
          Explore My journey of crafting beautiful products. Discover how my
          <span className=' text-[#969696]'>
            {" "} innovative solutions have shaped the digital landscape.
          </span>
        </h2>
      </div>


      <AllProjects />

      <InProgress />
      <Mystory />
    </div >
  )
}
