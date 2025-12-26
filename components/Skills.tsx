
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#020617]/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 reveal">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">My <span className="text-[#FDCBD3]">Stack</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            I specialize in the MERN stack with a focus on modern TypeScript-first development and expressive animations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="group p-10 rounded-[2.5rem] glass border border-white/5 hover:bg-white/5 hover:scale-[1.02] transition-all cursor-pointer text-center relative overflow-hidden"
            >
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FDCBD3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <i className={`${skill.icon} ${skill.color} text-5xl mb-6 block group-hover:scale-110 transition-transform`}></i>
              <h3 className="font-bold text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
