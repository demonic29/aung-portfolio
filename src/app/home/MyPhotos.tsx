//@ts-nocheck
'use client';
// import { items } from '@/components/website/constant';
import { myPhotos } from '../projects/data/data';
import Image from 'next/image';
import React, { useRef, createRef } from 'react';

export default function MyPhotos() {
  const containerRef = useRef(null);
  const refs = useRef(myPhotos.map(() => createRef<HTMLImageElement>()));

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    image.style.zIndex = (globalIndex % myPhotos.length) + 1;

    image.dataset.status = 'active';
    setTimeout(() => {
      image.dataset.status = 'inactive';
    }, 1000);
    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };
  const deactivate = (image) => {
    image.dataset.status = 'inactive';
  };
  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
      const lead = refs.current[globalIndex % refs.current.length].current;

      const tail =
        refs.current[(globalIndex - 5) % refs.current.length]?.current;

      if (lead){ activate(lead, e.clientX, e.clientY)};
      // if (tail){ deactivate(tail)};

      globalIndex++;
    }
  };

  return (
    <section
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className='grid place-content-center h-full w-full bg-[#1c1c1c] relative overflow-hidden rounded-lg'
    >
      {myPhotos.map((item, index) => (
        <Image
          key={index}
          className="object-cover z-10 scale-0 opacity:0 data-[status='active']:scale-100  data-[status='active']:opacity-100 transition-transform duration-500 data-[status='active']:ease-out-expo  absolute  -translate-y-[50%] -translate-x-[50%]"
          data-index={index}
          data-status='inactive'
          src={item.src}
          alt={`image-${index}`}
          ref={refs.current[index]}
          width={150}
          height={150}
        />
      ))}
      <article className='relative z-20 mix-blend-difference'>
        <h1 className='md:text-4xl text-2xl text-center font-semibold text-white tracking-[50px]'>
          ✨ 大切な思い出
        </h1>
      </article>
    </section>
  );
}
