## 2026-06-23 - [Standardizing Icon-only Button Accessibility]
**Learning:** Icon-only buttons in the chat interface frequently use native browser 'title' attributes or custom CSS tooltips, which are inconsistent and less accessible than the design system's Tooltip component combined with an explicit 'aria-label'.
**Action:** Always replace 'title' with 'Tooltip' from '@ultraapi/design-system' and ensure 'aria-label' is present and localized for all icon-only buttons.
