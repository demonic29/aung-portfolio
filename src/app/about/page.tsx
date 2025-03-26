import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../design/HeroSection'

const About = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection
            title='ABOUT'
            subTitle='me'
            desc="oiii"
            desc2='iferer'
        />
    </div>
  )
}

export default About