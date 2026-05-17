## 2025-05-14 - Accessible Icon-only Buttons
**Learning:** Icon-only buttons (like pagination arrows, "more" menus, and delete icons) are inaccessible to screen reader users if they lack descriptive ARIA labels. Using hardcoded labels prevents proper localization.
**Action:** Always provide an `aria-label` attribute for icon-only buttons using localized translation keys from the `base` namespace in `common.json`.
