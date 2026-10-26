const { useState, useEffect, useMemo, useRef } = React;

// --- SVG Icons ---
const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const LayoutGridIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
);
const ListIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);
const SortIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="15" y1="18" x2="15" y2="6"></line><polyline points="11 10 15 6 19 10"></polyline><line x1="9" y1="6" x2="9" y2="18"></line><polyline points="5 14 9 18 13 14"></polyline></svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const XIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const CompareIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="14" x="3" y="5" rx="2"></rect><rect width="8" height="14" x="13" y="5" rx="2"></rect><line x1="11" x2="13" y1="12" y2="12"></line></svg>
);
const StethoscopeIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
);
const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const ShieldCheckIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const HeartPulseIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h6.28"></path></svg>
);
const KidneyIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2C8 2 5 5 5 9c0 5 4 10 7 13 3-3 7-8 7-13 0-4-3-7-7-7z"></path><path d="M12 6c-1.5 0-3 1.5-3 3.5 0 2.5 3 4.5 3 4.5s3-2 3-4.5C15 7.5 13.5 6 12 6z"></path></svg>
);
const WeightScaleIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
);
const DropletIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-6-1.5-1.6-4-4-4-4s-2.5 2.4-4 4c-2 2.1-3 4-3 6a7 7 0 0 0 7 7z"></path></svg>
);
const FlameIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"></path></svg>
);
const PillIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
);
const SyringeIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 2 4 4"></path><path d="m17 7 3-3"></path><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path><path d="m9 11 4 4"></path><path d="m5 19-3 3"></path><path d="m14 4 6 6"></path></svg>
);
const MoonIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);
const SunIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
);
const AlertTriangleIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
);
const InfoIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
);
const BookOpenIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const FootIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 16v-2.38C4 11.5 5.5 10 7.38 10H8c1.5 0 2.5-1 3.5-3 .7-1.4 1.7-3 3.5-3 2.5 0 4 2 4 4.5 0 3-1 4.5-1 7.5 0 3.3-2.7 6-6 6-2.5 0-4.7-1.5-5.6-3.8L4 16Z"></path></svg>
);
const BabyIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5h-1.5"></path></svg>
);
const CalculatorIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></svg>
);
const TimerIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="14" r="8"></circle><path d="M12 10v4l2.5 2.5"></path><path d="M10 2h4"></path></svg>
);
const ActivityIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);
const RefreshCwIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg>
);
const CompassIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
);
const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"></polyline></svg>
);
const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>
);
const ArrowRightLeft = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
);
const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const HistoryIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
);
const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
);
const FilterIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 5h18l-7 8.5V19l-4 2v-7.5z"></path></svg>
);

// --- Custom High-Fidelity Drug Visual SVGs (Style of Bronchodilator Device Guide) ---

// 1. Realistic Oral Tablet & Blister Graphic
const OralTabletSvg = ({ drug = {}, className = "w-11 h-11" }) => {
  const d = drug || {};
  const id = d.id || 'pill_dflt';
  const color = d.color || "#0d9488";
  const isDual = d.category === 'combo' && d.deviceType === 'pill';
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Blister foil background gradient */}
        <linearGradient id={`blister-grad-${id}`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f1f5f9" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#e2e8f0" stopOpacity="0.8" />
          <stop offset="1" stopColor="#cbd5e1" stopOpacity="0.9" />
        </linearGradient>
        {/* Tablet 3D bevel gradient */}
        <linearGradient id={`pill-grad-${id}`} x1="12" y1="16" x2="52" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="0.3" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0.85" />
        </linearGradient>
        {/* Drop shadow */}
        <filter id={`pill-shadow-${id}`} x="8" y="16" width="48" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Foil Blister Cavity Background */}
      <rect x="6" y="8" width="52" height="48" rx="8" fill={`url(#blister-grad-${id})`} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 1.5" />
      <rect x="10" y="12" width="44" height="40" rx="6" fill="#f8fafc" fillOpacity="0.6" />
      {/* Blister seals dots */}
      <circle cx="10" cy="12" r="1.5" fill="#94a3b8" />
      <circle cx="54" cy="12" r="1.5" fill="#94a3b8" />
      <circle cx="10" cy="52" r="1.5" fill="#94a3b8" />
      <circle cx="54" cy="52" r="1.5" fill="#94a3b8" />

      {/* Main Tablet Formulation Shape */}
      {isDual ? (
        // Bi-layer / Dual-combination Tablet
        <g filter={`url(#pill-shadow-${id})`}>
          <rect x="14" y="22" width="36" height="20" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <path d="M 32 22 L 40 22 C 45.5 22 50 26.5 50 32 C 50 37.5 45.5 42 40 42 L 32 42 Z" fill={color} />
          <line x1="32" y1="22" x2="32" y2="42" stroke="#64748b" strokeWidth="1" strokeDasharray="1.5 1" />
          {/* Tablet shine */}
          <path d="M 18 26 C 22 24 30 24 38 25" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>
      ) : d.classKey === 'biguanide' ? (
        // Metformin Caplet (Oblong with central score)
        <g filter={`url(#pill-shadow-${id})`}>
          <rect x="13" y="21" width="38" height="22" rx="11" fill={`url(#pill-grad-${id})`} stroke="#0f766e" strokeWidth="1.2" />
          <line x1="32" y1="21" x2="32" y2="43" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
          <path d="M 17 25 Q 32 23 45 25" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        </g>
      ) : (
        // Scored Round Tablet (SU, DPP4i, SGLT2i, TZD)
        <g filter={`url(#pill-shadow-${id})`}>
          <circle cx="32" cy="32" r="16" fill={`url(#pill-grad-${id})`} stroke="#475569" strokeWidth="1.2" />
          <line x1="32" y1="18" x2="32" y2="46" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
          {/* Debossed ring */}
          <circle cx="32" cy="32" r="11" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" fill="none" />
        </g>
      )}
    </svg>
  );
};

// 2. Realistic Prefilled Insulin & GLP-1 Pen Graphic
const InsulinPenSvg = ({ drug = {}, className = "w-11 h-11" }) => {
  const d = drug || {};
  const id = d.id || 'pen_dflt';
  const capColorMap = {
    insulin_glargine_u100: '#5b21b6', // Lantus purple
    insulin_glargine_u300: '#d97706', // Toujeo honey amber
    insulin_degludec: '#10b981',      // Tresiba mint green
    insulin_rapid: '#ea580c',         // NovoRapid orange
    insulin_premix_analog: '#d97706', // Novomix / Humalog Mix
    semaglutide_sc: '#be123c',        // Ozempic ruby red
    dulaglutide: '#0d9488',           // Trulicity teal autoinjector
    liraglutide: '#1d4ed8',           // Victoza royal blue
    soliqua: '#854d0e',               // Soliqua olive gold
    xultophy: '#0f766e',              // Xultophy olive teal
  };
  const capColor = capColorMap[d.id] || d.color || "#2563eb";

  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`pen-body-${id}`} x1="0" y1="24" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="0.5" stopColor="#e2e8f0" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Pen Body Tube */}
      <rect x="8" y="25" width="46" height="14" rx="3" fill={`url(#pen-body-${id})`} stroke="#64748b" strokeWidth="1.2" />

      {/* Colored Cap (identifying drug/insulin type) */}
      <rect x="8" y="25" width="16" height="14" rx="2" fill={capColor} stroke="#475569" strokeWidth="1" />
      {/* Pocket Clip */}
      <rect x="9" y="23" width="12" height="3" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
      <circle cx="20" cy="24.5" r="1.5" fill="#64748b" />

      {/* Clear Glass Reservoir Window */}
      <rect x="27" y="28" width="16" height="8" rx="1.5" fill="#f0fdfa" stroke="#0d9488" strokeWidth="0.8" />
      {/* Insulin Fluid meniscus & scale */}
      <line x1="31" y1="28" x2="31" y2="36" stroke="#0d9488" strokeWidth="0.7" opacity="0.6" />
      <line x1="35" y1="28" x2="35" y2="36" stroke="#0d9488" strokeWidth="0.7" opacity="0.6" />
      <line x1="39" y1="28" x2="39" y2="36" stroke="#0d9488" strokeWidth="0.7" opacity="0.6" />
      <rect x="36" y="29" width="6" height="6" rx="1" fill={capColor} opacity="0.3" />

      {/* Dose Selector Dial & Plunger Button (Right side) */}
      <rect x="46" y="26" width="6" height="12" rx="1" fill="#475569" />
      <line x1="48" y1="26" x2="48" y2="38" stroke="#cbd5e1" strokeWidth="0.8" />
      <line x1="50" y1="26" x2="50" y2="38" stroke="#cbd5e1" strokeWidth="0.8" />
      {/* Push button knob */}
      <rect x="52" y="28" width="4" height="8" rx="1" fill={capColor} stroke="#334155" strokeWidth="0.8" />

      {/* Needle Hub Tip (Left side) */}
      <path d="M 8 29.5 L 4 32 L 8 34.5 Z" fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />
      <line x1="4" y1="32" x2="1" y2="32" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
};

// 3. Realistic Insulin Vial Graphic (10 mL Vial)
const InsulinVialSvg = ({ drug = {}, className = "w-11 h-11" }) => {
  const d = drug || {};
  const id = d.id || 'vial_dflt';
  const capColor = d.id === 'insulin_short_ri' ? '#eab308' : d.id === 'insulin_nph' ? '#16a34a' : '#78350f';
  const isCloudy = d.id === 'insulin_nph' || d.id === 'insulin_premix_human';

  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`vial-glass-${id}`} x1="16" y1="18" x2="48" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#e2e8f0" stopOpacity="0.65" />
          <stop offset="1" stopColor="#cbd5e1" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Flip-off Plastic Cap */}
      <rect x="23" y="10" width="18" height="5" rx="2" fill={capColor} stroke="#475569" strokeWidth="1" />
      
      {/* Aluminum Crimp Collar & Stopper */}
      <rect x="25" y="15" width="14" height="4" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
      <rect x="28" y="14" width="8" height="2" fill="#334155" />

      {/* Vial Neck */}
      <rect x="26" y="19" width="12" height="4" fill="#cbd5e1" opacity="0.6" />

      {/* Glass Body */}
      <rect x="18" y="23" width="28" height="32" rx="4" fill={`url(#vial-glass-${id})`} stroke="#64748b" strokeWidth="1.4" />

      {/* Liquid Contents (Cloudy for NPH/Premix, Clear for RI) */}
      <rect x="20" y="32" width="24" height="21" rx="2" fill={isCloudy ? '#e2e8f0' : '#f0fdfa'} fillOpacity="0.8" />
      {isCloudy && (
        <g opacity="0.5">
          <circle cx="24" cy="38" r="1.5" fill="#94a3b8" />
          <circle cx="32" cy="44" r="1.5" fill="#94a3b8" />
          <circle cx="38" cy="36" r="1.5" fill="#94a3b8" />
          <circle cx="28" cy="48" r="1.5" fill="#94a3b8" />
          <circle cx="36" cy="48" r="1.5" fill="#94a3b8" />
        </g>
      )}

      {/* Paper Label */}
      <rect x="19" y="34" width="26" height="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
      {/* Drug identity color bar on label */}
      <rect x="19" y="34" width="4" height="14" fill={capColor} />
      {/* Text lines */}
      <line x1="25" y1="38" x2="42" y2="38" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="42" x2="38" y2="42" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="45" x2="33" y2="45" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />

      {/* Glass Highlight */}
      <path d="M 21 26 L 21 51" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
};

// Main Unified Drug Picture Dispatcher
const DrugPicture = ({ drug, className = "w-12 h-12" }) => {
  if (!drug) return null;
  if (drug.deviceType === 'vial') return <InsulinVialSvg drug={drug} className={className} />;
  if (drug.deviceType === 'pen' || drug.deviceType === 'syringe') return <InsulinPenSvg drug={drug} className={className} />;
  return <OralTabletSvg drug={drug} className={className} />;
};

const DeviceBadge = ({ type, color = "#0d9488", className = "w-8 h-8" }) => {
  if (type === 'pen' || type === 'syringe') return <InsulinPenSvg drug={{ color }} className={className} />;
  if (type === 'vial') return <InsulinVialSvg drug={{ color }} className={className} />;
  return <OralTabletSvg drug={{ color }} className={className} />;
};

// Backward-compatible aliases
const PenSvg = InsulinPenSvg;
const PillSvg = OralTabletSvg;
const VialSvg = InsulinVialSvg;


// --- Guide icons (v1.3.0): one picture per tool, used on its button and its window header ---
const guideSvg = (className, children, filled = false) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{children}</svg>
);
// Start T2D drugs: a two-colour capsule
const GuideStartIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M10.5 20.5 20.5 10.5a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
  <path d="m8.5 8.5 7 7" />
  <path d="M5.5 14.5 8 12" />
</>);
// Insulin: syringe
const GuideInsulinIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="m18 2 4 4" /><path d="m17 7 3-3" />
  <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
  <path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />
</>);
// Kidney dosing: a kidney with its ureter
const GuideKidneyIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M16 2.5c3.6 0 5.5 4.1 5.5 9.2S19.2 21 15.8 21c-3 0-5.2-2.1-5.2-4.4 0-1.7 2.6-2.3 2.6-4.8s-2.6-3.1-2.6-4.9C10.6 4.4 12.9 2.5 16 2.5Z" />
  <path d="M13.2 11.8c-2.7 0-4.7.8-5.8 3-1 2-1.8 4.8-4.4 5.7" />
</>);
// Hypoglycaemia: blood drop with a falling arrow
const GuideHypoIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M12 2.5S5.5 9.3 5.5 14a6.5 6.5 0 0 0 13 0c0-4.7-6.5-11.5-6.5-11.5Z" />
  <path d="M12 9.5v7" /><path d="m9.2 13.8 2.8 2.8 2.8-2.8" />
</>);
// DKA / HHS: IV fluid bag with drip chamber
const GuideDkaIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M12 1.5v2" />
  <rect x="6.5" y="3.5" width="11" height="11" rx="2.5" />
  <path d="M9.5 7.5h5" /><path d="M9.5 10.5h3" />
  <path d="M12 14.5v2" />
  <rect x="10.2" y="16.5" width="3.6" height="3.5" rx="1" />
  <path d="M12 20v2.5" />
</>);
// Ramadan: crescent moon and star
const GuideRamadanIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M13 3.2A8.8 8.8 0 1 0 20.8 15 7 7 0 0 1 13 3.2Z" />
  <path d="m18 3.5.8 1.7 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3 1.8-.3Z" />
</>);
// Thai Diabetes Risk Score: a risk gauge
const GuideDrsIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M3.5 17.5a8.5 8.5 0 1 1 17 0" />
  <path d="M12 17.5 16.5 11" />
  <circle cx="12" cy="17.5" r="1.3" />
  <path d="M6.2 11.6 7.4 12.6" /><path d="M12 7.5v1.6" /><path d="M3.5 17.5h2" /><path d="M18.5 17.5h2" />
</>);
// Diabetic foot: a footprint (sole and five toes)
const GuideFootIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M8.4 10.6C8.4 8.9 10.2 7.9 12.3 7.9c2.4 0 4.3 1.2 4.3 3.3 0 1.9-1.2 2.9-1.3 4.6-.1 1.8 0 3.1-.4 4.3-.5 1.5-1.8 2.3-3.1 2.3-1.7 0-2.9-1.2-2.8-3 .1-1.4 1.3-2.4 1.3-4.1 0-1.6-1.9-3.1-1.9-4.7Z" />
  <circle cx="9.4" cy="5" r="1.85" />
  <circle cx="12.7" cy="4" r="1.25" />
  <circle cx="15.1" cy="4.6" r="1.1" />
  <circle cx="17" cy="6.1" r="0.95" />
  <circle cx="18.3" cy="8" r="0.85" />
</>, true);
// Gestational diabetes: a pregnant woman in profile
const GuideGdmIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <circle cx="11" cy="4.3" r="2.4" />
  <path d="M10 7.6C8.5 8.2 8 9.9 8.2 11.8l.3 2.6c.1 1.5-.3 2.9-.3 4.5v3.1h3l.2-2.9c2.2.1 4.6-1.3 4.9-3.8.3-2.5-1.4-4.2-3.2-4.5-.2-1.1-.7-2.4-1.2-3.2Z" />
</>, true);
// Diabetes remission: a falling trend
const GuideRemissionIcon = ({ className = 'w-4 h-4' }) => guideSvg(className, <>
  <path d="M3 3v18h18" />
  <path d="m7 7 4.5 4.5 3-3 5.5 5.5" />
  <path d="M20 9.5V14h-4.5" />
</>);
