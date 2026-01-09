"use client"
import { useLenis } from '@/utils/hook/useLensi'
import React from 'react'
import HeroSection from './HeroSection'
import DesigingSucces from './DesigingSucces'
import ProjectSection from './ProjectSection'
import Mystory from './Mystory'
import Servicees from './Servicees'
import TechStackSection from './TechStackSection'
import ExpreinceSection from './ExpreinceSection'

export default function Homepage() {

     useLenis()

     return (
          <div className=' maxw pt-[150px]  space-y-[180px] md:space-y-[280px] pb-[150px]'>
               <HeroSection />
               <ProjectSection />
               <ExpreinceSection />
               {/* <TechStackSection /> */}
               <DesigingSucces />
               <Servicees />
               <Mystory />
          </div>
     )
}
