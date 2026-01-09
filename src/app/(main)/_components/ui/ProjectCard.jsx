import { getImageUrl } from '@/utils/appwrite/ImageHandler'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({ data }) {
     return (
          <div className=' w-full'>
               <Link href={`/project/${data?.slug}`} className=' block w-full aspect-[4/3] rounded-3xl  relative overflow-hidden   bg-gray-100'>
                    <Image src={getImageUrl(data?.images[0])} fill alt='about' className=' object-cover' />
               </Link>
               <div className=' space-y-1 pt-3'>
                    <h3 className=' text-2xl font-manrope font-medium'>
                         <Link href={`/project/${data?.slug}`}>{String(data?.title).split("-").map(o => o + " ")} </Link>
                    </h3>
                    <p className=' text-md font-inter '> {data?.subTitle}</p>
               </div>

          </div>
     )
}
