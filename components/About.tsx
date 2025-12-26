
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="relative group reveal">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#FDCBD3]/30 via-[#BDE0FE]/10 to-transparent rounded-[4rem] blur-[80px]"></div>
            
            <div className="relative z-10 animate-float">
              <div className="bg-[#020617] p-3 rounded-[3.5rem] glass border border-white/10 overflow-hidden shadow-2xl group-hover:rotate-1 transition-transform duration-1000">
                <img 
                  src={PERSONAL_INFO.photo} 
                  alt={PERSONAL_INFO.name} 
                  className="rounded-[2.8rem] w-full aspect-[4/5] object-cover grayscale-[0.1] contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800';
                  }}
                />
                
                {/* Hoodie Branding Label */}
                <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-2xl px-6 py-2.5 rounded-2xl border border-white/20 shadow-2xl">
                  <span className="text-white font-black tracking-tight text-xs uppercase italic">Anyway.</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-[2.5rem] border-[#FDCBD3]/30 shadow-2xl z-20 backdrop-blur-3xl">
                <p className="text-[#FDCBD3] font-mono text-3xl font-black leading-none">2024</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-2">B.E Graduate</p>
              </div>
            </div>
          </div>

          <div className="space-y-12 reveal">
            <div className="space-y-6">
              <span className="text-[#FDCBD3] font-mono text-sm font-bold tracking-[0.3em] uppercase block">Background</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                Engineering with <br />
                <span className="text-gradient">Pure Intent.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-400 text-xl font-light leading-relaxed">
              <p>{PERSONAL_INFO.about}</p>
              <p>
                I believe that good design is invisible. My goal is to build digital tools that feel natural to use while maintaining a unique aesthetic identity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-white font-black text-2xl">Frontend</p>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-[#FDCBD3] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white font-black text-2xl">Backend</p>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-[#BDE0FE] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
