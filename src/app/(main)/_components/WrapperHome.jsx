import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
 
export default function WrapperHome({ children }) {
  return (
    <div className=' relative min-h-[100%]'>

      <div className=' w-full  mb-[100vh] md:mb-[102vh]   relative top-0   left-0    z-10   bg-background  '>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}
