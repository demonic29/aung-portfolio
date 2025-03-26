
import 'animate.css'

// components
import AboutSection from "../app/about/AboutSection";
import ProjectSection from "./home/ProjectSection";
import CarouselSection from "./projects/components/CarouselSection";
// import AboutMe from "@/app/components/AboutMe";


// current using
import NavBar from "@/app/components/NavBar";
import MainText from "@/app/components/MainText";
import ProjectsCarousel from "./home/ProjectsCarousel";
import Skills from "./home/Skills";
import Contact from "./components/Contact";
import Footer from "./home/Footer";
import Projects from './projects/page';

import AboutMe from './about/AboutMe';


export default function Home() {
  return (
    <main>
      <div className=''>

        <MainText/>
        {/* <Skills/> */}

        {/* <Projects/> */}
        {/* <ProjectsCarousel/> */}
        {/* <CarouselSection/> */}
        <Projects/>
        <AboutMe/>
        {/* <AboutSection/> */}
      

        {/* <ProjectSection/> */}
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
