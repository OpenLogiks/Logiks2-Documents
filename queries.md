Bullet points to cover.

REMOVE unwanted Emojies
Main topic in ## and subtopics in ###

1. What is allows to
1.1 if it triggers anything
2. Example
3. Explain properties
3.1. How it works
4. When to use



datagrid
What are different types of filter for selects- Pramod

slot-binding
Does it supports array of string

To how many report templates the rules applies to? Does it apply to all templates or specific ones?

custom formatter.



source - 
action & button
toolbar
datagrid
slot-binding
rules
cards
kanban
calendar
gallery
gantt
gmap


{
  "title": "Persona",
  "rowlink": false,
  "rowsPerPage": 10,
  "settings":false,
  "template": "",
  "custombar": false,
  "showExtraColumn": "checkbox",
  "source": {
    "type": "API",  
    "method": "get",
    "url": `APIURL`, 
    "headers": {
         "appid": "app01",
         "Authorization": "Bearer 1111", 
         "Content-Type": "application/json", 
    },
    "limit": 10
  },
  "actions": {
    "forms@new": {
      "label": "Persona",
      "icon": "fa fa-plus mr-1",
    }
  },
  "buttons": {
    "infoview@test": {
      "label": "View Info",
      "icon": "fa fa-eye"
    },
    "forms@edit": {
      "label": "Edit Info",
      "icon": "fa-solid fa-pen-to-square"
    },
    "page@skills": {
      "label": "Add",
      "icon": "fa fa-gear pull-lef"
    }
  },
  "toolbar": {
    "search": true,
    "print": true,
    "email": false,
    'export':[]
  },
  "datagrid": {
    "id": {
      "label": "ID",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "groupable": false,
      "classes": "",
      "style": "width:50px;",
    },
    "persona_code": {
      "label": "persona code",
      "sortable": true,
      "searchable": true,     
    },
    "status": {
      "label": "status",
      "searchable": false,
      "filter": {
        "type": "select",
        "options": {
          "male": "published",
          "female": "Female"
        }
      }
    },
    "persona_group": {
      "label": "persona group",
      "hidden": false,
      "searchable": true,
      "groupable": true,

    },
    "persona_avatar": {
      "label": "persona avatar",
      "hidden": true,
      "searchable": false
    },
    "rating": {
      "label": "rating",
      "hidden": true,
      "searchable": false
    },
    "created_on": {
      "label": "created on",
      "formatter":"date",
      "hidden": true,
      "searchable": false
    },
    "persona_descs": {
      "label": "persona descs"
    }
  },
  "cards": {
    "colmap": {
      "title": "persona_name",
      "descs": "persona_descs",
      "category": "type",
      "due_date": "created_on",
      "avatar": "persona_avatar",
      "color": "status",
    },
    "colormap": {
      "active": "card_green",
      "under_notice": "card_red",
      "probationary": "card_blue"
    },
    "unilink": "staff.main",
    "default_avatar": true
  },
  "kanban": {
    "colkeys": {
      "persona_group": {
        "label": "persona group",
      },"created_by": {
        "label": "created by",
      },"editable": {
        "label": "editable",
      },"status": {
        "label": "status",
      },"visibility": {
        "label": "visibility",
      }
    },
    "colmap": {
      "title": "persona_name",
      "department": "created_by",
      "descs": "persona_descs",
      "category": "gender",
      "due_date": "dtoe",
      "avatar": "persona_avatar",
      "color": "type",
      "tags": "role",
      "counter": "rating"
    },
  },

  "calendar": {
    "colmap": {
      "title": "persona_name",
      "descs": "persona_desc"
    },
    
    "date_col": {
      "created_on": "#9428C8",
      "edited_on": "#3653C6"
    },
    "unilink": "staff.main",
    "notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>"
  },
  "gallery":{
		"colmap":{
		    "avatar": "persona_avatar",
			"title":"persona_name",
			"descs":"persona_desc",
			"due_date":"persona_code"
		},
	},
    "gantt":{
    "colmap": {
        "id": "id",
        "name": "persona_name",
        "start": "created_on",
        "end": "end_date",
        "progress": "completion",
        "owner": "assigned_to",
        "milestone": "is_milestone",
        "parent": "parent_id",
        "dependencies": "depends_on"
      }
  },
   "gmap": {
    "zoom": 4,
    "mapid": "terrain",
    "colmap": {
      "title": "name",
      "descs": "info",
      "geolocation": "geo",
    },
    "template": `<div>
        <h2>$title</h2>
        <p>$descs</p>
      </div>`,
  }
}