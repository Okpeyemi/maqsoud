import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "./Animations";

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "The Future of AI Agents in 2026",
            category: "Artificial Intelligence",
            date: "Oct 12, 2025",
            image: "/web-developement.png", // Placeholder
            link: "#",
        },
        {
            id: 2,
            title: "Optimizing Next.js for Maximum Performance",
            category: "Development",
            date: "Sep 28, 2025",
            image: "/web-developement.png", // Placeholder
            link: "#",
        },
        {
            id: 3,
            title: "Mastering Tailwind CSS v4: What's New?",
            category: "Design Systems",
            date: "Sep 15, 2025",
            image: "/web-developement.png", // Placeholder
            link: "#",
        },
    ];

    return (
        <section id="blog" className="w-full bg-black py-16 md:py-24 px-6 border-t border-neutral-900 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <FadeIn direction="up">
                            <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-4">
                                Latest Insights
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up">
                            <p className="font-montserrat text-neutral-400 text-lg max-w-xl">
                                Thoughts on technology, design, and the future of digital product development.
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.4} direction="left">
                        <Link
                            href="#"
                            className="text-white hover:text-orange-500 font-hanken font-bold text-lg transition-colors flex items-center gap-2 group"
                        >
                            Read all articles
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

                {/* Blog Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <FadeIn
                            key={post.id}
                            direction="up"
                        >
                            <Link href={post.link} className="group flex flex-col gap-6">
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-4 text-sm font-medium">
                                        <span className="text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-neutral-500 font-montserrat">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="font-hanken font-bold text-2xl text-white leading-tight group-hover:text-orange-500 transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
        </section>
    );
}
