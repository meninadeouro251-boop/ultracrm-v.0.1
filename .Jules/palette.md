## 2026-05-27 - Standardize tooltips and enhance accessibility in MessageInput
**Learning:** Icon-only buttons in the chat interface were using browser-native 'title' attributes or custom CSS tooltips, leading to an inconsistent and inaccessible user experience. Hoisting TooltipProvider to the parent component avoids redundancy and ensures consistent behavior.
**Action:** Replace all 'title' attributes with the design system's Tooltip component, ensure every icon-only button has an aria-label, and centralize TooltipProvider at the component root.
