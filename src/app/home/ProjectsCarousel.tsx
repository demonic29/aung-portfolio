import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/app/components/linear-dialog';
import { Plus } from 'lucide-react';
import { projectImages } from '../projects/data/data';
import Framework from './MyThinking';
import ProjectSection from './ProjectSection';
import ProjectCard from '../projects/components/ProjectCard';
import ProjectModal from '../projects/[projectModal]/page';

export default function ProjectsCarousel() {
  return (
    <div className=" bg-stone-900 py-[40px]">

      <div className='container grid gap-4 mb-[24px]'>
      <span className=' text-stone-400'>project section</span>
          <h1 className='text-white md:text-5xl font-[poppins] font-bold tracking-widest'>EXPLORE MY PROJECTS</h1>
          <p className='text-stone-300 leading-8'>I have worked on a variety of projects, including both personal and team collaborations. My focus is always on creating intuitive and visually compelling user interfaces while enhancing the overall user experience. I strive to push design and functionality to the next level, ensuring seamless interactions and impactful engagement.</p>

        <div>
          
        </div>
      </div>

      <div className=''>

        <ProjectCard/>
        <ProjectModal/>
      </div>
    </div>
  );
}
