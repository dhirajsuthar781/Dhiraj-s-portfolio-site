
'use client'; // Needed for client-side interactivity (Next.js App Router)

import { homepage } from '@/data/constant';
import { ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Servicees() {

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {

    setOpenIndexes(openIndexes.includes(index) ? [] : [index]);

  };



  return (
    <div className="  ">
      <div className=' text-start pb-10  font-manrope font-medium w-[20%]'>
        Services
      </div>
      <div className="w-full   space-y-4">
        {homepage.servicesData.map((panel, index) => (
          <AccordionItem
            key={index}
            index={index}
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggleIndex(index)}
            title={panel.title}
            content={panel.data}
          />
        ))}
      </div>

    </div>
  );
}

function AccordionItem({ index, isOpen, onToggle, title, content }) {
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  return (
    <div className="   overflow-hidden border-b border-black/20">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center   py-3   transition"
      >
        <span className='  text-4xl font-medium md:font-normal md:text-5xl'>{title}</span>
        <span
          className={`transition-transform duration-300 ${isOpen ? 'rotate-90 ' : ' '
            }`}
        >
          <ArrowRight strokeWidth={1.2} className='  size-[28px] md:size-[34px]' />
        </span>
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden text-sm px-4 ${isOpen ? 'pt-0 opacity-100' : 'opacity-0 py-0'
          }`}
        style={{ maxHeight: '0px' }}
      >
        {
          content.map((item, index) => (
            <div key={index} className='  text-xl  md:text-2xl  py-2 md:py-3'>
              {item}
            </div>
          ))
        }
      </div>
    </div>
  );
}
