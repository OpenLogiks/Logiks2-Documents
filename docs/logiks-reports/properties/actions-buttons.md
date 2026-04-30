---
id: actions-buttons
title: Actions & Buttons
---

# Actions & Buttons

Logiks Reports allows you to define interactive actions at two levels:

- **Actions** → Global (top-level)
- **Buttons** → Row-level (per record)

These are used to trigger events like:

- Create
- Edit
- View
- Navigate (Change Page, Open forms, Open Popups, etc.)
- API Calls

---

## 1. Actions (Global Actions)

Actions appear at the top of the report (e.g., "Add New").

Example:

```json
"actions": {
  "forms@module_name.filename": {
    "label": "Add User",
    "icon": "fa fa-plus",
    "policy": "user.create.access",
    "class": "btn btn-info",
    "onselect": true,
    "lgksConfirm": "Are you sure?",
    "lgksPrompt": "Are you sure?",
    "lgksAlert": "Are you sure?",
  }
}
```

### Properties

| Property      | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| `label`       | Action label, can also include dynamic content                                  |
| `icon`        | Action icon, supports Font awesome                                              |
| `policy`      | Access policy                                                                   |
| `class`       | CSS class, supports custom and tailwind classes                                 |
| `onselect`    | When true: shows the action button on click else shows the action button always |
| `lgksConfirm` | Confirm message                                                                 |
| `lgksPrompt`  | Prompt message, capable od taking user input                                    |
| `lgksAlert`   | Alert message                                                                   |

Key definition for object `actions`:

Key definition for object `actions`, where the object key can be method name like `handleCreateAction`, or `entity@module_name.filename`,
Methods are simple functions that will be called when the action is triggered.
Where as entity is a type of action that can be triggered like page, popup, forms, popup.forms, infoview, popup.infoview, report, popup.report, api

### How it works

- Key format: `"type@module_name.filename"`
- Example:
  - `forms@vendor.new` → open form for new record from sliding from left
  - `popup.forms@vendor.new` → opens popup with form for new record
  - `api@vendor.delete` → calls the routes defined in module vendor at `routes.js` file, here `vendor` is the module name and `delete` is the route defined in `routes.js`.

---

### When to use

Use `actions` when:

- You want a global button
- Action is NOT tied to a specific row, but when a row is selected and the action button is clicked then that rows object will be passed and if multiple rows are selected then an array of objects will be passed.

Examples:

- Add new record
- Bulk operations

---

## 2. Buttons (Row-Level Actions)

Buttons are displayed for each row in the report.

Example:

```json
"buttons": {
  "infoview@test": {
    "label": "View",
    "icon": "fa fa-eye"
  },
  "forms@edit": {
    "label": "Edit",
    "icon": "fa fa-pen"
  }
}
```

---

**Note:** Buttons also shares same object as `actions` excepts for `onselect`, only difference is that it is for row-level actions.

---

### When to use

Use `buttons` when:

- Action depends on row data
- You need row-specific operations

## 3. Additional Actions and Buttons Options

### **label**

The labels appears as tools tips on the icons, the same labels appears as Title on the popups. If there number of button are more that 5 then a 3 dot icon appears, and other button options are displayed in the context menu which shows the labels.

Example 1: Static label

```json
"page@eoffice.chat": {
      "label": "Add Vendor Form",
      "icon": "fa-solid fa-circle-info"
    }
```

Example 2: Dynamic label

```json
"page@eoffice.chat": {
      "label": "{file_code}",
      "icon": "fa-solid fa-circle-info"
    }
```

Example 3: Custom label

```json
"page@eoffice.chat": {
      "label": "{file_code} - Add form",
      "icon": "fa-solid fa-circle-info"
    }
```

### **API Support**

**When API is used on actions**
The entire actions object is passed to the API. If a single row is selects then that row's id is passed in `ids:[]`. If multiple rows are selected then an array of `ids` will be passed along with the action object.

**API support queryString for action**
You can use queryString in the API URL, the queryString will be appended to the URL. It has the feature to pass the dynamic values from the rows.

Example:

```json
"api@eoffice.chat?key1=value1&key2={file_code}": {
      "label": "{file_code} - Add form",
      "icon": "fa-solid fa-circle-info"
    }
```

**When API is used on buttons**
The entire row object along with the button object are passed to the API.

**API support queryString for buttons**
You can use queryString in the API URL, the queryString will be appended to the URL. A fixed value can be passed in the queryString.

Example:

```json
"api@eoffice.chat?key1=value1": {
      "label": "{file_code} - Add form",
      "icon": "fa-solid fa-circle-info"
    }
```

## What This Solves

This section now answers:

- What are actions vs buttons
- When to use each
- How to handle clicks
- Real examples
- Common mistakes

---
