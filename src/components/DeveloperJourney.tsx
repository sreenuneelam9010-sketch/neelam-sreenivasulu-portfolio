import React from 'react';
import { Milestone, ArrowDown, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const DeveloperJourney: React.FC = () => {
  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            EVOLUTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Developer Journey
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            The progression from foundational academics to advanced full stack and AI engineering.
          </p>
        </div>

        {/* Vertical Stepper Roadmap */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 -translate-x-1/2 hidden sm:block opacity-30" />

          <div className="space-y-8 relative">
            {JOURNEY_MILESTONES.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isPresent = step.type === 'present';

              return (
                <div
                  key={idx}
                  id={`journey-step-${idx}`}
                  className={`flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-8`}
                >
                  {/* Left / Right Card */}
                  <div className="w-full sm:w-1/2">
                    <div
                      className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                        isPresent
                          ? 'bg-gradient-to-br from-indigo-950/40 via-white/5 to-purple-950/40 border-indigo-500/40 shadow-xl shadow-indigo-500/10'
                          : 'bg-white/5 border-white/10 hover:border-indigo-500/30 shadow-lg'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10">
                        <span className="font-mono text-xs font-bold text-indigo-400">
                          {step.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <div className="text-xs font-semibold text-indigo-300 mt-0.5">
                        {step.subtitle}
                      </div>

                      <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Marker */}
                  <div className="hidden sm:flex relative z-10 w-10 h-10 rounded-full bg-[#050505] border-2 border-indigo-500 items-center justify-center shadow-lg shadow-indigo-500/30 flex-shrink-0">
                    <span className="text-xs font-bold text-indigo-300 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Empty Spacer on other side */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
