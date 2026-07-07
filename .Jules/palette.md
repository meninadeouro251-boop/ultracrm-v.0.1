## 2025-05-15 - Standardizing Tooltips and ARIA Labels in Chat Input
**Learning:** Browser-native `title` attributes are insufficient for modern accessibility and often provide a poor UX compared to design system tooltips. Centralizing `TooltipProvider` at the component root level (e.g., `MessageInput.tsx`) efficiently serves multiple child components without redundant wrappers.
**Action:** Always replace `title` with `Tooltip` and `aria-label` for icon-only buttons, and ensure `TooltipProvider` is correctly scoped to avoid event conflicts.
