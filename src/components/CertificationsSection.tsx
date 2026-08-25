import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Trophy, Sparkles, FileBadge } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'Professional Certification':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-purple-400" />;
      case 'Internship':
        return <Award className="w-5 h-5 text-indigo-400" />;
      default:
        return <FileBadge className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="certifications" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            CREDENTIALS & HONORS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Verified technical qualifications and competitive recognitions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.id}
              id={`cert-card-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 backdrop-blur-sm shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/20 transition-colors">
                      {getBadgeIcon(cert.type)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block">
                        {cert.type}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {cert.date && (
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400">
                      {cert.date}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Skills gained */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Credential</span>
                </span>
                <span>AUTHENTIC</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
