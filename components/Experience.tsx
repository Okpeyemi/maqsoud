import { FadeIn, StaggerContainer } from "./Animations";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            period: "December 2025 - Present",
            role: "Cohezi",
            company: "Gemini 3 Hackathon",
            description:
                "Development, for the purpose of the Gemini 3 hackathon, of a cognitive evaluation engine designed to dissect, stress-test, and visualize the structure of human reasoning behind a decision, using Gemini 3 Flash and Pro.",
            skills: ["Next.js", "Firebase", "Google AI", "Gemini 3 Flash", "Gemini 3 Pro"],
        },
        {
            id: 2,
            period: "May 2025",
            role: "Founder & Lead Engineer",
            company: "Negoce AI (SaaS)",
            description:
                "Designed an AI tool optimized for negotiation. Built frontend with Next.js and Supabase, dynamic content management, and software architecture.",
            skills: ["Next.js", "Supabase", "AI Agents", "Architecture", "SaaS"],
        },
        {
            id: 3,
            period: "Mar 2025 - Present",
            role: "Founder & Full Stack Developer",
            company: "SpotMeUp (SaaS)",
            description:
                "Conception of a portfolio creation platform for professionals. Frontend with Next.js, Backend, and dynamic content management. Software architecture, automation, and UI/UX via Figma.",
            skills: ["Next.js", "Backend Design", "Figma", "Automation", "SaaS"],
        },
        {
            id: 4,
            period: "Nov 2024 - Mar 2025",
            role: "Full Stack Developer",
            company: "Trinity (E-commerce)",
            description:
                "Complete project planning on Azure DevOps: backlog, hourly loads, costs. Stack: NestJS, Next.js, React Native, TailwindCSS. UI Design via Figma. REST Architecture.",
            skills: ["Azure DevOps", "NestJS", "Next.js", "React Native", "TailwindCSS", "Figma"],
        },
        {
            id: 5,
            period: "Oct 2024",
            role: "Backend Developer",
            company: "Time Manager",
            description:
                "Time management application built with Elixir, VueJS, and Docker. UI Design via Figma.",
            skills: ["Elixir", "Vue.js", "Docker", "Figma"],
        },
        {
            id: 6,
            period: "2024",
            role: "Software Architect",
            company: "Myah IT Company (Project IWE)",
            description:
                "Conception of UML diagrams and modeling of the structure for a platform managing professors, subjects, and university courses.",
            skills: ["UML", "System Modeling", "Architecture", "Education Tech"],
        },
    ];

    return (
        <section id="experience" className="w-full bg-black py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
                    {/* Header Column */}
                    <div className="md:w-1/3 flex-shrink-0">
                        <div className="sticky top-24 max-md:text-center">
                            <FadeIn direction="right">
                                <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-6">
                                    Work <br /> Experience
                                </h2>
                            </FadeIn>
                            <FadeIn delay={0.2} direction="right">
                                <p className="font-montserrat text-neutral-400 text-lg max-w-sm">
                                    My professional journey and the companies I've had the privilege to work with.
                                </p>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Timeline Column */}
                    <StaggerContainer className="md:w-2/3 flex flex-col gap-12 border-l border-neutral-800 pl-9 md:pl-17 relative">
                        {experiences.map((exp) => (
                            <FadeIn key={exp.id} direction="left" className="relative group">
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
                            </FadeIn>
                        ))}
                    </StaggerContainer>
                </div>
                {/* Background Gradient - Orange tint */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            </div>
        </section >
    );
}
