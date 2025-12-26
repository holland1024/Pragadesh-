
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Let's build something <span className="text-cyan-400">extraordinary</span> together.</h2>
          <p className="text-slate-400 text-lg">
            I'm currently looking for new opportunities as a web developer. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="flex justify-center gap-6 pt-4">
            <a href={PERSONAL_INFO.github} className="group flex items-center justify-center w-12 h-12 glass rounded-full hover:bg-white/10 transition-all border border-slate-800">
              <i className="fa-brands fa-github text-xl text-slate-400 group-hover:text-white transition-colors"></i>
            </a>
            <a href={PERSONAL_INFO.linkedin} className="group flex items-center justify-center w-12 h-12 glass rounded-full hover:bg-white/10 transition-all border border-slate-800">
              <i className="fa-brands fa-linkedin text-xl text-slate-400 group-hover:text-cyan-400 transition-colors"></i>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center justify-center w-12 h-12 glass rounded-full hover:bg-white/10 transition-all border border-slate-800">
              <i className="fa-solid fa-envelope text-xl text-slate-400 group-hover:text-indigo-400 transition-colors"></i>
            </a>
          </div>

          <div className="pt-12">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl font-bold text-white shadow-xl shadow-cyan-900/20 hover:scale-105 transition-transform"
            >
              Get In Touch
              <i className="fa-solid fa-paper-plane ml-2"></i>
            </a>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with passion & React.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
