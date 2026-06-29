## 2025-05-15 - Standardizing Chat Interface Accessibility

**Learning:** Icon-only buttons in the chat interface (MessageInput, FileUpload, AI Assistance) should always provide a visible `Tooltip` on hover and a corresponding `aria-label` in all interactive states to replace browser-native `title` attributes or custom CSS tooltips. Additionally, explicitly including `type="button"` prevents unintended form submissions.

**Action:** When working on chat components, centralize `TooltipProvider` at the component root level to serve all children efficiently, and ensure every icon-only button uses localized keys from `chat.json` for both its tooltip and ARIA label.
