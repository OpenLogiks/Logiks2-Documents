---
id: dynamic-behaviors
title: Dynamic Behaviors
---

# Dynamic Behaviors

## Field Dependency

```json id="depends-on"
"dependsOn": "country"
```

---

## Ajax Chain

```json id="ajax-chain"
"ajaxchain": {
  "src": {
    "endpoint": "/states",
    "refid": "{country}"
  }
}
```

---

## Multi-step Chain

```json id="multi-chain"
"ajaxchain": [
  { "src": { "endpoint": "/cities" }},
  { "src": { "table": "city_table" }}
]
```

---

## Autocomplete Mapping

```json id="autocomplete-map"
"autocomplete": {
  "src": {
    "endpoint": "/user/details"
  },
  "target": "email,phone,name"
}
```

---

## Parameter Mapping

```json id="parameter-map"
"parameter": {
  "emp_id": "employee_lookup"
}
```

---
