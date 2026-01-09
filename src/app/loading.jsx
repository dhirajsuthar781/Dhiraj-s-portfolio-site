import React from 'react'
import Logo from './(main)/_components/ui/Logo'

export default function loading() {
     return (
          <div className=' w-full h-screen flex justify-center items-center'>

               <div className='  animate-spin '>

                    <Logo size={40} fill='#B6F500' />

               </div>

          </div>
     )
}
