import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function CButton({ text = "-", width = 180, varient = 'w' }) {
     return (
          varient == 'w' ?
               <button className={`  group  duration-[400ms] ease-in-out border  border-transparent hover:border-black/30 hover:bg-transparent flex  bg-[#f0f0f0] h-fit py-4   rounded-full  justify-center gap-3 `} style={{ width: `${width}px` }}>
                    <span className=' text-[18px] font-inter  '>
                         {text}
                    </span>
                    <ArrowRight className='size-[26px]  -rotate-45 group-hover:rotate-0  duration-[400ms] ease-in-out text-black' strokeWidth={1.2} />
               </button>
               :
               <button className={`  group  duration-[400ms] ease-in-out border  border-transparent hover:border-black/30 hover:bg-transparent flex  text-white hover:text-black   bg-black h-fit py-4   rounded-full  justify-center gap-3 `} style={{ width: `${width}px` }}>
                    <span className=' text-[18px] font-inter   font-normal  '>
                         {text}
                    </span>
                    <ArrowRight className='size-[26px]  -rotate-45 group-hover:rotate-0  group-hover:text-black duration-[400ms] ease-in-out text-white' strokeWidth={1.4} />
               </button>
     )
}
