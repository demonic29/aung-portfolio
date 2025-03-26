import Image from 'next/image'
import React from 'react'

interface StoryPage {
    greeting: string,
    name: string,
    story: string,
    image: string
}

const StoryPage = ({greeting, name, story, image}: StoryPage) => {
  return (
    <div>
        <div className="md:grid md:grid-cols-2 w-full mt-5 mx-auto bg-white p-5">
            <div className="text grid gap-2 md:p-20">
                <h5 className="text-sm">{greeting}</h5>
                <h1 className="font bold text-[36px]">{name}</h1>
                <p className="md:leading-8 leading-7 tracking-wide md:mt-4">{story}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="relative md:w-[500px] md:h-[400px] h-[300px] mt-5 md:mt-0 w-full">
                    <Image src={image} fill alt="image" className="object-cover" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoryPage