---
id: examples
title: Examples
---

# Examples

## Example 1: Simple Form

```json id="example-simple"
{
  "template": "simple",
  "fields": {
    "name": {
      "type": "text",
      "label": "Name"
    }
  }
}
```

---

## Example 2: Dynamic Form

```json id="example-dynamic"
{
  "template": "simple",
  "fields": {
    "country": {
      "type": "select",
      "label": "Country",
      "source": {
        "type": "api",
        "endpoint": "/countries"
      }
    },
    "state": {
      "type": "select",
      "dependsOn": "country",
      "ajaxchain": {
        "src": {
          "endpoint": "/states",
          "refid": "{country}"
        }
      }
    }
  }
}
```

Example 3

```json id="example-3"
{
  "hooks": {
    "preload": {
      "helpers": ["countries"]
    },
    "presubmit": {
      "modules": ["bizrules"]
    },
    "postsubmit": {
      "modules": ["bizflow", "bizlogger"]
    }
  },
  "forcefill": {
    "guid": "#SESS_GUID#",
    "status": "new",
    "source": "mapps",
    "date_of_comp": "#SESS_CURRENT_DATE#",
    "ticket_no": "#AUTOGEN:MT,100000000000,999999999999#"
  },
  "source": {
    "type": "sql",
    "table": "tickets_tbl",
    "cols": "*",
    "where": {
      "id": "#refid#"
    }
  },
  "gotolink": "infoview/samadhan.tickets_mapps/{hashid}?",
  "fields": {
    "profile_id": {
      "label": "Contact Info",
      "group": "Info",
      "type": "dataSelectorFromTable",
      "table": "profiletbl",
      "columns": "full_name as title,id as value",
      "where": {
        "(type !='employee')": "RAW",
        "blocked": "false",
        "length(full_name)>0": "RAW"
      },
      "orderBy": "full_name asc",
      "no-option": "Select Dealer",
      "required": true,
      "seacrh": true,
      "autocomplete": {
        "target": "org_id",
        "src": {
          "table": "profiletbl",
          "columns": "profiletbl.organization as org_id",
          "where": {
            "profiletbl.id": "#refid#"
          }
        }
      }
    },
    "org_id": {
      "label": "OEM",
      "group": "Info",
      "hidden": true
    },
    "name": {
      "label": "Name",
      "group": "Info",
      "required": true
    },
    "email": {
      "label": "Email",
      "group": "Info",
      "type": "email"
    },
    "mobile": {
      "label": "Mobile",
      "group": "Info",
      "type": "phone",
      "required": true
    },
    "region": {
      "label": "Region",
      "group": "Info",
      "type": "dataSelectorFromTable",
      "table": "data_regions",
      "columns": "name as title,code as value",
      "no-option": "Select Region",
      "required": true
    },
    "serial_no": {
      "label": "Device Serial No.",
      "group": "Info",
      "type": "barcode"
    },
    "model_no": {
      "label": "Device Model No",
      "group": "Info",
      "required": true
    },
    "nature_of_comp": {
      "label": "Nature of Complaint",
      "group": "Info",
      "type": "dataSelector",
      "groupid": "ticket_nature",
      "no-option": "Select Nature of Complaint",
      "multiple": true
    },
    "category": {
      "label": "Category",
      "group": "Info",
      "type": "dataSelector",
      "groupid": "ticket_category",
      "no-option": "Select category",
      "required": true
    },
    "assigned_to": {
      "label": "Assigned To",
      "group": "Info",
      "type": "dataSelectorFromTable",
      "table": "profiletbl",
      "columns": "full_name as title,loginid as value",
      "where": {
        "type": "employee",
        "subtype": "active"
      },
      "orderBy": "full_name asc",
      "default": "#SESS_USER_ID#"
    },
    "descs": {
      "label": "Description",
      "type": "textarea",
      "group": "Info",
      "width": 12,
      "required": true
    }
  },
  "infoview": {
    "groups": {
      "actions": {
        "label": "Actions",
        "type": "module",
        "src": "infoviewTable",
        "vmode": "edit",
        "config": {
          "type": "sql",
          "uimode": "grid",
          "table": "tickets_actions",
          "cols": "tickets_actions.id,tickets_actions.type,tickets_actions.date,tickets_actions.msg,tickets_actions.created_by,tickets_actions.created_on",
          "where": "md5(tickets_actions.ticket_id)='#refid#'",
          "orderby": "tickets_actions.edited_on DESC",
          "colkey": "ticket_id",
          "form": {
            "source": {
              "type": "sql",
              "table": "tickets_actions",
              "where": ["md5(id)"]
            },
            "forcefill": {
              "groupuid": "#SESS_GROUP_NAME#",
              "access_level": "#SESS_ACCESS_LEVEL#",
              "privilegeid": "#SESS_PRIVILEGE_ID#",
              "ticket_id": "#REFID#",
              "completion_date": "#SESS_CURRENT_DATE#",
              "completed": "true"
            },
            "fields": {
              "type": {
                "label": "Type",
                "type": "dataSelector",
                "groupid": "ticket_action_type",
                "required": true
              },
              "date": {
                "label": "Date",
                "type": "date",
                "required": true
              },
              "msg": {
                "label": "Message",
                "type": "text",
                "required": true
              }
            }
          }
        },
        "width": 12
      },
      "comments": {
        "label": "Comments",
        "type": "module",
        "src": "userComments.comments",
        "vmode": "edit",
        "config": {
          "ref_id": "#refid#",
          "ref_src": "tickets"
        },
        "width": 12
      },
      "files": {
        "label": "Files",
        "type": "module",
        "src": "docman.docs",
        "vmode": "edit",
        "config": {
          "ref_id": "#refid#",
          "ref_src": "tickets"
        },
        "width": 12
      },
      "notes": {
        "label": "Notes",
        "type": "module",
        "src": "notesBoard.notes",
        "rule": "profile,#refid#",
        "vmode": "edit",
        "width": 12,
        "hidden": false
      },
      "logs": {
        "label": "Logs",
        "type": "module",
        "src": "bizlogger.logs",
        "config": {
          "ref_id": "#refid#",
          "ref_src": "tickets"
        },
        "vmode": "view",
        "width": 12,
        "hidden": false
      }
    }
  }
}
```

---
