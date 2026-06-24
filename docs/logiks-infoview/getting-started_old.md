---
id: getting-started-old
title: Getting Started
---

# Getting Started

## Minimal Infoview Example

```json id="basic-form"
{
  "template": "accordion",
  "fields": {
    "name": {
      "type": "text",
      "label": "Name",
      "required": true
    }
  }
}
```

---

## Steps to Create a Form

1. Define infoview. Defines `template`
   accordion, tab (default view), tableft, tabright, cards
2. Configure optional `source` (for edit mode)
3. Add `fields`
4. Configure `infoview`
5. Add `buttons` - optional to perform actions

---

```

export interface Infoview {
    groups?: Record<string, InfoViewGroup>;
    template?: string;
}


export interface InfoViewGroup {
    label: string;
    type: string;
    component?: string;
    fields?: FormField[];
    config?: Record<string, any>;
    width?: number;
    vmode?: string
}

script?: string;
fields?: Record<string, Omit<FormField, "name">>;
infoview?: Infoview;
source?: Record<string, any>,
endPoints: SqlEndpoints;
buttons?: Record<string, any>;
forcefill?: Record<string, any>;
module_refid?: string;

```
