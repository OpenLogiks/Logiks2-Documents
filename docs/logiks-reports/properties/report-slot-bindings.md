---
id: report-slot-bindings
title: Slot Bindings
---

# Slot Bindings

Used to change the layout of the report which was defined in the pages via slot-binding. These slots are already been used in the pages which are defined in the layout.
```
Refer to [slot-binding](/module-guide/references/slot-bindings)
```
## Reset the toolbar

Reset the toolbar by setting the value to empty string. This is used to reset the toolbar.

**Example:**

```json
"slotBindings": {
  "app-toolbar.toolbar": ""
}
```

## Inject a custom component

Specify the name of the component to inject.

**Example**

```json
"slotBindings": {
  "app-toolbar.toolbar": "side-bar"
}
```

## Inject/Reset a multiple custom component

Specify multiple name of the component to reset/inject in arrayx.

**Example**

```json
"slotBindings": {
  "app-toolbar.toolbar": ["side-bar"]
}
```

## Use cases

- Custom toolbar
- Inject reusable components
