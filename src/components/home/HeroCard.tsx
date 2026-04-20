"use client";

import { VenueOrEvent } from "@/lib/types";

interface HeroCardProps {
  items: VenueOrEvent[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function HeroCard({ items, selectedId, onSelect }: HeroCardProps) {
  return (
    <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide pb-1">
      {items.map((hero) => {
        const isSelected = hero.id === selectedId;
        return (
          <div
            key={hero.id}
            onClick={() => onSelect(hero.id)}
            className={`flex-shrink-0 w-[72vw] max-w-[280px] bg-white rounded-2xl overflow-hidden border shadow-sm cursor-pointer transition-all ${
              isSelected ? "border-gray-900 shadow-md" : "border-gray-100"
            }`}
          >
            {/* Image */}
            <div className="relative h-36">
              <img src={hero.imageUrl} alt={hero.name} className="w-full h-full object-cover" />
              <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                {hero.price}
              </span>
              {isSelected && (
                <div className="absolute top-2.5 left-2.5 bg-gray-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Selected
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[13px] text-gray-500 font-medium">{hero.neighborhood}</span>
                <span className="text-gray-300">·</span>
                <span className="text-[13px] text-gray-500">{hero.time}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-0.5">{hero.name}</h3>
              <p className="text-xs text-gray-500 leading-snug mb-3 line-clamp-2">{hero.rationale}</p>
              <div className="flex gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); onSelect(hero.id); }}
                  className={`flex-1 text-xs font-semibold py-2 rounded-xl transition-colors ${
                    isSelected
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Plan with this
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 border border-gray-200 text-gray-700 text-xs font-semibold py-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
