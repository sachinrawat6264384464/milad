---
name: design-system-2026-plan
description: >
  Apply the 2026 PLAN design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# 2026 PLAN — Design System Skill

## When to Use

- Building new UI components for 2026 PLAN.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** 2026 PLAN — https://2026.launchatscale.com/
- **Surface:** marketing
- **Audience:** Business decision-makers and potential customers
- **Character:** Conversion-focused marketing presence with a rich, diverse color palette and 3 typefaces.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-1 | `#161412` | Text Primary |
| color-4 | `#A8A18A` | Text Secondary |
| color-3 | `#EF4444` | Accent |
| color-5 | `#D9A520` | Accent |
| color-2 | `#53482D` | Border |
| color-6 | `#EDE9DE` | Text Light |
| color-7 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Cinzel, Cormorant Garamond, Instrument Sans

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 12px | Captions, metadata |
| text-sm | 14px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 18px | Subheadings, emphasis |
| text-xl | 20px | Section headings |
| text-2xl | 24px | Section headings |
| text-3xl | 30px | Section headings |
| text-4xl | 36px | Section headings |
| text-9 | 72px | General use |

**Weight scale:** 400 · 500 · 600 · 700
**Line heights:** 72px · 40px · 28px · 24px · 20px · 32px · 16px · 22.75px · 36px

### Spacing

**Base unit:** 8px

`space-1: 4px` · `space-2: 8px` · `space-3: 12px` · `space-4: 16px` · `space-5: 24px` · `space-6: 28px` · `space-7: 32px` · `space-8: 40px` · `space-9: 48px` · `space-10: 60px` · `space-11: 80px` · `space-12: 96px` · `space-13: 172px` · `space-14: 312px` · `space-15: 348px`

### Shapes

**Border radius:** `radius-sm: 4px` · `radius-md: 8px` · `radius-lg: 12px` · `radius-full: 9999px`

### Elevation

- **shadow-sm:** `rgba(217, 165, 32, 0.4) 0px 4px 20px 0px, rgba(217, 165, 32, 0.2) 0px 8px 40px 0px, rgba(255, 242, 204, 0.5) 0px 2px 4px 0px inset, rgba(152, 116, 27, 0.5) 0px -2px 4px 0px inset`
- **shadow-md:** `rgba(217, 165, 32, 0.3) 0px 0px 30px 0px, rgba(217, 165, 32, 0.15) 0px 0px 60px 0px, rgba(237, 197, 94, 0.3) 0px 1px 0px 0px inset`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-base:** `0.3s`
- **duration-base:** `transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `0.6s ease-out 0.3s forwards fade-in`
- **duration-slow:** `0.6s ease-out 0.2s forwards fade-in`
- **duration-slow:** `0.6s ease-out 0.5s forwards fade-in`
- **duration-slow:** `0.6s ease-out 0.9s forwards fade-in`
- **duration-slow:** `0.6s ease-out 0.6s forwards fade-in`
- **duration-slow:** `0.6s ease-out 0.1s forwards fade-in`
- **duration-slow:** `1s infinite bounce`
- **duration-slow:** `2s cubic-bezier(0.4, 0, 0.6, 1) infinite pulse`

## Component Inventory

- **Buttons:** 4 detected
- **Lists:** 1 detected
- **Images:** 5 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 8px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (4px, 8px, 12px, 9999px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
