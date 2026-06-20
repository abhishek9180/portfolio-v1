<!-- BEGIN:nextjs-agent-rules -->
# Portfolio Agent Instructions

## Purpose

This repository is a customized version of a Next.js portfolio template.

The objective is to transform the template into a professional portfolio that accurately represents Abhishek Jha while preserving the overall design language and user experience.

The portfolio targets opportunities such as:

- Senior Frontend Engineer
- Staff Engineer
- Technical Lead
- Full Stack Engineer

---

# Source of Truth

Before starting any implementation, always read:

- specs/assets/profile.md
- specs/assets/content-style.md

Use **profile.md** as the only source of factual information.

Never invent, infer, exaggerate or omit facts.

If required information is unavailable, retain the existing placeholder and record the limitation in `docs/decisions.md`.

---

# Development Principles

Prefer updating existing data over modifying components.

Preserve:

- Design
- Layout
- Responsiveness
- Accessibility
- Animations
- SEO
- Existing component APIs

Avoid unnecessary refactoring.

Only modify files required by the active specification.

Keep commits small and focused.

---

# Quality Standards

Before completing any task ensure:

- Project builds successfully.
- TypeScript passes.
- Lint passes.
- No placeholder content remains in modified sections.
- No unrelated files were changed.
- New content follows `content-style.md`.

---

# Decision Log

If implementation requires interpretation because of template limitations:

- make the smallest reasonable decision
- document it inside `docs/decisions.md`
- continue implementation

Never silently change the intended meaning of profile data.

---

# Expected Workflow

1. Read profile.md
2. Read content-style.md
3. Read requested specification
4. Identify affected files
5. Explain implementation plan
6. Update only required files
7. Validate changes
8. Summarize modified files

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is
outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->
