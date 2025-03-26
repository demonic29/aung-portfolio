'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from './HeroSection'
import Link from 'next/link'
import Button from '../components/Button'
import Contact from '../components/Contact'

const Design = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection
            title='DESIGN'
            subTitle='JOURNEY'
            desc="Are you stucking with your website or app design ?"
            desc2='I strive to create clean and beautiful designs that users want to see more and more.'
        />
      <Link href="/home" className="flex justify-center">
        <Button
          label="Let's create projects"
          className="bg_btn text-white mt-[50px] hover:animate-pulse shadow-2xl animate__animated animate__rubberBand"
        />
      </Link>
      <Contact/>
    </div>
  )
}

export default Design