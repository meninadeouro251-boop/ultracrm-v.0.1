## 2025-05-15 - Standardizing Chat Interface Accessibility
**Learning:** Icon-only buttons in the chat interface (MessageInput, FileUpload, AI Assistance) often lacked proper ARIA labels and relied on native 'title' attributes, which are inconsistent across screen readers and browsers. Centralizing TooltipProvider and using the design system's Tooltip component ensures a consistent, accessible experience.
**Action:** Always provide both `aria-label` and `Tooltip` for icon-only buttons using localized keys, and centralize TooltipProvider at the component root when multiple tooltips are used.
