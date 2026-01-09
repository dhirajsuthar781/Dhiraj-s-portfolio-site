import { aboutpage } from '@/data/constant'
import React from 'react'

export default function HowWork() {
     return (
          <div>
               <div className='  '>
                    <div className=' flex md:flex-row flex-col justify-between gap-10'>
                         <div className='  font-manrope font-medium md:w-[20%]'>
                              How We Work
                         </div>
                         <div className='  md:w-[80%]'>
                              <h2  >
                                   Join us in exploring a digital creative process where
                                   <span className=' text-[#969696]'> simplicity enhances the beauty and efficacy </span>
                                   of every product endeavor.
                              </h2>

                              <div className=' mt-16 space-y-10'>
                                   {
                                        aboutpage.howIWork.map((item, index) => {
                                             return (
                                                  <div key={index} className=' space-y-3'>
                                                       <p className=' font-manrope text-2xl font-medium'>
                                                            <span className=' pr-3'>0{index + 1}</span>{item.title}
                                                       </p>
                                                       <h5 className='  w-full font-manrope text-[#7e7e7e] font-medium'>
                                                            {item.description}
                                                       </h5>
                                                  </div>
                                             )
                                        })

                                   }
                               

                              </div>
                              

                         </div>

                    </div>

               </div>
          </div>
     )
}
