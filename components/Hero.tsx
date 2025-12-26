
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden bg-[#020617]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-[#FDCBD3]/10 rounded-full blur-[140px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-[#BDE0FE]/10 rounded-full blur-[140px] animate-blob delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="reveal space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-[#FDCBD3]/20 text-[#FDCBD3] text-xs font-bold tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDCBD3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDCBD3]"></span>
            </span>
            2024 Design Portfolio
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
            Hello, I'm <br />
            <span className="text-gradient">Pragadeesh.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            I craft <span className="text-white font-medium">modern web experiences</span> with a focus on minimalist aesthetics and high-performance code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-[#FDCBD3] text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#FDCBD3]/20 flex items-center gap-3"
            >
              See My Projects
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 glass border-white/10 hover:border-[#FDCBD3]/40 text-white font-bold rounded-2xl transition-all hover:bg-white/5 active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-[10px] uppercase font-black tracking-widest text-[#FDCBD3]">Explore</span>
        <i className="fa-solid fa-chevron-down text-sm"></i>
      </div>
    </section>
  );
};

export default Hero;
