
const scrollToSection = (event, sectionId) => {
  event.preventDefault();

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-full grid-cols-1 items-center gap-10 overflow-hidden px-4 pb-16 pt-10 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-14 md:grid-cols-2 md:gap-8 md:px-8 md:py-16 lg:gap-14 lg:py-20 xl:gap-20"
    >
      {/* Hero content */}
      <div className="min-w-0">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#dedfd4] bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#68705d] sm:px-4 sm:text-xs">
          <span aria-hidden="true">✧</span>
          Your style, decoded
        </span>

        <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.06em] text-[#252820] min-[480px]:text-6xl sm:mt-7 sm:text-7xl lg:text-7xl xl:text-8xl">
          Get dressed
          <br />
          like{" "}
          <span className="font-serif italic text-[#899779]">
            you mean it.
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#77796f] sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
          A personal style companion for the days you have a plan—and the
          days you need one.
        </p>

        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
          <a
            href="#stylist"
            onClick={(event) => scrollToSection(event, "stylist")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#252820] px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#454b3d] focus:outline-none focus:ring-2 focus:ring-[#899779] focus:ring-offset-2 sm:px-6 sm:py-4"
          >
            Find your next look
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#discover"
            onClick={(event) => scrollToSection(event, "discover")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dedfd4] px-5 py-3.5 text-center text-sm font-semibold text-[#252820] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#899779] focus:ring-offset-2 sm:px-6 sm:py-4"
          >
            Explore the edit
            <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="mt-8 border-t border-[#e5e3da] pt-5 text-xs leading-6 text-[#77796f] sm:mt-10 sm:text-sm">
          Thoughtful outfits. Personal expression. Everyday confidence.
        </div>
      </div>

      {/* Hero image */}
      <div className="relative min-w-0 pb-6 sm:px-3 md:px-0">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#e5e0d7] sm:rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1300&q=85"
            alt="Contemporary fashion editorial featuring a stylish outfit"
            fetchPriority="high"
            className="h-[360px] w-full object-cover object-center min-[480px]:h-[430px] sm:h-[520px] md:h-[450px] lg:h-[540px] xl:h-[600px]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
          />

          <div className="absolute bottom-5 left-4 right-4 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-7 sm:right-7">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                The style edit
              </p>

              <h2 className="mt-2 text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
                Soft structure.
                <br />
                <span className="font-serif italic">
                  Strong presence.
                </span>
              </h2>
            </div>

            <a
              href="#discover"
              onClick={(event) => scrollToSection(event, "discover")}
              aria-label="Explore outfits"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-xl text-[#252820] transition hover:scale-105 sm:h-12 sm:w-12"
            >
              ↘
            </a>
          </div>
        </div>

        {/* Floating note */}
        <div className="absolute bottom-0 left-5 max-w-[calc(100%-2.5rem)] rounded-2xl border border-[#e5e3da] bg-white p-3 shadow-lg sm:left-0 sm:p-4 md:-left-4 lg:-left-5">
          <p className="flex items-center gap-2 text-xs font-bold text-[#252820] sm:text-sm">
            <span className="text-[#899779]" aria-hidden="true">
              ✧
            </span>
            Your style, made simple
          </p>

          <p className="mt-1 text-[10px] leading-5 text-[#77796f] sm:text-xs">
            A little inspiration goes a long way.
          </p>
        </div>
      </div>
    </section>
  );
}
