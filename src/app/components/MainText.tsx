"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import profile from "@/app/assets/mine/profile.jpg";
import Image from "next/image";
import MyPhotos from "../home/MyPhotos";
import { GiHeartInside } from "react-icons/gi";
import { BsFillChatSquareHeartFill } from "react-icons/bs";
import ProfilePic from "./ProfilePic";
import Skills from "../home/Skills";
import { TerminalUi } from "./TerminalUi";


export default function MainText() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    
    <div className="md:my-[100px] md:text-left text-center mt-[40px] container justify-around items-center md:flex px-4">
      <div className="transition-all duration-1000">
        <div className="grid md:gap-10 gap-4">
          <div className="grid md:gap-10 gap-2">
            <p className="text-gray-800">Mingalarpar! I am</p>
            <span
              className={`block font-[Poppins] text-3xl md:text-[64px] font-extrabold  animate__animated animate__bounceIn`}
            >
              Frontend Developer
            </span>
            <span
              className={`block font-[Poppins] text-3xl md:text-[64px] font-extrabold outline_text animate__animated animate__bounceIn`}
            >
             
              &  Website Designer
            </span>
          </div>
          <p className="text-[12px] md:text-[18px] md:leading-8 transition-opacity duration-1000">
            美しいウェブサイトやアプリケーションを構築することは私の喜びであり、 <br  className="hidden md:block"/> それをあなたと共有したいと思っています。
          </p>

          <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-4 transition-opacity duration-1000">
            <Link
              href="/projects"
              className="bg_btn hover:scale-110 md:flex justify-center items-center gap-2 transition-transform duration-300 text-white"
            >
              <Button label="Explore Projects" className="text-[12px] md:text-base" />
              <GiHeartInside color="white" size={16} className="hidden md:block"/>
            </Link>
            <Link
              href="/contact"
              className="outline_btn hover:bg-black md:flex justify-center items-center gap-2  hover:text-white transition duration-300 ease-in-out"
            >
              <Button label="Talk with Me" className="text-[12px] md:text-base" />
              <BsFillChatSquareHeartFill size={16} className="hidden md:block"/>
            </Link>
          </div>
        </div>

        <Skills/>
      </div>

      {/* <div className="relative w-[300px] border-none h-[300px] md:w-[500px] md:h-[500px] ">
        <Image fill src={profile.src} alt="my-profile" className="object-cover rounded-2xl"/>
        
      </div> */}
      <ProfilePic/>
      {/* <TerminalUi/> */}
    </div>
  );
}
