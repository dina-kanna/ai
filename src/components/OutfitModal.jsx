
import { useEffect, useState } from "react";

export default function OutfitModal({ outfit, onClose }) {
  const [selectedColor, setSelectedColor] = useState("");

  // Reset the selected color when a different outfit is opened
  useEffect(() => {
    if (!outfit) {
      setSelectedColor("");
      return;
    }

    setSelectedColor(outfit.palette?.[0] || "");
  }, [outfit]);

  // Close modal using Escape key
  useEffect(() => {
    if (!outfit) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [outfit, onClose]);

  if (!outfit) return null;

  // Click a color to select it
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="outfit-modal-title"
        className="relative grid w-full max-w-6xl gap-6 rounded-3xl bg-[#f7f5f0] p-5 sm:p-7 md:grid-cols-2"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close outfit details"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-2xl transition hover:bg-slate-200"
        >
          ×
        </button>

        {/* Outfit image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={outfit.image}
            alt={outfit.title}
            className="h-64 w-full rounded-2xl object-cover sm:h-80 md:h-full md:min-h-[430px]"
          />
        </div>

        {/* Outfit details */}
        <div className="py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#899779]">
            {outfit.category} / {outfit.vibe}
          </p>

          <h2
            id="outfit-modal-title"
            className="mt-3 text-3xl font-medium tracking-tight text-[#292b25]"
          >
            {outfit.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#77796f]">
            {outfit.description}
          </p>

          {/* Outfit pieces */}
          <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-[#292b25]">
            The outfit
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-[#77796f]">
            {outfit.pieces?.map((piece) => (
              <li key={piece}>
                <span className="mr-2 text-[#899779]">✓</span>
                {piece}
              </li>
            ))}
          </ul>

          {/* Accessories */}
          <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-[#292b25]">
            Finish the look
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#77796f]">
            {outfit.accessories}
          </p>

          {/* Stylist tip */}
          <div className="mt-5 rounded-2xl bg-[#e8e9e0] p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#292b25]">
              Stylist tip
            </p>

            <p className="mt-2 text-sm leading-6 text-[#656b5d]">
              {outfit.tip}
            </p>
          </div>

          {/* Interactive color palette */}
          <div className="mt-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#292b25]">
              Color story
            </h3>

            <p className="mt-2 text-xs text-[#77796f]">
              Click a color to select your favorite.
            </p>

            <div
              className="mt-3 flex flex-wrap items-center gap-3"
              role="group"
              aria-label="Choose an outfit color"
            >
              {outfit.palette?.map((color) => {
                const isSelected = selectedColor === color;

                return (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handleColorChange(color)}
                    title={color}
                    aria-label={`Select color ${color}`}
                    aria-pressed={isSelected}
                    className={`relative grid h-10 w-10 place-items-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#899779] focus-visible:ring-offset-2 ${
                      isSelected
                        ? "scale-110 ring-2 ring-[#899779] ring-offset-2"
                        : "border border-black/10 hover:scale-110 hover:ring-2 hover:ring-[#899779]/50"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {isSelected && (
                      <span
                        className="text-sm font-bold drop-shadow-sm"
                        style={{
                          color: [
                            "#ffffff",
                            "#fff",
                            "white",
                            "#f7f5f0",
                            "#e8e9e0",
                            "#f5f5dc",
                            "#ffff00",
                          ].includes(color.toLowerCase())
                            ? "#292b25"
                            : "#ffffff",
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected color information */}
            {selectedColor && (
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-3">
                <div
                  className="h-10 w-10 shrink-0 rounded-xl border border-black/10 shadow-sm"
                  style={{ backgroundColor: selectedColor }}
                />

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#899779]">
                    Selected color
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-[#292b25]">
                    {selectedColor}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard?.writeText) {
                      navigator.clipboard.writeText(selectedColor);
                    }
                  }}
                  className="ml-auto shrink-0 rounded-full bg-[#e8e9e0] px-3 py-2 text-xs font-medium text-[#656b5d] transition hover:bg-[#d9ddcf]"
                  aria-label={`Copy color code ${selectedColor}`}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
