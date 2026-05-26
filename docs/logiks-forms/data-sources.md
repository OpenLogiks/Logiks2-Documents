---
id: data-sources
title: Data Sources
---

# Data Sources

This section typically contains the data sources for the `select` type of form fields.
Refer to [Field Types](/logiks-forms/field-types/#select) for more information.

## Static Options

```json id="static-options"
"options": [
  { "label": "India", "value": "IN" }
]
```

---

## API Source

```json id="api-source"
"source": {
  "type": "api",
  "endpoint": "/countries"
}
```

---

## SQL Source

```json id="sql-source"
"source": {
  "type": "sql",
  "table": "countries",
  "columns": "id,name"
}
```

---

## dataMethod

```json id="data-method"
"type": "dataMethod",
"method": "getManagers"
```

---
