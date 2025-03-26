'use client'
import { projectImages } from "@/app/projects/data/data";
// import { useModal } from "@/app/projects/components/ModalContext";
import { useModal } from "./ModalContext";
import Image from "next/image";
import { Button } from "@heroui/react";

function ProjectCard() {
  const { openModal } = useModal();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:container gap-6  mx-auto px-4">
      {projectImages.map((item) => (
        <div 
          key={item.id} 
          className="relative mt-4 w-full max-w-[357px] h-[267px] overflow-hidden group mx-auto dark:bg-black bg-white rounded-md dark:text-white text-black flex flex-col"
        >
          <div>
            <Image
              src={item.url}
              alt={item.title}
              fill
              className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
            />
            <article className="p-4 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-black opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="translate-y-10 grid gap-2 group-hover:translate-y-0 text-white transition-all duration-300 space-y-2">
                <div>
                  <p className="text-[10px] md:text-[12px] text-green-500">{item.title}</p>
                  <h1 className="text-lg md:text-lg">{item.catchcopy}</h1>
                </div>
                <button
                  
                  className="bg-white text-stone-800 md:px-2 md:text-[14px]"
                  onClick={() => openModal(item.id)}
                >
                  詳細
                </button>
              </div>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
}


export default ProjectCard;
