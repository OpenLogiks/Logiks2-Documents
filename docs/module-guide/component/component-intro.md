---
id: mg-component-intro
title: Component

---

# Component

Components are **reusable UI building blocks** used across modules in the Logiks framework.

They allow you to:

- Build custom UI logic
- Integrate with Logiks features (Reports, Forms, Dashboards, etc.)
- Reuse functionality across multiple modules

Each component is written in **JSX format** and automatically compiled into `.js` by the framework.

---

## How Components Fit in Modules

In a module:

```
component/
 ├── noteEditor.jsx   → Source (developer writes this)
 ├── noteEditor.js    → Auto-generated (framework uses this)
```

You only maintain `.jsx`
The framework handles `.js` generation

The format to write the component is as follows:

## Component Template

```jsx
export const capabilities = ["react", "icons", "tinymce"];

const CONSTANTS = {
  SUPPORTED_UPLOAD_FILE_FORMATS: ["txt", "ppt"],
  MAX_FILE_SIZE_MB: 5,
};

const normalizeRowData = (rowData = {}) =>
  Object.fromEntries(
    Object.entries(rowData)?.map(([key, value]) => [
      key.includes(".") ? key.split(".").pop() : key,
      value,
    ]),
  );

export default function ComponentName({
  React,
  Icons,
  TinyMCE,
  api,
  toast,
  handleAjax,
  rowData: rawData,
  RichTextField,
  handleAction,
  openGlobalPopup,
  location,
  handleBack,
  checkViewOnly,
  _r9,
}) {
  if (!React || !TinyMCE) {
    throw new Error("Dependencies not injected");
  }

  const { useState, useEffect, useMemo } = React;
  const rowData = useMemo(() => normalizeRowData(rawData), [rawData]);

  const storedUser = _r9("sys");
  const user = storedUser || null;
  const loggedInUserId = user?.user?.userId;

  const { Editor } = TinyMCE;

  const [html, setHtml] = useState("<p>Hello world</p>");

  useEffect(() => {
    // lifecycle logic
  }, []);

  return <div>{/* JSX UI */}</div>;
}
```

---

## Capabilities System (Important)

```js
export const capabilities = ["react", "icons", "tinymce"];
```

This tells the framework:

| Capability | What it Injects  |
| ---------- | ---------------- |
| `react`    | React + hooks    |
| `icons`    | Icon library     |
| `tinymce`  | Rich text editor |

If not declared → dependency **will not be available**

---

## Framework Injection Model

The framework **injects dependencies** instead of importing them.

- You do NOT write:

```js
import React from "react";
```

You use:

```js
function Component({ React }) { ... }
```

This makes components:

- Lightweight
- Controlled by the framework
- Dynamically extensible

---

## Available Props (Quick Reference)

### Core Utilities

| Prop         | Purpose       |
| ------------ | ------------- |
| `api`        | API calls     |
| `handleAjax` | AJAX helper   |
| `toast`      | Notifications |

### UI & Actions

| Prop              | Purpose                   |
| ----------------- | ------------------------- |
| `handleAction`    | Trigger framework actions |
| `openGlobalPopup` | Open modal/global UI      |
| `handleBack`      | Navigation back           |

### Data

| Prop      | Purpose                   |
| --------- | ------------------------- |
| `rowData` | Current record data       |
| `_r9`     | Access stored/global data |

### Context

| Prop            | Purpose              |
| --------------- | -------------------- |
| `location`      | Routing info         |
| `checkViewOnly` | Read-only mode check |

### Advanced

| Prop            | Purpose           |
| --------------- | ----------------- |
| `RichTextField` | Rich editor field |
| `Icons`         | Icon components   |
| `TinyMCE`       | Editor library    |

---

## Row Data Handling (Important Pattern)

Raw data often comes like:

```json
{
  "user.name": "John"
}
```

Normalize it:

```js
const rowData = useMemo(() => normalizeRowData(rawData), [rawData]);
```

Result:

```js
rowData.name; // "John"
```

---

## Access Logged-in User

```js
const user = _r9("sys");
const userId = user?.user?.userId;
```

---

## Example Use Cases

Components are used in:

- Reports → Open custom component from report actions or buttons
- Forms → Opens custom component from form actions
- Dashboards → Widgets
- Pages → Defines Custom layouts likes header, sidebar, footer, etc.

---

## Best Practices

### Do

- Always define `capabilities`
- Keep components **small and reusable**
- Use `useMemo` for data transformation
- Validate injected dependencies

### Don’t

- Import libraries manually
- Modify framework props directly
- Depend on global variables
- Write business logic tightly coupled to UI

---

## Troubleshooting

| Issue               | Fix                          |
| ------------------- | ---------------------------- |
| `.js` not generated | Delete `.js` and refresh     |
| Missing dependency  | Check `capabilities`         |
| Undefined props     | Ensure correct usage context |

---

## Key Takeaway

Components in Logiks are:

**Framework-driven React components**
**Dependency-injected (not imported)**
**Reusable across all module features**

---
