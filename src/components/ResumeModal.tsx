import React, { useRef } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  FolderCode
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATION_LIST,
  FEATURED_PROJECTS,
  CERTIFICATIONS,
  SKILL_CATEGORIES
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextResume = () => {
    const textResume = `
NEELAM SREENIVASULU
Software Developer | Full Stack & AI/ML
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

SUMMARY:
Software Developer with strong foundations in Full Stack Development, Machine Learning, Backend Engineering, and Database Architecture. B.Tech in CSE-AIML from Kalasalingam Academy of Research and Education (8.38 CGPA).

EDUCATION:
- B.Tech in CSE-AIML: Kalasalingam Academy of Research and Education (2021-2025) | CGPA: 8.38
- Intermediate (MPC): Narayana Junior College (2019-2021) | Percentage: 89.7%
- Secondary Education: Sri Chaitanya High School (2018-2019) | CGPA: 9.8

EXPERIENCE:
Java Full Stack Developer Intern — Aivariant (Sept 2025 – Dec 2025, 3 Months)
- Developed interactive web pages using HTML, CSS, JavaScript, Bootstrap.
- Assisted in Java backend application development and MySQL database integration.
- Participated in debugging, application maintenance, and agile team collaboration.

PROJECTS:
1. Hospital Management System for Secure Healthcare (Python, Flask, MySQL, HTML, CSS, JS, Bootstrap)
   - AES encryption & SHA-1 hashing for patient data protection and email-verified access.
2. Customer Churn Prediction System (Python, Pandas, NumPy, Scikit-Learn)
   - Feature engineering and classification models using Random Forest and SVC.
3. Ticket Booking Web Application (Java, HTML, CSS, JavaScript, MySQL, Git)
   - RESTful API design, ACID MySQL database transactions, and user authentication.

TECHNICAL SKILLS:
- Languages: Java, Python, C, C++, JavaScript, SQL
- Web & Frameworks: HTML, CSS, JavaScript, Flask, Bootstrap
- ML & Data: Pandas, NumPy, Scikit-Learn, Random Forest, SVC, Feature Engineering
- Databases & Tools: MySQL, Git, GitHub, Linux

CERTIFICATIONS:
- Full Stack Developer Internship (Aivariant)
- Full Stack Developer Course Completion (ExcelR)
- Oracle Cloud Infrastructure 2023 Data Science Professional
- IIITDM Kancheepuram — Vashist'24 Hackathon
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-white/5 border-b border-white/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Resume // Neelam Sreenivasulu
              </h3>
              <p className="text-xs font-mono text-gray-400">
                Verified ATS-Standard Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-indigo-500/20"
              title="Print or Save as PDF"
              id="resume-print-action-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyTextResume}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-gray-200 font-medium text-xs border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Copy plain text resume"
              id="resume-copy-text-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              id="close-resume-modal-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: ATS Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0a0a0c] text-gray-200 space-y-8 font-sans" ref={printableRef}>
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-white/10 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-400 tracking-wide font-mono">
              Software Developer | Full Stack Development & Machine Learning
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-gray-400 pt-1 font-mono">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-300 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-indigo-300 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-300 flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-indigo-300 flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider border-b border-white/10 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <div className="font-semibold text-white">{edu.degree}</div>
                    <div className="text-gray-400 text-xs">{edu.institution}</div>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs">
                    <span className="text-indigo-300 font-bold">{edu.gradeType}: {edu.grade}</span>
                    <span className="text-gray-500 ml-2">({edu.period})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider border-b border-white/10 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-white">{exp.role}</span>
                      <span className="text-indigo-400 font-semibold ml-2">— {exp.company}</span>
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      {exp.period} ({exp.duration})
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                    {exp.responsibilities.map((item, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider border-b border-white/10 pb-1 flex items-center gap-2">
              <FolderCode className="w-4 h-4" />
              <span>Major Projects</span>
            </h2>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div className="font-bold text-white">{proj.title}</div>
                    <div className="font-mono text-xs text-indigo-400">
                      {proj.technologies.slice(0, 4).join(' • ')}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-300">
                    {proj.keyHighlights.slice(0, 2).map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider border-b border-white/10 pb-1 flex items-center gap-2">
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-mono font-semibold text-gray-300">{cat.name}: </span>
                  <span className="text-gray-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider border-b border-white/10 pb-1 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications & Achievements</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-semibold text-white">{cert.title}</div>
                  <div className="text-gray-400 text-[11px] font-mono">{cert.issuer} {cert.date ? `• ${cert.date}` : ''}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
