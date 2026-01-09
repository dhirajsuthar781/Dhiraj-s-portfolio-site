"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './ui/Logo'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import Curve from './Curve'
export default function Navbar() {


     const [show, setShow] = useState(false)
     const pathname = usePathname();

     useEffect(() => {
          if (show) setShow(false)
     }, [pathname])

     const menuSlide = {
          initial: { x: "calc(100% + 100px)" },
          enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
          exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
     }

     const slide = {
          initial: { x: 80 },
          enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
          exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
     }

     const scale = {
          open: { scale: 1, transition: { duration: 0.3 } },
          closed: { scale: 0, transition: { duration: 0.4 } }
     }

     return (
          <section className='  fixed top-0 left-0 right-0 z-[999]   '>



               {/*   DESKTOP NAVBAR */}
               <div className=' hidden md:flex  maxw  border-gray-300     py-4     flex-row  justify-between items-center  '>

                    <div className='  '>
                         <Logo size={24} />
                    </div>

                    <div className='w-[70%] flex justify-center '>
                         <div className='  space-x-[3vmax]   px-4 p-1 backdrop backdrop-blur-[4px]     '>

                              {
                                   linksdata.map((item, index) => {
                                        return (
                                             <Link href={item.href} key={index} className=' font-manrope text-[16px]  font-medium'>
                                                  <span>{item.name}</span>
                                             </Link>
                                        )
                                   })
                              }
                         </div>
                    </div>

                    <div className='  '>
                         {/* <button className='px-6 py-2.5 border font-manrope text-[18px] font-medium border-gray-300 rounded-full'>
                              Contact Me
                         </button> */}
                    </div>
               </div>


               {/* MOBILE NAVBAR */}

               <div className='  flex md:hidden  maxw      py-4     flex-row  justify-between items-center  '>

                    <div className='  '>
                         <Logo size={24} />
                    </div>



                    <div onClick={() => setShow(!show)} className=' overflow-hidden z-[999] relative rounded-full w-18 h-8  '>

                         <motion.div
                              animate={{ top: show ? '-100%' : '0%' }}
                              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                              className=' relative  w-full h-full'>

                              <div className=' bg-[#f7f7f7]  w-full h-full flex items-center justify-center ' >

                                   <div id='label_animation' className=' flex justify-center items-center w-full h-full'>
                                        <p className=' text-[14px]  font-inter'>Menu</p>

                                   </div>
                              </div>
                              <div className=' bg-white absolute top-[100%] w-full h-full flex items-center justify-center '>
                                   <div id='label_animation' className=' flex justify-center items-center w-full h-full'>
                                        <p className=' text-[14px]  font-inter'>Close</p>
                                   </div>
                              </div>

                         </motion.div>
                    </div>


                    <AnimatePresence mode="wait">
                         {show &&


                              <motion.div
                                   variants={menuSlide} initial="initial" animate="enter" exit="exit"
                                   className=' w-full h-screen  flex  justify-center items-center flex-col    bg-black absolute top-0 left-0  gap-20'>
                                   <div className='w-[60%] pb-2 text-white/20 font-nunito border-b-[1px] border-white/20 text-[14px]   uppercase'>
                                        Menu
                                   </div>
                                   <div className=' flex flex-col w-[60%] space-y-6'>

                                        {
                                             linksdata.map((item, index) => {
                                                  return (

                                                       <motion.div key={index} className=' font-manrope text-[40px]  font-medium' custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
                                                            <motion.div variants={scale} animate={show ? "open" : "closed"}  ></motion.div>
                                                            <Link href={item.href} className='text-white'>{item.name}</Link>
                                                       </motion.div>

                                                  )
                                             })
                                        }

                                   </div>
                                   <Curve />
                              </motion.div>
                         }
                    </AnimatePresence>
               </div>

          </section>
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

     {
          name: "Contact",
          href: "/contact"
     },

]