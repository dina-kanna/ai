
export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#12160d] text-[#f7f5f0]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
      />

      <div className="relative mx-auto max-w-full px-5 sm:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 md:items-start md:py-20">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="group flex items-center gap-3"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#dce3d3] text-2xl text-[#252820] transition-transform duration-300 group-hover:rotate-12">
                ✧
              </span>

              <span className="text-3xl font-black tracking-tight">
                forma<span className="text-[#a9b99b]">.</span>
              </span>
            </button>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              Style is personal. Getting dressed should feel effortless.
              Discover outfits that reflect your mood, your story, and you.
            </p>

            <a
              href="#stylist"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#dce3d3] px-6 py-3.5 text-sm font-semibold text-[#252820] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Find your style
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8c7aa]">
                Explore
              </h3>

              <ul className="mt-5 space-y-4 text-sm text-white/60">
                <li>
                  <a
                    href="#discover"
                    className="transition hover:text-white"
                  >
                    Discover outfits
                  </a>
                </li>
                <li>
                  <a
                    href="#how"
                    className="transition hover:text-white"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#stylist"
                    className="transition hover:text-white"
                  >
                    Style studio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8c7aa]">
                Your account
              </h3>

              <ul className="mt-5 space-y-4 text-sm text-white/60">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("login")}
                    className="transition hover:text-white"
                  >
                    Log in
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("signup")}
                    className="transition hover:text-white"
                  >
                    Create account
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate("profile")}
                    className="transition hover:text-white"
                  >
                    My profile
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8c7aa]">
                Our philosophy
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Wear what feels like you. Experiment with confidence.
                Make every look your own.
              </p>
            </div>
          </div>
        </div>

        {/* Brand statement */}
        <div className="border-y border-white/10 py-8">
          <p className="text-center font-serif text-2xl italic text-white/80 sm:text-3xl">
            "Your style. Your story. Your kind of iconic."
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Forma Studio. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="self-start transition hover:text-white sm:self-auto"
          >
            Back to top ↑
          </button>

          <p>Made with care for your everyday style.</p>
        </div>
      </div>
    </footer>
  );
}
