"use client"
import useSWR from "swr";
import ProjectCard from '../_components/ui/ProjectCard'

export default function ProjectSection() {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR("/api/project", fetcher);


  return (
    <div className=' '>

      <div className=' flex justify-center space-y-3 mb-16  flex-col items-center'>
        <h2 className=''>My most impactful work include  </h2>
        <div className=' flex md:flex-row flex-col items-center gap-3'>
          <p className=' border  rounded-[10px]  w-fit px-5 py-1 font-manrope font-medium  italic  '>Robust Backend</p>
          <p className=' border  rounded-[10px]  w-fit px-5 py-1 font-manrope font-medium  italic  '>SAAS product feature</p>
          <p className=' border  rounded-[10px]  w-fit px-5 py-1 font-manrope font-medium  italic  '>Seamless Design</p>
        </div>

      </div>


      <div className=' w-full grid  grid-cols-1 md:grid-cols-2 gap-12'>

        {
          data?.data?.map((item, index) => {

            return <ProjectCard key={index} data={item} />
          })
        }

      </div>
    </div>
  )
}
