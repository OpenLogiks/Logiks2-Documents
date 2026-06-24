---
id: intro_old
title: Forms
---

# Forms

## What is Logiks Infoview?

Logiks infoview is a **JSON-driven dynamic form engine** in LRC that enables building fully functional view only forms without writing UI code.
This is basically second side of logiks forms, this is used to display data only.
Moreover it supports 2 `mode` `single` and `grid`. Where if `single` mode is selected then the form will be displayed in a single screen, if `grid` mode is selected then the form will be displayed in a grid view.

---

## When to Use

Use Logiks Forms when:

- You want configurable forms without frontend coding
- You need dynamic data-driven inputs
- You want reusable form definitions across modules

---

## Complete Example

```json
{
  "source": {
    "type": "sql",
    "table": "table_1",
    "cols": "*",
    "where": {
      "id": "#refid#"
    }
  },
  "forcefill": {
    "guid": "#SESS_GUID#"
  },
  "gotolink": "infoview/hse.incident/{hashid}",
  "fields": {
    "company_code_id": {
      "label": "Company/ SPV",
      "type": "select",
      "parameter": "company_id",
      "required": true,
      "source": {
        "type": "api",
        "method": "post",
        "endpoint": "/api/services/eofficeGlobal/get_company"
      },
      "ajaxchain": [
        {
          "target": "sector_id",
          "src": {
            "type": "api",
            "method": "post",
            "endpoint": "/api/services/eofficeGlobal/get_sector"
          }
        }
      ],
      "no-option": "Select Company/ SPV",
      "width": 4
    },
    "sector_id": {
      "label": "Sector",
      "no-option": "Select Sector",
      "type": "select",
      "parameter": {
        "sector_id": "sector_id",
        "company_id": "company_code_id"
      },
      "ajaxchain": [
        {
          "target": "project_function_id",
          "src": {
            "type": "api",
            "method": "post",
            "endpoint": "/api/services/eofficeGlobal/get_project_function?module=hse&type=project"
          }
        }
      ],
      "required": true,
      "width": 4
    },
    "project_function_id": {
      "label": "Project Function ",
      "type": "select",
      "required": true,
      "width": 4,
      "no-option": "Select Project Function"
    },
    "date": {
      "label": "Incident Date",
      "type": "date",
      "max": "today",
      "required": true,
      "width": 4
    },
    "time": {
      "label": "Incident Time(24Hr Format)",
      "type": "time",
      "required": true,
      "width": 4
    },
    "location_id": {
      "label": "Incident Location",
      "type": "text",
      "required": false,
      "width": 4
    },
    "type": {
      "label": "Type Of Incident",
      "type": "dataSelector",
      "groupid": "incident_type",
      "required": true,
      "search": true,
      "multiple": false,
      "width": 4
    },
    "reason": {
      "label": "Incident Reason",
      "type": "dataSelectorFromTable",
      "table": "data_hse_incident_reason",
      "columns": "title as title,name as value",
      "where": {
        "blocked": "false"
      },
      "required": true,
      "search": true,
      "width": 4
    },
    "reported_by": {
      "label": "Incident Reported By",
      "type": "text",
      "width": 4
    },
    "description": {
      "label": "Incident Description",
      "type": "textarea",
      "required": true,
      "width": 12
    },
    "action_taken": {
      "label": "Action Taken/Proposed",
      "type": "textarea",
      "width": 12
    },
    "status": {
      "label": "Status",
      "type": "dataSelector",
      "required": true,
      "default": "open",
      "onChange": "status",
      "groupid": "observations_status",
      "width": 4
    },
    "probability_rating": {
      "label": "Probability Rating",
      "onChange": "riskManage",
      "groupid": "hse_rating",
      "type": "dataSelector",
      "required": true,
      "width": 4
    },
    "severity_rating": {
      "label": "Severity Rating",
      "onChange": "riskManage",
      "groupid": "hse_rating",
      "type": "dataSelector",
      "required": true,
      "width": 4
    },
    "risk_level": {
      "label": "Risk Level",
      "type": "text",
      "disabled": true,
      "required": true,
      "width": 4
    },
    "incident_report_attachment": {
      "label": "Incident Report and Photograph (Max. Sizes:15MB)",
      "type": "camera2",
      "multiple": true,
      "width": 4
    },
    "compliance_report_attachment": {
      "label": "Compliance Report and Photograph (Max. Sizes:15MB)",
      "type": "camera2",
      "multiple": true,
      "width": 4
    },
    "root_cause": {
      "label": "Root Cause",
      "type": "textarea",
      "width": 12
    }
  }
}
```
