import React from 'react'

import { ArrowRight, CircleDot, FileText } from 'lucide-react'
import MButton from '../_components/ui/MButton'
import Image from 'next/image'
import Logo from '../_components/ui/Logo'

export default function HeroSection() {

     const handleDownload = () => {
          const link = document.createElement('a');
          link.href = '/Dhiraj_resume.pdf';
          link.download = 'Dhiraj_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };
     return (
          <div className=' space-y-8'>
               <div className=' flex   flex-row items-center  gap-5' >
                    <div className='imageEffect w-[100px] aspect-[4/2] rounded-[12px] relative   overflow-hidden bg-[#dcdfe6] '>
                         <Image src='/logo.png' fill alt='@dhirajsuthar781' className=' h-full w-full object-cover' />
                    </div>
                    <Logo size={15} fill='#B6F500' />
                    <p className=' font-nunito  tracking-wide  text-black/50 uppercase  text-[12px] md:text-sm'>available for freelance</p>
               </div>


               <h1 className=' pt-5 '>Dhiraj Suthar is a expirenced <br className=" md:block hidden" /> fullstack dev <span className=' text-[#969696]'> who create super <br className=" md:block hidden" /> fast & beautiful website.</span></h1>


               <MButton
                    title='Checkout Resume'
                    onClick={handleDownload}
                    clx='  '
                    xIcon={<FileText strokeWidth={1.8} className=' size-[22px]' />}
                    icon={<ArrowRight strokeWidth={1.6} className=' size-[22px]' />}

               />


          </div>
     )
}

