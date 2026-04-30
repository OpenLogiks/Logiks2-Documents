---
id: rules
title: Rules
---

# Rules

Used to apply conditional styling to rows or columns.

**Example for adding style to a row**

```json
"rules": {
  "row_class": {
    "allow_staff_update": {
      "yes": "allow_update_staff",
      "no": "not_allow_update_staff"
    }
  }
}
```

**Example for adding style to a col**

```json
"rules": {
  "col_class": {
    "allow_staff_update": {
      "yes": "allow_update_staff",
      "no": "not_allow_update_staff"
    }
  }
}
```

## Use cases

- Highlight rows
- Conditional styling
