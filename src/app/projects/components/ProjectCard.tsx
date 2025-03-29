"use client";
import { projectImages } from "@/app/projects/data/data";
// import { useModal } from "@/app/projects/components/ModalContext";
import { useModal } from "./ModalContext";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";

function ProjectCard({ projectType }: any) {
  const { openModal } = useModal();

  return (
    <div className="grid  overflow-scroll sm:grid-cols-2 lg:grid-cols-4 md:container gap-6 md:gap-[20rem] mx-auto px-4">
      {projectType.map((item : any) => (
        <div key={item.id} className="w-full">
          <div className="relative mt-4 borders w-[300px] h-[400px] overflow-hidden group mx-auto dark:bg-black bg-white rounded-md dark:text-white text-black">
            <Image
              src={item.mockup || "default.jpg"}
              alt={item.title}
              fill
              className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
            />
            <article className="p-4 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-black opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="translate-y-10 grid gap-2 group-hover:translate-y-0 text-white transition-all duration-300 space-y-2">
                <div>
                  <p className="text-[10px] md:text-[12px] text-green-500">
                    {item.title}
                  </p>
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

          <div className="md:w-[300px] md:mt-6 grid gap-2">
            <h3 className="font-bold md:text-2xl tracking-wider">
              {item.title}
            </h3>
            <p className="text-stone-500 text-sm leading-6 tracking-wider">
              {item.description}
            </p>

          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
