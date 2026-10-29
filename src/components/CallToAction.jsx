
export default function CallToAction() {
  return (
    <section className="mx-auto my-14 max-w-full px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#dce3d3] px-7 py-12 sm:px-12 sm:py-16">
        <div className="relative z-10 max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#68705d]">
            <span aria-hidden="true">✧</span>
            Your next outfit starts here
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Less "what do I wear?"
            <br />
            <span className="font-serif italic text-[#77836a]">
              More "this is so me."
            </span>
          </h2>

          <a
            href="#stylist"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#252820] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#454b3d]"
          >
            Meet your style edit
            <span aria-hidden="true" className="text-base">
              ↗
            </span>
          </a>
        </div>

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#bfcbb4] sm:right-[-20px] sm:top-[-90px] sm:h-96 sm:w-96"
        />
      </div>
    </section>
  );
}
