import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "AI Chat Assistant",
            description:
                "A sophisticated RAG methods chatbot capable of context-aware conversations and document analysis. Built with Next.js, OpenAI API, and Pinecone vector database.",
            image: "/web-developement.png", // Placeholder image
            link: "#",
        },
        {
            id: 2,
            title: "SaaS Analytics Dashboard",
            description:
                "A comprehensive analytics dashboard for SaaS businesses featuring real-time data visualization, user management, and subscription tracking.",
            image: "/web-developement.png", // Placeholder image
            link: "#",
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description:
                "A modern, high-performance e-commerce solution with headless CMS integration, secure payments, and an optimized checkout flow.",
            image: "/web-developement.png", // Placeholder image
            link: "#",
        },
        {
            id: 4,
            title: "Portfolio V1",
            description:
                "An immersive creative developer portfolio showcasing interactive 3D elements, smooth page transitions, and a unique visual identity.",
            image: "/web-developement.png", // Placeholder image
            link: "#",
        },
    ];

    return (
        <section className="w-full bg-black py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-6">
                        Selected Projects
                    </h2>
                    <p className="font-montserrat text-neutral-400 text-lg max-w-2xl">
                        A small gallery of recent projects chosen by me. I've done them all
                        together with amazing people from companies around the globe.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-neutral-900/30 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Button */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                                <div className="lg:hidden"> {/* Mobile-only persistent button/link indicator if needed, though card is usually clickable */}
                                    <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">View Details &rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 border border-neutral-700 text-white font-montserrat font-medium px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
