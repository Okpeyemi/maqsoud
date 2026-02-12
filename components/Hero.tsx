import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./Animations";

export default function Hero() {
    return (
        <div className="min-h-screen bg-black text-white font-montserrat relative overflow-hidden flex flex-col">

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
                                    Agentic <br />
                                    <span className="text-neutral-400">Engineer</span>
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
                                    An agentic engineer passionate about creating seamless digital experiences that connect and inspire.
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
