---
id: hooks-and-actions
title: Hooks and Actions
---

# Hooks and Actions

## Hooks

Hooks are customizable functions that are executed at specific points in the form lifecycle.
There are two types of hooks: presubmit and postsubmit.

### presubmit

This is a pre-submit hook, which is executed before the form is submitted.

Example 1: presubmit with multiple hooks

```json id="presubmit"
"hooks": {
        "presubmit": [
            "hse.avoidFutureDates",
            "hse.avoidSpecialCharacters"
        ]
    },
```

### postsubmit

This is a post-submit hook, which is executed after the form is submitted.

```json id="postsubmit"
"hooks": {
        "postsubmit": [
            "quality.mailChecking"
        ]
    },

```

### Mixed Example

Example with both presubmit and postsubmit

```json id="postsubmit"
    "hooks": {
        "postsubmit": [
            "quality.mailChecking"
        ],
        "presubmit": [
            "quality.locationTypeValidation"
        ]
    }
```

Used for:

- Workflow triggers
- Secondary updates
- External integrations

---
