import React from 'react'

export default function InProgress() {
     return (
          <div className='  '>
               <div className=' flex md:flex-row flex-col justify-between gap-10'>
                    <div className='  font-manrope font-medium md:w-[20%]'>
                         In Progress
                    </div>
                    <div className='  md:w-[80%]'>
                         <h2  >
                              A designer's work is never complete; it's about
                              <span className=' text-[#969696]'> continually pushing our boundaries.</span>
                         </h2>
                    </div>

               </div>
               
               <div className=' grid  grid-cols-1 md:grid-cols-2   gap-12 md:gap-24 mt-20'>
                    {
                         data?.map((item, index) => {
                              return <div key={index} className='  flex justify-between  '>
                                   <div className='  font-manrope leading-[140%] font-medium text-[20px] md:text-5xl  pr-3 md:pr-5'>
                                        { index + 1}.
                                   </div>
                                   <div>
                                        
                                        <h4 className='  md:pt-1     '>
                                             {item.title}
                                        </h4>

                                        <h6 className='  pt-3 md:pt-5'>
                                             {item.content}
                                        </h6>

                                   </div>
                              </div>
                         })
                    }

               </div>

          </div>
     )
}


const data = [
     {

          title: "New projects",
          content: "I'm currently working on a couple of new projects to expand my portfolio. I already have one project that I developed entirely on my own, from inception to completion. The next project will showcase one of my best works from my previous employment at a company.",
     },
     {

          title: "User research projects",
          content: "At the moment, I'm actively strategizing the creation of new projects that will be developed entirely from scratch to achieve their final form. My approach involves meticulously outlining a roadmap and commencing in-depth research to lay a solid foundation for their execution.",

     },
     {

          title: "Portfolio upkeep",
          content: "I'm someone who always strives to stay current with trends and enhance my work. I believe that any product or portfolio requires ongoing reviews and improvements. That's why I'm actively maintaining and updating my portfolio.",

     },
     {

          title: "Learning and growth",
          content: "As a self-taught designer, I've learned and grown independently. I take pride in my clients and projects, and my passion lies in continual learning and skill development, a journey I'll pursue indefinitely.",


     }
]




