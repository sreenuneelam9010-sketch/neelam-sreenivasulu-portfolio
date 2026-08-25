import React from 'react';
import { GraduationCap, FolderCode, Briefcase, Calendar, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  const statIcons = [
    <GraduationCap className="w-5 h-5 text-indigo-400" />,
    <FolderCode className="w-5 h-5 text-purple-400" />,
    <Briefcase className="w-5 h-5 text-indigo-300" />,
    <Calendar className="w-5 h-5 text-indigo-400" />,
  ];

  return (
    <section className="relative py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="relative group p-6 rounded-2xl bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/20 transition-colors">
                  {statIcons[idx]}
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  VERIFIED
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-all">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-300 mt-1.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                  {stat.helper}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

