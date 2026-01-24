"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FadeIn, StaggerContainer } from "./Animations";

interface Commit {
    sha: string;
    commit: {
        message: string;
        author: {
            name: string;
            date: string;
        };
    };
    html_url: string;
}

export default function GitHubActivity() {
    const [commits, setCommits] = useState<Commit[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totalContributions, setTotalContributions] = useState<number>(0);
    const [selectedYear, setSelectedYear] = useState<number | "last">("last");
    const [currentCommitIndex, setCurrentCommitIndex] = useState(0);
    const years = [2026, 2025, 2024];

    // Fetch latest commits once (independent of year filter)
    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/repos/Okpeyemi/maqsoud/commits?per_page=5"
                );
                if (response.ok) {
                    const data = await response.json();
                    setCommits(data);
                }
            } catch (error) {
                console.error("Error fetching commits:", error);
                // Keep empty or previous state
            }
        };
        fetchCommits();
    }, []);

    // Fetch contributions based on selected year
    useEffect(() => {
        const fetchContributions = async () => {
            setLoading(true);
            try {
                const queryYear = selectedYear === "last" ? "last" : selectedYear;
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/Okpeyemi?y=${queryYear}`
                );
                if (response.ok) {
                    const data = await response.json();
                    if (data.total) {
                        // If 'last', usually returns key 'lastYear' or similar, we try to be robust
                        // API v4 returns e.g. { "2024": 123, "lastYear": 456 }
                        const total = selectedYear === "last"
                            ? (data.total.lastYear || Object.values(data.total)[0] || 0)
                            : (data.total[selectedYear] || 0);

                        setTotalContributions(total as number);
                    }
                }
            } catch (err) {
                console.error("Error fetching contributions:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, [selectedYear]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <section id="github-activity" className="w-full bg-black py-16 md:py-24 px-6 border-t border-neutral-900 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-md:text-center">
                        <FadeIn direction="up">
                            <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-4">
                                Dev Log
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up">
                            <p className="font-montserrat text-neutral-400 text-lg max-w-xl">
                                Tracking my latest code contributions and updates.
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.3} direction="left">
                        <Link
                            href="https://github.com/Okpeyemi/maqsoud"
                            target="_blank"
                            className="text-white hover:text-orange-500 font-hanken font-bold text-lg transition-colors flex items-center gap-2 group"
                        >
                            View Repository
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
                                className="group-hover:translate-x-1 transition-transform"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </FadeIn>
                </div>

                {/* Contribution Graph */}
                <FadeIn direction="up" delay={0.4}>
                    <div className="mb-12 bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 md:p-8 overflow-x-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white font-hanken font-bold text-xl">Contribution Calendar</h3>
                                {totalContributions > 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-orange-500 font-bold font-hanken text-lg">{totalContributions}</span>
                                        <span className="text-neutral-400 text-sm font-montserrat">contributions in {selectedYear}</span>
                                    </div>
                                )}
                            </div>

                            {/* Year Filter */}
                            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg p-1">
                                <button
                                    onClick={() => setSelectedYear("last")}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedYear === "last"
                                        ? "bg-neutral-800 text-white shadow-sm"
                                        : "text-neutral-400 hover:text-white"
                                        }`}
                                >
                                    Global
                                </button>
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => setSelectedYear(year)}
                                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedYear === year
                                            ? "bg-neutral-800 text-white shadow-sm"
                                            : "text-neutral-400 hover:text-white"
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="min-w-[800px]">
                            <img
                                src={`https://ghchart.rshah.org/f97316/Okpeyemi`}
                                alt="GitHub Contribution Graph"
                                className="w-full opacity-80"
                            />
                        </div>
                        <p className="text-neutral-500 text-sm mt-4 font-montserrat">
                            * Graph displays contribution activity for: <span className="text-white font-medium">{selectedYear === "last" ? "Last Year" : selectedYear}</span>.
                        </p>
                    </div>
                </FadeIn>

                {/* Desktop View (Grid) */}
                <StaggerContainer className="hidden lg:grid grid-cols-1 gap-4">
                    {commits.map((commit, index) => (
                        <FadeIn
                            key={commit.sha}
                            direction="up"
                        >
                            <Link
                                href={commit.html_url}
                                target="_blank"
                                className="block group"
                            >
                                <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group-hover:bg-neutral-900/50 group-hover:border-neutral-700 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="4"></circle>
                                                <line x1="1.05" y1="12" x2="7" y2="12"></line>
                                                <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white font-hanken font-medium text-lg group-hover:text-orange-500 transition-colors">
                                                {commit.commit.message}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono mt-1">
                                                <span>{commit.sha.substring(0, 7)}</span>
                                                <span>•</span>
                                                <span>{commit.commit.author.name}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-neutral-500 font-montserrat text-sm whitespace-nowrap">
                                        {formatDate(commit.commit.author.date)}
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </StaggerContainer>

                {/* Mobile View (Carousel) */}
                <div className="lg:hidden relative">
                    {commits.length > 0 && (
                        <FadeIn direction="up">
                            <div className="relative">
                                <Link
                                    href={commits[currentCommitIndex].html_url}
                                    target="_blank"
                                    className="block group"
                                >
                                    <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 group-hover:bg-neutral-900/50 group-hover:border-neutral-700 transition-all min-h-[180px]">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="4"></circle>
                                                    <line x1="1.05" y1="12" x2="7" y2="12"></line>
                                                    <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-hanken font-medium text-lg group-hover:text-orange-500 transition-colors line-clamp-2">
                                                    {commits[currentCommitIndex].commit.message}
                                                </p>
                                                <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono mt-1">
                                                    <span>{commits[currentCommitIndex].sha.substring(0, 7)}</span>
                                                    <span>•</span>
                                                    <span>{commits[currentCommitIndex].commit.author.name}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-neutral-500 font-montserrat text-sm border-t border-neutral-800 pt-4 mt-auto">
                                            {formatDate(commits[currentCommitIndex].commit.author.date)}
                                        </div>
                                    </div>
                                </Link>

                                {/* Navigation Arrows */}
                                <div className="flex justify-between items-center mt-4 px-2">
                                    <button
                                        onClick={() => setCurrentCommitIndex(prev => prev > 0 ? prev - 1 : commits.length - 1)}
                                        className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:text-orange-500 transition-all font-bold"
                                        aria-label="Previous commit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <span className="text-sm font-mono text-neutral-500">
                                        {currentCommitIndex + 1} / {commits.length}
                                    </span>
                                    <button
                                        onClick={() => setCurrentCommitIndex(prev => prev < commits.length - 1 ? prev + 1 : 0)}
                                        className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:text-orange-500 transition-all font-bold"
                                        aria-label="Next commit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </div>
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-900/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
