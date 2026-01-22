export default function Experience() {
    const experiences = [
        {
            id: 1,
            period: "2024 - Present",
            role: "Senior AI Engineer",
            company: "Tech Innovations Inc.",
            description:
                "Leading the development of generative AI solutions, optimizing LLM inference pipelines, and architecting scalable RAG systems for enterprise clients.",
            skills: ["Python", "PyTorch", "LangChain", "AWS", "FastAPI"],
        },
        {
            id: 2,
            period: "2022 - 2024",
            role: "Full Stack Developer",
            company: "Creative Studio",
            description:
                "Built and maintained high-performance web applications using Next.js and React. Collaborated with design teams to implement pixel-perfect UIs and complex animations.",
            skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
        },
        {
            id: 3,
            period: "2020 - 2022",
            role: "Frontend Developer",
            company: "Digital Agency",
            description:
                "Developed responsive websites and e-commerce platforms. Improved site performance and SEO scores, resulting in increased user engagement.",
            skills: ["React", "JavaScript", "SCSS", "Shopify", "Vercel"],
        },
    ];

    return (
        <section className="w-full bg-black py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
                    {/* Header Column */}
                    <div className="md:w-1/3 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-6">
                                Work <br /> Experience
                            </h2>
                            <p className="font-montserrat text-neutral-400 text-lg max-w-sm">
                                My professional journey and the companies I've had the privilege to work with.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Column */}
                    <div className="md:w-2/3 flex flex-col gap-12 border-l border-neutral-800 pl-8 md:pl-17 relative">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[45px] md:-left-[77px] top-2 w-4 h-4 rounded-full bg-neutral-800 border-2 border-black group-hover:bg-orange-500 transition-colors duration-300"></div>

                                <span className="font-mono text-orange-500 font-medium text-sm mb-2 block">
                                    {exp.period}
                                </span>

                                <h3 className="font-hanken font-bold text-3xl text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
                                    {exp.role}
                                </h3>

                                <div className="font-hanken text-xl text-neutral-400 mb-4 font-medium">
                                    {exp.company}
                                </div>

                                <p className="font-montserrat text-neutral-400 leading-relaxed mb-6 max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
