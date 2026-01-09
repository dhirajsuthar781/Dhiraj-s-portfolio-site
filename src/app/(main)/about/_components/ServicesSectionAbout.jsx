import { homepage } from '@/data/constant'
import React from 'react'

export default function ServicesSectionAbout() {
     return (
          <div>
               <div className='   '>
                    <div className=' flex   md:flex-row flex-col justify-between gap-10'>
                         <div className='  font-manrope font-medium md:w-[20%]'>
                              Services
                         </div>
                         <div className='  md:w-[80%]'>
                              <h2  >
                                   Services are designed with simplicity and
                                   <span className=' text-[#969696]'> effectiveness in mind.</span>
                                   We offer a comprehensive range of solutions tailored to meet your design needs.
                              </h2>

                              <div className=' mt-16  space-y-10 '>

                                   {
                                        homepage.servicesData.map((item, index) => {
                                             return (

                                                  <div key={index} className=' space-y-3'>
                                                       <p className=' font-manrope text-2xl font-medium'>
                                                            {item.title}
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
