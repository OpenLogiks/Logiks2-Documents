---
id: examples
title: Examples
---

# Examples

## Example 1: Simple Form

```json id="example-simple"
{
  "template": "simple",
  "fields": {
    "name": {
      "type": "text",
      "label": "Name"
    }
  }
}
```

---

## Example 2: Dynamic Form

```json id="example-dynamic"
{
  "template": "simple",
  "fields": {
    "country": {
      "type": "select",
      "label": "Country",
      "source": {
        "type": "api",
        "endpoint": "/countries"
      }
    },
    "state": {
      "type": "select",
      "dependsOn": "country",
      "ajaxchain": {
        "src": {
          "endpoint": "/states",
          "refid": "{country}"
        }
      }
    }
  }
}
```

---
