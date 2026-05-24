## 2025-05-14 - Standardizing Chat Action Tooltips
**Learning:** Icon-only buttons in the chat interface were missing consistent ARIA labels and tooltips, hindering accessibility and clarity. Centralizing `TooltipProvider` at the parent component level (e.g., `MessageInput.tsx`) is more efficient than wrapping each individual button.
**Action:** Use a single `TooltipProvider` to wrap multiple action buttons in complex components. Always provide both `aria-label` (for screen readers) and `Tooltip` (for sighted users) for icon-only buttons using localized keys.
