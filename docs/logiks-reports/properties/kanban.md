---
id: kanban
title: Kanban
---

# Kanban

Defines how data is displayed in Kanban board view.

> **Note:** The `datagrid` object is required along with `kanban`, as Kanban fields are derived from the data columns defined in the datagrid.

## Example

```json
"kanban": {
  "colkeys": {
    "persona_group": {
      "label": "Persona Group"
    },
    "created_by": {
      "label": "Created By"
    },
    "editable": {
      "label": "Editable"
    },
    "status": {
      "label": "Status"
    },
    "visibility": {
      "label": "Visibility"
    }
  },
  "colmap": {
    "title": "persona_name",
    "department": "created_by",
    "descs": "persona_descs",
    "category": "gender",
    "due_date": "dtoe",
    "avatar": "persona_avatar",
    "color": "type",
    "tags": "role",
    "counter": "rating"
  }
}
```

## Properties

## colkeys

Defines the Kanban columns (board lanes).

Each key in `colkeys` represents a column available in the Kanban board.

Example:

```json
"colkeys": {
  "status": {
    "label": "Status"
  }
}
```

---

### key

The key of the object in `colkeys` represents the Kanban column identifier.

Example:

```json
"persona_group"
```

---

### label

Display label shown as the Kanban column header.

Example:

```json
"label": "Persona Group"
```

---

## colmap

Maps data columns from the `datagrid` to Kanban card UI elements.

Each key represents a predefined Kanban card component, and the value should match a column key from the `datagrid`.

Supported mappings:

---

### title

Primary heading of the Kanban card.

```json
"title": "persona_name"
```

---

### department

Displays department, owner, or assigned user.

```json
"department": "created_by"
```

---

### descs

Description or summary text shown in the card body.

```json
"descs": "persona_descs"
```

---

### category

Displays category or classification label.

```json
"category": "gender"
```

---

### due_date

Displays due date or date-related information.

```json
"due_date": "dtoe"
```

---

### avatar

Defines the column used for avatar or profile image.

```json
"avatar": "persona_avatar"
```

---

### color

Defines which column controls Kanban card color styling.

```json
"color": "type"
```

Can be used for type-based visual indicators.

---

### tags

Displays tags or badges associated with the card.

```json
"tags": "role"
```

Supports displaying one or multiple labels.

---

### counter

Displays a numeric value, count, rating, or indicator.

```json
"counter": "rating"
```

Example uses:

- Task count
- Priority score
- Rating
- Item totals

---

## Notes

- `kanban` uses values from the `datagrid` dataset and does not define independent data.
- `colkeys` defines the Kanban lanes.
- `colmap` controls how each Kanban card is rendered.
- All `colmap` values must reference valid keys in the `datagrid`.
- Additional mappings can be extended as supported by the UI renderer.

```

```
