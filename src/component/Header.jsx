import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img
              src="/Henry Clark - Portfolio Images/images/logoipsum-277.svg"
              width={40}
              height={40}
              alt="Kushagra Gupta"
            />
          </a>
        </h1>

        {/* Navbar (desktop & mobile toggle) */}
        <Navbar navOpen={navOpen} />

        {/* Mobile Menu Button */}
        <button
          className="menu-btn md:hidden absolute top-6 right-6 z-50"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="material-symbols-rounded">
            {navOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Animated Contact Button */}
        <span className="max-md:hidden md:justify-self-end">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] z-2"
          >
            <span className="relative z-[1] group-hover:translate-x-1 transition-transform duration-300">
              Lets Connect
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right relative z-[1] w-4 h-4 text-sky-100 group-hover:translate-x-2 transition-transform duration-300"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>

            {/* Background Effects */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            ></span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)",
                background:
                  "radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)",
              }}
            ></span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)",
              }}
            ></span>
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
