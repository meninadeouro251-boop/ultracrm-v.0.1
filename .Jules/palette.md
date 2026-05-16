## 2025-05-15 - [Accessibility] Localized ARIA labels for base components
**Learning:** Icon-only buttons in core "Base" components (Table, Pagination, Header, FilterRow) were missing ARIA labels, making them inaccessible to screen readers. Furthermore, the necessary descriptive strings were missing from the localization files.
**Action:** Always ensure icon-only buttons in shared components have localized `aria-label` attributes. Add corresponding keys to `common.json` in the `base` object for all supported languages.
