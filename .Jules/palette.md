## 2025-05-14 - Standardizing Chat Input Accessibility
**Learning:** Icon-only buttons in the chat interface often relied on native 'title' attributes or custom CSS tooltips, which are not accessible to screen readers or consistent with the design system. Centralizing the TooltipProvider and using the standard Tooltip component with explicit aria-labels ensures a predictable and accessible experience.
**Action:** Always use Tooltip and aria-label for icon-only buttons. Centralize TooltipProvider at the component root level to serve multiple child components efficiently.
