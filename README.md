# What to Do Tonight

A UI-first local discovery prototype that helps users decide what to do tonight or this weekend. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui — all mock data, no backend.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Best viewed at mobile width (~390px).

## What's in here

**Home screen** with four sections:

- **Best right now** — curated hero cards (venues, events, experiences). Click one to select it.
- **Plans around this** — ready-made itineraries that update based on whichever hero card is selected.
- **Trending Now** — horizontal scroll of what's hot in the city tonight.
- **Fresh Finds** — limited-time specials and pop-ups with urgency labels.

**Shell**
- Top bar with location switcher (Seattle)
- Time scope pills: Tonight / Weekend
- Bottom nav: Home, Plans, For You, Profile

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com)
- DM Sans font (closest public match to DoorDash's typeface)
- All data is local mock data in `src/lib/mock-data.ts`
