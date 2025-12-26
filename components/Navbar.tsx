
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FDCBD3] to-[#BDE0FE] flex items-center justify-center">
            <span className="text-black font-black text-xl leading-none">P</span>
          </div>
          <span className="text-white font-bold tracking-tighter text-xl hidden sm:block">Pragadeesh.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-sm font-bold text-slate-400 hover:text-[#FDCBD3] transition-colors">Home</a>
          <a href="#about" className="text-sm font-bold text-slate-400 hover:text-[#FDCBD3] transition-colors">About</a>
          <a href="#skills" className="text-sm font-bold text-slate-400 hover:text-[#FDCBD3] transition-colors">Skills</a>
          <a href="#projects" className="text-sm font-bold text-slate-400 hover:text-[#FDCBD3] transition-colors">Work</a>
          <a href="#contact" className="px-6 py-2 bg-white/5 hover:bg-[#FDCBD3]/10 text-white rounded-full border border-white/10 hover:border-[#FDCBD3]/30 transition-all text-sm font-bold">Get in Touch</a>
        </div>
        
        <button className="md:hidden text-white p-2">
          <i className="fa-solid fa-bars-staggered text-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
