## 2025-05-15 - Standardizing Chat Input Tooltips
**Learning:** Found a pattern where icon-only buttons in the chat interface lacked consistent accessibility attributes (aria-label) and used a mix of native title attributes and custom CSS tooltips instead of the design system's Tooltip component. TooltipProvider was also not consistently available at the component level.
**Action:** Always wrap complex action bars with TooltipProvider and use the design system's Tooltip component paired with aria-label for all icon-only buttons to ensure consistency and screen reader compatibility.
