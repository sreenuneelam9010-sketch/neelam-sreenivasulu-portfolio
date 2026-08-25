import React, { useState } from 'react';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { GitHubSection } from './components/GitHubSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { DeveloperJourney } from './components/DeveloperJourney';
import { WhatIBringSection } from './components/WhatIBringSection';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Animated Constellation & Glowing Ambient Background */}
      <BackgroundEffect />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Live Terminal & Interactive Tech Visual */}
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Quick Profile Stats */}
        <StatsSection />

        {/* About Me Section */}
        <AboutSection />

        {/* Technical Arsenal (Skills) */}
        <SkillsSection />

        {/* Featured Projects with Interactive Architectural Simulators */}
        <FeaturedProjects />

        {/* GitHub Repositories Showcase */}
        <GitHubSection />

        {/* Professional Experience */}
        <ExperienceSection />

        {/* Education Timeline */}
        <EducationSection />

        {/* Certifications & Achievements */}
        <CertificationsSection />

        {/* Developer Journey Roadmap */}
        <DeveloperJourney />

        {/* What I Bring (Value Proposition) */}
        <WhatIBringSection />

        {/* Resume Call to Action */}
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Verified ATS-Standard Resume Viewer & Print Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
