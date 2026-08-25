import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle,
  Shield,
  Layers,
  Database,
  Cpu,
  Lock,
  Boxes,
  Users,
  ShoppingBag,
  Trees,
  Activity,
  ArrowRight,
  Sparkles,
  Server,
  Monitor,
  Calendar,
  AlertTriangle,
  ChevronRight,
  FileText,
  Copy,
  Printer,
  Compass,
  Key,
  LayoutDashboard,
  Tag,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Briefcase
} from 'lucide-react';
import {
  FARM_PROJECT_META,
  FARM_PROBLEM_POINTS,
  MY_CONTRIBUTIONS_LIST,
  FARM_FEATURES,
  FARM_WORKFLOW_STEPS,
  FARM_ARCHITECTURE_LAYERS,
  FARM_PROJECT_STORY,
  FARM_CHALLENGES,
  FARM_SIMULATED_DATA,
  FarmFeature
} from '../data/farmProjectData';

interface FarmCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarmCaseStudyModal: React.FC<FarmCaseStudyModalProps> = ({ isOpen, onClose }) => {
  // Active state for interactive dashboard simulator inside the case study
  const [activeRole, setActiveRole] = useState<'Owner' | 'Worker' | 'Customer'>('Owner');
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<'overview' | 'livestock' | 'inventory' | 'orders' | 'customers' | 'rbac'>('overview');
  
  // Selected feature for detail inspection
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(FARM_FEATURES[0].id);
  
  // Selected workflow step for inspection
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<number>(1);

  // Copy notification
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const activeFeature = FARM_FEATURES.find(f => f.id === selectedFeatureId) || FARM_FEATURES[0];
  const activeWorkflow = FARM_WORKFLOW_STEPS.find(w => w.step === selectedWorkflowStep) || FARM_WORKFLOW_STEPS[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(FARM_PROJECT_META.githubRepoUrl);
    setCopiedNotification('GitHub Repository URL copied to clipboard!');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-2xl bg-[#07090e] border border-white/15 shadow-2xl overflow-hidden my-auto text-gray-200">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-white/5 border-b border-white/10 flex items-center justify-between flex-shrink-0 z-20">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
              <Trees className="w-5 h-5" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold uppercase">
                  Flagship Real-World Project
                </span>
                <span className="text-xs font-mono text-gray-400 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-indigo-300 font-semibold hidden sm:inline">
                  ~90% Developed
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate mt-0.5">
                {FARM_PROJECT_META.title}
              </h3>
            </div>
          </div>

          {/* Top Bar Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={FARM_PROJECT_META.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-indigo-500/20"
              id="farm-case-study-github-top-btn"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Source Code</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Copy GitHub Link"
              id="farm-case-study-copy-btn"
            >
              <Copy className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer hidden md:flex"
              title="Print Case Study"
              id="farm-case-study-print-btn"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              id="close-farm-case-study-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-12 font-sans bg-[#08090d]">
          
          {/* 1. PROJECT HEADER & OVERVIEW */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/15 shadow-xl space-y-5">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {FARM_PROJECT_META.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                    badge.includes('90%')
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                      : badge.includes('Real-World')
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-white/5 text-gray-300 border-white/10'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {FARM_PROJECT_META.title}
              </h1>
              <p className="text-base sm:text-lg font-mono text-emerald-400 font-medium">
                {FARM_PROJECT_META.subtitle}
              </p>
            </div>

            {/* Natural Introduction Quote */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border-l-4 border-emerald-500 text-gray-300 text-sm sm:text-base leading-relaxed italic">
              "{FARM_PROJECT_META.introQuote}"
            </div>

            {/* Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {FARM_PROJECT_META.stats.map((st, sIdx) => (
                <div key={sIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">{st.value}</div>
                  <div className="text-[11px] font-semibold text-indigo-300 uppercase tracking-wider mt-0.5">{st.label}</div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">{st.helper}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. REAL-WORLD PROBLEM */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                The Real-World Problem
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Traditional farm operations can involve managing information across multiple disparate areas. In conventional setups without a unified system, information is fragmented across physical notebooks, separate phone records, and verbal exchanges—leading to stock discrepancies, delayed orders, and lack of visibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FARM_PROBLEM_POINTS.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs sm:text-sm text-emerald-300 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>
                <strong>The Solution:</strong> The application was created to bring livestock records, feed inventories, customer contacts, orders, workers, and operational records into a <strong>centralized digital system</strong>.
              </span>
            </div>
          </div>

          {/* 3. MY CONTRIBUTION (~90% DEVELOPED BY ME) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-white/5 to-white/5 border border-indigo-500/30 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-500/20 pb-4">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  ENGINEERING OWNERSHIP & SCOPE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  I Developed ~90% of the Application
                </h2>
              </div>
              <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-600 text-white shadow-md shadow-indigo-500/30 w-fit">
                ~90% Technical Ownership
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              I was heavily involved in the end-to-end design, development, implementation, testing, and functionality of this application. My responsibilities encompassed both client-side interfaces and backend database logic:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {MY_CONTRIBUTIONS_LIST.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-indigo-500/30 transition-all space-y-1">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light pl-5.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-xs font-mono text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5 text-center sm:text-left">
              <strong>Authenticity Note:</strong> Approximately 90% of the application was developed by me, focusing on core functionality, workflows, and database integration.
            </div>
          </div>

          {/* 4. BUILT FOR REAL-WORLD USE */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Built for Real-World Use
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {FARM_PROJECT_META.realWorldStatement}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-gray-300 pt-2">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-indigo-400 font-bold block mb-1">Practical Workflows:</span>
                Reflects authentic daily agricultural tasks rather than boilerplate CRUD screens.
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-emerald-400 font-bold block mb-1">Centralized Records:</span>
                Replaces scattered physical logbooks with relational consistency.
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-purple-400 font-bold block mb-1">Operational Security:</span>
                Role boundaries protect confidential data while providing farm hands immediate utility.
              </div>
            </div>
          </div>

          {/* 5. CORE FEATURES (INTERACTIVE FEATURE EXPLORER) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Core Application Features
                </h2>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  Select a module to inspect its architecture and functional requirements
                </p>
              </div>
              <span className="text-xs font-mono text-indigo-400 font-semibold">
                {FARM_FEATURES.length} Modules Implemented
              </span>
            </div>

            {/* Feature Tabs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {FARM_FEATURES.map((feature) => {
                const isSelected = selectedFeatureId === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeatureId(feature.id)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] font-mono opacity-80 uppercase tracking-wider mb-1">
                        {feature.category}
                      </div>
                      <div className="font-bold text-xs sm:text-sm line-clamp-1">
                        {feature.title}
                      </div>
                    </div>
                    <div className="mt-2 text-[10px] font-mono flex items-center gap-1 opacity-90">
                      <span>Inspect Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Feature Detail Showcase Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/15 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {activeFeature.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {activeFeature.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono text-gray-400">Role Access:</span>
                  {activeFeature.roleAccess.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/10 text-indigo-300 border border-white/10"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  Implementation Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeFeature.details.map((detail, dIdx) => (
                    <div key={dIdx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. SYSTEM WORKFLOW PIPELINE */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                END-TO-END DATA FLOW
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                System Workflow Pipeline
              </h2>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                From user authentication and role verification to relational database transaction and real-time UI state
              </p>
            </div>

            {/* Workflow Steps Horizontal Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
              {FARM_WORKFLOW_STEPS.map((wf) => {
                const isSelected = selectedWorkflowStep === wf.step;
                return (
                  <button
                    key={wf.step}
                    onClick={() => setSelectedWorkflowStep(wf.step)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-indigo-500/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5 opacity-80">
                        <span>STEP 0{wf.step}</span>
                        {wf.step < 7 && <ArrowRight className="w-3 h-3 hidden lg:inline" />}
                      </div>
                      <div className="font-bold text-xs">
                        {wf.title}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1 line-clamp-1">
                        {wf.shortDesc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Workflow Inspection Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-indigo-300 font-bold">
                  Step 0{activeWorkflow.step}: {activeWorkflow.title} — {activeWorkflow.shortDesc}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                  {activeWorkflow.details}
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 text-emerald-300 font-mono text-xs border border-emerald-500/30 whitespace-nowrap self-start sm:self-center">
                ✓ Automated Logic
              </span>
            </div>
          </div>

          {/* 7. TECHNOLOGY STACK */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                VERIFIED TECH STACK
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Technologies Used in the Repository
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Frontend */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
                  <Monitor className="w-4 h-4" />
                  <span>Frontend</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Grid"].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 font-light">
                  Semantic document structures, responsive layouts, and asynchronous client events.
                </p>
              </div>

              {/* Backend */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                  <Server className="w-4 h-4" />
                  <span>Backend & Logic</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Backend Routing", "Session Control", "REST Handlers"].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 font-light">
                  Server-side request dispatching, input validation, and business workflow engines.
                </p>
              </div>

              {/* Database */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <Database className="w-4 h-4" />
                  <span>Database</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["MySQL", "Relational Schema", "Foreign Keys", "ACID Queries"].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 font-light">
                  Normalized tables maintaining integrity across livestock, inventory, and order records.
                </p>
              </div>

              {/* Tools */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                  <Github className="w-4 h-4" />
                  <span>Tools & DevOps</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Git", "GitHub", "VS Code", "CLI Tooling"].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 font-light">
                  Version-controlled repository development with branch workflows and issue tracking.
                </p>
              </div>
            </div>
          </div>

          {/* 8. SYSTEM ARCHITECTURE DIAGRAM */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                SYSTEM DESIGN
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Visual Architecture Blueprint
              </h2>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Separation of presentation, authentication, application logic, and relational persistence
              </p>
            </div>

            <div className="space-y-3">
              {FARM_ARCHITECTURE_LAYERS.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold">
                        LAYER 0{idx + 1}
                      </span>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        {layer.layer} — <span className="text-gray-400 font-normal">{layer.subtitle}</span>
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mb-3 font-light">
                    {layer.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {layer.components.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/40 border border-white/5 text-gray-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9. DASHBOARD SHOWCASE & LIVE INTERACTIVE SIMULATOR */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  INTERACTIVE APPLICATION SIMULATOR
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Project Dashboard & Subsystem Showcase
                </h2>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  Test the role-based views and operational records built in the application
                </p>
              </div>

              {/* Role Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10 border border-white/10 self-start sm:self-center">
                <span className="text-[10px] font-mono text-gray-400 px-2">Role:</span>
                {(['Owner', 'Worker', 'Customer'] as const).map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      activeRole === role
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup Frame Container */}
            <div className="rounded-2xl bg-black/70 border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Simulator Header Bar */}
              <div className="p-3.5 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-gray-400 ml-2">
                    Sri Venkateswara Farm Management // Session: <strong className="text-white">{activeRole} View</strong>
                  </span>
                </div>

                {/* Subsystem Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-mono">
                  <button
                    onClick={() => setActiveSimulatorTab('overview')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeSimulatorTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveSimulatorTab('livestock')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeSimulatorTab === 'livestock' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Livestock ({FARM_SIMULATED_DATA.livestock.length})
                  </button>
                  <button
                    onClick={() => setActiveSimulatorTab('inventory')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeSimulatorTab === 'inventory' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Inventory
                  </button>
                  <button
                    onClick={() => setActiveSimulatorTab('orders')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeSimulatorTab === 'orders' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Orders
                  </button>
                  {activeRole === 'Owner' && (
                    <button
                      onClick={() => setActiveSimulatorTab('rbac')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeSimulatorTab === 'rbac' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      RBAC Matrix
                    </button>
                  )}
                </div>
              </div>

              {/* Simulator Content Area */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {activeSimulatorTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-xs font-mono text-gray-400">Total Livestock</div>
                        <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">42 Head</div>
                        <div className="text-[10px] text-emerald-400 font-mono mt-0.5">✓ All sheds normal</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-xs font-mono text-gray-400">Feed Stock Health</div>
                        <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">87% Capacity</div>
                        <div className="text-[10px] text-amber-400 font-mono mt-0.5">1 low stock alert</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-xs font-mono text-gray-400">Active Orders</div>
                        <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">4 Dispatches</div>
                        <div className="text-[10px] text-indigo-400 font-mono mt-0.5">2 in transit today</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-xs font-mono text-gray-400">Current Role Access</div>
                        <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono mt-1">{activeRole}</div>
                        <div className="text-[10px] text-gray-400 font-mono mt-0.5">Verified Session</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="font-bold text-white block">Centralized Operations Hub</span>
                        <span className="text-gray-400">
                          {activeRole === 'Owner' && 'Full administrative authority across livestock health logs, feed procurement, user access, and financial order data.'}
                          {activeRole === 'Worker' && 'Operational duty access: Update daily livestock feeding, medical checks, and inventory counts.'}
                          {activeRole === 'Customer' && 'Customer portal: Browse available farm supplies, place orders, and review real-time delivery status.'}
                        </span>
                      </div>
                      <button
                        onClick={() => setActiveSimulatorTab('livestock')}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs font-mono whitespace-nowrap self-start sm:self-auto cursor-pointer"
                      >
                        Open Livestock Module →
                      </button>
                    </div>
                  </div>
                )}

                {activeSimulatorTab === 'livestock' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Live Livestock Records ({FARM_SIMULATED_DATA.livestock.length} entries shown)</span>
                      <span className="text-emerald-400">● Database Synced</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-gray-400 text-[11px]">
                            <th className="py-2 px-3">Tag ID</th>
                            <th className="py-2 px-3">Name / Label</th>
                            <th className="py-2 px-3">Category</th>
                            <th className="py-2 px-3">Breed</th>
                            <th className="py-2 px-3">Location</th>
                            <th className="py-2 px-3">Health Status</th>
                            <th className="py-2 px-3">Vaccination</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {FARM_SIMULATED_DATA.livestock.map((item) => (
                            <tr key={item.id} className="hover:bg-white/5 transition-colors">
                              <td className="py-2.5 px-3 text-indigo-400 font-bold">{item.id}</td>
                              <td className="py-2.5 px-3 text-white font-semibold">{item.tag}</td>
                              <td className="py-2.5 px-3 text-gray-300">{item.category}</td>
                              <td className="py-2.5 px-3 text-gray-400">{item.breed}</td>
                              <td className="py-2.5 px-3 text-gray-400">{item.shed}</td>
                              <td className="py-2.5 px-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] ${
                                  item.health === 'Healthy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                }`}>
                                  {item.health}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-gray-400">{item.vaccination}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSimulatorTab === 'inventory' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Inventory & Feed Stock Management</span>
                      <span className="text-indigo-400">● Reorder Thresholds Active</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-gray-400 text-[11px]">
                            <th className="py-2 px-3">Item Code</th>
                            <th className="py-2 px-3">Supply Item</th>
                            <th className="py-2 px-3">Category</th>
                            <th className="py-2 px-3">Current Stock</th>
                            <th className="py-2 px-3">Min. Reorder Level</th>
                            <th className="py-2 px-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {FARM_SIMULATED_DATA.inventory.map((inv) => (
                            <tr key={inv.id} className="hover:bg-white/5 transition-colors">
                              <td className="py-2.5 px-3 text-indigo-400 font-bold">{inv.id}</td>
                              <td className="py-2.5 px-3 text-white font-semibold">{inv.item}</td>
                              <td className="py-2.5 px-3 text-gray-400">{inv.category}</td>
                              <td className="py-2.5 px-3 text-white font-bold">{inv.stock}</td>
                              <td className="py-2.5 px-3 text-gray-500">{inv.minLevel}</td>
                              <td className="py-2.5 px-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] ${
                                  inv.status === 'In Stock' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                }`}>
                                  {inv.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSimulatorTab === 'orders' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Customer Orders & Delivery Pipeline</span>
                      <span className="text-emerald-400">● Real-Time Fulfillment</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-gray-400 text-[11px]">
                            <th className="py-2 px-3">Order ID</th>
                            <th className="py-2 px-3">Customer</th>
                            <th className="py-2 px-3">Product Ordered</th>
                            <th className="py-2 px-3">Amount</th>
                            <th className="py-2 px-3">Time</th>
                            <th className="py-2 px-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {FARM_SIMULATED_DATA.orders.map((ord) => (
                            <tr key={ord.id} className="hover:bg-white/5 transition-colors">
                              <td className="py-2.5 px-3 text-indigo-400 font-bold">{ord.id}</td>
                              <td className="py-2.5 px-3 text-white font-semibold">{ord.customer}</td>
                              <td className="py-2.5 px-3 text-gray-300">{ord.product}</td>
                              <td className="py-2.5 px-3 text-emerald-400 font-bold">{ord.amount}</td>
                              <td className="py-2.5 px-3 text-gray-500">{ord.date}</td>
                              <td className="py-2.5 px-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] ${
                                  ord.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                  ord.status === 'In Transit' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                                  ord.status === 'Processing' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                  'bg-white/10 text-gray-400 border border-white/10'
                                }`}>
                                  {ord.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeSimulatorTab === 'rbac' && activeRole === 'Owner' && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-gray-400">Role-Based Access Control Permission Matrix</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-gray-400 text-[11px]">
                            <th className="py-2 px-3">System Module</th>
                            <th className="py-2 px-3 text-center">Owner (Admin)</th>
                            <th className="py-2 px-3 text-center">Worker (Operational)</th>
                            <th className="py-2 px-3 text-center">Customer (Portal)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            { module: 'Livestock Records & Health Logs', owner: 'Full (CRUD)', worker: 'Read / Update', customer: 'Restricted' },
                            { module: 'Inventory Stock & Reorder Levels', owner: 'Full (CRUD)', worker: 'Read / Update', customer: 'Restricted' },
                            { module: 'Order Approval & Status Transitions', owner: 'Full (CRUD)', worker: 'Update Status', customer: 'Place / View Own' },
                            { module: 'Customer Information Directory', owner: 'Full (CRUD)', worker: 'Restricted', customer: 'View Own Profile' },
                            { module: 'User Accounts & Access Control', owner: 'Full (CRUD)', worker: 'Restricted', customer: 'Restricted' }
                          ].map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                              <td className="py-2.5 px-3 text-white font-medium">{row.module}</td>
                              <td className="py-2.5 px-3 text-center text-emerald-400 font-bold">{row.owner}</td>
                              <td className="py-2.5 px-3 text-center text-indigo-300">{row.worker}</td>
                              <td className="py-2.5 px-3 text-center text-gray-500">{row.customer}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* 10. PROJECT STORY / JOURNEY */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                SOFTWARE ENGINEERING PROCESS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                From Requirement to Application
              </h2>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                The methodical development lifecycle followed to construct this full-stack system
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {FARM_PROJECT_STORY.map((phase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono text-indigo-400 font-bold mb-1">
                      STEP {phase.step}
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm mb-1.5">
                      {phase.phase}
                    </div>
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 11. CHALLENGES & WHAT I LEARNED */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                ENGINEERING REFLECTIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Challenges & What I Learned
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FARM_CHALLENGES.map((ch, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                  <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span>{ch.title}</span>
                  </h3>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div>
                      <span className="text-amber-400 font-mono font-semibold">Challenge: </span>
                      <span className="text-gray-400 font-light">{ch.challenge}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-mono font-semibold">Engineering Solution: </span>
                      <span className="text-gray-300 font-light">{ch.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 12. WHY THIS PROJECT MATTERS (PROJECT IMPACT) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-white/5 to-white/5 border border-indigo-500/30 space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                PROFESSIONAL VALUE
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Why This Project Matters
              </h2>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              This project is a cornerstone of my portfolio because it demonstrates practical software engineering competencies:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-emerald-400 font-bold block mb-1">01. Real-World Scope</span>
                <span className="text-gray-400">Built around practical operational workflows rather than hypothetical tutorials.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-indigo-400 font-bold block mb-1">02. End-to-End Ownership</span>
                <span className="text-gray-400">Personally developed ~90% across architecture, frontend, backend, and DB.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-purple-400 font-bold block mb-1">03. Relational Rigor</span>
                <span className="text-gray-400">Modeled structured SQL schemas handling multi-entity operational records.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-cyan-400 font-bold block mb-1">04. Role Security</span>
                <span className="text-gray-400">Engineered RBAC dividing Owner, Worker, and Customer privileges.</span>
              </div>
            </div>
          </div>

          {/* 13. GITHUB & ACTIONS */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Explore the Source Code on GitHub
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Inspect repository commits, code architecture, and database models
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={FARM_PROJECT_META.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer"
                id="farm-case-study-bottom-github-btn"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code →</span>
              </a>

              <a
                href={FARM_PROJECT_META.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-gray-200 font-semibold text-xs transition-all border border-white/10 flex items-center gap-2"
                id="farm-case-study-profile-btn"
              >
                <span>GitHub Profile →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between flex-shrink-0 text-xs font-mono text-gray-400">
          <div>
            Sri Venkateswara Lakshmi Venkateswara Farm Management System Case Study
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>

      {/* Floating Copied Notification Toast */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#0a0a0c] border border-indigo-500/40 text-indigo-300 text-xs font-mono shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-in fade-in duration-200">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>{copiedNotification}</span>
        </div>
      )}
    </div>
  );
};
