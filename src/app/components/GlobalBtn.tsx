import { ArrowRight } from 'lucide-react';
import React from 'react';

interface BtnType{
    title: string,
    text: string
}

function GlobalBtn({text, title}: BtnType) {
  return (
    <>
      <div className='group md:w-40 flex justify-center items-center border-black relative cursor-pointer  border rounded-xl overflow-hidden'>
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          {title}
        </span>
        <div className='flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className='absolute left-[20%] w-2 group-hover:h-full group-hover:w-full rounded-lg scale-[1] dark:group-hover:bg-[#252525] group-hover:bg-[#1b1b1b] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
      </div>
    </>
  );
}

export default GlobalBtn;
