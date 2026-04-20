export interface VenueOrEvent {
  id: string;
  name: string;
  subtitle: string;
  neighborhood: string;
  price: string; // e.g. "$$", "$$$"
  imageUrl: string;
  time: string; // e.g. "Tonight 8pm"
  rationale: string; // 1-line reason
  type: "venue" | "event" | "experience";
  relatedPlanIds: string[];
}

export interface Special {
  id: string;
  venueName: string;
  offerTitle: string;
  validityWindow: string; // e.g. "Tonight until 10pm"
  urgencyLabel: string; // e.g. "Ends soon" | "Limited spots"
  cta: string; // e.g. "Reserve" | "Order" | "Get details"
  imageUrl: string;
  neighborhood: string;
}

export interface Stop {
  name: string;
  time: string;
  neighborhood: string;
}

export interface Itinerary {
  id: string;
  title: string;
  summary: string;
  duration: string; // e.g. "~3 hrs"
  priceBand: string; // e.g. "$40–70/person"
  stops: Stop[];
  tags: string[]; // e.g. ["Date night", "Live music"]
}
