import { homepage } from "@/data/constant"

 
export default function TechStackSection() {

     
     return (
          <div className=' pb-[150px]'>

               <div className=' text-start pb-16  font-manrope font-medium w-[20%]'>
                    Excellence in Tech
               </div>
               <div>
                    <div className=' w-full grid grid-cols-5 gap-20  h-[300px] '>
                         {
                              homepage.techstackData.map((item, index) => {
                                   return (
                                        <div key={index}
                                             className={`  flex justify-end flex-col`}>
                                             <span className=' text-center font-manrope '>
                                                  {item.Percent}%  {' '}
                                             </span>
                                             <div
                                                  style={{ height: `${item.Percent}%` }}
                                                  className='text-center  bg-[#f0f0f0]  border-t-2 border-black/25 '>
 
                                             </div>
                                        </div>
                                   )
                              })
                         }


                    </div>
                    <div className=' w-full grid grid-cols-5 gap-20 border-t border-black/20'>
                         {
                               homepage.techstackData.map((item, index) => {
                                   return (
                                        <div key={index} className=' text-center   py-2 tracking-wide font-manrope text-black/80  '>
                                             <span>{item.name}</span>

                                        </div>
                                   )
                              })
                         }
                    </div>
               </div>

          </div>
     )
}
