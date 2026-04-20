"use client";

import { Itinerary } from "@/lib/types";
import { Clock, DollarSign } from "lucide-react";
import ExpandablePlanSnippet from "./ExpandablePlanSnippet";

interface PlanCardProps {
  plan: Itinerary;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function PlanCard({ plan, isExpanded, onToggle }: PlanCardProps) {
  return (
    <div
      className={`flex-shrink-0 w-[72vw] max-w-[280px] bg-white rounded-2xl border shadow-sm cursor-pointer transition-all ${
        isExpanded ? "border-gray-300 shadow-md" : "border-gray-100"
      }`}
      onClick={onToggle}
    >
      <div className="p-3">
        {/* Tags */}
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {plan.tags.map((tag) => (
            <span key={tag} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Title + summary */}
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">{plan.title}</h3>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug line-clamp-2">{plan.summary}</p>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-2">
          <span className="flex items-center gap-0.5 text-[11px] text-gray-400">
            <Clock className="w-3 h-3" />
            {plan.duration}
          </span>
          <span className="flex items-center gap-0.5 text-[11px] text-gray-400">
            <DollarSign className="w-3 h-3" />
            {plan.priceBand}
          </span>
        </div>

        {/* Stops preview (collapsed) */}
        {!isExpanded && (
          <p className="text-[11px] text-gray-400 mt-2 line-clamp-1">
            {plan.stops.map((s) => s.name).join(" → ")}
          </p>
        )}

        {/* Expanded snippet */}
        {isExpanded && <ExpandablePlanSnippet plan={plan} />}
      </div>
    </div>
  );
}
