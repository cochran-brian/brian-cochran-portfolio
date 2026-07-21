# briancochran.dev

Personal portfolio built with Next.js 16 (App Router), Tailwind CSS v4, and TypeScript. No other runtime dependencies: scroll reveals use IntersectionObserver and the Open Graph image is generated at build time with `next/og`.

**Headshot:** replace `public/headshot.jpg` (currently a placeholder) with a real photo, ideally portrait orientation around 720x900.

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

All copy lives in [`data/resume.ts`](data/resume.ts): experience, projects, leadership, skills, and contact links. The components are purely presentational.
