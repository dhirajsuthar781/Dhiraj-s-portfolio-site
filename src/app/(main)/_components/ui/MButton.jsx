"use client"

export default function MButton({ title = "", onClick = () => { }, icon = null, clx = "", xIcon = null, type = "b" }) {
     return (
          <button onClick={onClick} className={` group ${type == "b" ? "elementstyle" : "elementstyleLight"} p-[16px_24px_16px_24px]  after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2   after:w-[80%] after:h-[80%] after:bg-transparent  overflow-hidden  after:z-[2] ${clx}`}>

               <div className='   opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 -translate-x-1/2  translate-y-4 group-hover:-translate-y-1/2 z-[3]   duration-[250ms]  ease-in '>
                    {
                         xIcon && xIcon
                    }
               </div>

               <div className='  group-hover:blur-[6px] duration-[300ms] ease-in  flex flex-row justify-center items-center gap-2'>
                    {
                         title && title}
                    {
                         icon && icon
                    }
               </div>

          </button>
     )
}

