
import React from "react";

export default function Profile({
  user = null,
  favorites = [],
  onNavigate,
  onLogout,
}) {
  const name =
    (typeof user?.name === "string" && user.name.trim()) ||
    (typeof user?.email === "string" && user.email.includes("@")
      ? user.email.split("@")[0]
      : "") ||
    "Style Lover";

  const email =
    typeof user?.email === "string" ? user.email : "Not provided";

  const savedOutfits = Array.isArray(favorites)
    ? favorites.filter(Boolean)
    : [];

  const navigateHome = () => {
    if (typeof onNavigate === "function") {
      onNavigate("home");
    }
  };

  const handleLogout = () => {
    if (typeof onLogout === "function") {
      onLogout();
    } else {
      navigateHome();
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f5f0] px-4 py-8 text-[#252820] sm:px-8 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#dce3d3]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#dce3d3]"
      />

      <div className="relative mx-auto max-w-full">
        <button
          type="button"
          onClick={navigateHome}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dedfd4] bg-white/80 px-4 py-2.5 text-sm text-[#656b5d] transition hover:bg-white hover:text-[#252820]"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </button>

        <section className="relative overflow-hidden rounded-[2rem] bg-[#dce3d3] p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#b8c5ac]"
          />

          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#68705d]">
                <span aria-hidden="true">✦</span>
                Your personal style space
              </p>

              <h1 className="mt-5 break-words text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                Hello, {name}.
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#656b5d] sm:text-base">
                Your style inspiration, saved looks, and fashion journey
                — all in one place.
              </p>

              <button
                type="button"
                onClick={navigateHome}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#252820] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#454b3d]"
              >
                <span aria-hidden="true">✧</span>
                Explore your style →
              </button>
            </div>

            <div className="grid h-24 w-24 shrink-0 place-items-center self-start rounded-full border border-white/70 bg-white/70 text-5xl text-[#59664e] shadow-sm sm:h-32 sm:w-32 sm:self-center">
              <span aria-hidden="true">✧</span>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-[#e5e3da] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#edf0e7] text-xl text-[#718064]">
                ✧
              </div>

              <div>
                <h2 className="font-semibold">Account details</h2>
                <p className="mt-1 text-xs text-[#77796f]">
                  Your personal information
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#899779]">
                  Full name
                </p>
                <p className="mt-2 break-words text-sm font-semibold">
                  {name}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#899779]">
                  ✉ Email address
                </p>
                <p className="mt-2 break-all text-sm font-semibold">
                  {email}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#899779]">
                  Style profile
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Fashion explorer
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#e5e3da] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#edf0e7] text-xl text-[#718064]">
                ✧
              </div>

              <div>
                <h2 className="font-semibold">Discover your style</h2>
                <p className="mt-1 text-xs text-[#77796f]">
                  Your next favorite look awaits
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-[#77796f]">
              Explore fresh combinations, experiment with colors, and find
              outfit inspiration for your everyday life and special moments.
            </p>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#f5f5ef] p-4">
              <span className="shrink-0 text-2xl text-[#899779]">♧</span>
              <p className="text-xs leading-5 text-[#656b5d]">
                A great outfit is not about following every trend. It is about
                finding what feels like you.
              </p>
            </div>

            <button
              type="button"
              onClick={navigateHome}
              className="mt-5 w-full rounded-full border border-[#dedfd4] px-5 py-3 text-sm font-semibold transition hover:bg-[#f7f5f0]"
            >
              Discover outfits →
            </button>
          </article>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#899779]">
                Your collection
              </p>

              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Saved outfits
              </h2>

              <p className="mt-2 text-sm text-[#77796f]">
                All the looks you have saved in one place.
              </p>
            </div>

            <span className="rounded-full bg-[#e9e7df] px-4 py-2 text-sm font-semibold">
              {savedOutfits.length}{" "}
              {savedOutfits.length === 1 ? "outfit" : "outfits"}
            </span>
          </div>

          {savedOutfits.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-[#d5d4c9] bg-white/60 px-6 py-14 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e9ede2] text-3xl text-[#899779]">
                ✧
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Your collection starts here
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#77796f]">
                When you find an outfit you love, save it and come back to it
                whenever you need a little inspiration.
              </p>

              <button
                type="button"
                onClick={navigateHome}
                className="mt-6 rounded-full bg-[#252820] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#454b3d]"
              >
                Explore outfits →
              </button>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedOutfits.map((outfit, index) => (
                <article
                  key={outfit.id ?? `${outfit.title ?? "outfit"}-${index}`}
                  className="group overflow-hidden rounded-3xl border border-[#e5e3da] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-72 overflow-hidden bg-[#e9e7df]">
                    {outfit.image ? (
                      <img
                        src={outfit.image}
                        alt={outfit.title || "Saved outfit"}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full place-items-center text-4xl text-[#899779]">
                        ✧
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#59664e] backdrop-blur">
                      {outfit.category || "Personal style"}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold">
                      {outfit.title || "Saved look"}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#77796f]">
                      {outfit.description ||
                        "A look saved to your personal collection."}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="mt-12 border-t border-[#e5e3da] pt-7">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-[#dedfd4] bg-white px-5 py-3 text-sm font-semibold text-[#656b5d] transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
          >
            <span aria-hidden="true">↪</span>
            Sign out
          </button>
        </div>

        <p className="mt-8 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a0a196]">
          Your style. Your story. Your Forma.
        </p>
      </div>
    </main>
  );
}
