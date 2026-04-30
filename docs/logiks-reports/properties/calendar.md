---
id: calendar
title: Calendar
---

# Calendar

Defines how data is displayed in calendar view.

> **Note:** The `datagrid` object is required along with `calendar`, as calendar events are derived from the data columns defined in the datagrid.

## Example

```json
"calendar": {
  "colmap": {
    "title": "persona_name",
    "descs": "persona_desc"
  },

  "date_col": {
    "created_on": "#9428C8",
    "edited_on": "#3653C6"
  },

  "unilink": "staff.main",

  "notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>"
}
```

## Properties

## colmap

Maps data columns from the `datagrid` to calendar event fields.

Each key represents a predefined calendar event component, and the value should match a column key from the `datagrid`.

Supported mappings:

---

### title

Primary title shown for the calendar event.

Example:

```json
"title": "persona_name"
```

---

### descs

Description or additional details shown for the event.

Example:

```json
"descs": "persona_desc"
```

---

## date_col

Defines which date columns should be rendered as calendar events.

Each key should reference a date column from the `datagrid`, and its value defines the event color.

Example:

```json
"date_col": {
  "created_on": "#9428C8",
  "edited_on": "#3653C6"
}
```

In this example:

- `created_on` events appear with color `#9428C8`
- `edited_on` events appear with color `#3653C6`

### Usage

This allows multiple date fields from the same record to appear as separate event types in the calendar.

Common examples:

- Created Date
- Due Date
- Updated Date
- Deadline
- Follow-up Date

---

## unilink

Defines the route or UI link opened when a calendar event is clicked.

Example:

```json
"unilink": "staff.main"
```

This opens the linked UI destination when the event is selected.

---

## notes_user

Displays custom HTML notes, legends, or event indicators in the calendar UI.

Example:

```json
"notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>"
```

Typical uses:

- Color legends
- Event type indicators
- User instructions
- Custom notes

Supports custom HTML.

---

## Notes

- `calendar` uses values from the `datagrid` dataset and does not define independent data.
- `colmap` controls event content.
- `date_col` defines which date columns appear on the calendar.
- Multiple date fields can be displayed simultaneously.
- `unilink` is optional and enables event navigation.
- `notes_user` is optional and is commonly used for legends or helper notes.

```

```
