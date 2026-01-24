"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FadeIn } from "./Animations";

export default function Hero() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-montserrat relative overflow-hidden flex flex-col">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 container mx-auto">
                <div className="flex w-full items-center justify-between gap-3 bg-neutral-900/50 px-6 py-4 rounded-full border border-neutral-800 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                        <span className="font-hanken font-medium">Maqsoud</span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="ml-4 p-1 hover:bg-neutral-800 rounded-full transition-colors relative z-50"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`font-hanken font-bold text-4xl md:text-6xl text-white hover:text-orange-500 transition-all duration-300 transform translate-y-0 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <main className="flex-1 w-full container mx-auto px-6 md:px-10 relative h-full flex flex-col justify-end pb-0">

                {/* FOREGROUND CONTENT (Z-20) */}
                {/* "Le tout dans une div au dessus de l'image" */}
                <div className="relative z-20 mb-20 flex flex-col w-full h-full pointer-events-none">

                    {/* Top Section: Title Left / Bio Right in justify-between */}
                    <div className="flex-1 container mx-auto w-full flex flex-col lg:flex-row justify-between items-center lg:items-end px-6 pb-12 w-full mt-20 lg:mt-0 pointer-events-auto">

                        {/* Left Content */}
                        <div className="flex flex-col items-start gap-8 mb-10 lg:mb-0 max-md:items-center">
                            <FadeIn delay={0.2} direction="right">
                                <div className="inline-flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-800 w-fit backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-sm text-neutral-300 whitespace-nowrap">Available for Work</span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4} direction="up">
                                <h1 className="font-hanken text-5xl lg:text-7xl font-bold leading-[1.1] max-md:text-center">
                                    AI Developer <br />
                                    <span className="text-neutral-400">based in Benin</span>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.6} direction="up">
                                <Link
                                    href="#projects"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105"
                                >
                                    <div className="w-8 h-8 text-orange-600 bg-white rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </div>
                                    See my works
                                </Link>
                            </FadeIn>
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col justify-end text-left lg:text-right max-w-sm max-md:text-center">
                            <FadeIn delay={0.8} direction="left">
                                <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed">
                                    Hi, I'm Maqsoud. <br />
                                    An AI developer passionate about creating seamless digital experiences that connect and inspire.
                                </p>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Bottom Section: Maqsoud Typography */}
                    {/* "En dessous" */}
                    <div className="max-lg:hidden container flex justify-center mt-auto">
                        <FadeIn delay={1.0} direction="up" className="translate-y-[5%]">
                            <span className="font-hanken font-bold text-[18vw] leading-[0.7] text-neutral-100 opacity-80 tracking-normal mix-blend-overlay">
                                Maqsoud
                            </span>
                        </FadeIn>
                    </div>
                </div>

                {/* BACKGROUND IMAGE (Z-10) */}
                {/* "qui sera centré en fond" */}
                <div className="absolute inset-x-0 top-0 lg:top-20 h-[75vh] lg:h-[80vh] z-10 flex items-end justify-center pointer-events-none">
                    {/* Background Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/60 rounded-full blur-3xl z-0 mix-blend-screen"></div>

                    <Image
                        src="/maqsoud2.png"
                        alt="Maqsoud"
                        fill
                        className="object-contain object-bottom  relative z-10"
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        priority
                    />

                    {/* Gradient Fade to Black */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
                </div>

            </main>
        </div>
    );
}
