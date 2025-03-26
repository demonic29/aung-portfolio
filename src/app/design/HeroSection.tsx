"use client";
import React, { useEffect, useState } from "react";

interface HeroSectionType {
  title: string;
  subTitle: string;
  desc: string;
  desc2: string;
}

const HeroSection: React.FC<HeroSectionType> = ({
  title,
  subTitle,
  desc,
  desc2,
}) => {
  return (
    <div className={`container text-center`}>
      <div className="mt-[100px] animate__animated animate__fadeIn">
        <span className="mincho text-[100px]">{title}</span>
        <span className="mincho text-[50px]">{subTitle}</span>
      </div>
      <div className="animate__animated animate__fadeIn">
        <p className="text-[18px] font-normal text-gray-600">{desc}</p>
        <p className="text-[18px] font-normal mt-3 text-gray-600">{desc2}</p>
      </div>
    </div>
  );
};

export default HeroSection;
