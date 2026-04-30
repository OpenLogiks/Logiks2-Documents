---
id: gantt
title: Gantt
---

# Gantt

Defines how data is displayed in Gantt chart view.

> **Note:** The `datagrid` object is required along with `gantt`, as Gantt task data is derived from the data columns defined in the datagrid.

## Example

```json
"gantt": {
  "colmap": {
    "id": "id",
    "name": "persona_name",
    "start": "created_on",
    "end": "end_date",
    "progress": "completion",
    "owner": "assigned_to",
    "milestone": "is_milestone",
    "parent": "parent_id",
    "dependencies": "depends_on"
  }
}
```

## Properties

## colmap

Maps data columns from the `datagrid` to Gantt chart task fields.

Each key represents a predefined Gantt component, and the value should match a column key from the `datagrid`.

Supported mappings:

---

### id

Unique identifier for the task.

Example:

```json
"id": "id"
```

Used internally to identify each task.

---

### name

Task name displayed in the Gantt chart.

Example:

```json
"name": "persona_name"
```

Shown as the task label.

---

### start

Defines the task start date.

Example:

```json
"start": "created_on"
```

Must reference a valid date field.

---

### end

Defines the task end date.

Example:

```json
"end": "end_date"
```

Used with `start` to determine task duration.

---

### progress

Defines task completion progress.

Example:

```json
"progress": "completion"
```

Commonly represented as a percentage.

Example values:

- `25`
- `50`
- `100`

---

### owner

Defines the task owner or assignee.

Example:

```json
"owner": "assigned_to"
```

Can be used to show responsibility or resource ownership.

---

### milestone

Marks whether a task is a milestone.

Example:

```json
"milestone": "is_milestone"
```

Typical values:

- `true`
- `false`

Milestones may render differently than standard tasks.

---

### parent

Defines parent-child hierarchy for nested tasks.

Example:

```json
"parent": "parent_id"
```

Used for grouping subtasks under a parent task.

---

### dependencies

Defines task dependencies.

Example:

```json
"dependencies": "depends_on"
```

Used to link tasks based on predecessor relationships.

Examples:

- Single dependency
- Multiple dependencies
- Dependency chains

---

## Notes

- `gantt` uses values from the `datagrid` dataset and does not define independent data.
- `colmap` controls how tasks are rendered in the Gantt chart.
- All `colmap` values must reference valid keys in the `datagrid`.
- `id`, `name`, `start`, and `end` are typically required.
- `parent` enables hierarchical task grouping.
- `dependencies` enables linked task scheduling.
- `milestone` and `progress` are optional but commonly used.

```

```
