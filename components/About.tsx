import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./Animations";

export default function About() {
    return (
        <section id="about" className="w-full bg-black py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center">
                {/* Left Column (Image) */}
                <div className="lg:w-2/3 mb-12 lg:mb-0">
                    <FadeIn direction="right">
                        <div className="relative w-full max-w-[1000px] mx-auto">
                            <Image
                                src="/crafting.png"
                                alt="Crafting digital experiences"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column (Content) */}
                <div className="lg:w-2/3 flex flex-col items-start lg:items-end text-left lg:text-right gap-8 z-10  max-md:items-center">
                    <FadeIn direction="up">
                        <h2 className="font-hanken font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight max-md:text-center">
                            Crafting Meaningful <br />
                            Brands & Intuitive <br />
                            Digital Experiences <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">
                                Stand Out
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <p className="font-montserrat text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl max-md:text-center">
                            I'm Maqsoud, an Agentic Engineer and UI/UX enthusiast geared about creating visually compelling identities and seamless digital experiences. With a strategic approach and a keen eye for detail, I help businesses stand out and connect with their audience. Let's create something remarkable together.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 pl-6 pr-8 py-4 rounded-full font-bold text-lg text-white hover:opacity-90 transition-all hover:scale-105"
                        >
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
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
            </div>

            {/* Background subtle gradient element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
