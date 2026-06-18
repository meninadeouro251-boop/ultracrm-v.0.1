## 2026-06-18 - Standardized Accessibility for Chat Actions
**Learning:** Icon-only buttons in the chat interface often relied on browser-native 'title' attributes or custom CSS tooltips, which are inconsistent and less accessible than the design system's Tooltip component.
**Action:** Centralize TooltipProvider at the parent component level (e.g., MessageInput) to serve multiple child action components efficiently, ensuring each button has an aria-label, a design system Tooltip, and type="button".
