## 2026-05-30 - [Standardized Accessible Tooltips for Chat Interface]
**Learning:** Icon-only buttons in the chat interface often relied on inconsistent native 'title' attributes or custom tooltip implementations, which are not ideal for screen readers or design consistency.
**Action:** Always provide both an 'aria-label' and wrap icon-only buttons in the design system's 'Tooltip' component. Centralize 'TooltipProvider' at the feature-root level (like MessageInput) to serve all child action buttons efficiently.
