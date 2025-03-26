import React from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./[projectModal]/page";
import CarouselSection from "./components/CarouselSection";

const Projects = () => {
  return (
    <div className="py-[40px]  gap-5 px-4 sm:px-6 bg-gray-50">
      <div className="container grid gap-4 md:mb-[36px] text-center">
        <span className=" text-stone-700">Project Section</span>
        <h1 className="text-stone-900 md:text-5xl font-[poppins] font-bold tracking-widest">
          EXPLORE MY PROJECTS
        </h1>
        <p className="text-stone-800 md:leading-8 md:tracking-widest">
          私は個人プロジェクトやチームでのコラボレーションなど、さまざまなプロジェクトに取り組んできました。常に直感的で魅力的なユーザーインターフェースを作成し、全体的なユーザーエクスペリエンスを向上させることに重点を置いています。デザインと機能性を次のレベルへと押し上げ、シームレスな操作と印象的なエンゲージメントを実現することを目指しています。
        </p>
      </div>

      <div className="">
        {/* <ProjectCard/> */}
        <CarouselSection />
        <ProjectModal />
      </div>
    </div>
  );
};

export default Projects;
