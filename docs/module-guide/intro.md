---
id: intro
title: Module Guide Introduction
slug: /module-guide/intro
---

# Module Guide Introduction

## Overview

Modules (plugins) are the core building blocks of the Logiks Framework.
Each module is a **self-contained unit** that delivers a specific functionality within the system.

A module can represent:

- A small feature (e.g., notification handler)
- A complete business system (e.g., CRM, ticketing system)

---

## What is a Module

A module encapsulates:

- Business logic
- UI screens
- Data handling
- APIs
- Workflows

Each module is:

- Independent
- Reusable
- Extensible

---

## Architecture Context

Modules run within:

- Service Node layer
- MicroApp Server

This ensures:

- Scalability
- Security isolation
- Independent execution
- Seamless integration

---

## Standard Module Structure

```
├── api.js
├── component
│   ├── noteEditor.js
│   ├── noteEditor.jsx
├── dashboards
│   └── main.json
├── dbschema
│   ├── schema_0000.json
├── forms
│   ├── main.json
├── logiks.json
├── pages
│   ├── main.json
├── reports
│   ├── main.json
└── routes.json
```

**Note:** All `.json` files should not be blank. At minimum, include:

```json
{}
```

---

## Structure Explanation

### reports

- Defines data listing and analytics
- Used to render tabular views
- Supports filters, actions, exports
- Refer to [Reports](/module-guide/reports/mg-reports-intro/)

---

### pages

- Defines UI screens of the module
- Entry points for navigation
- Can include reports, forms, dashboards
- Refer to [Pages](/module-guide/pages/mg-pages-intro/)

---

### forms

- Handles data input and updates
- Used for create/edit/submit workflows
- Refer to [Forms](/module-guide/forms/mg-forms-intro/)

---

### dashboards

- Provides high-level summary view
- Displays KPIs, charts, alerts
- Refer to [Dashboards](/module-guide/dashboards/mg-dashboards-intro/)

---

### component

- Contains reusable UI components
- Written in `.jsx`
- Auto-compiled to `.js`
- Used across reports, forms, dashboards
- Refer to [Component](/module-guide/component/mg-component-intro/)

---

### routes.json

- Defines API routes
- Maps route → function in `api.js`
- **Should never be empty**
- Must contain valid route definitions
- Refer to [Routes JSON](/module-guide/references/routes-json/)

---

### api.js

- Contains backend logic
- Handles business rules and database access
- Used by routes and webhooks
- Refer to [API](/module-guide/references/api-js/)

---

### dbschema

- Defines database schema structure
- Used for table creation and updates
- Version-controlled (e.g., `schema_0000.json`)
- Refer to [DB Schema](/module-guide/dbschema/mg-dbschema-intro/)

---

## Key Components Summary

| Component     | Purpose              |
| ------------- | -------------------- |
| `logiks.json` | Module configuration |
| `pages`       | UI screens           |
| `reports`     | Data views           |
| `forms`       | Data input           |
| `infoviews`   | Read-only views      |
| `dashboards`  | Summary views        |
| `component`   | Reusable UI          |
| `api.js`      | Backend logic        |
| `routes.json` | API routing          |
| `dbschema`    | Database schema      |

---

## Getting Started

1. Define module structure
2. Configure `logiks.json`
3. Create pages, reports, forms
4. Add routes and APIs
5. Build reusable components

Following this structure ensures:

- Clean separation of concerns
- Reusability
- Scalability

---
