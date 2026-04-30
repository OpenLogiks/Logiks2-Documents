---
id: sql
title: SQL References
---

# References

## SQL References

Example 1: simple select all columns

```json
    "source": {
        "type": "sql",
        "table": "table_name",
        "cols": "*",
        "limit": 100
    }
```

Example 2: With other constraints

```json
    "source": {
        "type": "sql",
        "table": "data_camp_location",
        "cols": "data_camp_location.*, company_tbl.title, data_sector.title, data_project_function.title",
        "cols_count": "count(distinct eoffice_files_tbl.id) as count",
        "where": {
            "data_camp_location.blocked": "false"
        },
        "orderby": "data_camp_location.id desc",
        "groupby": "data_camp_location.id",
        "limit": 100
    }
```

```json
    "source": {
        "type": "sql",
        "table": "table_name",
        "cols": "*",
        "limit": 100
    }
```

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
