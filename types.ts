
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'tools';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
