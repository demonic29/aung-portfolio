import React, { useState } from 'react';
import Image from 'next/image';
import profile from "@/app/assets/mine/profile.jpg";


function ProfilePic() {
  return (
    <>
      <div className='md:w-[400px] md:justify-start justify-center w-full relative mt-4 md:h-[430px] group mx-auto dark:bg-black  bg-white dark:border-0  rounded-md dark:text-white text-black flex flex-col'>
        <div className='md:w-[500px] border-b md:border-none pb-10 md:pb-0 rounded-t-md md:h-[500px] w-full overflow-hidden transition-all duration-300'>
          <Image
            src={profile}
            alt='shoes'
            width={500}
            height={500}
            className='h-full w-full rounded-2xl  scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
          />
        </div>
      </div>
    </>
  );
}

export default ProfilePic;
