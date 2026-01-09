"use client"
import { useLenis } from '@/utils/hook/useLensi'
import DesigingSucces from '../home_components/DesigingSucces'
import ServicesSectionAbout from './_components/ServicesSectionAbout'
import HowWork from './_components/HowWork'
import Image from 'next/image'

export default function page() {
  useLenis()
  return (
    <div className='  maxw pt-[150px]  space-y-[180px] md:space-y-[280px] pb-[150px]'>


      <div className=' space-y-6'>
        <h6 className=''>
          About Us
        </h6>
        <h1 className='  '>  Turning Ideas into<br className=" md:block hidden" />   Fullstack Solutions with <span className=' text-[#969696]'>  <br className=" md:block hidden" />Clean Code & Scalability</span></h1>
        <h4 className=' font-medium  md:max-w-[60%]'>
         I love solving real-world problems through clean architecture, efficient APIs, and smooth user interfaces.
        </h4>

      </div>


      <div className=' w-full flex  flex-col md:flex-row  justify-between gap-5   h-[700px] md:h-[350px]'>
        <div className=' relative rounded-2xl md:w-[60%]  h-full overflow-hidden'>
          <Image src='/assets/0h67TFuk7bDRVujjwt6jBREPseM.avif' fill alt='about' className=' object-cover' />
        </div>

        <div className=' relative rounded-2xl md:w-[40%]  h-full overflow-hidden'>
          <Image src='/assets/V9HMLInOpxTvB6QtupCYzLvhzP4.avif' fill alt='about' className=' object-cover' />
        </div>

      </div>

      <ServicesSectionAbout />


      <div className=' relative rounded-2xl w-full   h-[350px]  md:h-[550px] overflow-hidden'>
        <Image src='/assets/nkhzPF2aG9jHzZ0Tx12GETeVy0.avif' fill alt='about' className=' object-cover' />
      </div>

      <HowWork />
      <DesigingSucces />

    </div>
  )
}
