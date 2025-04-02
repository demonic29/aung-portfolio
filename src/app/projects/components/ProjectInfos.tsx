import { ProjectImages, projectImages } from "@/app/projects/data/data";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProjectPdf from "./ProjectPdf";
import ProjectImage from "./ProjectImage";

const ProjectInfos = ({ tools, duration, thoughts,link, catchcopy, images }: ProjectImages) => {

  return (
    <div className="border-b-1 pb-10 mt-8 gap-6">

      {/* <div className="grid gap-2 md:col-span-3 border-b-1 md:pb-10">
        <h1 className="md:tracking-widest md:font-bold md:text-3xl text-center">PROJECT IMAGES</h1>
        <ProjectImage images={images || []}/>
      </div> */}
      <h1 className="md:text-3xl md:mt-10 font-bold">技術面</h1>

      <div className="grid grid-cols-3 gap-10 mt-8 items-start text-left">
        <div className="grid gap-2">
          <h1 className="text-stone-400 text-sm">使用ツール</h1>
          <div className="md:flex md:gap-4">
            
            {
              tools.map(item => (
                <div className="relative w-[30px] h-[30px]" key={item}>
                  <Image src={item} alt="project-tool" layout="fill" objectFit="cover" />
                </div>
              ))
            }
          </div>
        </div>

        <div className="grid gap-2">
          <h1 className="text-stone-400 text-sm">制作期間</h1>
          <p className="text-xl">{duration}</p>
        </div>

        <div className="grid gap-2">
          <h1 className="text-stone-400 text-sm">種類</h1>
          <p className="text-lg">{catchcopy}</p>
        </div>

        <div className="grid gap-2 col-span-3">
          <h1 className="text-stone-400 md:text-sm">感想</h1>
          <p className="md:text-medium md:leading-8">{thoughts}</p>
        </div>

        <div className="grid gap-2 col-span-2">
          <h1 className="text-stone-400 md:text-sm">実際見る</h1>
          <Link href={link} target="_blank">
            <p className={`${link ? 'md:text-medium md:leading-8 underline text-blue-400': 'text-white cursor-none'} `}>{link ? link : '大変申し訳ないですが、ただいま作成中なのでまたきてくだい！ :(('}</p>
          </Link>
        </div>

        {/* <div className="grid gap-2 col-span-3">
          <h1 className="text-stone-400 text-sm">企画書</h1>
          
          <ProjectPdf pdfId={pdfId || ''}/>
        </div> */}

        
      </div>

    </div>
  );
};

export default ProjectInfos;
