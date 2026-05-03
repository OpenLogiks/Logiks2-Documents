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

## Use cases for rows

When you want to highlight a row based on a condition, for example, if the "allow_staff_update" field is "yes", you can apply the "allow_update_staff" class to that row, and if it's "no", you can apply the "not_allow_update_staff" class. This can be useful for visually distinguishing rows that meet certain criteria, such as highlighting rows where staff updates are allowed or not allowed.

**Example for adding style to a column**

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

## Use cases for columns

When you want to highlight a column based on a condition, for example, if the "allow_staff_update" field is "yes", you can apply the "allow_update_staff" class to that column, and if it's "no", you can apply the "not_allow_update_staff" class. This can be useful for visually distinguishing columns that meet certain criteria, such as highlighting columns where staff updates are allowed or not allowed.

In both cases, you would need to define the CSS classes "allow_update_staff" and "not_allow_update_staff" in your stylesheet to specify the desired styling for those conditions.

**Note:** The actual implementation of how these rules are applied may depend on the specific reporting tool or framework you are using, so make sure to refer to the documentation of that tool for any additional configuration or syntax requirements.
