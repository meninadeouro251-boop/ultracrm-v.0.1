## 2025-03-10 - Centralized TooltipProvider for Message Input
**Learning:** When multiple child components (like FileUpload and AIAssistanceButton) use tooltips, centralizing the TooltipProvider at the parent level (MessageInput.tsx) reduces redundant code and prevents potential event conflicts while staying within the 50-line change limit for micro-UX improvements.
**Action:** Wrap the parent component's return value in TooltipProvider when multiple icon-only buttons with tooltips are present.
