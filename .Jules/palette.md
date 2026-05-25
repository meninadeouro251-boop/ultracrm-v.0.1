## 2026-05-25 - [A11y: Chat Interface Accessibility]
**Learning:** Icon-only buttons in the chat interface (Emoji, Audio, Canned Responses, etc.) often lack consistent ARIA labels and standardized Tooltips, relying on either browser-native `title` or custom CSS tooltips which provide poor accessibility.
**Action:** Replace custom/native tooltips with the design system's `Tooltip` component and ensure `aria-label` is always present, using localized keys from the `messageInput` namespace in `chat.json`.

## 2026-05-25 - [UX: Centralized Tooltip Providers]
**Learning:** Redundant `TooltipProvider` instances around individual action buttons can be avoided by wrapping the entire input card or component return. However, in complex components like `MessageInput`, localized providers ensure buttons work correctly when moved or refactored.
**Action:** Consider wrapping the entire interaction area with a single `TooltipProvider` to improve performance and consistency, while ensuring all icon-only buttons are covered.
