import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GitHubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4" />;
      case 'instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'leetcode':
        return <LeetCodeIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-[#292929] bg-[#060606] py-12 px-4 sm:px-6 lg:px-8 relative text-xs text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#111111] border border-[#292929] flex items-center justify-center font-mono font-bold text-[10px] text-[#F28AB2]">
              AA
            </div>
            <span className="font-medium text-[#F5F5F5]">
              Designed and built by {PERSONAL_INFO.name}.
            </span>
          </div>
          <span className="hidden sm:inline text-[#555]">·</span>
          <span className="font-mono text-[#F28AB2] text-[11px]">
            Always learning. Always building.
          </span>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111111] border border-[#292929] text-[#A1A1AA] hover:text-[#F28AB2] hover:border-[#F28AB2]/50 transition-colors"
              aria-label={link.name}
              title={link.name}
            >
              {getSocialIcon(link.type)}
            </a>
          ))}
        </div>

        {/* Right: Year & Back-to-Top Button */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[#777]">
            © {currentYear}
          </span>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#292929] text-xs font-mono text-[#A1A1AA] hover:text-[#F28AB2] hover:border-[#F28AB2]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
