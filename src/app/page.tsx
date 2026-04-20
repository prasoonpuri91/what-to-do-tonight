"use client";

import { useState } from "react";
import TimeScopePills from "@/components/home/TimeScopePills";
import HeroCard from "@/components/home/HeroCard";
import SectionHeader from "@/components/home/SectionHeader";
import StandardCard from "@/components/home/StandardCard";
import PlanCard from "@/components/home/PlanCard";
import SpecialCard from "@/components/home/SpecialCard";
import { heroItems, trendingItems, specials, readyMadePlans } from "@/lib/mock-data";

export default function HomePage() {
  const [selectedHeroId, setSelectedHeroId] = useState(heroItems[0].id);
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);

  const selectedHero = heroItems.find((h) => h.id === selectedHeroId)!;
  const relevantPlans = readyMadePlans.filter((p) =>
    selectedHero.relatedPlanIds.includes(p.id)
  );

  const handlePlanToggle = (id: string) => {
    setExpandedPlanId(expandedPlanId === id ? null : id);
  };

  return (
    <div className="pb-4">
      {/* Time scope selector */}
      <TimeScopePills />

      {/* A. Hero — Best thing right now */}
      <SectionHeader title="Best right now" />
      <HeroCard
        items={heroItems}
        selectedId={selectedHeroId}
        onSelect={(id) => { setSelectedHeroId(id); setExpandedPlanId(null); }}
      />

      {/* Ready-made plans for selected hero */}
      {relevantPlans.length > 0 && (
        <>
          <SectionHeader
            title="Plans around this"
            subtitle={`Built around ${selectedHero.name}`}
          />
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide pb-1">
            {relevantPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isExpanded={expandedPlanId === plan.id}
                onToggle={() => handlePlanToggle(plan.id)}
              />
            ))}
          </div>
        </>
      )}

      {/* B. Trending Now */}
      <SectionHeader title="Trending Now" subtitle="What's hot across the city tonight" />
      <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide pb-1">
        {trendingItems.map((item) => (
          <StandardCard key={item.id} item={item} />
        ))}
      </div>

      {/* C. Fresh Finds */}
      <SectionHeader title="Fresh Finds" subtitle="Specials and limited-time ideas" />
      <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide pb-1">
        {specials.map((special) => (
          <SpecialCard key={special.id} special={special} />
        ))}
      </div>
    </div>
  );
}
