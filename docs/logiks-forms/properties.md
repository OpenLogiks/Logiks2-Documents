---
id: properties
title: Forms Properties
---

# Forms Properties

## Root Properties

### template

Defines UI layout:

- `simple`
  The default layout. All the fields are rendered in a single screen, the column are defined by width property.
  The maximum number of columns is 12.

- `accordion`
  The fields are rendered in an accordion, and `group` property is used to group the fields in an accordion panel.

- `cards`
  The fields are rendered in cards, and `group` property is used to group the fields in a card panel.

- `tab`
  The fields are rendered in tabs, and `group` property is used to group the fields in a tab panel.

---

### forcefill

Injects hidden/system values into submission.

```json id="forcefill-example"
"forcefill": {
  "guid": "#SESS_GUID#",
  "edited_by": "#SESS_USER_ID#",
  "country": "{country}"
}
```

Supports:

- Session replacement → `#SESSION_KEY#`
- Field reference → `{field_name}`
- Runtime merge

---

### source

Used to fetch existing data (edit mode).
Defines the source of data where to save on add form submit and on edit form the `#refid#` will be replaced with the id of the record being edited.

```json id="source-example"
"source": {
      "type": "sql",
      "table": "temp_contacts_tbl",
      "cols": "*",
      "dbkey": "logdb",
      "where": {
          "id": "#refid#"
      }
}
```

where:

- `type`: `sql` or `api`
- `table`: The name of the database table to interact with.
- `cols`: A comma-separated list of column names to fetch or interact with in the database table.
- `where`: An object specifying `WHERE` clause conditions for SQL queries. Keys are column names, values are conditions. Supports placeholders like `{refid}`. This `refid` will be replaced by the reference ID (`refid`) of the record being edited.
- `dbkey`: Optional, helps to identify the database connection. If not provided, the default connection will be used.

---

### gotolink

Redirect after submission.

```json id="gotolink-example"
"gotolink": "/details/{hashid}"
```

---

### fields

It is object of objects, where each key is the `name` of a form field.

Example:

```json
  "fields": {
    "first_name": {
      "label": "First Name",
      "type": "text",
      "required": true,
      "width": 6
    },
    "last_name": {
      "label": "Last Name",
      "type": "text",
      "required": true,
      "width": 6
    },
  }
```

The main properties of the field is `type` which supports multiple field types, see [field types](/logiks-forms/field-types)

---
