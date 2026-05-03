---
id: logiks-json
title: Logiks JSON
---

---

# Logiks JSON

## Overview

The `logiks.json` file is the **central manifest** of a module.

It defines:

- Module identity
- Dependencies
- Access policies
- Navigation integration

This file acts as the **single source of truth** for how the module is registered and behaves within the Logiks framework.

---

## Example

```json id="v2g9yq"
{
  "name": "vendor",
  "version": "1.0",
  "description": "Plugin for BizSuite2 for vendor",
  "keywords": "logiks,modules,bizsuite2,vendor",
  "status": "stable",
  "type": "modules",
  "package": "com.smartinfologiks.vendor",
  "license": "SILK",
  "marketid": "com.smartinfologiks.vendor",
  "homepage": "",
  "bugs": "https://support.smartinfologiks.com",
  "private": true,
  "repository": {
    "url": "",
    "type": "git"
  },
  "dependencies": {
    "core": "+4.0.0"
  },
  "authors": [
    {
      "name": "Shivraj Chavan",
      "email": "",
      "authorid": ""
    }
  ],
  "navigation": [
    {
      "title": "vendor",
      "link": "modules/vendor",
      "iconpath": "",
      "tips": "",
      "to_check": ""
    }
  ],
  "policies": {
    "vendor.tab.access": "false",
    "vendor.create.access": "false",
    "vendor.view.access": "false",
    "common.allow.access": "false",
    "vendor.update.access": "false"
  }
}
```

---

## Key Sections

### Identity

| Field         | Description                  |
| ------------- | ---------------------------- |
| `name`        | Module name                  |
| `version`     | Module version               |
| `description` | Short description            |
| `keywords`    | Search tags                  |
| `type`        | Module type (`modules`)      |
| `package`     | Unique package identifier    |
| `marketid`    | Marketplace identifier       |
| `license`     | License type                 |
| `status`      | Module status (e.g., stable) |

---

### Repository

```json id="v6e8y2"
"repository": {
  "url": "",
  "type": "git"
}
```

- Tracks source code location
- Used for version control and maintenance

---

### Dependencies

```json id="p9z7d1"
"dependencies": {
  "core": "+4.0.0"
}
```

- Defines required modules or core versions
- Ensures compatibility with framework

---

### Authors

```json id="x8l3m2"
"authors": [
  {
    "name": "Shivraj Chavan"
  }
]
```

- Maintains ownership information
- Useful for tracking contributors

---

### Navigation

```json id="t7k2q9"
"navigation": [
  {
    "title": "vendor",
    "link": "modules/vendor"
  }
]
```

- Defines how the module appears in UI
- Controls menu entry and routing
- Used by the application navigation system

---

### Policies

```json id="r4h6b8"
"policies": {
  "vendor.tab.access": "false",
  "vendor.create.access": "false",
  "vendor.view.access": "false"
}
```

- Controls access permissions
- Applied at module level
- Used for role-based access control

---

## Field Summary

| Section      | Purpose                 |
| ------------ | ----------------------- |
| Identity     | Defines module metadata |
| Repository   | Tracks source code      |
| Dependencies | Ensures compatibility   |
| Authors      | Ownership details       |
| Navigation   | UI integration          |
| Policies     | Access control          |

---

## Notes

- `logiks.json` is mandatory for every module
- Must be valid JSON
- Acts as the entry point for module registration
- Policies should be explicitly defined for security
- Navigation controls module visibility in UI

---
