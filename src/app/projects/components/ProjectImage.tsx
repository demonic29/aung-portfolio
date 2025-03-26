
'use client';
import { ProjectImages } from '@/app/projects/data/data'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const ProjectImage = ({images} : {images: string[]}) => {

  const [activeItem, setActiveItem] = useState(images[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(carousel.current){
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  return (
   <div className='w-full overflow-hidden'>
      <motion.div
        ref={carousel}
        drag='x'
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className='flex will-change-transform cursor-grab active:cursor-grabbing'
      >
        {images.slice(0, 8)?.map((img, index) => {
          return (
            <motion.div className='min-w-[20rem] min-h-[25rem] p-2' key={img}>
              <Image
                src={img}
                width={200}
                height={200}
                alt='img'
                className='w-full h-full object-cover pointer-events-none  rounded-md'
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  )
}

export default ProjectImage