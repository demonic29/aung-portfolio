'use client';

import React, { useState } from 'react';
import { logo, Logo, projectImages, ProjectImages } from '../projects/data/data';
import Image from 'next/image';

const Skills = () => {
    const [showSkills, setShowSkills] = useState<Logo[]>(logo);

    return (
        <div className='mt-4'>

            <div className="">
                <div>
                    {/* <h1 className='font-bold tracking-wider text-center mt-6'>TOOLS I BEEN USING FOR MY PROJECTS</h1> */}
                </div>
                <ul className="md:flex md:flex-wrap gap-4">
                    {/* <li className='text-sm'>For Coding - </li> */}
                    {showSkills.map((item, index) => (
                        <li key={`${item.id}-${index}`} className='my-5 relative w-[30px] h-[30px]'>
                            <Image
                                alt="logos"
                                src={item.src}
                                fill
                                className="object-cover fill-primary-foreground"
                            />
                        </li>
                        
                    ))}
                    
                </ul>
                
            </div>
            
        </div>
    );
};

export default Skills;
