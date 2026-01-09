import CButton from '@/app/(main)/_components/ui/CButton'
import MButton from '@/app/(main)/_components/ui/MButton'
import { CircleChevronRight } from 'lucide-react'
import React from 'react'

export default function OtherProjects() {
     return (
          <div className='py-[200px]  space-y-8'>

               <div className=' flex md:flex-row flex-col justify-between  '>
                    <div className='  font-manrope font-medium  pb-10 md:pb-0 w-full md:w-[20%]'>
                         Other Projects
                    </div>
                    <div className='flex justify-between items-start gap-5   w-full md:w-[65%]'>
                         <div className=' aspect-[4/3] rounded-xl w-full md:w-[220px] bg-[#dcdfe6]'>

                         </div>
                         <h2>
                              See how we've turned ideas into reality
                         </h2>
                    </div>
                    <div className='  flex  justify-end  md:w-[15%] pl-8'>
                         <MButton title='Check Out' xIcon={<CircleChevronRight  />} />
                    </div>
               </div>
               <div className=' flex md:flex-row flex-col justify-between  '>
                    <div className='  font-manrope font-medium w-full md:w-[20%]'>
                          
                    </div>
                    <div className='flex justify-between items-start gap-5   w-full md:w-[65%]'>
                         <div className=' aspect-[4/3] rounded-xl w-full md:w-[220px] bg-[#dcdfe6]'>

                         </div>
                         <h2>
                              See how we've turned ideas into reality
                         </h2>
                    </div>
                    <div className='  flex  justify-end  md:w-[15%] pl-8'>
                         <MButton title='Check Out' xIcon={<CircleChevronRight  />} />
                    </div>
               </div>


          </div>
     )
}
