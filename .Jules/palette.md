## 2026-05-21 - [Accessibility: ARIA labels for core components]
**Learning:** Core components like BaseTable, BasePagination, and BaseHeader often miss ARIA labels on icon-only buttons, making them inaccessible to screen readers.
**Action:** Always check for icon-only buttons in base components and ensure they have descriptive ARIA labels using localized translation keys nested under the 'base' object in common.json.
