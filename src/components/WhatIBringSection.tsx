import React from 'react';
import { Layers, BrainCircuit, Lightbulb, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { WHAT_I_BRING } from '../data/portfolioData';

export const WhatIBringSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-300" />;
    }
  };

  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            VALUE PROPOSITION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Bring
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Core strengths, engineering discipline, and collaborative technical values.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_BRING.map((item, idx) => (
            <div
              key={item.id}
              id={`what-i-bring-card-${idx}`}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 backdrop-blur-sm shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/20 transition-colors">
                    {getPillarIcon(item.icon)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-300 mt-0.5">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1 text-indigo-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Production Focus</span>
                </span>
                <span>0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
