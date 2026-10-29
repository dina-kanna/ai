
import { useMemo, useState } from "react";
import { outfits } from "../data/outfits";
import OutfitCard from "./OutfitCard";

const preferences = [
  {
    key: "occasion",
    label: "I'm dressing for",
    options: [
      "Any occasion",
      "Everyday",
      "Work",
      "Party",
      "Celebration",
      "Weekend",
      "Date Night",
      "Travel",
      "Wedding",
      "Vacation",
    ],
  },
  {
    key: "vibe",
    label: "My style is",
    options: [
      "Any style",
      "Quiet Luxury",
      "Modern Glam",
      "Urban Minimal",
      "Polished Ease",
      "Contemporary Heritage",
      "Autumn Calm",
      "Boho Chic",
      "Old Money",
      "Street Style",
      "Minimalist",
      "Romantic",
      "Sporty",
      "Chic",
    ],
  },
  {
    key: "color",
    label: "Color mood",
    options: [
      "Any colors",
      "Neutrals",
      "Black",
      "Earth tones",
      "Warm colors",
      "Pastels",
      "White",
      "Blue",
      "Bold colors",
      "Monochrome",
      "Green",
      "Pink",
    ],
  },
  {
    key: "fit",
    label: "Fit preference",
    options: [
      "No preference",
      "Relaxed",
      "Tailored",
      "Statement",
      "Oversized",
      "Fitted",
    ],
  },
];

const initialFilters = {
  occasion: "Any occasion",
  vibe: "Any style",
  color: "Any colors",
  fit: "No preference",
};

export default function StyleStudio({
  savedIds = [],
  onToggleSave,
  onOpen,
}) {
  const [filters, setFilters] = useState(initialFilters);
  const [round, setRound] = useState(0);
  const [generated, setGenerated] = useState(false);

  const filtered = useMemo(() => {
    return outfits.filter((outfit) => {
      const matchesOccasion =
        filters.occasion === "Any occasion" ||
        outfit.occasion === filters.occasion;

      const matchesVibe =
        filters.vibe === "Any style" ||
        outfit.vibe === filters.vibe;

      const matchesColor =
        filters.color === "Any colors" ||
        outfit.color === filters.color;

      const matchesFit =
        filters.fit === "No preference" ||
        outfit.fit === filters.fit;

      return (
        matchesOccasion &&
        matchesVibe &&
        matchesColor &&
        matchesFit
      );
    });
  }, [filters]);

  const results = useMemo(() => {
    if (!filtered.length) return [];

    const offset = round % filtered.length;

    return [...filtered.slice(offset), ...filtered.slice(0, offset)]
      .slice(0, 6);
  }, [filtered, round]);

  const updateFilter = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
    setGenerated(false);
  };

  const generateLook = () => {
    setRound((previous) => previous + 1);
    setGenerated(true);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setRound(0);
    setGenerated(false);
  };

  return (
    <section
      id="stylist"
      className="bg-[#252820] px-5 py-25 text-[#f7f5f0] sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-full gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Studio introduction and filters */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6d2b8]">
            <span className="mr-2" aria-hidden="true">
              ✧
            </span>
            Your personal style studio
          </p>

          <h2 className="mt-6 text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            A little you.
            <br />
            <span className="font-serif italic text-[#c6d2b8]">
              A lot of possibility.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
            Choose your occasion, favorite colors, personal aesthetic,
            and preferred fit. Discover outfit ideas selected for your mood.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {preferences.map((preference) => (
              <label
                key={preference.key}
                className="text-xs text-white/70"
              >
                {preference.label}

                <select
                  value={filters[preference.key]}
                  onChange={(event) =>
                    updateFilter(preference.key, event.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#36392f] px-3 py-3 text-sm text-white outline-none focus:border-[#c6d2b8]"
                >
                  {preference.options.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-white text-black"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={generateLook}
              disabled={filtered.length === 0}
              className="inline-flex items-center gap-2 rounded-full bg-[#dce3d3] px-6 py-4 text-sm font-bold text-[#252820] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span aria-hidden="true">
                {generated ? "↻" : "✧"}
              </span>

              {generated ? "Generate new look" : "Create my look"}
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full border border-white/20 px-5 py-4 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              Reset filters
            </button>
          </div>

          <p className="mt-3 text-xs text-white/40">
            {outfits.length} outfit ideas in your collection ·
            Filtered recommendations
          </p>
        </div>

        {/* Outfit recommendations */}
        <div>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c6d2b8]">
                {generated
                  ? "Your curated edit"
                  : "A taste of your style"}
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                {generated
                  ? "Made for your mood."
                  : "Looks worth trying."}
              </h3>
            </div>

            <span className="text-right text-[10px] tracking-widest text-white/40">
              {String((round % 99) + 1).padStart(2, "0")} / STYLE EDIT
            </span>
          </div>

          {results.length > 0 ? (
            <>
              <div className="mb-5 flex items-center justify-between text-xs text-white/50">
                <span>
                  {filtered.length} matching{" "}
                  {filtered.length === 1 ? "look" : "looks"}
                </span>
                <span>Curated for you ✧</span>
              </div>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((outfit) => (
                  <OutfitCard
                    key={outfit.id}
                    outfit={outfit}
                    saved={savedIds.includes(outfit.id)}
                    onToggleSave={onToggleSave}
                    onOpen={onOpen}
                  />
                ))}
              </div>

              {filtered.length > results.length && (
                <button
                  type="button"
                  onClick={generateLook}
                  className="mt-7 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Show another edit →
                </button>
              )}
            </>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
              <div className="text-4xl" aria-hidden="true">
                ✧
              </div>

              <h4 className="mt-4 text-lg font-medium">
                Let's try a different combination.
              </h4>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/50">
                There are no outfits matching all your current
                preferences. Reset your filters or choose another
                combination to discover more looks.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-full bg-[#dce3d3] px-5 py-3 text-sm font-bold text-[#252820] transition hover:bg-white"
              >
                Show all outfits →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
