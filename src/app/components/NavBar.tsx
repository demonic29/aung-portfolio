'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { MdMenuOpen } from "react-icons/md";


export default function NavBar() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header-show');
      if (header) {
        if (window.scrollY > 700) {
          header.style.boxShadow = "10px 20px black";
          header.style.background = 'black'
        } else {
          header.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="flex gap-10 items-center mt-6 px-4 md:px-0 sticky top-0 py-5 p z-[20] border-b-2 bg-white" id='headerShadown'>
      <div className='container flex justify-between items-center'>
        {/* Logo */}  
        <div className="text-lg md:text-xl font-bold">
          <Link href="/">AUNG KO HTET</Link>
        </div>

        {/* Navigation Links */}
        {/* <div className="hidden md:flex gap-10 justify-center items-center space-x-6 font-normal">
          <Link href="/about">About Me</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/design">Design</Link>
        </div> */}

        <Link className="bg_btn text-white px-4 rounded-lg hover:scale-105 transition-transform duration-300" href="/components/Contact.tsx">
            Get In Touch!
          </Link>

        {/* Mobile Navigation (Optional) */}
        <div className="md:hidden">
          <MdMenuOpen size={30}/>
        </div>
      </div>
    </div>
  )
}
