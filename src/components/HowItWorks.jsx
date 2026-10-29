
import React from "react";

const steps = [
  {
    number: "01",
    symbol: "◎",
    title: "Discover your style",
    description:
      "Explore casual, formal, streetwear, traditional, and seasonal outfit inspiration to find looks that feel like you.",
    tag: "Find your direction",
  },
  {
    number: "02",
    symbol: "✧",
    title: "Make it personal",
    description:
      "Choose your occasion, favorite colors, preferred fit, and the mood you want your outfit to express.",
    tag: "Style your way",
  },
  {
    number: "03",
    symbol: "♡",
    title: "Save what you love",
    description:
      "Collect your favorite outfits and revisit your saved looks whenever you need fresh inspiration.",
    tag: "Keep your favorites",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#e6e9df]"
      />

      <div className="relative mx-auto max-w-full">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce3d3] bg-[#f7f8f3] px-4 py-2">
            <span className="text-[#899779]" aria-hidden="true">
              ✧
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#68705d]">
              Our approach
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#252820] sm:text-5xl lg:text-6xl">
            Great style starts
            <br />
            <span className="font-serif italic text-[#899779]">
              with feeling like you.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77796f] sm:text-base">
            Fashion should feel personal, not complicated. Forma helps you
            discover inspiration, explore your preferences, and build a
            collection of looks that feels like your own.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative rounded-[2rem] border border-[#e8e7df] bg-[#faf9f6] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cbd5bf] hover:shadow-xl sm:p-9"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e7ecdf] text-3xl text-[#59664e] transition group-hover:bg-[#dce3d3]">
                  {step.symbol}
                </div>

                <span className="font-serif text-3xl italic text-[#c6cbbd]">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-medium tracking-tight text-[#252820]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#77796f]">
                {step.description}
              </p>

              <div className="mt-7 flex items-center gap-2 border-t border-[#e8e7df] pt-5">
                <span
                  className="grid h-5 w-5 place-items-center rounded-full bg-[#dce3d3] text-sm text-[#59664e]"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span className="text-xs font-semibold text-[#68705d]">
                  {step.tag}
                </span>
              </div>

              <span
                aria-hidden="true"
                className="absolute bottom-8 right-8 text-xl text-[#b2b8a7] transition group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#dce3d3] p-6 sm:flex-row sm:p-8">
          <div>
            <p className="text-lg font-semibold text-[#252820]">
              Your style. Your rules.
            </p>
            <p className="mt-1 text-sm text-[#656b5d]">
              Start exploring and make every look your own.
            </p>
          </div>

          <a
            href="#stylist"
            className="inline-flex items-center gap-2 rounded-full bg-[#252820] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#454b3d]"
          >
            Explore the style studio
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
