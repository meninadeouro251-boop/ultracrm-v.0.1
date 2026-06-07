## 2025-05-14 - [Centralized TooltipProvider]
**Learning:** TooltipProvider is not centralized at the app root, so it must be applied at the parent component level (e.g., MessageInput.tsx) to serve multiple child tooltips.
**Action:** Always check if a TooltipProvider is available before adding Tooltips to icon-only buttons.
