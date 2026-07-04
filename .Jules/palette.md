## 2026-07-04 - Standardizing Chat Input Tooltips & Accessibility

**Learning:** Replacing browser-native `title` attributes with design system `Tooltip` components and adding explicit `aria-label` to icon-only buttons significantly improves screen reader support and UI consistency. Using `type="button"` on all interactive elements in a form-like context (like a chat input) prevents unintentional form submissions.

**Action:** Always wrap the root of complex interactive components with `TooltipProvider` to serve all children, and ensure every icon-only button has both a `Tooltip` and a matching `aria-label`.
