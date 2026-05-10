## 2025-05-15 - [Accessibility Improvements in Base Components]
**Learning:** Core UI components like tables, pagination, and headers often contain icon-only buttons that are easily overlooked for accessibility. Standardizing the use of ARIA labels in these shared components has a high impact across the entire application.
**Action:** Always check for aria-label or title attributes when using icon-only buttons in shared components. Ensure translation keys for these labels are included in the global common translation files.
