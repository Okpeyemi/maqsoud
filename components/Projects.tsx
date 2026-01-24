"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { StaggerContainer, cardVariants, FadeIn } from "./Animations";
import { motion } from "framer-motion";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<"client" | "personal">("client");

    const clientProjects = [
        // {
        //     id: 1,
        //     title: "Iris Voyance",
        //     description: "A website for Iris Voyance, a psychic and astrological voyance.",
        //     image: "/projets/client-1.png",
        //     link: "https://iris-voyance.vercel.app/",
        //     category: "client",
        // },
        {
            id: 2,
            title: "Kotenou",
            description: "A professional platform for Kotenou, a cleaning company.",
            image: "/projets/client-2.png",
            link: "http://kotenou.vercel.app/",
            category: "client",
        },
        {
            id: 3,
            title: "Pierre Yves Chicot",
            description: "Lawyer website for Pierre Yves Chicot.",
            image: "/projets/client-3.png",
            link: "https://pierreyveschicot.com/",
            category: "client",
        },
        {
            id: 4,
            title: "Flow GP",
            description: "Corporate website for Flow GP, a digital services company.",
            image: "/projets/client-4.png",
            link: "https://flowgp.fr/",
            category: "client",
        },
        {
            id: 5,
            title: "Genesis Lake",
            description: "Interactive website for Genesis, highlighting immobiliare services.",
            image: "/projets/client-5.png",
            link: "https://genesis-website-lake.vercel.app/",
            category: "client",
        },
        {
            id: 6,
            title: "DOM Enfance Famille",
            description: "Platform dedicated to childhood and family services, focusing on accessibility and clear information.",
            image: "/projets/client-6.png",
            link: "https://dom-enfance-famille.vercel.app/",
            category: "client",
        },
    ];

    const personalProjects = [
        {
            id: 7,
            title: "SpotMeUp",
            description: "A SaaS platform for portfolio creation.",
            image: "/projets/perso-1.png",
            link: "https://spotmeup.vercel.app/",
            category: "personal",
        },
        {
            id: 8,
            title: "Finset",
            description: "Financial management tool allowing users to track expenses and manage budgets effectively.",
            image: "/projets/perso-2.png",
            link: "https://finset-phi.vercel.app/",
            category: "personal",
        },
        {
            id: 9,
            title: "NegoceIA",
            description: "AI-powered platform for negotiating and closing deals.",
            image: "/projets/perso-3.png",
            link: "https://negoce-ia.vercel.app/",
            category: "personal",
        },
        {
            id: 10,
            title: "Alcentric",
            description: "The ultimate tool to guide your navigator using your voice.",
            image: "/projets/perso-4.png",
            link: "https://alcentric.vercel.app/",
            category: "personal",
        },
        {
            id: 11,
            title: "Bunkle",
            description: "A SaaS platform for storing and sharing .env files.",
            image: "/projets/perso-5.png",
            link: "https://www.bunkle.online/",
            category: "personal",
        },
        {
            id: 12,
            title: "Andunu",
            description: "A platform for food planning and ordering.",
            image: "/projets/perso-6.png",
            link: "https://andunu.com",
            category: "personal",
        },
        {
            id: 13,
            title: "Dress In An Art",
            description: "A platform for ordering custom-made and bespoke clothing.",
            image: "/projets/perso-7.png",
            link: "https://dressinanart.vercel.app/",
            category: "personal",
        },
        {
            id: 14,
            title: "Miwa Software",
            description: "A SaaS platform for an entry/exit management system.",
            image: "/projets/perso-8.png",
            link: "https://miwa.software",
            category: "personal",
        },
    ];

    const [visibleCount, setVisibleCount] = useState(4);

    // Reset visible count when switching tabs
    const handleTabChange = (tab: "client" | "personal") => {
        setActiveTab(tab);
        setVisibleCount(4);
    };

    const allDisplayedProjects = activeTab === "client" ? clientProjects : personalProjects;
    const displayedProjects = allDisplayedProjects.slice(0, visibleCount);

    return (
        <section id="projects" className="w-full bg-black py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-16 max-md:text-center">
                    <FadeIn direction="up">
                        <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-6">
                            Selected Projects
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up">
                        <p className="font-montserrat text-neutral-400 text-lg max-w-2xl mb-8">
                            A small gallery of recent projects chosen by me. I've done them all
                            together with amazing people from companies around the globe.
                        </p>
                    </FadeIn>

                    {/* Tabs */}
                    <FadeIn delay={0.3} direction="up">
                        <div className="flex items-center gap-2 bg-neutral-900/50 p-1 rounded-full w-fit border border-neutral-800 max-md:mx-auto">
                            <button
                                onClick={() => handleTabChange("client")}
                                className={`px-6 py-2 rounded-full font-hanken font-medium transition-all duration-300 ${activeTab === "client"
                                    ? "bg-neutral-800 text-white shadow-sm"
                                    : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                Client Projects
                            </button>
                            <button
                                onClick={() => handleTabChange("personal")}
                                className={`px-6 py-2 rounded-full font-hanken font-medium transition-all duration-300 ${activeTab === "personal"
                                    ? "bg-neutral-800 text-white shadow-sm"
                                    : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                Personal Projects
                            </button>
                        </div>
                    </FadeIn>
                </div>

                {/* Projects Grid */}
                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[400px]">
                    {displayedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="group bg-neutral-900/30 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-neutral-900/10 z-10"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${project.category === 'client'
                                        ? 'bg-orange-500/20 border-orange-500/50 text-orange-200'
                                        : 'bg-blue-500/20 border-blue-500/50 text-blue-200'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>

                                {/* Overlay Button */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                                    <Link
                                        href={project.link}
                                        className="bg-white text-black font-hanken font-bold px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="font-hanken font-bold text-2xl lg:text-3xl text-white mb-3 group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-montserrat text-neutral-400 text-sm lg:text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="lg:hidden">
                                    <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
                                        View Details &rarr;
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* View All Projects Button */}
                {allDisplayedProjects.length > 4 && (
                    <FadeIn delay={0.2} direction="up">
                        <div className="mt-16 flex justify-center">
                            <button
                                onClick={() => setVisibleCount(prev => prev === 4 ? allDisplayedProjects.length : 4)}
                                className="inline-flex items-center gap-2 border border-neutral-700 text-white font-montserrat font-medium px-8 py-3 rounded-full hover:bg-neutral-800 transition-all hover:scale-105"
                            >
                                {visibleCount === 4 ? "View All Projects" : "Show Less"}
                            </button>
                        </div>
                    </FadeIn>
                )}
            </div>

            {/* Background Gradient */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
