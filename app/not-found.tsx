import Link from "next/link";
import { FadeIn } from "@/components/Animations";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white font-montserrat flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 text-center px-6">
                <FadeIn delay={0.1}>
                    <h1 className="font-hanken font-bold text-9xl md:text-[12rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-800">
                        404
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    <h2 className="font-hanken font-bold text-2xl md:text-4xl mt-4 mb-6">
                        Page Not Found
                    </h2>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                    <p className="text-neutral-400 text-lg max-w-md mx-auto mb-10">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </FadeIn>

                <FadeIn delay={0.7} direction="up">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
                    >
                        Go Back Home
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
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
}
