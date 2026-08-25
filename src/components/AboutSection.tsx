import React from 'react';
import {
  Code,
  Cpu,
  Layers,
  Lightbulb,
  GraduationCap,
  Sparkles,
  CheckCircle,
  MapPin,
  Mail,
  ShieldCheck,
  Binary
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Software Development",
      description: "Writing maintainable, clean code in Java, Python, and modern web frameworks.",
      icon: <Code className="w-4 h-4 text-indigo-400" />,
      color: "border-white/10 bg-white/5 hover:border-indigo-500/30"
    },
    {
      title: "Machine Learning",
      description: "Data exploration, feature engineering, and training Scikit-Learn predictive models.",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      color: "border-white/10 bg-white/5 hover:border-purple-500/30"
    },
    {
      title: "Full Stack Development",
      description: "Connecting responsive frontend interfaces with secure relational databases.",
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      color: "border-white/10 bg-white/5 hover:border-indigo-500/30"
    },
    {
      title: "Problem Solving",
      description: "Structured analytical approaches to complex algorithmic and system design challenges.",
      icon: <Lightbulb className="w-4 h-4 text-purple-400" />,
      color: "border-white/10 bg-white/5 hover:border-indigo-500/30"
    }
  ];

  return (
    <section id="about" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            BACKGROUND & PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            {PERSONAL_INFO.bioHeadline}
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Bio & Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Passionate about Engineering & Intelligent Systems</span>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {PERSONAL_INFO.bioIntro}
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {PERSONAL_INFO.bioPhilosophy}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-gray-300">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Object-Oriented Design in Java & C++</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Python Data Analysis & ML Pipelines</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Relational Database Management (MySQL)</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Cryptographic Security & AES Encryption</span>
                </div>
              </div>
            </div>

            {/* Academic Highlight Pill Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white">B.Tech in Computer Science & Engineering (AIML)</div>
                  <div className="text-[11px] text-gray-400">Kalasalingam Academy of Research and Education • CGPA: 8.38</div>
                </div>
              </div>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-md bg-white/10 text-[10px] font-mono text-indigo-300">
                2021 – 2025
              </span>
            </div>

          </div>

          {/* Right Column: Developer Profile Card & 4 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Developer Profile Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-extrabold tracking-tighter text-white">
                    NS<span className="text-indigo-500">.</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Neelam Sreenivasulu
                    </h4>
                    <p className="text-xs text-gray-400 font-mono">
                      Software Developer & ML
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Verified
                </span>
              </div>

              {/* 4 Pillars Interactive List */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                  Core Competencies
                </span>

                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border ${pillar.color} transition-all duration-200 hover:translate-x-1`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {pillar.icon}
                      <span className="text-xs font-semibold text-white">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Profile Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>India</span>
                </span>
                <span className="font-mono text-[11px] text-indigo-400">
                  sreenuneelam9010@gmail.com
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
