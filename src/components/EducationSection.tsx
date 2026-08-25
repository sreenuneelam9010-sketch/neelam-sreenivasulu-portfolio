import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            ACADEMIC FOUNDATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Academic milestones and computer science specializations.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={edu.id}
              id={`education-card-${idx}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 backdrop-blur-sm shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Degree & School */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed pt-2 pl-1">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Score & Period Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 flex-shrink-0 pt-2 sm:pt-0">
                  <div className="px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.gradeType}: {edu.grade}</span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.period}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
