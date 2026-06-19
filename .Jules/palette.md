## 2025-05-15 - [Standardizing Accessibility for Core Base Components]
**Learning:** Core UI components (BaseTable, BasePagination, BaseHeader, BaseFilterRow) frequently use icon-only buttons without descriptive ARIA labels or tooltips, which hinders screen reader users and discoverability. Since TooltipProvider is not centralized at the app root, it must be added to each base component that uses tooltips.

**Action:** Ensure `aria-label` and `Tooltip` are present on all icon-only buttons in base components, utilizing standardized translation keys in the `base` namespace of `common.json` across all supported locales. Use `TooltipProvider` at the component root level to serve multiple child triggers efficiently.
