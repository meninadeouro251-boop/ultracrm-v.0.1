## 2025-05-15 - [Preserving Localization Keys during Updates]
**Learning:** Overwriting or poorly merging localization JSON files can lead to destructive regressions by deleting existing, necessary translation keys.
**Action:** Use targeted `replace_with_git_merge_diff` to append or modify specific keys within nested JSON structures, ensuring existing content is preserved.

## 2025-05-15 - [Efficient Tooltip Management in Chat Input]
**Learning:** Wrapping multiple icon-only buttons individually with `TooltipProvider` in a complex component like `MessageInput` creates redundant providers and potentially conflicting event listeners.
**Action:** Centralize `TooltipProvider` at the parent component level to serve all child `Tooltip` components, which also keeps the implementation within micro-UX change limits.
