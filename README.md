# Abhishek Jha – Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) to showcase my work, projects, and writing.

---

## Project Structure

The site has four main sections:

- **Home** – `/`
- **Work** – `/work`
- **Projects** – `/projects`
- **Blog** – `/blog`

Content is authored in MDX. Drop a file into the right folder and the site picks it up automatically:

- `src/data/blog/` for blog posts
- `src/data/work/` for work experience
- `src/data/projects/` for projects

---

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server has hot-reload, so edits reflect immediately.

To build for production:

```bash
pnpm build
pnpm start
```

---

## Customization

All configuration lives in `src/data/`.

**`src/data/metadata.ts`** – site title, description, SEO keywords, social links, accent theme, domain.

**`src/data/content.ts`** – homepage intro text, personal facts, footer details, social URLs.

**MDX content** – blog posts, work items, and project pages. Each file includes frontmatter with title, date, tags, and summary.

**Visual assets** – favicon at `public/icons/favicon.ico`. Custom OG image (1200×630) goes in `public/` and is referenced in `metadata.ts`.

---

## SEO

The site includes:

- Open Graph and Twitter Card metadata
- Dynamic OG image generation via `ImageResponse`
- JSON-LD structured data for rich results
- Auto-generated `sitemap.xml` and `robots.txt`
- RSS feed and `llms.txt` route

Preview OG images locally at routes like `/opengraph-image`, `/blog/opengraph-image`, etc.

---

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [Vitest](https://vitest.dev)

---

## Deployment

Deploy on [Vercel](https://vercel.com) (recommended) or any platform that supports Node.js – Netlify, Render, AWS Amplify, etc.

Refer to the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.
