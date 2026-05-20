## 2025-05-15 - [Accessibility and i18n in Agent Chat]
**Learning:** Icon-only buttons in the AI Agents chat interface (Attach, Send, Remove) lacked ARIA labels and used hardcoded Portuguese strings for error messages, which was inconsistent with the rest of the app's i18n strategy.
**Action:** Always verify that icon-only buttons have both `title` and `aria-label` attributes, and ensure all user-facing strings in feature components are retrieved via translation hooks (e.g., `useLanguage`).
