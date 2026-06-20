# Phase 5 — Certifications

## Objective

Introduce a new **Certifications** section to the About page that showcases professional certifications.

The section should be placed immediately below the existing **Quick & Fun Facts** section and integrate seamlessly with the existing design system.

---

## Required Context

Before implementation, read:

- `AGENTS.md`
- `specs/assets/profile.md`
- `specs/assets/content-style.md`

---

## Placement

Insert the new section directly below:

```
Quick & Fun Facts
```

and before the next existing section on the page.

The placement should preserve the visual flow of the About page.

---

## Scope

### Create a Certifications Section

Display all certifications defined in `profile.md`.

Each certification should support the following information where available:

- Certification name
- Issuing organization
- Issue date
- Expiration date (optional)
- Credential ID (optional)
- Credential verification URL (optional)
- Certification badge or logo (optional)

If optional fields are unavailable, omit them rather than displaying placeholders.

---

### Presentation

The layout should match the visual language of the portfolio.

Requirements:

- Responsive
- Accessible
- Consistent spacing
- Consistent typography
- Reuse existing UI components where possible
- Avoid introducing a completely new visual style

The design should feel like a natural extension of the template.

---

### Links

If a verification URL is provided:

- Make the certification clickable.
- Open external links securely.
- Preserve accessibility.

If no URL exists, render the certification as static content.

---

### Assets

If certification logos or badges are available:

- Display them using the existing image strategy.
- Optimize images where applicable.
- Ensure no broken image references remain.

---

## Data Source

All certification data must originate from:

```
specs/profile.md
```

Do not invent certifications.

Do not infer missing information.

---

## Out of Scope

Do **not** modify:

- Hero
- About introduction
- Work Experience
- Projects
- Blog
- SEO
- Navigation
- Existing About content

unless required to insert the new section.

---

## Deliverables

- New Certifications section added.
- Positioned below Quick & Fun Facts.
- Fully responsive.
- Matches existing design language.
- Uses profile.md as the source of truth.
- Supports optional verification links.
- Supports optional logos.
- No placeholder content.

---

## Acceptance Criteria

- Certifications appear immediately below Quick & Fun Facts.
- Layout matches the rest of the About page.
- Every certification originates from profile.md.
- Optional fields are handled gracefully.
- External links work correctly.
- Images load correctly.
- Accessibility is preserved.
- Responsive across supported breakpoints.
- TypeScript passes.
- Lint passes.
- Project builds successfully.

---

## Implementation Notes

Before implementation:

1. Identify the component responsible for rendering the About page.
2. Reuse existing layout primitives whenever possible.
3. Avoid creating duplicate card components if a reusable component already exists.
4. Keep the section implementation modular so future certifications can be added by updating `profile.md` only.

Document any implementation decisions or template limitations in:

```
docs/decisions.md
```
