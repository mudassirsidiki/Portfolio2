import React from "react";
import { Github, AtSign, Code2, ExternalLink } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import SkillSection from "./components/SkillSection";
import Dots from "./components/Dots";
import Squares from "./components/Squares";
import Rectangles from "./components/Rectangles";
import TypewriterEffect from "./components/TypewriterEffect";
import ContactSection from "./components/ContactSection";
import Landing from "./components/Landing";
import { projects, projects1, projects2, projects3, projects4, projects5, skills, skills1, skills2 } from "./components/data";
import BackToTop from "./BackToTop";

function App() {
  const navLinks = ["#home", "#works", "#about-me", "#contacts"];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden ">


    <Landing/>

    


      {/* ************* */}
      {/* Quote Section */}
      {/* ************* */}


      <section className="py-[5%]  px-6 relative">
        <Squares className="absolute left-12 top-12 opacity-60" />
        <Rectangles className="absolute right-0 bottom-0" />
        <div className="max-w-2xl mx-auto">
          <blockquote className="border-2 border-gray-500 p-6 rounded-lg">
            <p className="text-[21px] font-bold text-red-600 italic cursor-pointer hover:text-white">
              "The first five days after the weekend are always the hardest."
            </p>
            <footer className="text-right text-gray-400 mt-4 text-[18px] font-bold">
              - Anonymous
            </footer>
          </blockquote>
        </div>
      </section>

      

      

      <BackToTop/>



      {/* **************** */}
      {/* Projects Section */}
      {/* **************** */}


      <section className="py-6 px-6 relative" id="projects">
        <Dots className="absolute right-12 top-24 opacity-60" />
        <Squares variant="dotted" className="absolute left-24 bottom-12" />




        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-extrabold"><span className="text-red-600">#</span>PROJECTS</h2>
          </div>
          <div className="text-white mb-4 text-[20px] font-extrabold ">FRONTEND PROJECTS - REACT</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
        <a 
          href="https://github.com/mudassirsidiki?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline text-lg font-semibold"
        >
          View More Projects →
        </a>
       </div>





        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8"></div>
          <div className="text-white mb-4 text-[20px] font-extrabold ">FRONTEND PROJECTS - TAILWINDCSS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects1.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
        <a 
          href="https://github.com/mudassirsidiki?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline text-lg font-semibold"
        >
          View More Projects →
        </a>
       </div>





        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8"></div>
          <div className="text-white mb-4 text-[20px] font-extrabold ">FRONTEND PROJECTS - HTML , CSS AND JAVASCRIPT</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects4.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
        <a 
          href="https://github.com/mudassirsidiki?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline text-lg font-semibold"
        >
          View More Projects →
        </a>
       </div>






        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8"></div>
          <div className="text-white mb-4 text-[20px] font-extrabold ">DATA ANALYTICS PROJECTS - EXCEL , POWER BI , SQL</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects2.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
        <a 
          href="https://github.com/mudassirsidiki?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline text-lg font-semibold"
        >
          View More Projects →
        </a>
       </div>






        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8"></div>
          <div className="text-white mb-4 text-[20px] font-extrabold ">BUSINESS ANALYTICS PROJECTS - EXCEL , POWER BI , SQL</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects3.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
        <a 
          href="https://github.com/mudassirsidiki?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline text-lg font-semibold"
        >
          View More Projects →
        </a>
       </div>





        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8"></div>
          <div className="text-white mb-4 text-[20px] font-extrabold ">BUSINESS ANALYTICS PROJECTS - SQL & PYTHON</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects5.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
        <a 
          href="https://github.com/mudassirsidiki?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline text-lg font-semibold"
        >
          View More Projects →
        </a>
       </div>




      </section>



      {/* ************** */}
      {/* Skills Section */}
      {/* ************** */}


      <section className="pt-12 py-3 px-6 relative" id="skills-set">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8 font-extrabold">
            <span className="text-red-600">#</span>SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 px-6 relative" id="skills1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills1).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 px-6 relative" id="skills2">

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills2).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-3 px-6 relative" id="skills3">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills3).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      {/* *************** */}
      {/* Contact Section */}
      {/* *************** */}

      <ContactSection/>




      {/* ****** */}
      {/* Footer */}
      {/* ****** */}


      <footer className="border-t border-gray-800 py-6 px-6 mt-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="text-[#b49cff]" />
              <span className="font-mono">MADE_BY_SATURO_GOJO</span>
            </div>
            <p className="text-sm text-gray-400">THE HONORED ONE</p>
          </div>
          {/* <div className="text-sm text-gray-400">
            © Copyright 2024. Made by Gojo
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;


