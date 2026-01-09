"use client";

import useSWR from "swr";
import CreateProjectButton from "./_components/CreateProjectButton";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
     // call our /api/project endpoint
     const { data, error, isLoading, mutate } = useSWR("/api/project", fetcher);

     return (
          <div className="w-full">
               {/* create project button */}
               <div className="flex justify-end w-full">
                    {/* pass mutate so after create, we can refresh list */}
                    <CreateProjectButton onCreated={() => mutate()} />
               </div>
          
               <div className="mt-6 w-full space-y-2">
                    {isLoading && <p>Loading...</p>}
                    {error && <p className="text-red-600">Failed to load projects</p>}

                    {data?.status && data.data?.length === 0 && (
                         <p className="text-gray-500">No projects found.</p>
                    )}

                    {data?.status &&
                         data.data?.map((project, index) => (
                              <Link
                                   href={`/dashboard/project/${project.$id}`}
                                   key={project.$id}
                                   className=" w-1/2 rounded-lg block border border-[#e4e4e4] px-5 py-3"
                              >
                                   <div className=" space-y-1">

                                        <p className=" text-xl font-semibold capitalize font-manrope">{index + 1}. {project?.title}</p>

                                        <p className=" text-gray-400   capitalize font-inter text-md">
                                             {project?.subTitle}
                                        </p>
                                   </div>
                              </Link>
                         ))}
               </div>
          </div>
     );
}
