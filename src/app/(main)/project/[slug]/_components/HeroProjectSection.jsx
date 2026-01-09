import MButton from '@/app/(main)/_components/ui/MButton'
import { getImageUrl } from '@/utils/appwrite/ImageHandler'
import { safeJSONParse } from '@/utils/response'
import { ArrowRight, BicepsFlexed, CircleDot, CornerDownRight, Download, ExternalLink, FileText, Smile } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'




export default function HeroProjectSection({ slug }) {
     const fetcher = async (url) => {
          const res = await fetch(url);
          const json = await res.json();
          const doc = json?.data?.documents?.[0];

          if (doc) {
               doc.toolsUsed = safeJSONParse(doc.toolsUsed);
               doc.features = safeJSONParse(doc.features);
               doc.aspects = safeJSONParse(doc.aspects);
               doc.upcomingFeatures = safeJSONParse(doc.upcomingFeatures);
          }

          return json;
     };

     const { data, error, isLoading, mutate } = useSWR(`/api/project/byslug/${slug}`, fetcher);
     const project = data?.data?.documents[0];

     if (isLoading) return <p className="text-center py-10">Loading...</p>;
     if (error) return <p className="text-center text-red-500">Failed to load project</p>;
     const [first, second] = String(project?.title || "").split("-");
     return (
          <div className=' w-full  md:max-w-[60%] space-y-5 mx-auto'>

               <h1 className="text-3xl font-bold">
                    <span className="text-black">{first}</span>{" "}
                    <span className="text-[#969696]">{second}</span>
               </h1>
               <h4 className=' '>
                    {data?.data?.documents[0]?.subTitle}
               </h4>

               <div className=' border border-[#e9e9e99a]  w-full my-6 mt-12 relative aspect-[4/3] rounded-3xl  overflow-hidden bg-gray-100 '>
                    <Image src={data?.data?.documents[0]?.images[0] ? getImageUrl(data?.data?.documents[0]?.images[0]) : '/assets/0h67TFuk7bDRVujjwt6jBREPseM.avif'} fill alt='about' className=' object-cover' />
               </div>

               <div className=' flex gap-5 py-3'>
                    <MButton title='Download Code' xIcon={<Download />} icon={<ArrowRight size={22} className=' rotate-90' />} />
                    <MButton title='Live Site' type='w' xIcon={<ExternalLink size={20} />} icon={<ArrowRight size={22} />} />
               </div>




               {/* Tools Used */}
               {
                    project?.toolsUsed?.show && (
                         <section className="space-y-5 md:space-y-7 py-12  md:py-20">
                              <h2 className="">Tools Used</h2>
                              {Object.entries(project.toolsUsed).map(([key, val]) =>
                                   key !== "show" ? (
                                        <div key={key} className=" flex gap-5 justify-between items-start">
                                             <div className=' w-[30%]  pt-1 '>
                                                  <p className='font-manrope font-medium'>{key}</p>
                                             </div>

                                             <div className="w-[70%] ">
                                                  {val.map((tool, i) => <h4 key={i}>{tool}</h4>)}
                                             </div>
                                        </div>
                                   ) : null
                              )}
                         </section>
                    )
               }


               <div className=' py-12  md:py-20'>
                    <h4>
                         Abhout the project . means what the project is about
                    </h4>
               </div>




               {/* Features */}
               {
                    project?.features?.show && (
                         <section className="space-y-5 md:space-y-7 py-12  md:py-20">
                              <h2  >Features</h2>
                              {project.features.Features.map((feat, i) => (
                                   <div key={i} className="flex gap-5 justify-between items-start">
                                        <div className=' pr-0 md:pr-3   pt-1.5 md:pt-1 '>
                                             <CircleDot strokeWidth={1.5} className=' size-[16px] md:size-[24px] ' />
                                        </div>



                                        <div className=' w-full'>
                                             <h4>{feat}</h4>

                                        </div>

                                   </div>
                              ))}
                         </section>
                    )
               }





               <div className='   my-6 overflow-hidden relative aspect-[4/3] rounded-3xl  bg-[#dcdfe6] '>
                    <Image src={data?.data?.documents[0]?.images[1] ? getImageUrl(data?.data?.documents[0]?.images[1]) : '/assets/0h67TFuk7bDRVujjwt6jBREPseM.avif'} fill alt='about' className=' object-fill' />
               </div>



               {/* Aspects */}
               {
                    project?.aspects?.show && (
                         <>
                              <section className="space-y-5 md:space-y-7 py-12  md:py-20">
                                   <h2 >Positive Aspects</h2>
                                   {project.aspects.Positive?.map((h, i) => (
                                        <div key={i} className=' flex gap-5 justify-between items-start'>
                                             <div className='  md:pr-3  '>
                                                  <CornerDownRight strokeWidth={1.4} className=' size-6 md:size-8' />
                                             </div>

                                             <div className=' w-full'>
                                                  <h4>{h}</h4>

                                             </div>

                                        </div>
                                   ))}
                              </section>
                              <section className="space-y-5 md:space-y-7 py-12  md:py-20">

                                   <h2 >Negative Aspects</h2>
                                   {project.aspects.Negative?.map((h, i) => (
                                        <div key={i} className=' flex gap-5 justify-between items-start'>
                                             <div className='  md:pr-3  '>
                                                  <CornerDownRight strokeWidth={1.4} className=' size-6 md:size-8' />
                                             </div>

                                             <div className=' w-full'>
                                                  <h4>{h}</h4>

                                             </div>

                                        </div>
                                   ))}
                              </section>
                         </>
                    )
               }



               <div className='   my-6 grid  grid-cols-1  md:grid-cols-2   gap-12 md:gap-5  aspect-[4/16] md:aspect-[4/4]'>
                    <div className='      rounded-3xl relative  overflow-hidden '>
                         <Image src={data?.data?.documents[0]?.images[2] ? getImageUrl(data?.data?.documents[0]?.images[2]) : '/assets/0h67TFuk7bDRVujjwt6jBREPseM.avif'} fill alt='about' className=' object-contain  ' />
                    </div>
                    <div className='  rounded-3xl relative  overflow-hidden '>
                         <Image src={data?.data?.documents[0]?.images[3] ? getImageUrl(data?.data?.documents[0]?.images[3]) : '/assets/0h67TFuk7bDRVujjwt6jBREPseM.avif'} fill alt='about' className=' object-contain  ' />
                    </div>
               </div>


               {/* Upcoming Features */}
               {
                    project?.upcomingFeatures?.show && (
                         <section className=" space-y-5 md:space-y-7 py-12  md:py-20">
                              <h2  >Upcoming Features</h2>
                              {project.upcomingFeatures.UpcomingFeatures.map((feat, i) => (
                                   <div key={i} className=' flex gap-5 justify-between items-start'>
                                        <div className=' md:pr-3  pt-1 '>
                                             <CircleDot strokeWidth={1.5} className=' size-[16px] md:size-[24px] ' />
                                        </div>

                                        <div className=' w-full'>
                                             <h4>{feat}</h4>

                                        </div>

                                   </div>
                              ))}
                         </section>
                    )
               }


               <div className='  border border-[#e9e9e99a]  overflow-hidden relative w-full aspect-[4/3] rounded-xl   '>
                    <Image src={data?.data?.documents[0]?.images[4] ? getImageUrl(data?.data?.documents[0]?.images[4]) : '/assets/0h67TFuk7bDRVujjwt6jBREPseM.avif'} fill alt='about' className=' object-cover  ' />
               </div>

               <div className='  py-12  md:py-20'>
                    <h2>Feedback's </h2>

                    <div className='mt-10 w-full flex justify-center items-center gap-6 flex-col'>
                         <div className=' w-full space-y-2'>
                              <h6>@dhirajsuthar</h6>
                              <p className='text-[20px] font-manrope  leading-[140%]' >This is the comment written by dhiraj</p>
                         </div>
                         <div className=' w-full space-y-2 '>
                              <h6>@dhirajsuthar</h6>
                              <p className='text-[20px] font-manrope  leading-[140%]' >This is the comment written by dhiraj</p>
                         </div>
                    </div>

                    <div className=' mt-24 flex justify-center items-center gap-4 flex-col'>
                         <h4 className=''>Help me by giving your feedback</h4>
                         <p className=' text-[#989898] italic font-light font-inter'>No account needed !</p>
                         <MButton title='Give Feedback' clx='  ' xIcon={<Smile strokeWidth={1.6} className=' size-[22px]' />} icon={<ArrowRight strokeWidth={1.6} className=' size-[22px]' />} />
                    </div>
               </div>

          </div >
     )
}
