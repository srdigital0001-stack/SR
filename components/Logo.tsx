import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'h-10 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-24 w-auto'
  };

  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      <div className={`${dimensions[size]} flex items-center justify-center`}>
        <svg 
          viewBox="0 0 320 120" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB347" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>
            <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
              <feOffset dx="0" dy="1" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Top Arc */}
          <path 
            d="M90 35 Q160 5 230 35" 
            stroke="url(#arcGradient)" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round"
            className="group-hover:opacity-80 transition-opacity duration-300"
          />

          {/* SR DIGITAL Main Text */}
          <text 
            x="160" 
            y="85" 
            textAnchor="middle" 
            fill="#1D4477" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 900, 
              fontSize: '48px',
              letterSpacing: '-1px'
            }}
            filter="url(#textGlow)"
          >
            SR DIGITAL
          </text>

          {/* DIGITAL MARKETING AGENCY Subtext */}
          <text 
            x="160" 
            y="110" 
            textAnchor="middle" 
            fill="#7F8C8D" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 600, 
              fontSize: '12px',
              letterSpacing: '5px',
              fontStyle: 'italic',
              textTransform: 'uppercase'
            }}
          >
            DIGITAL MARKETING AGENCY
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Logo;