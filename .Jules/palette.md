## 2025-05-15 - [Accessibility Pattern: Icon-only Buttons]
**Learning:** Icon-only buttons in core base components (BaseTable, BasePagination, BaseHeader, BaseFilterRow) frequently lack ARIA labels, making them inaccessible to screen readers.
**Action:** Always check base components when adding new features and ensure `aria-label` attributes are present using the established translation keys in `common.json`.
