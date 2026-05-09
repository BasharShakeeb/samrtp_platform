export function SaudiSkyline() {
  return (
    <div className="relative w-full h-32 sm:h-40 opacity-20">
      <svg
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Kingdom Tower (Jeddah Tower style) */}
        <path
          d="M100 200 L100 80 L110 20 L120 80 L120 200 Z"
          className="fill-primary"
        />
        
        {/* Al Faisaliyah Tower */}
        <path
          d="M180 200 L180 100 L190 60 L200 100 L200 200 Z"
          className="fill-secondary"
        />
        <circle cx="190" cy="70" r="8" className="fill-secondary" />
        
        {/* Kingdom Centre */}
        <path
          d="M280 200 L280 70 L290 70 L295 50 L300 70 L310 70 L310 200 Z"
          className="fill-primary"
        />
        <ellipse cx="295" cy="90" rx="10" ry="15" className="fill-background" />
        
        {/* Modern buildings cluster */}
        <rect x="380" y="120" width="30" height="80" className="fill-primary/70" />
        <rect x="420" y="90" width="25" height="110" className="fill-secondary/70" />
        <rect x="455" y="130" width="20" height="70" className="fill-primary/50" />
        
        {/* Riyadh skyline buildings */}
        <rect x="520" y="100" width="35" height="100" className="fill-primary/80" />
        <rect x="565" y="80" width="25" height="120" className="fill-secondary/80" />
        <rect x="600" y="110" width="30" height="90" className="fill-primary/60" />
        
        {/* Clock Tower (Makkah style) */}
        <path
          d="M700 200 L700 60 L720 60 L720 40 L730 30 L740 40 L740 60 L760 60 L760 200 Z"
          className="fill-primary"
        />
        <rect x="715" y="50" width="30" height="25" className="fill-secondary" />
        
        {/* Modern towers */}
        <rect x="820" y="90" width="25" height="110" className="fill-secondary/70" />
        <rect x="855" y="110" width="20" height="90" className="fill-primary/70" />
        <rect x="885" y="130" width="30" height="70" className="fill-secondary/50" />
        
        {/* KAFD buildings */}
        <path
          d="M960 200 L960 70 L980 50 L1000 70 L1000 200 Z"
          className="fill-primary/80"
        />
        <rect x="1030" y="100" width="25" height="100" className="fill-secondary/70" />
        <rect x="1065" y="80" width="20" height="120" className="fill-primary/60" />
        
        {/* Palm trees silhouettes */}
        <g className="fill-secondary/40">
          <path d="M150 200 L155 180 L160 200 Z" />
          <ellipse cx="155" cy="175" rx="12" ry="8" />
          
          <path d="M350 200 L355 180 L360 200 Z" />
          <ellipse cx="355" cy="175" rx="12" ry="8" />
          
          <path d="M650" y="200" d="M650 200 L655 180 L660 200 Z" />
          <ellipse cx="655" cy="175" rx="12" ry="8" />
          
          <path d="M1120 200 L1125 180 L1130 200 Z" />
          <ellipse cx="1125" cy="175" rx="12" ry="8" />
        </g>
        
        {/* Ground line */}
        <line x1="0" y1="200" x2="1200" y2="200" className="stroke-primary/30" strokeWidth="2" />
      </svg>
    </div>
  )
}
