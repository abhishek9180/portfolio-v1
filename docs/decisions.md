2026-06-20

Work Experience section only supports 5 bullet points.

Reduced original 8 bullets into 5 while preserving impact.

---

### Phase 1 — About section

- **`facts.languages`**: Profile.md does not mention languages spoken. Set to empty string to hide the fact chip (the field's documented behavior).
- **`additionalFacts`**: Profile.md does not mention hobbies or interests. Removed the three placeholder entries (Book Reviewer, Sci-fi Fan, Skiing Enthusiast) instead of retaining invented information.
- **`socialLinks`**: Profile.md only provides an email address. GitHub, LinkedIn, and other social platform URLs are unavailable and set to empty strings to hide them.
- **Phone number**: Profile.md includes `+91 9431561469` but the template has no phone number field in its data model. Not added.
- **Profile image**: No profile image asset exists in the repository. Skipped per scope ("if available").

---

### Phase 2 — Work Experience

- **4th template file removed**: Profile.md has only 3 employers. Deleted `src/data/work/InternBossCorp.mdx` (placeholder "CodeNest") since no 4th employer exists in the source of truth.
- **Company logos**: Profile.md does not provide company logos. Kept existing placeholder SVGs (`/work/everestengineering.svg`, `/work/quantiphi.svg`, `/work/persistent.svg`) as visual placeholders since no replacement assets are available.
- **Bullet point count**: Everest Engineering (5 projects) condensed into 5 bullet points; Quantiphi (2 projects + role overview) into 4 bullets; Persistent Systems (2 projects) into 4 bullets — matching the template's 5-bullet TimelineItem limit.
- **Project detail pages**: Each work MDX includes a "Key Projects" section with brief project descriptions for the work detail page, following the template convention.

---

### Phase 3 — Projects

- **Projects selected**: Profile.md does not have a dedicated "Projects" section. Used the 6 most prominent work projects from the experience entries: Who Gives A Crap, theCompass, Storygenie, Portal Robo, MakeUpMyRoom (Everest Engineering), and Planit (Quantiphi). These span e-commerce, cloud-native, AI, fintech, hospitality, and media domains.
- **Project dates**: Profile.md does not provide specific dates per project. Used year-level ranges within the corresponding employment period. Who Gives A Crag is ongoing — set to "2026-06" instead of "Present" because the sitemap uses `new Date(endDate)` and cannot parse "Present".
- **teamSize**: Only specified where profile.md provides explicit numbers: theCompass (2), Planit (5). Others left undefined to avoid inventing team sizes.
- **githubUrl / paperUrl**: No GitHub or paper links mentioned in profile.md for these projects (they are internal/client work). Fields left undefined to avoid invented URLs.
- **Project images**: Profile.md provides no project images. Reused existing placeholder images (`/projects/pictureA.jpg` through `pictureF.jpg`) as visual placeholders to maintain card rendering without broken assets. Old gallery directories (`project-A/`, `project-B/`) removed since they no longer match any slug.

---

### Phase 4 — SEO & Metadata

- **Production domain**: Profile.md does not provide a personal website URL. Defaulted `siteUrl` fallback to `https://abhishekjha.dev` as a reasonable assumption. Should be overridden via `NEXT_PUBLIC_SITE_URL` environment variable at deployment.
- **Author URL**: Profile.md does not mention a personal blog or website. Set `author.url` to empty string (hidden from structured data).
- **Social links**: Profile.md only provides email. Set `social.twitter` to empty string. If a Twitter/X account is added later, update here.
- **OG image**: `ogImage` set to `null` — uses the auto-generated dynamic OG image handler (`src/app/opengraph-image.tsx`) which already renders `homeIntroConfig.name` (Abhishek Jha). The template's static `/public/og-image.png` remains on disk but is no longer served.
- **Favicons**: Template placeholder favicons remain in `public/icons/`. No replacement assets provided. Replace with personalized favicons if desired.
- **Keywords**: Updated to reflect Abhishek Jha's stack (Next.js, React, TypeScript, AWS, Shopify, E-Commerce).

---

### Phase 5 — Certifications

- **Third certification issuer**: Profile.md has a typo for AWS Cloud Practitioner — "Issuing Amazon Web Services (AWS)" instead of "Issuing Organization: Amazon Web Services (AWS)". Used the intended value "Amazon Web Services (AWS)".
- **Badge images**: Profile.md provides no certification badge/logo images. Badge display omitted per spec ("if available").
- **Empty credential IDs**: AWS AI Practitioner and AWS Cloud Practitioner have empty Credential ID fields in profile.md. Omitted from the data structure rather than displaying empty values.
- **Card design**: Used a card layout (border + rounded + shadow) matching WorkItem's visual language. Cards are wrapped in `<a>` tags when credentialUrl exists, opened securely with `target="_blank" rel="noopener noreferrer"`.
- **Grid layout**: 2-column grid on sm+ screens (3 items render as 2+1). Single column on mobile.
- **Date formatting**: Profile.md uses YYYY-MM format; converted to "Month YYYY" for display to match the portfolio's date style (e.g., "January 2026").
