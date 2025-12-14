import { Project, Service } from './types';
import { Layout, Database, Server, Smartphone, BarChart3, Clock, Map, Target } from 'lucide-react';
import React from 'react';

export const BRAND = {
  name: 'DevPortfolio',
  // Pro jistotu jsem logo vložil přímo do kódu (Data URI), aby se zobrazilo okamžitě.
  // Až budete mít vlastní soubor v "public" složce, změňte tento řádek na: logoUrl: '/moje-logo.png'
  logoUrl: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22none%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22%232563eb%22%20%2F%3E%3Cpath%20d%3D%22M30%2035%20L50%2075%20L70%2035%22%20stroke%3D%22white%22%20stroke-width%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2225%22%20r%3D%228%22%20fill%3D%22white%22%20%2F%3E%3C%2Fsvg%3E',
};

export const PROJECTS: Project[] = [
  {
    id: 'employees',
    title: 'Výkazy Práce Zaměstnanců',
    description: 'Komplexní systém pro malou firmu umožňující efektivní evidenci docházky a sledování odpracovaných hodin na projektech.',
    tags: ['React', 'Supabase', 'Vercel', 'Auth'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    features: ['Reálný čas', 'Export do PDF/Excel', 'Role zaměstnanec/admin']
  },
  {
    id: 'mileage',
    title: 'Elektronická Kniha Jízd',
    description: 'Moderní aplikace pro správu vozového parku a automatizaci záznamů o služebních cestách.',
    tags: ['Google Maps API', 'Mobile First', 'PWA'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    features: ['GPS tracking', 'Výpočet náhrad', 'Statistiky spotřeby']
  },
  {
    id: 'carom',
    title: 'Karambol Počítadlo & Statistiky',
    description: 'Digitální společník pro hráče kulečníku. Počítá skóre a analyzuje úspěšnost a průměry hráčů v reálném čase.',
    tags: ['Data Viz', 'Recharts', 'TypeScript'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    features: ['Historie zápasů', 'Grafy výkonnosti', 'Turnajový mód']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'custom',
    title: 'Vývoj na Míru',
    description: 'Od návrhu architektury po nasazení. Stavím aplikace, které řeší konkrétní problémy vašeho podnikání.',
    icon: 'Layout'
  },
  {
    id: 'backend',
    title: 'Backend & Databáze',
    description: 'Bezpečné a škálovatelné řešení postavené na Supabase. Vaše data jsou v bezpečí a vždy dostupná.',
    icon: 'Database'
  },
  {
    id: 'deployment',
    title: 'Hosting & DevOps',
    description: 'Rychlé nasazení pomocí Vercel. CI/CD procesy, které zajistí, že vaše aplikace běží bez výpadků.',
    icon: 'Server'
  }
];

export const TECH_STACK = [
  { name: 'React', icon: <Layout className="w-6 h-6" /> },
  { name: 'TypeScript', icon: <Target className="w-6 h-6" /> },
  { name: 'Supabase', icon: <Database className="w-6 h-6" /> },
  { name: 'Vercel', icon: <Server className="w-6 h-6" /> },
  { name: 'Tailwind', icon: <Smartphone className="w-6 h-6" /> },
];