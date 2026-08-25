import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Database,
  Cpu,
  Wrench,
  Sparkles,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            SKILLS & TECHNOLOGIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Core technologies and frameworks I use to build robust software.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:bg-white/10'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={`skill-category-${category.id}`}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/20 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 line-clamp-1 font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges & Description Grid */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.07] transition-all group/item"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white group-hover/item:text-indigo-300 transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-gray-400 font-light mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>VERIFIED STACK</span>
                <span className="text-indigo-400">{category.skills.length} Competencies</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
