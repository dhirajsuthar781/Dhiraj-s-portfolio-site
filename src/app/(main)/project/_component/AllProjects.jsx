"use client"
import useSWR from "swr";
import ProjectCard from "../../_components/ui/ProjectCard"

export default function AllProjects() {

     const fetcher = (url) => fetch(url).then((res) => res.json());
     const { data, error, isLoading, mutate } = useSWR("/api/project", fetcher);
     
     return (
          <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-12'>

               {
                    data?.data?.map((item, index) => {

                         return <ProjectCard key={index} data={item} />
                    })
               }

          </div>
     )
}
