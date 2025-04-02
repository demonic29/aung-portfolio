import { ProjectImages, projectImages } from "@/app/projects/data/data";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProjectPdf from "./ProjectPdf";
import ProjectImage from "./ProjectImage";

const ProjectInfos = ({ tools, duration, thoughts, link, catchcopy, images }: ProjectImages) => {
  return (
    <div className="border-b pb-10 mt-8 gap-6">
      <h1 className="text-xl md:text-3xl mt-6 md:mt-10 font-bold">技術面</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-8 items-start text-left">
        <div className="grid gap-2">
          <h1 className="text-stone-400 text-sm">使用ツール</h1>
          <div className="flex flex-wrap gap-4">
            {tools.map(item => (
              <div className="relative w-8 h-8 md:w-[30px] md:h-[30px]" key={item}>
                <Image src={item} alt="project-tool" layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <h1 className="text-stone-400 text-sm">制作期間</h1>
          <p className="text-lg md:text-xl">{duration}</p>
        </div>

        <div className="grid gap-2">
          <h1 className="text-stone-400 text-sm">種類</h1>
          <p className="text-lg">{catchcopy}</p>
        </div>

        <div className="grid gap-2 col-span-1 md:col-span-3">
          <h1 className="text-stone-400 text-sm">感想</h1>
          <p className="text-base md:text-medium md:leading-8">{thoughts}</p>
        </div>

        <div className="grid gap-2 col-span-1 md:col-span-2">
          <h1 className="text-stone-400 text-sm">実際見る</h1>
          <Link href={link} target="_blank">
            <p className={`${link ? 'text-base md:text-medium underline text-blue-400' : 'text-gray-500 cursor-not-allowed'}`}>{link ? link : '大変申し訳ないですが、ただいま作成中なのでまたきてくだい！ :(('}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfos;
