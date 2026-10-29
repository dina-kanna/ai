import { categories } from "../data/outfits";

export default function FashionCategories({ activeCategory, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`shrink-0 rounded-full border px-4 py-3 text-xs font-semibold transition ${
            activeCategory === category
              ? "border-[#252820] bg-[#252820] text-white"
              : "border-[#dedfd4] bg-white/60 text-[#666960] hover:border-[#899779]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}