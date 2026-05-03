---
id: reports-common-props
title: Common Properties
---

# Common Properties

This section covers the common properties available for all Logiks Reports, regardless of the template used.

## Properties

```json
{
  "schema": "1.0",
  "title": "Drafts",
  "category": "Profile",
  "privilege": "*",
  "blocked": false,
  "onselect": "true",
  "rowlink": false,
  "rowsPerPage": 20,
  "showExtraColumn": "checkbox",
  "uiswitcher": true,
  "custombar": false,
  "topbar": {
    "uitype": "type1"
  },
  "DEBUG": false
}
```

### Title

![Report Title](/img/reports/Report-title.png)

```json
"title": "Inbox - Received"
```

### UI Mapping

- Located at **top-left of content area**
- Marked as **“Title of report”**
- Displays:
  - `Inbox - Received (23)`

### category

The category of the report.

### privilege

The privilege required to access the report.

### blocked

Whether the report is blocked or not.

### onselect

Whether to show the action button on click or not. If set to `true`, it will show the action button on click, otherwise it will not show the action button.

### rowlink

Whether to show the row link or not.

### rowsPerPage

The number of rows to show per page.

### showExtraColumn

Whether to show the extra column or not, if value is `checkbox` it will show a checkbox column for all the rows.

### uiswitcher

Whether to show the UI switcher or not.

### custombar

Whether to show the custom bar or not.

### topbar

The top bar of the report.

### DEBUG

Whether to enable debug mode or not. If enabled, it will display the SQL query when source supports SQL.

---
