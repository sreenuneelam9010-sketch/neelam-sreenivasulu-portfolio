import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  Terminal as TerminalIcon,
  Cpu,
  ShieldCheck,
  Database,
  Sparkles,
  Play,
  CheckCircle2,
  Code,
  Network
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'terminal' | 'neural' | 'code' | 'architecture'>('terminal');
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const terminalLogs = [
    { command: '$ neelam --status', output: '✔ Software Developer initialized. Ready for production.' },
    { command: '$ ml.evaluate_model(RandomForest, SVC)', output: '✔ Accuracy: 94.8% | Precision & Recall optimized.' },
    { command: '$ secure_db.apply_encryption(AES_256)', output: '✔ Encrypted patient records with SHA-1 key verification.' },
    { command: '$ git log --oneline -n 1', output: 'commit 7b4e9f: feat: Enterprise Ticket Booking REST backend' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [terminalLogs.length]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

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
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Main Name & Title Display */}
            <div className="mb-6 space-y-2">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
                NEELAM<br />SREENIVASULU
              </h1>
              <h2 className="text-2xl font-light text-indigo-400">
                Software Developer
              </h2>
            </div>

            {/* Animated Subtitle / Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-indigo-500/15 border border-indigo-500/20 text-indigo-300 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-indigo-400" />
                Full Stack Development
              </span>
              <span className="text-white/20 font-bold">•</span>
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-purple-500/15 border border-purple-500/20 text-purple-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                Machine Learning
              </span>
              <span className="text-white/20 font-bold">•</span>
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                Intelligent Applications
              </span>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Building practical software solutions with a passion for full stack development, machine learning, and intelligent applications. Specialized in turning complex problems into elegant code.
            </p>

            {/* CTA Buttons & Connect Link */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 cursor-pointer active:scale-95"
                id="hero-explore-work-btn"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                id="hero-download-resume-btn"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Verified Social Profiles & Direct Contact Badges */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
                id="hero-github-link"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
                id="hero-linkedin-link"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                title="Click to copy email address"
                id="hero-email-copy-btn"
              >
                <Mail className="w-4 h-4" />
                <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-End Futuristic Developer & AI Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg">
              
              {/* Outer decorative glowing halo */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none"></div>

              {/* Main Visual Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden shadow-2xl">
                
                {/* Header bar of visual */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>

                  {/* Visual view toggles */}
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveVisualTab('terminal')}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                        activeVisualTab === 'terminal' ? 'bg-indigo-600 text-white font-semibold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      CLI
                    </button>
                    <button
                      onClick={() => setActiveVisualTab('neural')}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                        activeVisualTab === 'neural' ? 'bg-indigo-600 text-white font-semibold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      AI/ML
                    </button>
                    <button
                      onClick={() => setActiveVisualTab('code')}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                        activeVisualTab === 'code' ? 'bg-indigo-600 text-white font-semibold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Code
                    </button>
                  </div>
                </div>

                {/* Visual Viewport Content */}
                <div className="min-h-[260px] flex flex-col justify-between">
                  
                  {activeVisualTab === 'terminal' && (
                    <div className="space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between text-[11px] text-gray-400">
                        <span className="flex items-center gap-1.5 text-indigo-400">
                          <TerminalIcon className="w-3.5 h-3.5" />
                          <span>interactive-session</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          LIVE_ENGINE
                        </span>
                      </div>

                      {/* Static and animated terminal outputs */}
                      <div className="space-y-2.5 text-gray-300">
                        <div className="text-gray-500 text-[11px]"># Initializing Developer Matrix: FullStack + ML</div>
                        <div className="text-indigo-400">$ stack --inspect</div>
                        <div className="text-gray-400 pl-3">
                          Languages: <span className="text-white">Java, Python, C, C++, JavaScript</span><br />
                          Frameworks: <span className="text-white">Flask, MySQL, Scikit-Learn, Bootstrap</span>
                        </div>

                        <div className="pt-1">
                          <div className="text-indigo-300 font-medium">
                            {terminalLogs[terminalLineIndex].command}
                          </div>
                          <div className="text-emerald-400 text-[11px] pl-3 pt-0.5">
                            {terminalLogs[terminalLineIndex].output}
                          </div>
                        </div>
                      </div>

                      {/* Terminal blinking cursor prompt */}
                      <div className="pt-2 flex items-center gap-2 text-gray-400 text-xs">
                        <span className="text-indigo-400">➜</span>
                        <span className="text-gray-500">~/workspace/neelam-portfolio</span>
                        <span className="w-2 h-4 bg-indigo-400 animate-pulse" />
                      </div>
                    </div>
                  )}

                  {activeVisualTab === 'neural' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                        <span className="text-indigo-300 font-mono flex items-center gap-1.5">
                          <Network className="w-3.5 h-3.5" />
                          <span>ML Pipeline Architecture</span>
                        </span>
                        <span className="text-[10px] font-mono text-purple-300">RandomForest + SVC</span>
                      </div>

                      {/* Neural network / Pipeline interactive mockup */}
                      <div className="grid grid-cols-3 gap-2 text-center py-2">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center">
                          <span className="text-[10px] font-mono text-gray-400">Input Data</span>
                          <span className="text-xs font-semibold text-white mt-1">Telecom / Health</span>
                          <span className="text-[9px] text-gray-500 mt-1">Pandas & NumPy</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col items-center">
                          <span className="text-[10px] font-mono text-indigo-300">Feature Eng.</span>
                          <span className="text-xs font-semibold text-white mt-1">StandardScaler</span>
                          <span className="text-[9px] text-indigo-400 mt-1">Imputation & Enc</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 flex flex-col items-center">
                          <span className="text-[10px] font-mono text-purple-300">Classifier</span>
                          <span className="text-xs font-semibold text-white mt-1">Predictive Model</span>
                          <span className="text-[9px] text-purple-400 mt-1">Confusion Matrix</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono space-y-1">
                        <div className="flex justify-between text-gray-400">
                          <span>Accuracy Score:</span>
                          <span className="text-emerald-400 font-bold">94.8%</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                          <span>Security Protocol:</span>
                          <span className="text-indigo-400 font-bold">AES-256 / SHA-1</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeVisualTab === 'code' && (
                    <div className="font-mono text-[11px] leading-relaxed text-indigo-300 space-y-1">
                      <div><span className="text-gray-500">1</span> <span className="text-purple-400">class</span> <span className="text-white">Developer</span> {'{'}</div>
                      <div><span className="text-gray-500">2</span>   constructor() {'{'}</div>
                      <div><span className="text-gray-500">3</span>     <span className="text-indigo-400">this</span>.name = <span className="text-emerald-400">'Neelam Sreenivasulu'</span>;</div>
                      <div><span className="text-gray-500">4</span>     <span className="text-indigo-400">this</span>.focus = [<span className="text-emerald-400">'FullStack'</span>, <span className="text-emerald-400">'AI/ML'</span>];</div>
                      <div><span className="text-gray-500">5</span>   {'}'}</div>
                      <div><span className="text-gray-500">6</span>   <span className="text-indigo-400">async</span> buildSolutions(data) {'{'}</div>
                      <div><span className="text-gray-500">7</span>     <span className="text-purple-400">return</span> <span className="text-indigo-400">await</span> MLModel.predict(data);</div>
                      <div><span className="text-gray-500">8</span>   {'}'}</div>
                      <div><span className="text-gray-500">9</span> {'}'}</div>
                    </div>
                  )}

                </div>

                {/* Quick 2-column cards inside visual */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                    <div className="text-gray-500 text-[10px] uppercase mb-1">Experience</div>
                    <div className="text-white font-medium text-xs">3mo Internship</div>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                    <div className="text-gray-500 text-[10px] uppercase mb-1">Education</div>
                    <div className="text-white font-medium text-xs">B.Tech AIML (8.38 CGPA)</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
