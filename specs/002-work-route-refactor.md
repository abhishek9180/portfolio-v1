# Work Route & Asset Renaming

## Objective

Update the work experience routes and related assets to use the actual company names instead of the template placeholder names.

This is a structural refactor only. The existing work experience content is already correct and must not be modified.

---

## Required Context

Before implementation, read:

- `AGENTS.md`
- `specs/assets/profile.md`

---

## Scope

### 1. Update Work Routes

Replace the placeholder company routes with routes based on the actual company names.

Current routes:

- `/work/BigBossCorp`
- `/work/MediumBossCorp`
- `/work/SmallBossCorp`

Update them to use the corresponding company names defined in `profile.md`.

All internal links, navigation, dynamic routing, and references must continue to function correctly after the rename.

---

### 2. Rename MDX Content Files

Rename the existing MDX files to match the updated company route names.

Current files:

- `BigBossCorp.mdx`
- `MediumBossCorp.mdx`
- `SmallBossCorp.mdx`

Requirements:

- Preserve the complete contents of each file.
- Do not rewrite, summarize, or reformat the content.
- Update any imports or references that depend on the filenames.

---

### 3. Rename Company Icons

Rename the existing SVG assets as follows:

| Current             | New                      |
| ------------------- | ------------------------ |
| `brain-circuit.svg` | `quantiphi.svg`          |
| `eclipse.svg`       | `everestengineering.svg` |
| `shuffle.svg`       | `persistent.svg`         |

Update every reference throughout the project so the renamed assets are used correctly.

---

## Out of Scope

Do **not**:

- Modify work experience descriptions.
- Rewrite MDX content.
- Update dates, technologies, or achievements.
- Change page layout or styling.
- Modify unrelated assets.
- Refactor unrelated routing logic.

---

## Deliverables

- Work routes use company names instead of template placeholders.
- MDX filenames match the new routes.
- All imports and references are updated.
- Company SVG assets are renamed.
- All icon references are updated.
- No broken routes.
- No broken imports.
- No broken images.

---

## Validation Checklist

Before completing the task, verify:

- [ ] Every work page is accessible using the new company route.
- [ ] No placeholder company route names remain.
- [ ] MDX content is unchanged.
- [ ] All SVG assets load correctly.
- [ ] No broken imports or references.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Project builds successfully.
