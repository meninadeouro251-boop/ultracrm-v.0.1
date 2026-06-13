## 2025-03-12 - [Standardizing Chat Input Accessibility]
**Learning:** Icon-only buttons in the chat interface were using inconsistent accessibility patterns (some used native `title`, some used custom tooltips, some lacked `aria-label`). Standardizing on the design system's `Tooltip` and `aria-label` ensures a consistent screen reader experience and a polished visual feel.
**Action:** Always provide both `aria-label` and `Tooltip` for icon-only buttons, and ensure translation keys are added across all supported locales (en, es, fr, it, pt, pt-BR) in the `messageInput` namespace.
