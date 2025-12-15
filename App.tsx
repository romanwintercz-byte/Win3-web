import React, { useState } from 'react';
import { PROJECTS, SERVICES, TECH_STACK, BRAND } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AiConsultant } from './components/AiConsultant';
import { Code2, Mail, Linkedin, ChevronDown, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl font-bold text-white">
            {BRAND.logoUrl && !logoError ? (
              <img 
                src={BRAND.logoUrl} 
                alt={BRAND.name} 
                className="h-10 w-10 rounded-lg object-contain bg-white p-1 shadow-lg shadow-blue-500/20" 
                onError={() => setLogoError(true)}
              />
            ) : (
              <Code2 className="w-8 h-8 text-blue-500" />
            )}
            <span>{BRAND.name}</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">O mně</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projekty</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Služby</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors">
              Kontaktovat
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6" id="about">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Freelance React Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Tvořím moderní aplikace <br />
            <span className="gradient-text">přesně na míru</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializuji se na efektivní firemní nástroje. Od výkazů práce po složité statistiky. 
            Využívám sílu <strong>Reactu</strong>, <strong>Supabase</strong> a <strong>Vercelu</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Moje Práce
            </a>
            <a href="#consult" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-colors">
              Nezávazná Konzultace
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Tech Stack Banner */}
      <div className="border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 group cursor-default">
                <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
                    {tech.icon}
                </div>
                <span className="font-semibold text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Section */}
      <section id="consult" className="py-24 px-6 bg-slate-900/30">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Nevíte, co přesně potřebujete?</h2>
                <p className="text-slate-400">Vyzkoušejte mého AI asistenta. Navrhne technické řešení vašeho problému.</p>
            </div>
            <AiConsultant />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vybrané Projekty</h2>
              <p className="text-slate-400 max-w-lg">
                Ukázka aplikací, které reálně pomáhají firmám a uživatelům šetřit čas a peníze.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Jak pracuji</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                   <span className="text-xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-2xl border border-blue-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Proč zvolit řešení na míru?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                Krabicová řešení vás často omezují. Já stavím aplikace přesně podle vašich procesů, 
                takže se software přizpůsobí vám, ne naopak.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Žádné měsíční poplatky za licence</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Škálovatelnost</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Plná kontrola nad daty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800 rounded-3xl p-8 md:p-16 border border-slate-700 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Máte nápad na projekt?</h2>
             <p className="text-xl text-slate-400 mb-10 relative z-10">
               Pojďme si popovídat o tom, jak mohu pomoci vašemu podnikání růst pomocí moderních technologií.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <a href="mailto:kontakt@example.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25">
                  <Mail className="w-5 h-5" />
                  Napsat e-mail
                </a>
                <div className="flex gap-4 justify-center items-center">
                    <a href="#" className="p-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors border border-slate-600">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {currentYear} {BRAND.name}. Vytvořeno v React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;