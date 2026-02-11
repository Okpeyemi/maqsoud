import Link from "next/link";
import { FadeIn, StaggerContainer } from "./Animations";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-black py-16 md:py-24 px-6 border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto text-center">
        <FadeIn direction="up">
          <h2 className="font-hanken font-bold text-4xl lg:text-6xl text-white mb-6">
            Let's Connect
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="font-montserrat text-neutral-400 text-lg max-w-2xl mx-auto mb-16">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Block */}
          <FadeIn direction="up" delay={0.3}>
            <Link
              href="mailto:maqsoudt9@gmail.com"
              className="group bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/60 hover:border-orange-500/50 transition-all duration-300 flex flex-col items-center gap-4 h-full"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white group-hover:text-orange-500 transition-colors"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="font-hanken font-bold text-2xl text-white">
                Email
              </h3>
              <span className="font-montserrat text-neutral-400 group-hover:text-white transition-colors">
                maqsoudt9@gmail.com
              </span>
            </Link>
          </FadeIn>

          {/* Keybase / LinkedIn Block */}
          <FadeIn direction="up" delay={0.4}>
            <Link
              href="https://linkedin.com/in/maqsoud-tawaliou"
              target="_blank"
              className="group bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/60 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center gap-4 h-full"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white group-hover:text-blue-500 transition-colors"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3 className="font-hanken font-bold text-2xl text-white">
                LinkedIn
              </h3>
              <span className="font-montserrat text-neutral-400 group-hover:text-white transition-colors">
                Maqsoud Tawaliou
              </span>
            </Link>
          </FadeIn>

          {/* GitHub Block */}
          <FadeIn direction="up" delay={0.5}>
            <Link
              href="https://github.com/Okpeyemi"
              target="_blank"
              className="group bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/60 hover:border-white/50 transition-all duration-300 flex flex-col items-center gap-4 h-full"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white group-hover:text-white transition-colors"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <h3 className="font-hanken font-bold text-2xl text-white">
                GitHub
              </h3>
              <span className="font-montserrat text-neutral-400 group-hover:text-white transition-colors">
                @Okpeyemi
              </span>
            </Link>
          </FadeIn>
        </StaggerContainer>

        {/* LinkedIn Badge */}
        {/* <FadeIn delay={0.6} direction="up">
          <div
            className="badge-base LI-profile-badge"
            data-locale="fr_FR"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="maqsoud-tawaliou"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://bj.linkedin.com/in/maqsoudtawaliou?trk=profile-badge"
            >
              Maqsoud TAWALIOU
            </a>
          </div>
        </FadeIn> */}
      </div>
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-red-900/20 to-transparent blur-[120px] pointer-events-none"></div>
    </section>
  );
}
