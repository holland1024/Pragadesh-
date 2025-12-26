
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Pragadeeshwaran",
  title: "Frontend Developer",
  role: "Creative Web Architect & UI Specialist",
  location: "India",
  email: "pragadeeshwaran.work@gmail.com",
  linkedin: "https://linkedin.com/in/pragadeeshwaran",
  github: "https://github.com/pragadeeshwaran",
  // IMPORTANT: Save your uploaded photo as 'profile.jpg' in the project folder
  photo: "./profile.jpg", 
  about: "I'm a fresher web developer with a deep passion for clean, soft-toned aesthetics. Inspired by the 'Anyway' spirit—staying creative and moving forward no matter the challenge. I build high-performance web applications that look as good as they run.",
};

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'fa-brands fa-react', color: 'text-[#FDCBD3]', category: 'frontend' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', color: 'text-[#BDE0FE]', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: 'text-[#FDCBD3]', category: 'frontend' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-indigo-400', category: 'backend' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'text-yellow-200', category: 'frontend' },
  { name: 'Next.js', icon: 'fa-solid fa-bolt', color: 'text-white', category: 'frontend' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: 'text-orange-400', category: 'tools' },
  { name: 'Figma', icon: 'fa-brands fa-figma', color: 'text-purple-300', category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Anyway Dashboard",
    description: "A minimalist project management tool using Peach & Sky Blue glassmorphism.",
    tags: ["React", "Tailwind", "Vite"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Morning Sky UI",
    description: "A library of translucent React components with a focus on soft color palettes.",
    tags: ["TypeScript", "Radix UI"],
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Bot",
    description: "AI-driven assistant that helps recruiters find relevant skills and project data.",
    tags: ["Gemini API", "Node.js"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    githubUrl: "#",
    liveUrl: "#"
  }
];
