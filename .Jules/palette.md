## 2025-05-22 - [Centralized TooltipProvider Pattern]
**Learning:** Wrapping multiple icon-only buttons in individual `TooltipProvider` components is redundant and can lead to unnecessary context overhead. Centralizing the provider at the highest common parent level (e.g., the `MessageInput` component) is more efficient and maintains consistency.
**Action:** When adding tooltips to multiple sibling components or sub-components, place a single `TooltipProvider` at the parent level instead of repeating it within each child.
