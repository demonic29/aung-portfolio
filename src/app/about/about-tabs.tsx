import React from 'react'
import { Tabs,Tab, Card, CardBody, CardHeader } from '@heroui/react'
import Image from 'next/image'

interface AboutTabs {
  title : string[],
  desc: string[],
  img: string[]
}

const AboutTabsPage = ({title, desc, img} : AboutTabs) => {
  return (
    <div className="w-full">
      <Tabs aria-label="Options" variant="underlined" className='w-full'>
        {
          title.map((item, index) => (
            <Tab key={index} title={`${title[index]}`} className='hover:text-green-600 md:text-[12px] focus:text-green-600 text-green-400 ps-0 w-full'>

              <div className=' rounded-none'>
                <div className='relative h-[250px]'>
                  <Image
                    src={img[index] || "img"}
                    fill
                    alt='imgs'
                    className='object-cover md:mb-8'
                  />
                </div>
                <div className='md:mt-4 mt-4 text-gray-100'>{desc[index]}</div>
              </div>
            </Tab>
          ))
        }
        
      </Tabs>
    </div>
  )
}

export default AboutTabsPage