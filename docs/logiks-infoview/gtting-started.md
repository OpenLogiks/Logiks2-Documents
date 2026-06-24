---
id: getting-started
title: Getting Started
---

# Getting Started

## Minimal InfoView Example

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
      "label": "Employee Name"
    },
    "designation": {
      "label": "Designation"
    }
  }
}
```

The above configuration:

- Fetches a record from `employee_master`
- Displays `employee_name`
- Displays `designation`
- Creates a default group named `Info`

---

## Steps to Create an InfoView

### 1. Configure Source

The `source` property defines where the parent record is fetched from.

```json
{
  "source": {
    "type": "sql",
    "table": "employee_master",
    "cols": "*",
    "where": {
      "id": "#refid#"
    }
  }
}
```

Supported source types:

- `sql`
- `api`
- `method`

---

### 2. Add Fields

Fields define which values are displayed in the InfoView.

```json
{
  "fields": {
    "employee_name": {
      "label": "Employee Name"
    },
    "designation": {
      "label": "Designation"
    }
  }
}
```

The field key is used to map data from the fetched record.

---

### 3. Organize Fields into Groups

Fields can be grouped into sections.

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
    }
  }
}
```

Each group is rendered separately.

If no group is specified, the field is automatically assigned to:

```text
Info
```

---

### 4. Configure Layout

The `template` property controls how groups are rendered.

```json
{
  "infoview": {
    "template": "cards"
  }
}
```

Supported templates:

- `tab`
- `tableft`
- `tabright`
- `cards`
- `accordion`

Default:

```text
tab
```

---

### 5. Add a Common Section

Fields assigned to the special group:

```text
common
```

are rendered above all tabs, cards, and accordions.

```json
{
  "fields": {
    "employee_photo": {
      "label": "Photo",
      "group": "common"
    },
    "employee_name": {
      "label": "Employee Name",
      "group": "common"
    }
  }
}
```

Typical usage:

- Profile photo
- Employee name
- Status
- Summary information

---

### 6. Add Additional InfoView Groups

The `infoview.groups` property allows adding additional sections to an InfoView.

```json
{
  "infoview": {
    "groups": {
      "training_topics": {
        "label": "Training Topics"
      }
    }
  }
}
```

Each group is rendered as a separate Tab, Card, or Accordion section depending on the selected template.

---

### 7. Add Child Records

Child records are typically rendered using:

```json
{
  "type": "module",
  "config": {
    "uimode": "grid"
  }
}
```

Example:

```json
{
  "infoview": {
    "groups": {
      "training_topics": {
        "label": "Training Topics",
        "type": "module",
        "src": "infoviewTable",
        "config": {
          "uimode": "grid"
        }
      }
    }
  }
}
```

This creates a child-record section where users can:

- View records
- Add records
- Edit records
- Delete records

---

### 8. Render Custom Components

Custom React components can be rendered using:

```json
{
  "type": "component"
}
```

Example:

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

The component must be registered in the application's component registry.

---
