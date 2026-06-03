## 2025-05-15 - Standardizing Tooltips and Accessibility in Chat Input
**Learning:** Icon-only buttons in the chat interface were inconsistently using the native `title` attribute or custom CSS tooltips, and often lacked `aria-label` attributes. Centralizing `TooltipProvider` at the root allows for seamless use of the design system's `Tooltip` component everywhere.
**Action:** Always ensure `TooltipProvider` is available at the application root and prioritize the design system's `Tooltip` + `aria-label` pattern over native attributes for all icon-only interactive elements.
