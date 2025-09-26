import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/Henry Clark - Portfolio Images/images/im.jpg"
                width={40}
                height={40}
                alt="Kushagra Portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Robust Backends for High-Performance Applications for Future
          </h2>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Download CV Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1s4NO-1_b_5crdOuqNhsQ5AJCYS2pnY80"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] z-2"
            >
              <span className="relative z-[1] group-hover:translate-x-1 transition-transform duration-300">
                Download CV
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
                    'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)',
                  background:
                    'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)',
                }}
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)',
                }}
              ></span>
            </a>

            {/* Scroll Down Button */}
            <a
              href="#about"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] z-2"
            >
              <span className="relative z-[1] group-hover:translate-x-1 transition-transform duration-300">
                Scroll Down
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
                    'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)',
                  background:
                    'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)',
                }}
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)',
                }}
              ></span>
            </a>
          </div>
        </div>

        {/* <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/Henry Clark - Portfolio Images/images/hero-banner.png"
              width={656}
              height={800}
              alt="Kushagra"
              className="w-full"
            />
          </figure>
        </div> */}

        <div className="hidden lg:block">
  <div className="relative w-[32vw] h-[32vw] rounded-full flex items-center justify-center overflow-hidden p-2
                  before:content-[''] before:absolute before:w-[50rem] before:h-[50rem] 
                  before:bg-[conic-gradient(transparent,transparent,transparent,theme(colors.sky.400))] 
                  before:animate-glow 
                  after:content-[''] after:absolute after:w-[50rem] after:h-[50rem] 
                  after:bg-[conic-gradient(transparent,transparent,transparent,theme(colors.sky.400))] 
                  after:animate-glow">
    <div className="relative w-full h-full rounded-full bg-slate-900 flex justify-center items-center z-10 overflow-hidden">
      <img
        src="/Henry Clark - Portfolio Images/images/avaimg.png"
        alt="Kushagra"
        className="absolute top-12 w-[85%] object-cover mix-blend-lighten"
      />
    </div>
  </div>
</div>


        
      </div>
    </section>
  );
};

export default Hero;
