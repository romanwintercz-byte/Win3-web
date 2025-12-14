import type { Project, Service } from './types';
import { Layout, Database, Server, Smartphone, BarChart3, Clock, Map, Target } from 'lucide-react';
import React from 'react';

export const BRAND = {
  name: 'DevPortfolio',
  logoUrl: '/logo.svg',
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