'use client'

import HeroProjectSection from './_components/HeroProjectSection'
import OtherProjects from './_components/OtherProjects'
import { useLenis } from '@/utils/hook/useLensi'
import { useParams } from 'next/navigation'

export default function page() {
     useLenis()
     const params = useParams();
   
     return (
          <div className=' maxw  pt-[150px] '>

               <HeroProjectSection slug={params?.slug}    />

               <OtherProjects />
          </div>
     )
}

// 6 Images total
// 1 main thumbnail
// 2 mini thumbnails
// 2 phone images
// 2 tablet images
