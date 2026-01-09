import React from 'react'
import Logo from './ui/Logo'
import { AtSign, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
     return (
          <div className=' w-full flex  justify-end flex-col   -z-1  fixed top-0 left-0  h-screen overflow-hidden   bg-black text-white '>
               <div className=' maxw '>
                    <div className=' hidden md:flex  justify-between pb-16 items-start'>
                         <div className=' text-7xl font-normal  font-inter leading-[130%] '>
                              Let's  Connect <br  className=" md:block hidden"/> There
                         </div>
                         <div>
                              <button className=' flex  justify-center items-center bg-[#363636] p-2 rounded-full '>
                                   <div className=' flex rounded-full p-10 bg-black relative justify-center items-center w-fit'>
                                        <ChevronRight size={40} strokeWidth={1.2} className=' absolute -translate-x-1/2 -translate-y-1/2 left-[43%] top-1/2 text-white w-fit' />
                                        <ChevronRight size={40} strokeWidth={1.2} className=' text-white  absolute -translate-x-1/2 -translate-y-1/2 left-[57%] top-1/2' />
                                   </div>
                                   <span className=' font-manrope text-[18px]  font-medium px-6 tracking-wide'>Hire Me Now!</span>
                              </button>
                         </div>

                    </div>
                    <div className=' flex   md:flex-row flex-col justify-between  gap-12 md:gap-0  pt-8 md:pt-12 border-t border-white/30'>
                         <div className='  md:w-[300px]'>
                              <div className=' flex items-center justify-start gap-5'>
                                   <Logo size={30} fill='white' />
                                   <span className=' font-manrope text-[34px] font-semibold'>Dhiraj Suthar</span>
                              </div>
                              <p className=' font-inter text-[16px] text-white/60  pt-3'>My Project are designed to be fast, easy to use, and built with best practices in mind.</p>
                         </div>
                         <div className=' grid md:grid-cols-3 grid-cols-1    w-[55%] gap-10'>
                              <div className=' space-y-3'>
                                   <p className=' font-inter text-[16px] tracking-wide font-medium'>Address</p>
                                   <div>
                                        <p className=' font-inter  tracking-wide text-[16px]  text-white/60 '>B - 14 Garden City ,<br  className=" md:block hidden"/> Kalol - 382721 <br  className=" md:block hidden"/> Gandhinagar.</p>
                                   </div>
                              </div>
                              <div className=' space-y-3'>
                                   <p className=' font-inter text-[16px] tracking-wide font-medium'>Links</p>
                                   <div className=' flex flex-col'>
                                        <Link target='_blank' href='mailto: dhiraj.from.earth@gmail.com' className=' font-inter tracking-wide text-[16px] text-white/60 '>Gmail | dhiraj.from.earth</Link>
                                        <Link target='_blank' href='https://github.com/scremingalien' className=' font-inter tracking-wide text-[16px] text-white/60  '>Github | Scremingalien </Link>
                                        <Link target='_blank' href='https://leetcode.com/u/drsuthar781/' className=' font-inter tracking-wide text-[16px] text-white/60  '>Leetcode | drsuthar781</Link>
                                   </div>
                              </div>
                              <div className=' space-y-3'>
                                   <p className=' font-inter text-[16px] tracking-wide font-medium'>Phone Number</p>
                                   <div>
                                        <Link target='_blank' href='tel: +91 7046479126' className='text-white/60 font-inter tracking-wide text-[16px] '>+91 7046 479 126</Link>

                                   </div>
                              </div>

                         </div>
                    </div>
                    <div className=' flex   justify-center xl:justify-end gap-8   pt-12 md:pt-5  pb-5 md:pb-12'>
                         {
                              linksdata.map((item, index) => {
                                   return (
                                        <Link href={item.href} key={index} className=' text-white/60 font-inter text-[16px]  '>
                                             <span>{item.name}</span>
                                        </Link>
                                   )
                              })
                         }
                    </div>
                    <div className=' text-center  py-4 md:py-10 border-t border-white/30'>
                         <span className=' flex justify-center items-center font-manrope  text-[14px] md:text-[16px]  tracking-wide'>All Rights Reserved <AtSign  strokeWidth={1.8} className='  size-[12px] md:size-[16px] ml-2 mr-0.5' />dhirajsuthar781</span>
                    </div>
               </div>
          </div>
     )
}

const linksdata = [
     {
          name: "Home",
          href: "/"
     },
     {
          name: "About",
          href: "/about"
     },
     {
          name: "Project",
          href: "/project"
     },
     {
          name: "Blog",
          href: "/blog"
     },

    

]