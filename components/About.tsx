import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="w-full bg-black py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">
                {/* Left Column (Spacer/Decorational - optional) */}
                <div className="hidden lg:block lg:w-1/3"></div>

                {/* Right Column (Content) */}
                <div className="lg:w-2/3 flex flex-col items-start lg:items-end text-left lg:text-right gap-8 z-10">
                    <h2 className="font-hanken font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight">
                        Crafting Meaningful <br />
                        Brands & Intuitive <br />
                        Digital Experiences <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">
                            Stand Out
                        </span>
                    </h2>

                    <p className="font-montserrat text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
                        I'm Maqsoud, a Paris-based AI Developer and UI/UX enthusiast geared about creating visually compelling identities and seamless digital experiences. With a strategic approach and a keen eye for detail, I help businesses stand out and connect with their audience. Let's create something remarkable together.
                    </p>

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
                </div>
            </div>

            {/* Background subtle gradient element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
