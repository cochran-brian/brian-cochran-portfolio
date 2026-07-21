# briancochran.dev

Personal portfolio — Next.js 16 (App Router), Tailwind CSS v4, TypeScript. No other runtime dependencies: the hero's interactive node-graph is a hand-rolled `<canvas>` animation, scroll reveals use IntersectionObserver, and the Open Graph image is generated at build time with `next/og`.

## Develop

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo → deploy (zero config).
3. Point your domain at Vercel and update `site.url` in `data/resume.ts` if it isn't `briancochran.dev`.

## Editing content

All copy lives in [`data/resume.ts`](data/resume.ts) — experience, projects, leadership, skills, stats, and contact links. The components are purely presentational.
