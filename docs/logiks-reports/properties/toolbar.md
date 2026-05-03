---
id: toolbar
title: Toolbar
---

# Toolbar

The toolbar provides quick access to common actions like:

- Search
- Print
- Email
- Export: Supported format "pdf", "csv", "xml", "htm", "img"
- Export All

You can enable or disable these features using the `toolbar` configuration.

---

Example:

```json
"toolbar": {
  "search": true,
  "print": true,
  "email": false,
  "export": ["pdf", "csv"] || true,
  "exportAll": true
}
```

## ![Toolbar](/img/reports/Report-toolbar.png)

## Available Options

### 1. search

```json
"search": true
```

**What it does**

Adds a search input to filter report data.

**When to use**

- When users need quick filtering
- Works best with `datagrid.searchable`, the searchable fields shows the columns that can be searched. To add the column in the dropdown add a `properties` field with `searchable: true` in the `datagrid` array of object configuration.

Example:

```json
"datagrid": {
  "name": {
    "label": "Name",
    "searchable": true
  }
}
```

**Important Notes**

- Search will not be effective, if no columns are marked as searchable

```json
"searchable": false
```

---

### 2. print

```json
"print": true
```

#### What it does

Allows users to print the report.

#### When to use

- Reports shared offline
- Admin dashboards

**Important Notes**

- Large tables may not print cleanly
- Consider limiting columns

---

### 4. email

```json
"email": true
```

**What it does**

Provides option to email report data.

**When to use**

- Reporting workflows
- Sharing reports with stakeholders

---

### 3. export/exportAll

```json
"export": ["csv", "excel"]
```

**What it does**

Allows exporting report data.

**Supported formats**

- csv
- excel
- xml
- htm
- img
- pdf (if supported)

**export vs exportAll**

- export → exports current view
- exportAll → exports full dataset

**When to use**

- Data analysis
- Reporting
- External usage

**Options**

- export → current view
- exportAll → full dataset

** Important Notes **

- Ensure data is available
- API should return proper structure

---

## Best Practices

- Enable only required options
- Avoid cluttering toolbar
- Use search + filter together
- Enable export for reports, not dashboards

---

# 6. Common Mistakes

## Common Mistakes

- Enabling search without searchable fields
- Enabling all options unnecessarily - Leads to cluttered UI
- Empty export array
- Empty exportAll array

---
