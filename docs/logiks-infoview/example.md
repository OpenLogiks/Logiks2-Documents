---
id: examples
title: Examples
---

# Examples

## Basic InfoView

A simple InfoView that displays information from a parent record.

```json
{
  "source": {
    "type": "sql",
    "table": "employee_master",
    "cols": "*",
    "where": {
      "id": "#refid#"
    }
  },
  "fields": {
    "employee_name": {
      "label": "Employee Name",
      "type": "text"
    },
    "designation": {
      "label": "Designation",
      "type": "text"
    },
    "joining_date": {
      "label": "Joining Date",
      "type": "date"
    }
  }
}
```

---

## Grouped Information

Fields can be grouped into separate sections.

```json
{
  "fields": {
    "employee_name": {
      "label": "Employee Name",
      "group": "Personal Information"
    },
    "designation": {
      "label": "Designation",
      "group": "Personal Information"
    },
    "joining_date": {
      "label": "Joining Date",
      "group": "Employment Details"
    },
    "department": {
      "label": "Department",
      "group": "Employment Details"
    }
  }
}
```

This creates two sections:

- Personal Information
- Employment Details

---

## Common Information Section

The special group name `common` is rendered above all tabs, cards, and accordion sections.

```json
{
  "fields": {
    "employee_photo": {
      "label": "Photo",
      "type": "photo",
      "group": "common"
    },
    "employee_name": {
      "label": "Employee Name",
      "group": "common"
    },
    "designation": {
      "label": "Designation",
      "group": "common"
    },
    "joining_date": {
      "label": "Joining Date",
      "group": "Employment Details"
    }
  }
}
```

Typical usage:

- Profile Photo
- Name
- Employee Details
- Status Information

---

## Child Records Grid

A child-record section can be added using `infoview.groups`.

```json
{
  "infoview": {
    "groups": {
      "training_topics": {
        "label": "Training Topics",
        "type": "module",
        "config": {
          "uimode": "grid",
          "table": "quality_training_details",
          "cols": "id,training_topics,other_topic_text",
          "where": {
            "quality_training_id": "#refid#",
            "blocked": "false"
          }
        }
      }
    }
  }
}
```

This creates a separate section where users can:

- View records
- Add records
- Edit records
- Delete records

---

## Custom Component

Custom React components can be rendered inside an InfoView group.

```json
{
  "infoview": {
    "groups": {
      "analytics": {
        "label": "Analytics",
        "type": "component",
        "component": "TrainingStatistics"
      }
    }
  }
}
```

The value of `component` must match a component supplied through the InfoView `components` prop.

---

## Cards Layout

```json
{
  "infoview": {
    "template": "cards"
  }
}
```

Each group is rendered as a card.

---

## Accordion Layout

```json
{
  "infoview": {
    "template": "accordion"
  }
}
```

Each group is rendered as an accordion panel.

---

## Left Navigation Tabs

```json
{
  "infoview": {
    "template": "tableft"
  }
}
```

Groups are rendered as tabs with navigation displayed on the left side.

---

## Right Navigation Tabs

```json
{
  "infoview": {
    "template": "tabright"
  }
}
```

Groups are rendered as tabs with navigation displayed on the right side.

```

```
