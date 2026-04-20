import { Itinerary } from "@/lib/types";
import { Clock, DollarSign } from "lucide-react";

interface ExpandablePlanSnippetProps {
  plan: Itinerary;
}

export default function ExpandablePlanSnippet({ plan }: ExpandablePlanSnippetProps) {
  return (
    <div className="mt-3 pt-3 border-t border-gray-100">
      {/* Meta row */}
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <Clock className="w-3.5 h-3.5" />
          {plan.duration}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <DollarSign className="w-3.5 h-3.5" />
          {plan.priceBand}
        </span>
      </div>

      {/* Stops timeline */}
      <div className="flex flex-col gap-2 mb-3">
        {plan.stops.map((stop, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center pt-0.5">
              <div className="w-2 h-2 rounded-full bg-gray-900 flex-shrink-0" />
              {i < plan.stops.length - 1 && <div className="w-px h-4 bg-gray-200 mt-0.5" />}
            </div>
            <div className="flex-1 -mt-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold text-gray-900">{stop.name}</span>
                <span className="text-[11px] text-gray-400">{stop.time}</span>
              </div>
              <span className="text-[11px] text-gray-400">{stop.neighborhood}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-gray-900 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
        Let&apos;s do this
      </button>
    </div>
  );
}
