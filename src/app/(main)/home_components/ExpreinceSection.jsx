import React from 'react'
import { Dot } from 'lucide-react'
import { homepage } from '@/data/constant'

export default function ExpreinceSection() {
     return (
          <div className='    '>
               <div className=' flex justify-between gap-10'>
                    <div className='  font-manrope font-medium w-[20%]'>
                         Experience
                    </div>


               </div>
               <div className=' mt-20  space-y-10'>
                    {
                         homepage.exprienceData.map((item, index) => {
                              return <ExperienceCard key={index} data={item} />
                         })
                    }
               </div>



          </div>
     )
}

function ExperienceCard({ data }) {
     return (
          <div className=' flex md:flex-row flex-col justify-between  gap-5 md:gap-10  border-b border-black/20 pb-10'>
               <h4 className=' pt-1  font-manrope font-medium  md:w-[20%]'>
                    {data.time}
                    <br className="  " />
                    {data.location}
               </h4>
               <div className='   md:w-[80%]'>
                    <h2 className=' md:font-normal font-medium' >
                         {data.title}
                         {" "}
                         <span className=' text-[#969696]'>
                              {data.company}</span>
                    </h2>
                    <div className=' mt-3 space-y-1'>
                         {
                              data.content.map((item, index) => {
                                   return <div key={index} className=' flex gap-2'>
                                        <Dot className=' size-7 md:size-6 text-[#969696]' />
                                        <h5 className='   w-full'>{item}</h5>
                                   </div>
                              })
                         }

                    </div>
               </div>

          </div>
     )
}
