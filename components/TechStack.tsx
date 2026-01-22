
import React from "react";

const logos = [
    {
        name: "Next.js",
        svg: (
            <svg viewBox="0 0 180 180" fill="none" className="h-8 w-auto">
                <mask
                    id="mask0_next"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="180"
                    height="180"
                >
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0_next)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path
                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                        fill="white"
                    />
                    <rect x="115" y="54" width="12" height="72" fill="white" />
                </g>
            </svg>
        ),
    },
    {
        name: "Tailwind CSS",
        svg: (
            <svg viewBox="0 0 54 33" fill="none" className="h-6 w-auto">
                <g clipPath="url(#clip0_tailwind)">
                    <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
                </g>
                <defs>
                    <clipPath id="clip0_tailwind">
                        <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Shadcn",
        svg: (
            <svg viewBox="0 0 256 256" className="h-6 w-auto text-white">
                <path fill="none" d="M0 0h256v256H0z" />
                <path fill="none" stroke="currentColor" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192" />
            </svg>
        ),
    },
    {
        name: "Vercel",
        svg: (
            <svg viewBox="0 0 256 222" className="h-6 w-auto fill-white">
                <path d="m128 0 128 221.705H0z" />
            </svg>
        ),
    },
    {
        name: "Supabase",
        svg: (
            <svg viewBox="0 0 109 113" fill="none" className="h-8 w-auto">
                <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear_supabase)" />
                <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear_supabase)" fillOpacity="0.2" />
                <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
                <defs>
                    <linearGradient id="paint0_linear_supabase" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#249361" />
                        <stop offset="1" stopColor="#3ECF8E" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_supabase" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                        <stop stopOpacity="0" />
                        <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        )
    }
];

// Duplicate logos for seamless loop
const allLogos = [...logos, ...logos, ...logos, ...logos];

export default function TechStack() {
    return (
        <div className="w-full bg-black py-12 overflow-hidden relative z-30">
            {/* Gradients to fade edges */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee gap-16 items-center">
                {allLogos.map((logo, i) => (
                    <div key={i} className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-default">
                        {logo.svg}
                        <span className="text-xl font-bold font-montserrat">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
