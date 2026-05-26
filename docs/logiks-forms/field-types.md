---
id: field-types
title: Field Types
---

# Field Types

## Basic Fields

### `text`

Default input field.

Supports:

- placeholder
- minlength
- maxlength
- regex
- validation
- icons

```json
{
  "username": {
    "label": "Username",
    "type": "text",
    "placeholder": "Enter username",
    "required": true
  }
}
```

---

### `email`

HTML email input with built-in email validation support.

Supports:

- validate.email
- placeholder
- required

```json
{
  "email": {
    "label": "Email",
    "type": "email",
    "required": true,
    "validate": {
      "email": true
    }
  }
}
```

---

### `password`

Password input field.

Supports:

- minlength
- maxlength
- validation

```json
{
  "password": {
    "label": "Password",
    "type": "password",
    "required": true
  }
}
```

---

### `number`

Numeric input field.

Supports:

- min
- max
- step
- decimal validation

```json
{
  "amount": {
    "label": "Amount",
    "type": "number",
    "min": 1,
    "max": 100,
    "step": 1
  }
}
```

---

### `textarea`

Multi-line text input.

```json
{
  "description": {
    "label": "Description",
    "type": "textarea",
    "placeholder": "Write here..."
  }
}
```

---

### `richtextarea`

Rich text editor field.

Stores HTML formatted content.

```json
{
  "content": {
    "label": "Content",
    "type": "richtextarea"
  }
}
```

---

### `date`

Date picker field.

Supports:

- min
- max
- validation

```json
{
  "dob": {
    "label": "Date of Birth",
    "type": "date",
    "max": "today"
  }
}
```

---

### `datetime-local`

Date and time input field.

```json
{
  "meeting": {
    "label": "Meeting Time",
    "type": "datetime-local"
  }
}
```

---

### `month`

Month picker field.

```json
{
  "billing_month": {
    "label": "Billing Month",
    "type": "month"
  }
}
```

---

### `week`

Week picker field.

```json
{
  "week": {
    "label": "Week",
    "type": "week"
  }
}
```

---

### `time`

Time picker field.

```json
{
  "time": {
    "label": "Time",
    "type": "time"
  }
}
```

## Selection Fields

### `select`

Dropdown selection field.

Supports:

- search
- multiple
- dynamic source
- grouping
- ajaxchain

Properties:

- options
- source
- valueKey
- labelKey
- groupKey

The select field can have data from various sources [more info](/logiks-forms/data-sources).

---

### `checkbox`

```json
"is_approval": {
    "label": "Is Approval",
    "type": "checkbox",
    "options": {
        "true": ""
    },
    "width": 4
}
```

### `radio`

Example of `radio`, where options are fetched from a table

```json
"gender": {
    "label": "Gender",
    "type": "radio",
    "table": "do_lists",
    "columns": "title as title,value as value",
    "where": {
        "groupid": "gender"
    },
    "required": false,
    "width": 4
}
```

Example 2 of `radio`, where options are provided and a function is attached on `onchange` event. This function is called a attaching scripts to the form and these are defined in another file which has same name as the form file but the extension is `js`
Example if user.json defines the following then the function `countPerson` will be defined in the file `user.js` which resides in the same directory of forms.

```json
"gender": {
    "label": "Gender",
    "type": "radio",
    "options": {
        "male": "Male",
        "female": "Female",
        "other": "Other",
        "unknown": "Unknown"
    },
    "required": false,
    "onchange": "countPerson",
    "width": 12
}
```

### `radioList`

This is same as radio
Refer to [radio](/logiks-forms/field-types/#radio)

### `dataSelector`

This picks the records from table `do_lists` where `groupid` is `priority`. The easy is that we don't need to provide the table name it internally queries `do_lists` table.

```json
"priority": {
    "label": "Priority",
    "type": "dataSelector",
    "groupid": "priority",
    "required": true,
    "default": "low",
    "disabled": true,
    "width": 4
}
```

### `dataSelectorFromTable`

```json
"to_check": {
    "label": "Scope Rules/Permission (Policies)",
    "group": "Admin",
    "type": "dataSelectorFromTable",
    "table": "lgks_rolemodel",
    "columns": "CONCAT ('policy:', policystr) as value, policystr as title",
    "where": {
        "blocked": "false",
        "policystr IS NOT NULL": "RAW"
    },
    "groupby": "policystr",
    "multiple": true
}
```

Complex Example with ajaxchain

```json
"category": {
    "label": "Department / Application",
    "type": "dataSelectorFromTable",
    "table": "data_department",
    "columns": "name as title,id as value",
    "no-option": "Select Department",
    "required": true,
    "width": 4,
    "ajaxchain": [
        {
            "target": "category1",
            "src": {
                "table": "data_tickets_category_tbl",
                "type": "sql",
                "columns": "title as title,id as value",
                "where": {
                    "blocked": "false",
                    "department_id": "#refid#"
                }
            }
        },
        {
            "target": "assigned_to",
            "src": {
                "table": "lgks_users",
                "type": "sql",
                "columns": "name as title, userid as value",
                "where": {
                    "blocked": "false",
                    "department": "#refid#",
                    "userid != '#SESS_USER_ID#' ": "RAW"
                },
                "orderBy": "name asc"
            }
        }
    ]
}
```

### `dataMethod`

```json
"country": {
    "label": "Country",
    "group": "address",
    "type": "dataMethod",
    "method": "getCountrySelector"
}
```

### `dataSelectorFromUnique`

This is same as dataSelectorFromTable
Refer to [dataSelectorFromTable](/logiks-forms/field-types/#dataselectorfromtable)

## Advanced Fields

### `autocomplete`

```json
"detail_key": {
    "label": "Key",
    "type": "autocomplete",
    "table": "design_details",
    "columns": "detail_key as value,detail_key as title",
    "where": {
        "blocked": "false"
    },
    "required": true,
    "width": 4
}
```

### `autosuggest`

```json
"email": {
    "label": "Email Notification To",
    "group": "Info",
    "type": "autosuggest",
    "table": "staff_tbl",
    "columns": "full_name as title, full_name as value",
    "search": true,
    "where": {
        "status in('active','under_notice')": "RAW"
    },
    "orderby": "full_name asc",
    "required": true
}
```

### `tags`

- array storage
- comma/enter behavior
- free text tags

```json
"tags": {
    "label": "Project Tags",
    "type": "tags",
    "group": "Info"
}
```

### `json`

Support JSON format of the data.

```json
"request_json": {
    "label": "Request JSON",
    "type": "json",
    "required": false,
    "search": false,
    "width": 12
}
```

### `geolocation`

```json
"geolocation": {
    "label": "Geo Location",
    "type": "geolocation",
    "required": false,
    "hidden": true,
    "disabled": true,
    "placeholder": "Enter lat,lng (e.g. 19.0021,72.8284)",
    "parameter": {
        "geolocation": "geolocation",
        "guid": "guid"
    },
    "width": 6
}
```

where `parameter` is a JSON object that contains `geolocation` and `guid` keys.

- stores `latitude,longitude`
- uses browser geolocation API
- works with `location_required`

---

### Default Inputs

- `color`

- `hidden`

Hides the field from the form view.

```json
 "ref_id": {
    "label": "",
    "type": "hidden",
    "default": "#refid#"
}
```

- `range`
- `tel`
- `url`

---

## File & Media

### `file`

gives option to upload multiple files, supports only image types

```json
  "file": {
    "label": "Pan ID",
    "type": "file",
    "required": true,
    "width": 4,
    "accept": "image/_",
    "multiple": true, // allow multiple files
    "max": 5, // max number of files
    "file_size": 10000000 // max file size in Bytes
  },
```

### `attachment`

gives option to upload multiple files, same as `file`, supports all file types

```json
  "file": {
    "label": "Pan ID",
    "type": "attachment",
    "required": true,
    "width": 4,
    "accept": "image/_, audio/_, video/_, application/_, text/\*, application/pdf",
    "multiple": true, // allow multiple files
    "max": 5, // max number of files
    "file_size": 10000000 // max file size in Bytes
  },
```

### `avatar`

supports only image and Create avatar UI for the uploaded file

```json
  "file": {
    "label": "Pan ID",
    "type": "avatar",
    "required": true,
    "width": 4,
    "accept": "",
    "multiple": true, // allow multiple files
    "max": 5, // max number of files
    "file_size": 10000000 // max file size in Bytes
  },
```

### `photo`

supports only image

```json
  "file": {
    "label": "Pan ID",
    "type": "photo",
    "required": true,
    "width": 4,
    "accept": "",
    "multiple": true, // allow multiple files
    "max": 5, // max number of files
    "file_size": 10000000 // max file size in Bytes
  }
```

### `image`

### `camera`

Supports file update

### `camera2`

---

## Utility Fields

### `static`

Adds header to define the section to form a group, like group of all the address field together in a form

### `static2`

Same as `static` but gives sleek view of the text.

### `disabled`

Disables the field.

```json
"disabled": true
```

### `nodb`

Does not store the field in the database.

```json
"nodb": true
```

### `vmode`

View Mode, when set to `edit` the field is visible in edit mode

```json
"vmode": "edit"
```

---

```

```
