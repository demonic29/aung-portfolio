import Image from 'next/image'
import React from 'react'

import mypic from '@/img/mypic.jpg'

export default function AboutMe() {
  return (
    <main className='mt-[200px]'>
      <div className='w-1/5'>
        <div>
            <h1 className='text-white text-2xl'>About Me</h1>
            <p className='text-white'>I am from Myanmar. I went to Japanese Language school for one year and apply to ECC computer college to achieve my dream which is Full Stack Developer. I can able to speak Burmese , English , Japanese.</p>
        </div>

        <div>
            <Image 
                src={mypic}
                width={100}
                height={100}
                alt='my profile image'
            />
        </div>
      </div>
    </main>
  )
}
