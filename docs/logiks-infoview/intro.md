---
id: intro
title: InfoView
---

# InfoView

## What is Logiks InfoView?

Logiks InfoView is a **JSON-driven data viewing engine** used to display information stored through Logiks Forms.

It provides a configurable interface to:

- Display parent record information
- Organize information into groups
- Render data as Tabs, Cards, or Accordions
- Display related child records
- Render custom components
- View information from SQL, API, or Method sources

---

## Relationship with Forms

A typical workflow consists of:

```text
Form
 └─ Create / Update Data

InfoView
 └─ View Data
```

Forms are responsible for collecting and storing information, while InfoView is responsible for presenting that information.

---

## Key Capabilities

- JSON-driven configuration
- Automatic field grouping
- Multiple view layouts
- Child record management
- SQL, API and Method data sources
- Custom component rendering
- Dynamic related data views

---

## When to Use

Use InfoView when:

- You need a read-only view of form data
- You need to display related child records
- You want configurable layouts without frontend development
- You want reusable information screens across modules

---

## Complete Example

```json
{
  "source": {
    "type": "sql",
    "table": "quality_training",
    "cols": "*",
    "where": {
      "id": "#refid#"
    }
  },
  "fields": {
    "employee_name": {
      "label": "Employee Name",
      "group": "common"
    },
    "designation": {
      "label": "Designation",
      "group": "common"
    },
    "training_date": {
      "label": "Training Date",
      "group": "Training Information"
    },
    "trainer_name": {
      "label": "Trainer Name",
      "group": "Training Information"
    }
  },
  "infoview": {
    "template": "cards",
    "groups": {
      "training_topics": {
        "label": "Training Topics",
        "type": "module",
        "src": "infoviewTable",
        "config": {
          "type": "sql",
          "uimode": "grid",
          "table": "quality_training_details",
          "cols": "id,training_topics",
          "where": {
            "quality_training_id": "#refid#"
          }
        }
      }
    }
  }
}
```

The above configuration renders:

- A **Common Information** section containing employee details
- A **Training Information** section containing training details
- A **Training Topics** child-record grid for managing related records

---

## Core Concepts

### Source

The `source` property defines how the parent record is fetched.

Supported source types:

- sql
- api
- method

---

### Fields

The `fields` object defines which parent record fields are displayed.

Fields can optionally be assigned to groups.

```json
{
  "employee_name": {
    "label": "Employee Name",
    "group": "Personal Information"
  }
}
```

---

### Groups

InfoView organizes information into groups.

Each group is rendered as:

- Tab
- Card
- Accordion Section

depending on the selected template.

---

### InfoView Groups

The `infoview.groups` property allows adding additional sections to an InfoView.

A group can:

- Display related child records
- Render a custom component
- Display information from an independent data source

Each group is rendered as a separate Tab, Card, or Accordion section depending on the selected template.

Examples:

- Training Topics
- Attachments
- Escalation Matrix
- Comments
- Observations

Each child record section can provide:

- View records
- Add records
- Edit records
- Delete records

without writing additional UI code.

```

```
