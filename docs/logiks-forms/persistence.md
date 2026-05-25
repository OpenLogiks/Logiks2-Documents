---
id: persistence
title: Persistence
---

# Persistence

## Persistent Fields

```json id="persistent-true"
"persistent": true
```

Stores values locally and reuses them when reopening form. When `persistent` is a boolean, the field name is used as the key, and if it is a string, the string is used as the key.

When `persistent` property is not specified, then value is not persisted which is same as `persistent: false`.
This is helpful when you want to store values for a specific form.

---

## Custom Key

```json id="persistent-key"
"persistent": "user_name"
```

---

## Behavior

- Works in **add mode**
- Pre-fills previously entered values
- Stored per module reference

---
