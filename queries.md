Bullet points to cover.

REMOVE unwanted Emojies
Main topic in ## and subtopics in ###

1. What is allows to
   1.1 if it triggers anything
2. Example
3. Explain properties
   3.1. How it works
4. When to use

Reports
common - get it reviewed with SC
formmatters - get it reviewed with SC and add more examples
What will debug true will do if source is not SQL

datagrid
What are different types of filter for selects- Pramod

slot-binding
Does it supports array of string

To how many report templates the rules applies to? Does it apply to all templates or specific ones?

custom formatter. example

reports screenshots

---

# showExtraColumn → **Checkbox Column (Marked: “showExtraColumn”)**

### JSON

```json
"showExtraColumn": "checkbox"
```

### UI Mapping

- First column in table
- Marked as **“showExtraColumn”**
- Enables:
  - Row selection
  - Bulk actions

---

# uiswitcher → **View Switch Icon (Marked: “Report switcher”)**

### JSON

```json
"uiswitcher": true
```

### UI Mapping

- Top-right of table controls
- Marked as **“Report switcher”**
- Icon with list/grid toggle

---

# Settings / Inline Controls (Framework Driven)

### JSON Source

(Not directly from your JSON, but enabled via toolbar/uiswitcher)

### UI Mapping

- Marked as:
  - **“Settings” (gear icon)**
  - **“Inline Filters” (filter icon)**

- Located next to:
  - Report switcher

---

# Buttons → **Row Click (Subject Column)**

### JSON

```json
"buttons": {
  "page@eoffice.chat": {
    "label": "{file_code}"
  }
}
```

### UI Mapping

- Inside table rows
- Subject column is clickable
- Opens:
  - Chat / detail page

---

# rowsPerPage → **Pagination**

### JSON

```json
"rowsPerPage": 20
```

### UI Mapping

- Text:
  - “Showing 1 to 20 of 23 records”

- Controls page size

---

# datagrid → **Main Table**

### JSON

```json
"datagrid": {}
```

### UI Mapping

- Entire table section:
  - Columns (Subject, Seen At, Action, etc.)
  - Sorting arrows
  - Data rows

---

# source → **Data Layer**

### JSON

```json
"source": {}
```

### UI Mapping

- Not visible directly
- Feeds data into:
  - Table
  - Filters
  - Counts

---

# Final Note

This version aligns exactly with your screenshot:

- Uses your **marked labels**
- Avoids generic visuals
- Keeps documentation **precise and mappable**

---

If you want next step, I can convert this into a **standard documentation template** so every report JSON you write automatically follows this same mapping format.
