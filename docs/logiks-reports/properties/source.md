---
id: source
title: Source
---

# Source

Source is property of Reports that allows to fetch the data using API, methods or executing SQL query (SQL query is supported by JSON object).

When the SQL JSON Object is passed, then the application replace it with query id and the report library calls the API to get the response.

## Behavior

The source is responsible to fetch the data for the Reports. There are 3 types of sources from which data can be fetched.

## Data Source options

### 1. SQL

An JSON Object support SQL query which is used to fetch the data. The developer pass the JSON Object to the Report to fetch the data. The Report internally executes the query and return the data to the Report.

A sql example using System Variables, multiple joins and nested sql query.
Example:

```json
    "source": {
        "type": "sql",
        "table": "data_camp_location",
        "cols": "data_camp_location.*, company_tbl.title, data_sector.title, data_project_function.title",
        "cols_count": "count(distinct eoffice_files_tbl.id) as count",
        "join": [
            {
                "type": "left",
                "query": "company_tbl",
                "condition": "data_camp_location.company_code_id = company_tbl.id"
            },
            {
                "type": "left",
                "query": "data_sector",
                "condition": "data_camp_location.sector_id = data_sector.id"
            },
            {
                "type": "left",
                "query": "data_project_function",
                "condition": "data_camp_location.project_id = data_project_function.id"
            },
            {
                "type": "INNER",
                "query": "data_datahub_matrix",
                "condition": "FIND_IN_SET(data_camp_location.project_id, data_datahub_matrix.project_function_ids)"
            }
        ],
        "where": {
            "data_camp_location.blocked": "false",
            "data_datahub_matrix.userid": "#SESS_USER_ID#"
        },
        "orderby": "data_camp_location.id desc",
        "groupby": "data_camp_location.id",
        "limit": 1000
    }
```

Please check below link for other options and example for SQL

#### [Sample Examples](../../references/sql)

### 2. Method

Here the data is fetched using a method. The method gets triggered when the Report is loaded.

```json
  "source": {
    "type": "method",
    "method": "handleCreateAction"
  }
```

### 3. API

The data can be loaded directly from the external API.

```json
    "source": {
        "type": "API",
        "method": "post",
        "url": "https://ai.smartinfologiks.com/api/users",
        "params": {
            "name": "John Doe",
            "email": "8K0oJ@example.com"
        }
        "headers": {
            "Authorization": "Bearer TOKEN",
        },
    }
```
