export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-8 border-t border-neutral-900">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-montserrat text-neutral-500 text-sm">
                    &copy; {currentYear} Maqsoud. All rights reserved.
                </p>

                <p className="font-montserrat text-neutral-600 text-sm flex items-center gap-1">
                    Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span>
                </p>
            </div>
        </footer>
    );
}
