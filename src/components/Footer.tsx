import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center font-display text-[10px] font-bold text-white shadow-md shadow-indigo-500/30">
                {PERSONAL_INFO.monogram}
              </div>
              <h3 className="font-bold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
            </div>
            <p className="text-xs font-mono text-gray-400">
              Software Developer | Full Stack | AI/ML
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-white transition-all shadow-sm"
              title="GitHub Profile"
              id="footer-github-link"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-indigo-400 transition-all shadow-sm"
              title="LinkedIn Profile"
              id="footer-linkedin-link"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-purple-400 transition-all shadow-sm"
              title="Send Email"
              id="footer-email-link"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-white transition-all shadow-sm cursor-pointer ml-2"
              title="Back to Top"
              id="footer-back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 text-center sm:text-left">
          <div>
            © 2026 Neelam Sreenivasulu. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
            <span>Crafted with React, Tailwind CSS & High-Performance TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
