# Phase 3 — Projects

## Objective

Replace all placeholder projects with portfolio projects from `profile.md` and implement project routing using project-specific URLs, following the same routing convention used by the Work section.

---

## Required Context

Before implementation, read:

- `AGENTS.md`
- `specs/assets/profile.md`
- `specs/assets/content-style.md`

---

## Scope

### 1. Project Content

Replace all placeholder project content with the projects defined in `profile.md`.

Update:

- Featured projects
- Project titles
- Project descriptions
- Technologies
- Project tags
- GitHub links
- Live demo links
- Project images
- Project metadata

Follow the writing guidelines defined in `content-style.md`.

---

### 2. Project Routing

Implement project detail pages using project-specific routes.

The routing convention should mirror the implementation used for the Work section.

Example:

```
/projects/<project-slug>
```

Project slugs should be derived from the project name using a clean, human-readable format.

Examples:

```
/projects/portfolio-website
/projects/zenfit-studio
/projects/ai-document-assistant
```

Avoid numeric IDs or generic placeholder routes.

All project cards, buttons, navigation, and internal links must use these routes.

---

### 3. Project Content Files

Each project should have its own dedicated content file.

The filename must match the project slug.

Example:

```
portfolio-website.mdx
zenfit-studio.mdx
ai-document-assistant.mdx
```

All references and imports must use the updated filenames.

---

### 4. Assets

Update project assets as required by `profile.md`.

Ensure:

- Images resolve correctly
- Icons resolve correctly
- No broken asset references remain

---

## Out of Scope

Do **not** modify:

- Hero
- About
- Work Experience
- Blog
- Navigation
- Theme
- SEO configuration
- Shared components unless required to support project routing

---

## Deliverables

- All placeholder projects replaced
- Project routes implemented using project-name slugs
- Dedicated content file created for each project
- Internal navigation updated
- Images and assets updated
- Writing follows `content-style.md`

---

## Acceptance Criteria

- No placeholder project content remains
- Every project originates from `profile.md`
- Every project has a dedicated detail page
- URLs follow the Work section routing pattern
- All internal links work correctly
- No broken imports
- No broken images
- Styling remains unchanged
- Accessibility preserved
- TypeScript passes
- Lint passes
- Project builds successfully
