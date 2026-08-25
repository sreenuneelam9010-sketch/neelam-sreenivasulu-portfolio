import React, { useState, useEffect } from 'react';
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  FolderGit2,
  Sparkles,
  Code2,
  RefreshCw
} from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';
import { GitHubRepo } from '../types';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(GITHUB_REPOS);
  const [loading, setLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  useEffect(() => {
    // Attempt dynamic fetch from GitHub API for latest stars / details
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/sreenuneelam9010-sketch/repos?sort=updated&per_page=10');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Map known repositories and supplement with fetched API data
            const mappedRepos = GITHUB_REPOS.map((staticRepo) => {
              const matched = data.find((r: any) => r.name.toLowerCase() === staticRepo.name.toLowerCase());
              if (matched) {
                return {
                  name: matched.name,
                  description: matched.description || staticRepo.description,
                  language: matched.language || staticRepo.language,
                  url: matched.html_url || staticRepo.url,
                  stars: matched.stargazers_count ?? staticRepo.stars,
                  forks: matched.forks_count ?? staticRepo.forks,
                  updatedAt: matched.updated_at ? new Date(matched.updated_at).toLocaleDateString() : undefined,
                  topics: matched.topics && matched.topics.length > 0 ? matched.topics : staticRepo.topics
                };
              }
              return staticRepo;
            });
            setRepos(mappedRepos);
            setLastSynced(new Date().toLocaleTimeString());
          }
        }
      } catch (err) {
        // Graceful fallback to verified static repo data
        console.warn('GitHub API rate limit or offline, using verified repository manifest.');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'python':
        return 'bg-blue-500';
      case 'javascript':
        return 'bg-yellow-400';
      case 'java':
        return 'bg-amber-600';
      case 'html':
        return 'bg-orange-500';
      case 'css':
        return 'bg-indigo-400';
      default:
        return 'bg-cyan-400';
    }
  };

  return (
    <section id="github" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            OPEN SOURCE & REPOSITORIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            GitHub
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Code repositories, systems experiments, and active implementations.
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {repos.map((repo, idx) => (
            <div
              key={idx}
              id={`github-repo-card-${idx}`}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 backdrop-blur-sm shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Card Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {repo.name}
                      </h3>
                      <span className="text-[10px] font-mono text-gray-500">
                        Public Repository
                      </span>
                    </div>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors"
                    title="Open on GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {repo.description}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-gray-400"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}

              </div>

              {/* Card Footer Info & CTA */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                
                {/* Language & Stats */}
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                    <span className="text-gray-300 font-semibold">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-gray-400" />
                    <span>{repo.forks}</span>
                  </div>
                </div>

                {/* Action */}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all flex items-center gap-1.5"
                  id={`view-repo-btn-${idx}`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Banner CTA */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Discover More on GitHub @sreenuneelam9010-sketch
              </h4>
              <p className="text-xs text-gray-400">
                Explore algorithmic solutions, web experiments, and ongoing coding projects.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 transition-all flex items-center gap-2 whitespace-nowrap"
            id="explore-all-repos-btn"
          >
            <span>Explore All Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
