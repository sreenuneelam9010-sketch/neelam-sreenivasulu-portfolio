import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Shield,
  Lock,
  BrainCircuit,
  Ticket,
  CheckCircle,
  Trees,
  ArrowUpRight,
  ArrowRight,
  X
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { FarmCaseStudyModal } from './FarmCaseStudyModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFarmCaseStudyOpen, setIsFarmCaseStudyOpen] = useState(false);

  // Mini interactive state for Farm Management Simulator
  const [farmRole, setFarmRole] = useState<'Owner' | 'Worker' | 'Customer'>('Owner');
  const [farmActiveTab, setFarmActiveTab] = useState<'livestock' | 'inventory' | 'orders'>('livestock');
  const [livestockChecked, setLivestockChecked] = useState(true);
  const [orderDispatched, setOrderDispatched] = useState(false);

  // Mini interactive state for Project (AES Encryption visualizer)
  const [patientId, setPatientId] = useState('PT-8942');
  const [isEncrypted, setIsEncrypted] = useState(true);

  // Mini interactive state for Project (ML Churn score tester)
  const [contractType, setContractType] = useState<'Monthly' | 'Two-Year'>('Monthly');
  const [tenureMonths, setTenureMonths] = useState(6);
  const churnRisk = contractType === 'Monthly' ? (tenureMonths < 12 ? 78 : 42) : (tenureMonths < 12 ? 24 : 8);

  // Mini interactive state for Project (Ticket booking seat visualizer)
  const [selectedSeat, setSelectedSeat] = useState<string>('A4');

  const renderProjectVisual = (project: Project) => {
    if (project.visualType === 'farm-management') {
      return (
        <div className="relative rounded-2xl bg-black/50 border border-emerald-500/20 p-5 overflow-hidden flex flex-col justify-between min-h-[360px] shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Trees className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-300 font-semibold">Real-Time Farm Simulator</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              MySQL Relational DB
            </span>
          </div>

          {/* Interactive Role Selector */}
          <div className="my-3 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-400">Authenticated Role:</span>
              <div className="flex gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10">
                {(['Owner', 'Worker', 'Customer'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setFarmRole(r)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                      farmRole === r
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-view switcher */}
            <div className="grid grid-cols-3 gap-1 text-[10px] font-mono">
              <button
                type="button"
                onClick={() => setFarmActiveTab('livestock')}
                className={`py-1 rounded text-center transition-colors cursor-pointer border ${
                  farmActiveTab === 'livestock'
                    ? 'bg-white/10 text-emerald-300 border-emerald-500/30'
                    : 'text-gray-400 border-white/5 hover:text-white'
                }`}
              >
                Livestock (42)
              </button>
              <button
                type="button"
                onClick={() => setFarmActiveTab('inventory')}
                className={`py-1 rounded text-center transition-colors cursor-pointer border ${
                  farmActiveTab === 'inventory'
                    ? 'bg-white/10 text-emerald-300 border-emerald-500/30'
                    : 'text-gray-400 border-white/5 hover:text-white'
                }`}
              >
                Inventory (4)
              </button>
              <button
                type="button"
                onClick={() => setFarmActiveTab('orders')}
                className={`py-1 rounded text-center transition-colors cursor-pointer border ${
                  farmActiveTab === 'orders'
                    ? 'bg-white/10 text-emerald-300 border-emerald-500/30'
                    : 'text-gray-400 border-white/5 hover:text-white'
                }`}
              >
                Orders (4)
              </button>
            </div>

            {/* Tab Content Preview */}
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono space-y-1.5 min-h-[95px]">
              {farmActiveTab === 'livestock' && (
                <div>
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>LS-101 • Holstein Cow</span>
                    <span className="text-emerald-400 font-bold">Health: OK</span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Shed A-1 • Vaccination: Up to date</div>
                  <div className="mt-2 flex items-center justify-between text-[11px] border-t border-white/5 pt-1.5">
                    <span className="text-gray-400">Routine Check:</span>
                    <button
                      type="button"
                      onClick={() => setLivestockChecked(!livestockChecked)}
                      className="text-indigo-400 hover:text-indigo-300 cursor-pointer underline text-[10px]"
                    >
                      {livestockChecked ? '✓ Checked Today' : '○ Mark Checked'}
                    </button>
                  </div>
                </div>
              )}

              {farmActiveTab === 'inventory' && (
                <div>
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>Organic Cattle Feed</span>
                    <span className="text-white font-bold">45 Bags</span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Reorder Threshold: 15 Bags (Optimal)</div>
                  <div className="mt-2 flex items-center justify-between text-[10px] border-t border-white/5 pt-1.5">
                    <span className="text-amber-400">Mineral Mixture: 4 Bags (Low)</span>
                    <span className="text-emerald-400">Auto Alert</span>
                  </div>
                </div>
              )}

              {farmActiveTab === 'orders' && (
                <div>
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>ORD-892 (Desi Ghee 25kg)</span>
                    <span className={orderDispatched ? 'text-emerald-400 font-bold' : 'text-indigo-400 font-bold'}>
                      {orderDispatched ? 'Delivered' : 'In Transit'}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Customer: Sri Krishna Sweets (₹18,500)</div>
                  <div className="mt-2 flex items-center justify-between text-[10px] border-t border-white/5 pt-1.5">
                    <span className="text-gray-400">Status Update:</span>
                    <button
                      type="button"
                      onClick={() => setOrderDispatched(!orderDispatched)}
                      className="text-emerald-400 hover:text-emerald-300 cursor-pointer underline text-[10px]"
                    >
                      {orderDispatched ? 'Reset Status' : 'Mark Delivered →'}
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Architecture badges footer */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-3 border-t border-white/10">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-emerald-400 font-bold">~90%</div>
              <div className="text-gray-400">Developed</div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-indigo-400 font-bold">3 Roles</div>
              <div className="text-gray-400">RBAC Auth</div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-purple-400 font-bold">MySQL</div>
              <div className="text-gray-400">Relational DB</div>
            </div>
          </div>
        </div>
      );
    }

    if (project.visualType === 'security') {
      return (
        <div className="relative rounded-2xl bg-black/40 border border-white/10 p-5 overflow-hidden flex flex-col justify-between min-h-[340px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 font-semibold">AES-256 Crypto Pipeline</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
              SHA-1 Verified
            </span>
          </div>

          {/* Interactive Encryption Simulator */}
          <div className="my-4 space-y-3">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs font-mono space-y-1.5">
              <div className="flex justify-between items-center text-gray-400">
                <span>Patient Record ID:</span>
                <span className="text-white font-bold">{patientId}</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Cryptographic State:</span>
                <span className={`font-bold ${isEncrypted ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {isEncrypted ? 'AES-256 ENCRYPTED' : 'PLAINTEXT DECRYPTED'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 text-[11px] text-indigo-300 break-all border border-white/10">
                {isEncrypted
                  ? '7b9a4c8e1f0293847a6b5c4d3e2f1a0b9c8d7e6f4a3b2c1d'
                  : 'Diagnosis: Normal | Meds: Rx-402 | Doctor: Dr. Sharma'}
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setIsEncrypted(!isEncrypted)}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-mono bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                <span>{isEncrypted ? 'Verify Decryption Key' : 'Apply AES Encryption'}</span>
              </button>
            </div>
          </div>

          {/* Security architecture highlights */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-3 border-t border-white/10">
            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="text-indigo-400 font-bold">AES-256</div>
              <div className="text-gray-500">Record Data</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="text-purple-400 font-bold">SHA-1</div>
              <div className="text-gray-500">Hash Check</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="text-indigo-300 font-bold">RBAC</div>
              <div className="text-gray-500">Role Auth</div>
            </div>
          </div>
        </div>
      );
    }

    if (project.visualType === 'machine-learning') {
      return (
        <div className="relative rounded-2xl bg-black/40 border border-white/10 p-5 overflow-hidden flex flex-col justify-between min-h-[340px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono text-purple-300 font-semibold">ML Churn Model Simulation</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300">
              RandomForest + SVC
            </span>
          </div>

          {/* Interactive ML Controls */}
          <div className="my-3 space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">Contract Structure:</span>
                <span className="text-purple-300 font-bold">{contractType}</span>
              </div>
              <div className="flex gap-2">
                {(['Monthly', 'Two-Year'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setContractType(t)}
                    className={`flex-1 py-1.5 text-xs font-mono rounded-lg transition-all border cursor-pointer ${
                      contractType === t
                        ? 'bg-purple-600/30 border-purple-400 text-purple-200'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">Account Tenure:</span>
                <span className="text-indigo-300 font-bold">{tenureMonths} Months</span>
              </div>
              <input
                type="range"
                min="1"
                max="48"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-1.5 bg-white/10 rounded-lg"
              />
            </div>

            {/* Calculated Risk Output */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-[10px]">Predicted Churn Risk</div>
                <div className="text-lg font-bold text-white font-mono mt-0.5">{churnRisk}% Probability</div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                  churnRisk > 50
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {churnRisk > 50 ? 'High Risk' : 'Retained'}
              </span>
            </div>
          </div>

          {/* Model Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-2 border-t border-white/10">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-indigo-400 font-bold">Accuracy</div>
              <div className="text-gray-300">94.8%</div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-purple-400 font-bold">Precision</div>
              <div className="text-gray-300">92.4%</div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-indigo-300 font-bold">F1-Score</div>
              <div className="text-gray-300">0.93</div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Ticket booking
    return (
      <div className="relative rounded-2xl bg-black/40 border border-white/10 p-5 overflow-hidden flex flex-col justify-between min-h-[340px]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono text-indigo-300 font-semibold">Java Enterprise Reservation Engine</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            MySQL ACID
          </span>
        </div>

        {/* Interactive Seat Map Simulation */}
        <div className="my-3 space-y-2 font-mono">
          <div className="text-[10px] text-gray-400 text-center uppercase tracking-wider">
            ── SCREEN / STAGE ──
          </div>
          <div className="grid grid-cols-6 gap-1.5 py-1 justify-items-center">
            {['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6'].map((seat) => {
              const isSelected = selectedSeat === seat;
              const isOccupied = seat === 'A2' || seat === 'B5';
              return (
                <button
                  key={seat}
                  type="button"
                  disabled={isOccupied}
                  onClick={() => setSelectedSeat(seat)}
                  className={`w-9 h-7 rounded text-[10px] font-mono transition-all flex items-center justify-center cursor-pointer ${
                    isOccupied
                      ? 'bg-black/60 text-gray-700 border border-white/5 cursor-not-allowed'
                      : isSelected
                      ? 'bg-indigo-600 text-white font-bold border border-indigo-400 shadow-md shadow-indigo-500/20'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:border-indigo-500/50'
                  }`}
                >
                  {seat}
                </button>
              );
            })}
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs flex items-center justify-between">
            <div>
              <span className="text-gray-400 text-[11px]">Selected Seat: </span>
              <span className="text-indigo-300 font-bold">{selectedSeat}</span>
            </div>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>ACID Lock Acquired</span>
            </span>
          </div>
        </div>

        {/* Architecture specs */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-2 border-t border-white/10">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-indigo-400 font-bold">Java Backend</div>
            <div className="text-gray-400">REST Controller</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-purple-400 font-bold">MySQL</div>
            <div className="text-gray-400">Transactions</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-emerald-400 font-bold">Auth Model</div>
            <div className="text-gray-400">Secure Session</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-widest mb-3">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-gray-400 font-normal mt-3">
            Real-world systems and applications showcasing full-stack architecture, machine learning, and systems security.
          </p>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project) => {
            const isFlagship = project.isFlagship || project.id === 'project-01';

            return (
              <div
                key={project.id}
                id={`featured-project-${project.id}`}
                className={`p-6 sm:p-8 lg:p-10 rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 group ${
                  isFlagship
                    ? 'bg-gradient-to-b from-white/10 via-white/5 to-black/40 border-emerald-500/30 hover:border-emerald-500/50 ring-1 ring-emerald-500/20'
                    : 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Number & Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-2xl font-black text-gray-600 group-hover:text-indigo-400 transition-colors">
                        {project.number}
                      </span>
                      <span className="h-4 w-[1px] bg-white/10" />
                      
                      {isFlagship && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold shadow-sm shadow-emerald-500/10">
                          ★ Flagship Real-World Project
                        </span>
                      )}

                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                        {project.category}
                      </span>

                      {project.myContribution && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/15 text-indigo-200">
                          {project.myContribution}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-emerald-400/90 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Key Highlights Bullet List */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                        Key Highlights & Architecture:
                      </span>
                      <ul className="space-y-1.5 text-xs text-gray-300">
                        {project.keyHighlights.slice(0, 3).map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-gray-300 hover:border-indigo-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      {isFlagship ? (
                        <>
                          <button
                            onClick={() => setIsFarmCaseStudyOpen(true)}
                            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer active:scale-95"
                            id="view-farm-case-study-btn"
                          >
                            <span>View Full Case Study</span>
                            <ArrowRight className="w-4 h-4 text-white" />
                          </button>

                          <a
                            href={project.githubUrl || 'https://github.com/sreenuneelam9010-sketch/Farm-management-system'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-2"
                            id="view-farm-github-btn"
                          >
                            <Github className="w-4 h-4 text-gray-300" />
                            <span>View Source Code</span>
                            <ExternalLink className="w-3 h-3 text-gray-400" />
                          </a>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 cursor-pointer active:scale-95"
                            id={`project-details-btn-${project.id}`}
                          >
                            <span>Deep Dive & Architecture</span>
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </button>

                          <a
                            href={project.githubUrl || 'https://github.com/sreenuneelam9010-sketch'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-2"
                            id={`project-github-btn-${project.id}`}
                          >
                            <Github className="w-4 h-4 text-gray-400" />
                            <span>View GitHub Code</span>
                          </a>
                        </>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Custom Dedicated Interactive Visual */}
                  <div className="lg:col-span-5">
                    {renderProjectVisual(project)}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Flagship Farm Case Study Modal */}
      <FarmCaseStudyModal
        isOpen={isFarmCaseStudyOpen}
        onClose={() => setIsFarmCaseStudyOpen(false)}
      />

      {/* Standard Project Deep-Dive Modal for other projects */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0a0c] border border-white/15 shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              id="close-project-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 mb-2">
                <span>PROJECT {selectedProject.number}</span>
                <span>•</span>
                <span>{selectedProject.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-400 font-mono mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Description & Objectives */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                System Overview
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Full Key Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Architecture & Key Features
              </h4>
              <div className="space-y-2">
                {selectedProject.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl || 'https://github.com/sreenuneelam9010-sketch'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 flex items-center gap-2 border border-white/10"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                Close Deep Dive
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
