import { VenueOrEvent } from "@/lib/types";

interface StandardCardProps {
  item: VenueOrEvent;
}

export default function StandardCard({ item }: StandardCardProps) {
  return (
    <div className="flex-shrink-0 w-[72vw] max-w-[280px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Image */}
      <div className="relative h-36">
        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
          {item.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[13px] text-gray-500 font-medium">{item.neighborhood}</span>
          <span className="text-gray-300">·</span>
          <span className="text-[13px] text-gray-500">{item.time}</span>
        </div>
        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-0.5">{item.name}</h3>
        <p className="text-xs text-gray-500 leading-snug mb-3 line-clamp-2">{item.subtitle}</p>
        <button className="w-full text-xs font-semibold text-gray-900 border border-gray-200 rounded-xl py-1.5 hover:bg-gray-50 transition-colors">
          See details
        </button>
      </div>
    </div>
  );
}
