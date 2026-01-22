import Image from "next/image";

export default function Services() {
    const services = [
        {
            id: "01",
            title: "AI Engineering & Integration",
            description:
                "Leveraging the power of LLMs and generative AI to build smart assistants, RAG pipelines, and automation workflows that drive business value.",
            image: "/ai-engineering.png",
        },
        {
            id: "02",
            title: "Full Stack Web Development",
            description:
                "Building robust, high-performance, and scalable web applications using modern frameworks like Next.js, React, and Supabase.",
            image: "/web-developement.png",
        },
        {
            id: "03",
            title: "UI/UX Engineering",
            description:
                "Bridging the gap between design and code with pixel-perfect implementation, fluid animations, and responsive layouts that delight users.",
            image: "/ui-ux-engineering.png",
        },
    ];

    return (
        <section id="services" className="w-full bg-black py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white leading-[1.1] max-w-xl">
                        Design Solutions That <br />
                        Elevate Your Brand
                    </h2>
                    <p className="font-montserrat text-neutral-400 text-lg leading-relaxed max-w-xl">
                        From strategy to execution, I provide tailored technological services that help businesses stand out and create meaningful connections. Whether you need a sophisticated AI system, a seamless web platform, or creative technical direction, I've got you covered.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 lg:p-8 flex flex-col gap-6 hover:border-neutral-700 transition-colors group overflow-hidden"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-hanken font-medium text-5xl lg:text-6xl text-orange-500 block">
                                    {service.id}
                                </span>
                            </div>

                            <div className="w-full rounded-xl overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={1000}
                                    height={600}
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="font-hanken font-bold text-2xl text-white group-hover:text-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="font-montserrat text-neutral-400 leading-relaxed text-sm lg:text-base">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
