## 2025-05-15 - Consolidating TooltipProviders in Chat Interface
**Learning:** Nesting multiple `TooltipProvider` components from `@ultraapi/design-system/tooltip` can lead to event conflicts and redundant DOM overhead. In complex nested components like the chat message input, it's more efficient and stable to centralize a single provider at the highest parent level that encompasses all child actions.
**Action:** Always verify if a `TooltipProvider` exists at a higher level before adding one to a sub-component. If multiple adjacent components need tooltips, wrap their common parent instead.
