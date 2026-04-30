---
id: template-examples
title: Template Examples
---

# Template Examples

---

## 🟦 Grid

```json
"template": "table"
```

- The Grid/ Table template is the default, and it primarily displays data in rows and columns using `datagrid`.

### 📊 Datagrid

| Property  | Description    |
| ---------- | -------------- |
| label      | Column name    |
| sortable   | Enable sorting |
| searchable | Enable search  |
| filter     | Filter config  |
| formatter  | Format value   |

---

## 🟨 Cards

```json
"template": "cards",
"cards": {
  "colmap": {
    "title": "name",
    "descs": "description",
    "avatar": "image"
  }
}
```

### 🎴 Cards / Gallery

| Property | Description |
| --------- | ----------- |
| title     | Main text   |
| descs     | Description |
| avatar    | Image       |

![Grid Report](/img/reports/missing-images.jpg)

---

## 🟪 Kanban

```json
"template": "kanban",
"kanban": {
  "colkeys": {
    "status": { "label": "Status" }
  },
  "colmap": {
    "title": "name",
    "category": "status"
  }
}
```

### 🎯 Kanban

| Property | Description |
| --------- | ----------- |
| title     | Main text   |
| category  | Category    |

![Grid Report](/img/reports/missing-images.jpg)

---

## 🟩 Calendar

```json
"template": "calendar",
"calendar": {
  "colmap": {
    "title": "name",
    "start": "start_date",
    "end": "end_date"
  }
}
```

### 📅 Calendar

| Property | Description |
| --------- | ----------- |
| title     | Event title |
| start     | Start date  |
| end       | End date    |

![Grid Report](/img/reports/missing-images.jpg)

---

## 🟧 Gallery

```json
"template": "gallery",
"gallery": {
  "colmap": {
    "avatar": "image",
    "title": "name"
  }
}
```

![Grid Report](/img/reports/missing-images.jpg)

---

## 🟥 Gantt

```json
"template": "gantt",
"gantt": {
  "colmap": {
    "id": "id",
    "name": "task_name",
    "start": "start_date",
    "end": "end_date"
  }
}
```

### 📊 Gantt

| Property | Description |
| --------- | ----------- |
| id        | Task ID     |
| name      | Task name   |
| start     | Start date  |
| end       | End date    |

![Grid Report](/img/reports/missing-images.jpg)

---

## 🌍 Map

```json
"template": "gmap",
"gmap": {
  "colmap": {
    "title": "name",
    "geolocation": "location"
  }
}
```

### 🌍 Map

| Property   | Description  |
| ----------- | ------------ |
| geolocation | Lat/Lng      |
| title       | Marker title |

![Grid Report](/img/reports/missing-images.jpg)
