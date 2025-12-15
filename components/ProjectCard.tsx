import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <ul className="mb-6 space-y-2">
            {project.features.map((feature, i) => (
                <li key={i} className="text-slate-300 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                    {feature}
                </li>
            ))}
        </ul>
        
        <div className="mt-auto">
          {project.demoUrl ? (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Spustit Demo</span>
            </a>
          ) : (
            <button 
              disabled 
              className="flex w-full items-center justify-center gap-2 py-3 px-4 bg-slate-700/50 text-slate-500 cursor-not-allowed rounded-lg text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo není dostupné</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};