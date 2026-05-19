## 2025-05-15 - [Accessible Icon Buttons]
**Learning:** Icon-only buttons in base components (Table, Pagination, Header, Filter) frequently lacked `aria-label` attributes, making them inaccessible to screen readers despite having visual icons or `title` attributes.
**Action:** Always ensure `aria-label` is present on icon-only buttons, preferably using shared translation keys in `common.json` under the `base` namespace to maintain consistency across the application.
