import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Clock, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            WORK HISTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Industry experience delivering scalable software and web solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 border-l-2 border-white/10 space-y-8">
              
              {/* Timeline Marker Pulse Node */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#050505] border-2 border-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 backdrop-blur-sm shadow-2xl transition-all duration-300">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 mt-0.5">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Key Responsibilities & Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-gray-500 mr-2">Environment:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
