import React from 'react';

const AnimatedArchitecturalIcon = () => (
    <svg
        className="w-32 h-32 text-gray-400 mb-8 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        strokeWidth={0.5}
        stroke="currentColor"
        aria-hidden="true"
    >
        <g className="animated-icon">
            {/* Outer structure */}
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M20,80 L20,30 L50,10 L80,30 L80,80 Z" />
            {/* Roof lines */}
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M20,30 L80,30" />
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M50,10 L50,30" />
            {/* Inner details (door) */}
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M40,80 L40,50 L60,50 L60,80" />
            {/* Compass rose lines for blueprint feel */}
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M50,5 L50,0 M50,100 L50,95 M5,50 L0,50 M100,50 L95,50" />
        </g>
    </svg>
);

export default AnimatedArchitecturalIcon;