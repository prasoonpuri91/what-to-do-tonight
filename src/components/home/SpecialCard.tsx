import { Special } from "@/lib/types";

interface SpecialCardProps {
  special: Special;
}

export default function SpecialCard({ special }: SpecialCardProps) {
  return (
    <div className="flex-shrink-0 w-[72vw] max-w-[280px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Image */}
      <div className="relative h-28 bg-gray-200">
        <img src={special.imageUrl} alt={special.venueName} className="w-full h-full object-cover" />
        <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {special.urgencyLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-[11px] text-gray-500 font-medium mb-0.5">{special.venueName} · {special.neighborhood}</p>
        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-1">{special.offerTitle}</h3>
        <p className="text-[11px] text-gray-400 mb-3">{special.validityWindow}</p>
        <button className="w-full text-xs font-semibold text-gray-900 border border-gray-200 rounded-xl py-1.5 hover:bg-gray-50 transition-colors">
          {special.cta}
        </button>
      </div>
    </div>
  );
}
