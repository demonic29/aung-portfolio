import React, { useState } from 'react';
import Image from 'next/image';
import profile from "@/app/assets/mine/profile.jpg";


function ProfilePic() {
  return (
    <>
      <div className='w-[400px] relative mt-4 h-[430px] group mx-auto dark:bg-black  bg-white dark:border-0  rounded-md dark:text-white text-black flex flex-col'>
        <div className='w-[500px] rounded-t-md h-[500px]  overflow-hidden transition-all duration-300'>
          <Image
            src={profile}
            alt='shoes'
            width={500}
            height={500}
            className='h-full w-full rounded-2xl  scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
          />
        </div>
        {/* <article className='relative overflow-hidden  flex-grow'>
          <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300'>
            <p className='md:text-2xl font-semibold'>Naymur Rahman</p>
            <p className='sm:text-base text-sm'>CEO &amp; Design Engineer</p>
          </div>
          <button className='absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center'>
            CEO &amp; Design Engineer
          </button>
        </article> */}
      </div>
    </>
  );
}

export default ProfilePic;
