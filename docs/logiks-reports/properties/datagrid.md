---
id: datagrid
title: Datagrid
---

# Datagrid

Defines how data fields are displayed.

## Example

```json

"datagrid": {
    "id": {
      "label": "ID",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "groupable": false,
      "group": "A",
      "formatter": "pretty",
      "classes": "",
      "style": "width:50px;",
      "filter":{
        "daterange": true
      }
    },
}
```

## Properties

### key

The key of the object in the `datagrid` represents the column name of the data.

### label

Column name, which is visible in the UI as the header.

### hidden

It may happen that the source data contains multiple columns which are not required to be displayed in the report but user can have the option to view them as need basis. So `hidden` allows to hide those columns, but the hidden columns can be enabled from settings.

### searchable

Enable search of the column, it will appear in the search bar under the select drowdown, where user can select the column name to search the text.

### sortable

Enable sorting for the column, sorting is done by clicking the column header. The column can be sorted in ascending or descending order.

### groupable

It opens a dropdown with the list of columns where `groupable` is set to `true`.
Enable grouping for the data, if the report support grid view then the grid will be grouped by the rows. If the report support kanban view then the kanban will be grouped by the columns. For other reports the groupable feature will be hidden

### group

Enable grouping for the column, all the columns with the same group will be grouped together. You can use this to group columns by category.

### formatter

The column data can be formatted using the `formatter` property. Example `url` is used to display a link, which can be clicked to open the link in a new tab. You can refer to [Formatters](../../references/formatters) for more information.

### classes

Custom CSS classes or tailwind classes

### style

supports vanilla inline styles

### filter

The filter gets activated as inline filter for grid view only. The inline filter above each columns can have various elements/components which is defined by `type` property of the filter.

If the type holds `daterange` which is special case, then the inline filter will not be activated for those columns, rather a separate `Date Range` filter will be activated on top of the reports. If multiple columns contains `daterange` then the a dropdown filter will be shown to first select the column to apply date range filter.

Example 1: Adds a dropdown filter, where options are defined in the `options` object

Type can be of following values.

### - text

> allows text search for the columns

Example:

```json
"filter": {
  "type": "text"
}
```

### - date

> allows date search for the columns. The accepted format is `YYYY-MM-DD` which is default set in calendar.

Example:

```json
"filter": {
  "type": "date"
}
```

### - month

> allows month search for the columns from the Calendar

Example:

```json
"filter": {
  "type":"month"
}
```

### - daterange

> allows date range search for the columns which is added at the top of the report

Example:

```json
"filter": {
  "type": "daterange"
}
```

### - select

> allows select search for the columns

### - dataSelector

### - dataSelectorFromTable

### - dataSelectorFromUniques

### - autosuggest

### - autocomplete

### - suggest

Example: Dynamic value from JSON SQL query.

```json
 "filter": {
        "type": "dataSelectorFromUniques",
        "table": "data_qc_frequency_master_tbl",
        "columns": "created_by,created_by"
      }
```

This object structure is similar to `source` object. Refer to [source](../../references/sql) for more information.

Example: Fixed value

```json
"filter": {
  "type": "select",
  "options": {
    "active": "Active"
  }
}
```
