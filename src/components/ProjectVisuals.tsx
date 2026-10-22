import React from 'react';
import { Layers, Activity, ShieldAlert, Cpu, Database, GitBranch, ArrowRight, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';

/**
 * Visual for Project 1: BrainTumorAI
 * Represents an MRI slice scan with CNN feature extraction layers and categorical classification distribution.
 */
export const BrainTumorVisual: React.FC = () => {
  return (
    <div className="w-full h-56 sm:h-64 rounded-t-xl bg-[#0d0d0d] border-b border-[#292929] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background scan grid */}
      <div className="absolute inset-0 bg-tech-grid-dots opacity-40" />

      {/* Top Header Strip */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-[#A1A1AA] pb-2 border-b border-[#292929]/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F28AB2]"></span>
          <span className="text-[#F5F5F5] font-semibold">CNN ARCHITECTURE · MRI SLICE 256×256</span>
        </div>
        <span className="text-[10px] text-[#F28AB2] bg-[#F28AB2]/10 px-2 py-0.5 rounded border border-[#F28AB2]/30">
          EXPERIMENTAL
        </span>
      </div>

      {/* Main Visual: Simulated MRI axial scan vector + CNN layers */}
      <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-auto">
        {/* MRI Abstract Axial Silhouette */}
        <div className="col-span-5 flex flex-col items-center justify-center p-2 rounded-lg bg-[#111111]/80 border border-[#292929]">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Concentric brain contour curves */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="mriGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F28AB2" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#292929" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#111111" stopOpacity="0.9" />
                </radialGradient>
              </defs>
              <ellipse cx="50" cy="50" rx="42" ry="46" fill="url(#mriGlow)" stroke="#383838" strokeWidth="1" />
              {/* Hemispheres and sulcal fissures */}
              <path d="M50 8 Q48 30 50 50 Q52 70 50 92" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="2 2" fill="none" />
              <path d="M25 40 Q38 35 48 42" stroke="#3d3d3d" strokeWidth="1.2" fill="none" />
              <path d="M75 40 Q62 35 52 42" stroke="#3d3d3d" strokeWidth="1.2" fill="none" />
              <path d="M22 60 Q35 62 48 58" stroke="#3d3d3d" strokeWidth="1.2" fill="none" />
              <path d="M78 60 Q65 62 52 58" stroke="#3d3d3d" strokeWidth="1.2" fill="none" />
              {/* Region of interest highlight bounding box */}
              <rect x="24" y="28" width="22" height="20" fill="none" stroke="#F28AB2" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="35" cy="38" r="3" fill="#F28AB2" />
            </svg>
            <div className="absolute bottom-1 right-1 text-[8px] text-[#F28AB2] font-mono">ROI [T1-CE]</div>
          </div>
          <span className="text-[9px] text-[#A1A1AA] mt-1 tracking-tight">T1-Weighted Brain MRI</span>
        </div>

        {/* Feature maps & Categorical Softmax bars */}
        <div className="col-span-7 flex flex-col justify-center space-y-2 pl-2">
          <div className="text-[10px] text-[#A1A1AA] uppercase tracking-wider flex items-center justify-between">
            <span>Target Classification</span>
            <span className="text-[#F28AB2]">Softmax Output</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div>
              <div className="flex justify-between text-[#F5F5F5] mb-0.5">
                <span>Glioma</span>
                <span className="font-mono text-[#F28AB2]">Class A</span>
              </div>
              <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#F28AB2] h-full rounded-full" style={{ width: '74%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#A1A1AA] mb-0.5">
                <span>Meningioma</span>
                <span className="font-mono text-[#777]">Class B</span>
              </div>
              <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#555] h-full rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#A1A1AA] mb-0.5">
                <span>Pituitary Tumor</span>
                <span className="font-mono text-[#777]">Class C</span>
              </div>
              <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#555] h-full rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#A1A1AA] mb-0.5">
                <span>No Tumor</span>
                <span className="font-mono text-[#777]">Control</span>
              </div>
              <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#555] h-full rounded-full" style={{ width: '4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#888] pt-2 border-t border-[#292929]/50">
        <span>Framework: TensorFlow · Keras CNN</span>
        <span className="text-[#A1A1AA]">4-Class Categorical</span>
      </div>
    </div>
  );
};

/**
 * Visual for Project 2: ATS Enhancement — Frappe HRMS
 * Represents an enterprise recruitment workflow pipeline: Candidate Ingestion -> Resume Parsing -> Evaluation -> Interview -> Offer.
 */
export const AtsWorkflowVisual: React.FC = () => {
  return (
    <div className="w-full h-56 sm:h-64 rounded-t-xl bg-[#0d0d0d] border-b border-[#292929] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-[#A1A1AA] pb-2 border-b border-[#292929]/60">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-[#F28AB2]" />
          <span className="text-[#F5F5F5] font-semibold">FRAPPE HRMS · RECRUITMENT WORKFLOW</span>
        </div>
        <span className="text-[10px] text-[#A1A1AA] bg-[#111111] px-2 py-0.5 rounded border border-[#292929]">
          ERPNext / MariaDB / Redis
        </span>
      </div>

      {/* Workflow Stage Pipeline */}
      <div className="relative z-10 my-auto space-y-3">
        {/* Pipeline Step Badges */}
        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-[#111111] border border-[#292929]">
            <div className="text-[#A1A1AA]">01. Ingestion</div>
            <div className="text-[#F5F5F5] font-semibold mt-0.5 truncate">Resume Intake</div>
            <div className="text-[9px] text-[#F28AB2] mt-1 font-mono">Parsed</div>
          </div>
          <div className="p-2 rounded-lg bg-[#111111] border border-[#292929]">
            <div className="text-[#A1A1AA]">02. Screening</div>
            <div className="text-[#F5F5F5] font-semibold mt-0.5 truncate">Profile Match</div>
            <div className="text-[9px] text-[#F28AB2] mt-1 font-mono">Automated</div>
          </div>
          <div className="p-2 rounded-lg bg-[#141014] border border-[#F28AB2]/40">
            <div className="text-[#F28AB2]">03. Interview</div>
            <div className="text-[#F5F5F5] font-semibold mt-0.5 truncate">Round Sched.</div>
            <div className="text-[9px] text-[#F28AB2] mt-1 font-mono">Active</div>
          </div>
          <div className="p-2 rounded-lg bg-[#111111] border border-[#292929]">
            <div className="text-[#A1A1AA]">04. Decision</div>
            <div className="text-[#F5F5F5] font-semibold mt-0.5 truncate">Offer Gen.</div>
            <div className="text-[9px] text-[#888] mt-1 font-mono">Pending</div>
          </div>
        </div>

        {/* Console / DocType metadata */}
        <div className="p-2.5 rounded-lg bg-[#080808] border border-[#222222] text-[10px] space-y-1">
          <div className="flex items-center justify-between text-[#888]">
            <span className="text-[#F28AB2]">DocType: Job Applicant</span>
            <span>Workflow: frappe.workflow.transition</span>
          </div>
          <div className="flex items-center gap-2 text-[#A1A1AA]">
            <span className="text-emerald-400">● Redis Cache Valid</span>
            <span>·</span>
            <span>MariaDB Transaction Committed</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#888] pt-2 border-t border-[#292929]/50">
        <span>Custom Workflow States</span>
        <span className="text-[#F28AB2]">Enterprise Automation</span>
      </div>
    </div>
  );
};

/**
 * Visual for Project 3: Credit Card Fraud Detection AI
 * Represents real-time transaction scoring, XGBoost risk evaluation, and SHAP feature attribution.
 */
export const FraudDetectionVisual: React.FC = () => {
  return (
    <div className="w-full h-56 sm:h-64 rounded-t-xl bg-[#0d0d0d] border-b border-[#292929] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-[#A1A1AA] pb-2 border-b border-[#292929]/60">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-[#F28AB2]" />
          <span className="text-[#F5F5F5] font-semibold">FASTAPI + ML INFERENCE · RISK ENGINE</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          ONLINE API
        </span>
      </div>

      {/* Risk Engine & SHAP attributions */}
      <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-auto">
        {/* Risk Score Dial Card */}
        <div className="col-span-5 p-3 rounded-lg bg-[#111111]/80 border border-[#292929] text-center">
          <div className="text-[10px] text-[#A1A1AA] uppercase">Transaction Risk</div>
          <div className="text-2xl font-bold font-mono text-[#F28AB2] my-1">
            0.87
          </div>
          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-semibold uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
            High Alert
          </div>
          <div className="text-[8px] text-[#777] mt-1.5">Rule + XGBoost Hybrid</div>
        </div>

        {/* SHAP Feature attribution breakdown */}
        <div className="col-span-7 space-y-1.5 pl-1 text-[10px]">
          <div className="text-[9px] text-[#A1A1AA] uppercase tracking-wider flex justify-between">
            <span>SHAP Feature Attribution</span>
            <span className="text-[#F28AB2]">Impact (Δ)</span>
          </div>

          <div>
            <div className="flex justify-between text-[#F5F5F5] text-[9px] mb-0.5">
              <span>Geo Velocity Anomaly</span>
              <span className="text-[#F28AB2] font-mono">+0.42</span>
            </div>
            <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#F28AB2] h-full rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#F5F5F5] text-[9px] mb-0.5">
              <span>High Amount Deviation</span>
              <span className="text-[#F28AB2] font-mono">+0.29</span>
            </div>
            <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#F28AB2]/70 h-full rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#A1A1AA] text-[9px] mb-0.5">
              <span>Past Fraud Ratio</span>
              <span className="text-[#A1A1AA] font-mono">+0.16</span>
            </div>
            <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#555] h-full rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#888] pt-2 border-t border-[#292929]/50">
        <span>XGBoost + SHAP Explainability</span>
        <span className="text-emerald-400">Latency &lt; 45ms</span>
      </div>
    </div>
  );
};
