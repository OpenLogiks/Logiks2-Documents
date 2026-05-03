---
id: api-js
title: API - Internal API
---

# API - Internal API

## Overview

The `api.js` file contains all backend functions mapped to routes defined in `routes.json`.

These functions can be triggered via:

- Routes (`routes.json`)
- Webhooks
- Internal framework calls

---

## Responsibility

- Implements business logic
- Handles validation
- Interacts with database
- Returns response to client

---

## Integration with Routes

Each route in `routes.json` maps to a function in `api.js`.

### Example Mapping

```json id="q0e7k3"
"data": "VENDOR.getVendorList"
```

```js id="z5q1xk"
module.exports = {
  VENDOR: {
    getVendorList: async function (data, ctx) {
      // implementation
    },
  },
};
```

---

## File Structure

```js id="w2k9lp"
const Validator = require("validatorjs");
const moment = require("moment");

const baseUrl = process.env.BASEURL;

module.exports = {
  function_name: async function (data, ctx, path, rpath) {
    try {
      const userId = ctx?.meta?.user?.userId;

      const validation = new Validator(data, {
        company_code_id: "required|integer",
        sector_id: "required|integer",
        project_function_id: "required|integer",
        location_id: "required|integer",
      });

      if (validation.fails()) {
        return {
          success: false,
          msg: "Validation Failed!",
          errors: validation.errors.all(),
        };
      }

      const { company_code_id, sector_id, project_function_id, location_id } =
        data;

      const whereClause = {
        company_code_id,
        sector_id,
        project_function_id,
        location_id,
        blocked: "false",
      };

      const response = await _DB.db_selectQ(
        "appdb",
        "table_name",
        "id, company_code_id, sector_id, project_function_id, location_id, plant_code",
        whereClause,
      );

      if (response.status === "success") {
        return {
          success: true,
          data: response.results,
        };
      }

      return {
        success: false,
        msg: response?.msg || "Failed to get the data",
      };
    } catch (e) {
      return {
        success: false,
        msg: e.message || "Error in function_name",
      };
    }
  },
};
```

---

## Function Signature

```js id="h3z4qp"
async function (data, ctx, path, rpath)
```

| Parameter | Description               |
| --------- | ------------------------- |
| `data`    | Request payload           |
| `ctx`     | Context (user, meta info) |
| `path`    | Route path                |
| `rpath`   | Resolved route path       |

---

## Context Access

```js id="zz5h3o"
const userId = ctx?.meta?.user?.userId;
```

Provides access to:

- Logged-in user
- Request metadata

---

## Environment Variables

Environment variables can be accessed using:

```js id="8vcm4p"
process.env.VARIABLE_NAME;
```

Example:

```js id="v5g4zc"
const baseUrl = process.env.BASEURL;
```

---

## External Libraries

Libraries can be installed using:

```bash id="y5q6xv"
npm install <library-name>
```

Then used in `api.js`:

```js id="zz4qwr"
const moment = require("moment");
```

Installed libraries are tracked in:

- `package.json`
- `logiks.json` (framework reference)

---

## Validation

Validation is handled using `validatorjs`.

```js id="d7k3ps"
const validation = new Validator(data, {
  company_code_id: "required|integer",
});
```

### On Failure

```js id="v6pl4e"
if (validation.fails()) {
  return {
    success: false,
    errors: validation.errors.all(),
  };
}
```

---

## Database Access

Example query:

```js id="3l0y5o"
const response = await _DB.db_selectQ(
  "appdb",
  "table_name",
  "columns",
  whereClause,
);
```

---

## Response Format

### Success

```json id="o5xq9u"
{
  "success": true,
  "data": []
}
```

### Failure

```json id="2yq7sp"
{
  "success": false,
  "msg": "Error message"
}
```

---

## Encryption Utilities (Optional)

```js id="r9k3wp"
const encryptData = async (content) => {
  const key = process.env.ENCRYPT_NOTE_KEY;
  return await ENCRYPTER.encrypt(content, key);
};

const decryptData = async (content) => {
  const key = process.env.ENCRYPT_NOTE_KEY;
  return await ENCRYPTER.decrypt(content, key);
};
```

---

## Notes

- Function name must match `routes.json` mapping
- Always return structured response (`success`, `data` / `msg`)
- Use `ctx` for user/session data
- Use environment variables for configuration
- Validation should be handled before processing

---

This keeps your documentation:

- Consistent with `routes.json`
- Focused on structure
- Clear for implementation without over-explaining internals
