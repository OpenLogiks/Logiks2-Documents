---
id: infoview-groups
title: Child Records
---

# InfoView Groups

## Overview

InfoView Groups allow additional sections to be added to an InfoView.

Groups can be used to:

- Display related records
- Render custom components
- Display information from independent data sources

Each group is rendered as a separate Tab, Card, or Accordion section depending on the selected template.

Common examples:

- Training Topics
- Attachments
- Comments
- Observations
- Escalation Matrix
- Project Members

Child Records are configured using `infoview.groups` with:

```json
{
  "type": "module",
  "config": {
    "uimode": "grid"
  }
}
```

---

## Basic Example

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

This creates a separate section named **Training Topics**.

---

# Module Configuration

## uimode

Defines how the module is rendered.

Supported values:

- `grid`
- `single`

---

## grid

Displays records in a tabular format.

Typically used for:

- Child records
- Related datasets
- Attachments
- Comments

The grid view currently supports SQL-based data sources.

Example:

```json
{
  "config": {
    "uimode": "grid"
  }
}
```

---

## single

Displays a read-only information view.

The single view supports:

- `sql`
- `api`
- `method`

data sources.

Example:

```json
{
  "config": {
    "uimode": "single",
    "type": "sql"
  }
}
```

---

## type

Defines the data source used by the module.

For `single` view:

- `sql`
- `api`
- `method`

are supported.

For `grid` view, only `sql` is currently supported.

Example:

```json
{
  "config": {
    "type": "sql"
  }
}
```

---

## table

Database table used to fetch records.

```json
{
  "table": "quality_training_details"
}
```

---

## cols

Comma-separated list of columns to fetch.

```json
{
  "cols": "id,training_topics,other_topic_text"
}
```

---

## where

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

## groupby

Optional grouping configuration.

```json
{
  "groupby": "training_topics"
}
```

---

# Data Grid

The `datagrid` property controls how columns are displayed in the grid.

Example:

```json
{
  "datagrid": {
    "training_topics": {
      "label": "Training Topics",
      "searchable": true
    },
    "other_topic_text": {
      "label": "Other Training Topic"
    }
  }
}
```

---

## datagrid Properties

### label

Display name of the column.

```json
{
  "training_topics": {
    "label": "Training Topics"
  }
}
```

---

### searchable

Allows searching on the column.

```json
{
  "training_topics": {
    "searchable": true
  }
}
```

---

### hidden

Hide a column from the grid.

```json
{
  "other_topic_text": {
    "hidden": true
  }
}
```

---

# Forms

The `form` property defines how child records are created and edited.

Example:

```json
{
  "form": {
    "source": {
      "type": "sql",
      "table": "quality_training_details",
      "cols": "*",
      "where": {
        "id": "#refid#"
      }
    },
    "fields": {}
  }
}
```

The form configuration uses the same structure as Logiks Forms.

Refer to the Logiks Forms documentation for supported field types and field properties.

---

## source

Defines how an existing child record is loaded for editing.

Example:

```json
{
  "source": {
    "type": "sql",
    "table": "quality_training_details",
    "cols": "*",
    "where": {
      "id": "#refid#"
    }
  }
}
```

---

## forcefill

Injects values while creating a child record.

Example:

```json
{
  "forcefill": {
    "guid": "#SESS_GUID#"
  }
}
```

---

## fields

Defines the fields available while creating or editing child records.

Example:

```json
{
  "fields": {
    "training_topics": {
      "label": "Training Topics",
      "type": "dataSelectorFromTable",
      "required": true
    }
  }
}
```

---

# Actions

The `actions1` property defines toolbar actions.

Example:

```json
{
  "actions1": {
    "addInfoRecord": {
      "label": "Add Record"
    }
  }
}
```

---

## addInfoRecord

Displays the button used to create a new child record.

Example:

```json
{
  "actions1": {
    "addInfoRecord": {
      "label": "Add Record"
    }
  }
}
```

---

# Record Buttons

The `buttons` property defines actions available for each record.

Example:

```json
{
  "buttons": {
    "editRecord": {
      "label": "Edit Record"
    },
    "deleteRecord": {
      "label": "Delete Record"
    }
  }
}
```

---

## editRecord

Displays the edit action for a record.

```json
{
  "editRecord": {
    "label": "Edit Record"
  }
}
```

---

## deleteRecord

Displays the delete action for a record.

```json
{
  "deleteRecord": {
    "label": "Delete Record"
  }
}
```

---

# Permissions

Permissions can be configured at module level.

Example:

```json
{
  "policy_create": "quality.create",
  "policy_view": "quality.access",
  "policy_update": "quality.update",
  "policy_delete": "quality.delete"
}
```

---

## policy_create

Permission required to create records.

---

## policy_view

Permission required to view records.

---

## policy_update

Permission required to update records.

---

## policy_delete

Permission required to delete records.

---

# Complete Example

```json
{
  "infoview": {
    "groups": {
      "training_topics": {
        "label": "Training Topics",
        "type": "module",
        "config": {
          "uimode": "grid",
          "policy_create": "quality.create",
          "policy_view": "quality.access",
          "policy_update": "quality.update",
          "policy_delete": "quality.delete",
          "table": "quality_training_details",
          "cols": "id,training_topics,other_topic_text",
          "where": {
            "quality_training_id": "#refid#",
            "blocked": "false"
          },
          "form": {},
          "datagrid": {},
          "actions1": {
            "addInfoRecord": {
              "label": "Add Record"
            }
          },
          "buttons": {
            "editRecord": {
              "label": "Edit Record"
            },
            "deleteRecord": {
              "label": "Delete Record"
            }
          }
        }
      }
    }
  }
}
```
