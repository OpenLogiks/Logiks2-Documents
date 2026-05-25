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

Here is an example of multi-step chain, where a selection in one field will populate another field and so on.
The company_code_id will populate sector_id and sector_id will populate project_id, The chaining will continue till the last field and the chain will be terminated when `ajaxchain` is not defined.

The `parameter` is passed as a parameter to the api endpoint in the `ajaxchain`. Here for example `"parameter": "company_id"` will be passed as payload to the api endpoint `/api/services/eofficeGlobal/get_sector`. In `company_code_id` the `ajaxchain` is defined, and tell to populate `sector_id` field, which is specified in `target`.
Same goes for `sector_id` and `project_id`.

```json id="multi-chain"
{
  "company_code_id": {
    "label": "Company/ SPV",
    "type": "select",
    "parameter": "company_id",
    "required": true,
    "source": {
      "type": "api",
      "method": "post",
      "endpoint": "/api/services/eofficeGlobal/get_company"
    },
    "ajaxchain": [
      {
        "target": "sector_id",
        "src": {
          "type": "api",
          "method": "post",
          "endpoint": "/api/services/eofficeGlobal/get_sector"
        }
      }
    ],
    "no-option": "Select Company/ SPV",
    "width": 4
  },
  "sector_id": {
    "label": "Sector",
    "no-option": "Select Sector",
    "type": "select",
    "parameter": {
      "sector_id": "sector_id",
      "company_id": "company_code_id"
    },
    "ajaxchain": [
      {
        "target": "project_id",
        "src": {
          "type": "api",
          "method": "post",
          "endpoint": "/api/services/eofficeGlobal/get_project_function"
        }
      }
    ],
    "required": true,
    "width": 4
  },
  "project_id": {
    "label": "Project Function",
    "type": "select",
    "required": true,
    "width": 4,
    "no-option": "Select Project Function"
  }
}
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
