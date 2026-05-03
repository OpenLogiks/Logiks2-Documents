---
id: report-slot-bindings
title: Slot Bindings
---

# Slot Bindings

Used to change the layout of the report which was defined in the pages via slot-binding. These slots are already been used in the pages which are defined in the layout.

Refer to [Pages Slot Binding](/module-guide/pages/mg-pages-intro/#supporting-slot-binding)

## Reset the toolbar

Reset the toolbar by setting the value to empty string. This is used to reset the toolbar.

**Example:**

```json
"slotBindings": {
  "app-toolbar.toolbar": ""
}
```

## Inject a custom component

Specify the name of the component to inject.**Top Right Tabs (Marked: “Custom Slot Binding”)**

**Example**

```json
"slotBindings": {
  "app-toolbar.toolbar": {
    "component": "Toolbar",
    "content": {
      "right": [
        {
          "type": "tabs",
          "activeKey": "report@vendor.received",
          "items": {
            "report@eoffice.received": { "label": "Received" },
            "report@eoffice.onholdInbox": { "label": "Hold" },
            "report@eoffice.actedOn": { "label": "Acted On" }
          }
        }
      ]
    }
  }
}
```

![Slot Bindings](/img/reports/slot-binding-topbar.png)

### UI Mapping (from your image)

- Located at **top-right corner**
- Marked as **“Custom Slot Binding”**
- Displays:
  - Received
  - Hold
  - Acted On

- Controls **report switching**

## Inject/Reset a multiple custom component

Specify multiple name of the component to reset/inject in array.

**Example**

```json
"slotBindings": {
  "app-toolbar.toolbar": ["side-bar"]
}
```

## Use cases

- Custom toolbar
- Inject reusable components
