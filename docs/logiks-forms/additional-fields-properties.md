---
id: additional-fields-properties
title: Additional Fields Properties
---

# Additional Fields Properties

## UI Enhancements

### `icon`

Specify an icon for the field. Supports Font Awesome icons.

```json
 "icon": "fa fa-plus"
```

### `width`

Set the width of the field. Accepts values like `1`, `2`, `3`, `4`, `6`, `7`, `8`, `9`, `10`, `11`, `12`.

```json
 "width": 6
```

### `group`

Use this property to group fields together in the form. Fields with the same `group` value will be rendered in the same section.
This is used when `template` is set to `accordion` or `tab`.

```json
 "group": "info"
```

---
