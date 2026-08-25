import React from 'react';
import { FileText, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden backdrop-blur-sm">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest">
              CAREER & COLLABORATION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's Build Something Meaningful
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Interested in my engineering background or looking to collaborate? Take a look at my verified credentials or get in touch.
            </p>

            {/* Verification checklist pills */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-300 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>B.Tech CSE-AIML (8.38 CGPA)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full Stack & Machine Learning</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Industry Internship Completed</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-lg font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                id="resume-section-download-btn"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3.5 rounded-lg font-semibold text-sm text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                id="resume-section-contact-btn"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
