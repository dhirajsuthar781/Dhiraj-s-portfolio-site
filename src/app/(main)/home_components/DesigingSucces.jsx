 
import CButton from '../_components/ui/CButton'

export default function DesigingSucces() {
     return (
          <div className='   '>
               <div className=' flex  flex-col md:flex-row justify-between gap-10'>
                    <div className='  font-manrope font-medium md:w-[20%]'>
                         Designing Success
                    </div>
                    <div className='  md:w-[65%]'>
                         <h2  >
                              See how we've turned ideas into reality. Dive into the stories of
                              <span className=' text-[#969696]'> successful product  that make a difference.</span>
                         </h2>
                    </div>
                    <div className='  flex  justify-end md:w-[15%]'>
                         <CButton text='My Work' />
                    </div>
               </div>

          </div>
     )
}
