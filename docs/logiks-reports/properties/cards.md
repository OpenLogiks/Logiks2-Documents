---
id: cards
title: Cards
---

# Cards

Defines how data is displayed in card view.

> **Note:** The `datagrid` object is required along with `cards`, as card fields are derived from the data columns defined in the datagrid.

**Example:**

```json
"cards": {
  "colmap": {
    "title": "persona_name",
    "descs": "persona_descs",
    "category": "type",
    "due_date": "created_on",
    "avatar": "persona_avatar",
    "color": "status"
  },
  "colormap": {
    "active": "card_green",
    "under_notice": "card_red",
    "probationary": "card_blue"
  },
  "unilink": "staff.main",
  "default_avatar": true
}
```

## Properties

### colmap

Maps data columns from the `datagrid` to card UI elements.

Each key represents a predefined card component, and the value should match a column key from the `datagrid`.

Supported mappings:

### title

Primary heading of the card.

Example:

```json
"title": "persona_name"
```

Displays the value from the `persona_name` column as the card title.

---

### descs

Description or summary text displayed in the card body.

Example:

```json
"descs": "persona_descs"
```

---

### category

Displays a category, type, or label for the card.

Example:

```json
"category": "type"
```

---

### due_date

Displays date-related information on the card.

Example:

```json
"due_date": "created_on"
```

---

### avatar

Defines the column used to display an avatar or profile image.

Example:

```json
"avatar": "persona_avatar"
```

---

### color

Defines which data column controls card color mapping using `colormap`.

Example:

```json
"color": "status"
```

If `status` is `active`, the corresponding color class from `colormap` will be applied.

---

## colormap

Maps column values (usually from the field defined in `colmap.color`) to CSS classes for card styling.

Example:

```json
"colormap": {
  "active": "card_green",
  "under_notice": "card_red",
  "probationary": "card_blue"
}
```

In this example:

- `active` → applies `card_green`
- `under_notice` → applies `card_red`
- `probationary` → applies `card_blue`

Useful for status-based card colors.

---

## unilink

Defines the route or UI link used when clicking a card.

Example:

```json
"unilink": "staff.main"
```

This opens the linked UI destination when the card is selected.

---

## default_avatar

Displays a default avatar when no avatar value is available.

Example:

```json
"default_avatar": true
```

- `true` → fallback avatar shown when image is missing
- `false` → no fallback avatar

---

## Notes

- `cards` uses values from the `datagrid` dataset and does not define independent data.
- `colmap` values must reference valid keys in the `datagrid`.
- `colormap` is optional and used only for value-based color styling.
- `default_avatar` is optional.
- `unilink` is optional and used for card navigation.

```

```
