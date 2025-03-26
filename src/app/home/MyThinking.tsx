import Image from 'next/image'
import React from 'react'
import img6 from "@/app/design/images/6.svg";

const MyThinking = () => {
  return (
    <div className=''>
      <div className="flex gap-20 justify-center bg-stone-800 text-white p-20 items-center">
        <section>
          <h1 className="mincho text-[50px]">My Thoughts on <br /> Design Theory</h1>
          <p className="text-gray-300 mt-3">
            Creating simple design is always on my mind <br /> and keep trying
            as possible so that user eyes can relax.
          </p>
          <ul className="mt-10 grid gap-5">
            <li><i className="fa-solid fa-check bg-black text-white rounded-full p-2 me-5"></i>Must be simple </li>
            <li><i className="fa-solid fa-check bg-black text-white rounded-full p-2 me-5"></i>Clean and tight design creation</li>
            <li><i className="fa-solid fa-check bg-black text-white rounded-full p-2 me-5"></i>Less context more spaces</li>
        </ul>
        </section>

        {/* <section>
          <Image
            src={img6}
            alt="thought-image"
            width={600}
            height={600}
            className="rounded-md"
            objectFit="cover"
          />
        </section> */}
      </div>
    </div>
  )
}

export default MyThinking