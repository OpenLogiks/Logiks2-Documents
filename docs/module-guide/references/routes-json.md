---
id: routes-json
title: Routes JSON
---

# Routes JSON

## Overview

The `routes.json` file defines all API routes for a module.

These routes are referenced by:

- Components (from `component/`)
- Report actions and buttons
- Forms

This file only defines **route configuration**.
The actual implementation must be written in `api.js`.

---

## Rule

- Define routes in `routes.json`
- Implement logic in [`api.js`](/module-guide/references/api-js)

---

## Basic Structure

```json
{
  "enabled": true,
  "descs": "Action manager",
  "routes": {
    "/get_vendor_list": {
      "method": "POST",
      "data": "VENDOR.getVendorList",
      "format": "json"
    }
  }
}
```

---

## Field Description

### Root स्तर

| Field     | Description                     |
| --------- | ------------------------------- |
| `enabled` | Enables or disables all routes  |
| `descs`   | Description of the route group  |
| `routes`  | Collection of route definitions |

---

### Route Definition

| Field       | Description                        |
| ----------- | ---------------------------------- |
| `method`    | HTTP method (GET, POST, etc.)      |
| `data`      | Function reference in `api.js`     |
| `format`    | Response format (e.g., `json`)     |
| `validator` | Optional request validation schema |

---

## Data Mapping

```json
"data": "VENDOR.getVendorList"
```

- `VENDOR` → Plugin reference name
- `getVendorList` → Function in `api.js`

### Mapping Rule

```js
// api.js
export const VENDOR = {
  getVendorList: (params) => {
    // implementation
  },
};
```

---

## Validator (Optional)

Used to validate request payload before execution.

### Example

```json
{
  "enabled": true,
  "descs": "Action manager",
  "routes": {
    "/get_vendor_list": {
      "method": "POST",
      "data": "VENDOR.getVendorList",
      "format": "json",
      "validator": {
        "type": "object",
        "properties": {
          "search": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

---

## Notes

- Route path must start with `/`
- `data` must match a function in `api.js`
- `validator` is optional but recommended
- Plugin name acts as a namespace for functions

---
