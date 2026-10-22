import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid">
      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#F28AB2]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/[0.015] blur-[80px] pointer-events-none rounded-full" />

      {/* Abstract geometric vector & subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg
          className="w-full max-w-4xl h-auto"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#292929" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#F28AB2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#292929" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="250" r="180" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="400" cy="250" r="280" stroke="#292929" strokeWidth="0.8" strokeDasharray="2 8" />
          <line x1="120" y1="250" x2="680" y2="250" stroke="#292929" strokeWidth="0.7" strokeDasharray="3 3" />
          <line x1="400" y1="70" x2="400" y2="430" stroke="#292929" strokeWidth="0.7" strokeDasharray="3 3" />
          {/* Subtle node coordinates */}
          <rect x="396" y="66" width="8" height="8" fill="#F28AB2" fillOpacity="0.6" rx="2" />
          <rect x="396" y="426" width="8" height="8" fill="#F28AB2" fillOpacity="0.6" rx="2" />
          <rect x="116" y="246" width="8" height="8" fill="#F28AB2" fillOpacity="0.6" rx="2" />
          <rect x="676" y="246" width="8" height="8" fill="#F28AB2" fillOpacity="0.6" rx="2" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28AB2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28AB2]"></span>
          </span>
          <span className="text-xs font-mono text-[#A1A1AA] tracking-wide">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-xs sm:text-sm font-mono tracking-widest text-[#F28AB2] uppercase mb-4"
        >
          {PERSONAL_INFO.roleEyebrow}
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] max-w-3xl mx-auto mb-6"
        >
          {PERSONAL_INFO.headlinePrefix}
          <span className="text-[#F28AB2] relative inline-block">
            {PERSONAL_INFO.headlineHighlight}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#F28AB2]/0 via-[#F28AB2]/60 to-[#F28AB2]/0"></span>
          </span>
          {PERSONAL_INFO.headlineSuffix}
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          {PERSONAL_INFO.introduction}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group px-6 py-3 rounded-lg bg-[#F5F5F5] text-[#080808] font-medium text-sm hover:bg-[#F28AB2] transition-all duration-200 flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-lg border border-[#292929] bg-[#111111] text-[#F5F5F5] font-medium text-sm hover:border-[#F28AB2] hover:text-[#F28AB2] transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
          >
            <Mail className="w-4 h-4 text-[#F28AB2]" />
            <span>Let's Connect</span>
          </button>

          <a
            href="https://github.com/athiraarun06"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-[#292929] bg-[#111111]/70 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] font-medium text-sm transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA]" />
          </a>
        </motion.div>

        {/* Technical quick spec indicator strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-[#292929]/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto"
        >
          <div className="p-3 rounded-lg bg-[#111111]/40 border border-[#292929]/50">
            <div className="text-[11px] font-mono text-[#F28AB2]">DEGREE</div>
            <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">B.Tech CSE (AI & ML)</div>
            <div className="text-[10px] text-[#A1A1AA]">Karunya Institute</div>
          </div>
          <div className="p-3 rounded-lg bg-[#111111]/40 border border-[#292929]/50">
            <div className="text-[11px] font-mono text-[#F28AB2]">CORE SPECIALIZATION</div>
            <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">AI, NLP & Vision</div>
            <div className="text-[10px] text-[#A1A1AA]">Deep Learning & LLMs</div>
          </div>
          <div className="p-3 rounded-lg bg-[#111111]/40 border border-[#292929]/50">
            <div className="text-[11px] font-mono text-[#F28AB2]">EXPERIENCE</div>
            <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">Internship Roles</div>
            <div className="text-[10px] text-[#A1A1AA]">AI, ML & ERP Tech</div>
          </div>
          <div className="p-3 rounded-lg bg-[#111111]/40 border border-[#292929]/50">
            <div className="text-[11px] font-mono text-[#F28AB2]">LOCATION</div>
            <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">India</div>
            <div className="text-[10px] text-[#A1A1AA]">Open to Hybrid / Remote</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
