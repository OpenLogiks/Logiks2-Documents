---
id: hooks-and-actions
title: Hooks and Actions
---

# Hooks and Actions

## Hooks

### postsubmit

```json id="postsubmit"
"hooks": {
  "postsubmit": {
    "api": "notesFlow",
    "method": "updateNotesFlowCode"
  }
}
```

Used for:

- Workflow triggers
- Secondary updates
- External integrations

---

## Script Integration

```json id="script"
"script": "notesFlow"
```

---
