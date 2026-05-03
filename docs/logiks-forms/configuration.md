---
id: configuration
title: Forms Configuration
---

# Forms Configuration

## Root Configuration

### template

Defines UI layout:

- `simple`
- `accordion`
- `cards`

---

### forcefill

Injects hidden/system values into submission.

```json id="forcefill-example"
"forcefill": {
  "guid": "#SESS_GUID#",
  "edited_by": "#SESS_USER_ID#"
}
```

Supports:

- Session → `#SESSION_KEY#`
- Field reference → `{field_name}`

---

### source

Used to fetch existing data (edit mode).

```json id="source-example"
"source": {
  "type": "api",
  "method": "GET",
  "endpoint": "/user",
  "refid": "123"
}
```

---

### gotolink

Redirect after submission.

```json id="gotolink-example"
"gotolink": "/details/{hashid}"
```

---

### fields (Required)

Defines all fields in the form.

---
