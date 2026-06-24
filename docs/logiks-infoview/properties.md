---
id: properties
title: InfoView Properties
---

# InfoView Properties

## Root Properties

### source

Defines where the parent record is fetched from.

Supported source types:

- `sql`
- `api`
- `method`

Example:

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

---

### fields

Defines which values from the parent record are displayed.

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

The object key is used to map data from the fetched record.

---

### group

Assigns a field to a specific InfoView group.

```json
{
  "employee_name": {
    "label": "Employee Name",
    "group": "Personal Information"
  }
}
```

Fields with the same group are rendered together.

If a field does not specify a group, it is automatically assigned to the `Info` group.

```json
{
  "employee_name": {
    "label": "Employee Name"
  }
}
```

The above field will be rendered inside the automatically generated `Info` group.

---

### common Group

The special group name:

```text
common
```

is rendered above all tabs, cards, and accordion sections.

Example:

```json
{
  "employee_name": {
    "label": "Employee Name",
    "group": "common"
  }
}
```

Typical usage:

- Profile information
- Photos
- Status
- Summary details

---

### infoview

Provides additional InfoView configuration.

```json
{
  "infoview": {
    "template": "cards"
  }
}
```

---

## InfoView Properties

### template

Controls how groups are rendered.

Supported values:

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

### groups

Adds additional sections to an InfoView.

```json
{
  "infoview": {
    "groups": {}
  }
}
```

A group can:

- Display related child records
- Render a custom component
- Display information from an independent data source

Each group is rendered as a separate Tab, Card, or Accordion section depending on the selected template.

---

## Group Properties

### label

Display name of the group.

```json
{
  "training_topics": {
    "label": "Training Topics"
  }
}
```

---

### type

Defines how the group is rendered.

Supported values:

- `module`
- `component`

> Note: This property defines the **group type**. It is different from the `config.type` property used to define a data source (`sql`, `api`, or `method`).

---

### width

Controls the width allocated to the group.

```json
{
  "training_topics": {
    "width": 12
  }
}
```

---

### component

Used when rendering a custom component.

```json
{
  "analytics": {
    "type": "component",
    "component": "TrainingStatistics"
  }
}
```

The value of `component` must match a component supplied through the InfoView `components` prop.

If a matching component is found, it is rendered inside the group.

---

### config

Defines the configuration for module groups.

```json
{
  "training_topics": {
    "type": "module",
    "config": {}
  }
}
```

---

## Module Configuration

### uimode

Controls how a module group is rendered.

Supported values:

- `grid`
- `single`

---

### grid

Displays records in a tabular format.

Typically used for:

- Child records
- Attachments
- Comments
- Related datasets

Example:

```json
{
  "training_topics": {
    "label": "Training Topics",
    "type": "module",
    "config": {
      "uimode": "grid",
      "table": "quality_training_details",
      "cols": "id,training_topics",
      "where": {
        "quality_training_id": "#refid#"
      }
    }
  }
}
```

---

### single

Displays a read-only information view using data fetched from a SQL, API, or Method source.

Example:

```json
{
  "training_summary": {
    "label": "Training Summary",
    "type": "module",
    "config": {
      "uimode": "single",
      "table": "quality_training",
      "cols": "trainer_name,training_date,total_attendees",
      "where": {
        "id": "#refid#"
      }
    }
  }
}
```

---

### table

Database table used to fetch records.

```json
{
  "table": "quality_training_details"
}
```

---

### cols

Comma-separated list of columns to fetch.

```json
{
  "cols": "id,training_topics,other_topic_text"
}
```

---

### where

Optional filter conditions used while fetching data.

```json
{
  "where": {
    "quality_training_id": "#refid#",
    "blocked": "false"
  }
}
```

---

### groupby

Optional grouping configuration.

```json
{
  "groupby": "training_topics"
}
```

### type

Defines the data source used by the module.

For `single` view:

- `sql`
- `api`
- `method`

are supported.

For `grid` view, only `sql` is currently supported.
