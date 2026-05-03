---
id: sidebar
title: Sidebar
---

# Sidebar

The sidebar is a component that is used to display a list of reports in a sidebar. It is a simple component that takes a list of reports as input and displays them in a list format.

**Example**

```json
"sidebar": {
    "type": "list",
    "source": {
        "groupid": {
            "type": "sql",
            "table": "table_name",
            "cols": "groupid as title, groupid as value",
            "where": {
                "blocked": "false"
            },
            "groupby": "groupid",
            "orderby": "groupid asc"
        }
    }
},
```

**Below is a screenshot of the sidebar.**

![Sidebar](/img/reports/Sidebar.png)

## Properties

### type

The type of the sidebar component. In this case, it is a `list` and other supported types is `filter`.

### source

The source of the list of reports. It can be a SQL query or a list of reports. Refer to the [Data Source for SQL](/logiks-reports/references/sql) section for more details on how to define the source.

### groupid

The column from the SQL query that will be used as the title and value for the list items in the sidebar. In this example, we are using the `groupid` column from the `do_lists` table. The `groupid` is the key available in the `datagrid` object for the report.
