
import { useState } from "react";

export default function Navbar({ onNavigate, user }) {
  const [open, setOpen] = useState(false);

  const go = (page) => {
    setOpen(false);
    onNavigate(page);
  };

  const closeMenu = () => setOpen(false);

  const navLinks = [
     { label: "Home", href: "#home" },
    { label: "Discover", href: "#discover" },
    { label: "Our approach", href: "#how" },
    { label: "Style studio", href: "#stylist" },
  ];

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-full items-center justify-between gap-4 rounded-2xl border border-white/70 bg-[#f7f5f0]/95 px-4 py-3 shadow-[0_8px_30px_rgba(37,40,32,0.06)] backdrop-blur-xl sm:rounded-full sm:px-6">
        {/* Logo */}
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

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 rounded-full bg-[#eeede6] p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 text-xs font-semibold text-[#686b60] transition duration-200 hover:bg-white hover:text-[#252820] hover:shadow-sm lg:px-5 lg:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop account actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          {user ? (
            <button
              type="button"
              onClick={() => go("profile")}
              className="flex items-center gap-2 rounded-full border border-[#dce3d3] bg-white px-4 py-3 text-sm font-semibold text-[#252820] transition hover:bg-[#dce3d3]"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#dce3d3]">
                ♙
              </span>
              Profile
              <span aria-hidden="true">↗</span>
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => go("login")}
                className="rounded-full px-4 py-3 text-sm font-semibold text-[#55584e] transition hover:text-black"
              >
                Log in
              </button>

              <button
                type="button"
                onClick={() => go("signup")}
                className="group flex items-center gap-3 rounded-full bg-[#252820] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#454b3d]"
              >
                Get started
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#252820] text-xl text-white transition hover:bg-[#454b3d] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/70 bg-[#f7f5f0] p-5 shadow-xl md:hidden">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#899779]">
            Explore Forma
          </p>

          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-[#45483f] transition hover:bg-[#e9ecdf]"
              >
                {link.label}
                <span className="text-[#899779]">
                  0{index + 1} ↗
                </span>
              </a>
            ))}
          </div>

          <div className="mt-4 border-t border-black/10 pt-4">
            {user ? (
              <button
                type="button"
                onClick={() => go("profile")}
                className="w-full rounded-full bg-[#dce3d3] px-5 py-3.5 text-sm font-bold text-[#252820]"
              >
                My profile →
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => go("login")}
                  className="rounded-full border border-[#dedfd4] px-4 py-3.5 text-sm font-semibold"
                >
                  Log in
                </button>

                <button
                  type="button"
                  onClick={() => go("signup")}
                  className="rounded-full bg-[#252820] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#454b3d]"
                >
                  Sign up →
                </button>
              </div>
            )}
          </div>

          <p className="mt-5 text-center font-serif text-sm italic text-[#899779]">
            Your style. Your story.
          </p>
        </div>
      )}
    </header>
  );
}
