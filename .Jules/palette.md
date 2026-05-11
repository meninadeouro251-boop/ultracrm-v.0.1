## 2025-05-15 - [ARIA Labels for Base Components]
**Learning:** Icon-only buttons in base components (`BaseTable`, `BasePagination`, etc.) were missing ARIA labels, making them inaccessible to screen readers. Consistency in using translation keys for these labels is crucial for internationalization.
**Action:** Always check base components for icon-only buttons and ensure they have a descriptive `aria-label` using a key from the i18n files.
