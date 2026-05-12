## 2025-03-27 - [Accessibility] ARIA labels for icon-only buttons
**Learning:** Icon-only buttons (like pagination arrows, filter removal 'X', and 'more' dropdowns) are inaccessible to screen reader users if they lack descriptive ARIA labels. Using translation keys for these labels ensures accessibility across all supported languages.
**Action:** Always ensure `aria-label` attributes are present on icon-only buttons in base components, utilizing localized strings from the common translation files.
