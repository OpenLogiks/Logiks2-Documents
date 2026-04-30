---
id: end-to-end
title: End-to-End Example
---

# End-to-End Example

This example demonstrates a complete setup using Logiks Reports.

It includes:

- API data source
- Table view
- Toolbar (search, export)
- Filters
- Actions
- Formatters

---

# 🧩 Full Example

```js
import { Reports } from "logiks-reports";

const reportJson = {
  title: "User Management",

  template: "table",

  source: {
    type: "API",
    method: "get",
    url: "/api/users",
    headers: {
      Authorization: "Bearer TOKEN",
    },
  },

  rowsPerPage: 10,

  uiswitcher: true,

  datagrid: {
    id: {
      label: "ID",
      sortable: true,
    },

    name: {
      label: "Name",
      searchable: true,
    },

    email: {
      label: "Email",
      searchable: true,
    },

    status: {
      label: "Status",
      filter: {
        type: "select",
        options: {
          active: "Active",
          inactive: "Inactive",
        },
      },
    },

    created_at: {
      label: "Created On",
      formatter: "date",
    },
  },

  toolbar: {
    search: true,
    export: true,
    print: true,
  },

  actions: {
    "forms@users.create": {
      label: "Add User",
      icon: "fa fa-plus",
    },
  },

  buttons: {
    "forms@users.edit/{id}": {
      label: "Edit",
      icon: "fa fa-pen",
    },
    "popup@users.view/{id}": {
      label: "View",
      icon: "fa fa-eye",
    },
  },
};

export default function App() {
  return (
    <Reports
      report={reportJson}
      onButtonClick={(key, row) => {
        console.log("Action:", key, row);
      }}
    />
  );
}
```

---

# 🎯 This Covers

- Full API integration
- Table rendering
- Filters & search
- Export functionality
- Row-level actions
- Toolbar actions
- Template switching

---

# 🧠 Flow Explained

1. API fetch → data loaded
2. Datagrid maps fields
3. Toolbar enables interaction
4. Actions trigger navigation/popup
5. Formatter formats values

---

# ⚠️ Common Issues

- API response must be array
- Field names must match datagrid
- Missing formatter → raw values shown

---

# Property Reference

---

# 🧩 Top-Level

| Property  | Description            |
| ---------- | ---------------------- |
| title      | Report title           |
| template   | View type              |
| source     | API config             |
| datagrid   | Field mapping          |
| toolbar    | Top actions            |
| actions    | Global actions         |
| buttons    | Row actions            |
| uiswitcher | Enable template switch |

---

# 🎯 Toolbar

| Property | Description   |
| --------- | ------------- |
| search    | Enable search |
| export    | Export data   |
| print     | Print view    |

---

# 🔘 Actions

| Property | Description   |
| --------- | ------------- |
| forms@    | Open form     |
| popup@    | Open modal    |
| page@     | Navigate page |

---
