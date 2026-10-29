
export default function OutfitCard({
  outfit,
  saved,
  onToggleSave,
  onOpen,
}) {
  return (
    <article className="group min-w-0">
      {/* Outfit image */}
      <div className="relative overflow-hidden rounded-3xl bg-[#e8e4dc]">
        <img
          src={outfit.image}
          alt={outfit.title}
          loading="lazy"
          className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[390px]"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-sky-400/90 px-3 py-2 text-[10px] font-bold uppercase tracking-widest">
          {outfit.category}
        </span>

        {/* Save outfit */}
        <button
          type="button"
          onClick={() => onToggleSave(outfit.id)}
          aria-label={saved ? "Remove saved outfit" : "Save outfit"}
          aria-pressed={saved}
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-xl transition hover:scale-110 ${
            saved
              ? "bg-[#252820] text-white"
              : "bg-white/90 text-[#252820]"
          }`}
        >
          {saved ? "♥" : "♡"}
        </button>

        {/* Explore outfit */}
        <button
          type="button"
          onClick={() => onOpen(outfit)}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-sky-400 px-4 py-3 text-xs font-bold transition hover:bg-violet-400"
        >          Explore look <span aria-hidden="true">↗</span>
        </button>
      </div>

      {/* Outfit information */}
      <div className="flex items-start justify-between gap-4 pt-4">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#899779]">
            {outfit.vibe}
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {outfit.title}
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#77796f]">
            {outfit.description}
          </p>
        </div>

        {/* Color palette */}
        <div className="mt-1 flex shrink-0 gap-1">
          {outfit.palette.map((color) => (
            <span
              key={color}
              title={color}
              aria-label={`Color ${color}`}
              className="h-3 w-3 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
