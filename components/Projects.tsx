
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-cyan-400 font-mono">03.</span> Featured Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl">
            A selection of projects I've worked on recently. Each project is built to solve a specific problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col glass rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.githubUrl} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors">
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                  <a href={project.liveUrl} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors">
                    <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 rounded border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
