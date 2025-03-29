'use client'
import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./[projectModal]/page";
import CarouselSection from "./components/CarouselSection";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/react";
import { projectImages } from "./data/data";

const Projects = () => {

  const [selectType, setSelectType] = useState("all");

  const filterType = selectType === 'all' ? projectImages : projectImages.filter(item => item.type === selectType);

  return (
    <div className=" md:mb-[100px] md:container gap-5 sm:px-6 grid md:grid-cols-3 items-center justify-center">

      <div className="md:container grid gap-4 md:mb-[36px]">
        {/* <span className=" text-stone-700">Project Section</span> */}
        <h1 className="text-stone-900 md:text-2xl text-3xl font-[poppins] font-bold tracking-widest">
          PROJECTS
        </h1>
        <p className="text-stone-500 hidden md:block md:leading-8 md:tracking-wider">
          私は個人プロジェクトやチームでのコラボレーションなど、さまざまなプロジェクトに取り組んできました。
        </p>
        <button onClick={() => setSelectType('all')} className="border border-stone-500 hover:bg-stone-800 hover:text-white py-2">全て</button>
        
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => setSelectType('個人制作')} className="border border-stone-500 hover:bg-stone-800 hover:text-white py-2">個人</button>
          <button onClick={() => setSelectType('チーム制作')} className="border border-stone-500 hover:bg-stone-800 hover:text-white py-2">チーム</button>
        </div>
      </div>

      <div className="md:col-span-2">
        <ProjectCard projectType={filterType}/>
        {/* <CarouselSection /> */}
        <ProjectModal />
      </div>
    </div>
  );
};

export default Projects;
