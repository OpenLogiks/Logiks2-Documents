---
id: formatters
title: Formatter References
---

# Formatters

Formatters control how data is displayed in reports and UI components.  
All formatters are processed through the core formatter engine.

---

## Supported Formatters

### checkbox

Renders boolean values as checkbox input.

---

### date

Formats date values.  
**Example:** `2024-01-15 → 15/01/2024`

---

### month

Formats month index or value to month name.  
**Example:** `3 → March`

---

### time

Extracts and formats time from datetime.  
**Example:** `2024-01-15T14:30:00 → 14:30:00`

---

### datetime

Formats full datetime.  
**Example:** `2024-01-15T14:30:00 → 15/01/2024, 14:30:00`

---

### currency

Formats number as currency.  
**Example:** `1234.5 → $1,234.50`

---

### number / num

Formats numeric values with separators.  
**Example:** `1234567 → 1,234,567`

---

### link / url

Renders clickable link.  
**Example:**  
`https://example.com → <a>LINK</a>`

---

### email

Creates mailto link.  
**Example:**  
`test@example.com → <a href="mailto:...">`

---

### phone / tel / mobile / mob

Creates clickable phone link.  
**Example:**  
`9876543210 → <a href="tel:...">`

---

### geolocation / geoloc / geoaddress

Creates map link for location.  
**Example:**  
`New York → Opens in map`

---

### color

Displays color preview (circle/block).  
**Example:**  
`#ff0000 → Red indicator`

---

### avatar

Displays rounded user image.  
**Example:**  
`image URL → avatar`

---

### photo / picture

Displays image preview.

---

### media / mediafile / file

Displays file/media link.  
**Example:**  
`file URL → <a>FILE</a>`

---

### attachment

Handles multiple files.  
**Example:**  
`file1.pdf,file2.png → multiple links + preview`

---

### json

Formats JSON into readable structure.

---

### pretty

Formats text for readability.  
**Example:**  
`hello_world → Hello World`

---

### uppercase

Converts text to uppercase.

---

### lowercase

Converts text to lowercase.

---

### html

Renders HTML content.

---

### method

Custom formatter using function.

```js
columnInfo: {
  method: (v) => `Custom: ${v}`;
}
```

---

### embed

Renders embeddable content link.

---

### video / videoembed

Handles video content and triggers playback.

---

### iframe

Embeds content inside iframe container.

---

### content

Handles long content with abstract + popup view.

---

### template

Renders template using record data.

```json
"template": "Name: %name%, Age: %age%"
```

---

### edge

Formats time difference (relative time).
**Example:**
`1 hour ago`

---

## Default Behaviors

### Array

```js
["a", "b", "c"] → "a, b, c"
```

### Long Text

```js
Long string → <pre>formatted text</pre>
```

### Short Text

```js
Displayed as-is
```

---

## Example Usage

```json
{
  "formatter": "currency"
}
```

---

## Notes

- Formatters are applied during rendering
- Works across tables, cards, and views
- Custom logic can be implemented using `method`
- Formatter behavior may vary based on UI context

---

## Formatter Mapping (Debug Reference)

| Formatter          | Input                       | Output                                                   |
| ------------------ | --------------------------- | -------------------------------------------------------- |
| checkbox           | `true`                      | `<input type='checkbox' checked />`                      |
| date               | `2024-01-15`                | `15/01/2024`                                             |
| month              | `3`                         | `March`                                                  |
| time               | `2024-01-15T14:30:00`       | `14:30:00`                                               |
| datetime           | `2024-01-15T14:30:00`       | `15/01/2024, 14:30:00`                                   |
| currency           | `1234.5`                    | `$1,234.50`                                              |
| number             | `1234567`                   | `1,234,567`                                              |
| link               | `https://example.com`       | `<a href='...'>LINK</a>`                                 |
| email              | `test@example.com`          | `<a href='mailto:test@example.com'>test@example.com</a>` |
| phone              | `9876543210`                | `<a href='tel:9876543210'>9876543210</a>`                |
| geolocation        | `New York, USA`             | `Google Maps link`                                       |
| color              | `#ff0000`                   | `Red color indicator`                                    |
| avatar             | `https://img.com/user.png`  | `<img rounded avatar>`                                   |
| photo              | `https://img.com/photo.png` | `<img preview>`                                          |
| attachment         | `file1.pdf,file2.png`       | `Multiple links with preview`                            |
| json               | `{"name":"John"}`           | `Formatted JSON`                                         |
| pretty             | `hello_world`               | `Hello World`                                            |
| uppercase          | `hello`                     | `HELLO`                                                  |
| lowercase          | `HELLO`                     | `hello`                                                  |
| html               | `<b>Bold</b>`               | `Rendered HTML`                                          |
| mediafile          | `https://file.com/doc.pdf`  | `<a>FILE</a>`                                            |
| method             | `value`                     | `Custom: value`                                          |
| embed              | `https://embed.com`         | `OPEN clickable`                                         |
| video              | `https://youtube.com/video` | `OPEN video trigger`                                     |
| iframe             | `https://example.com`       | `Embedded iframe`                                        |
| content            | `Long text`                 | `Abstract + popup`                                       |
| template           | `{name: John}`              | `Name: John, Age: 25`                                    |
| edge               | timestamp                   | `1 hr ago`                                               |
| default-array      | `["a","b","c"]`             | `a, b, c`                                                |
| default-long-text  | long string                 | `<pre>formatted text</pre>`                              |
| default-short-text | `Short text`                | `Short text`                                             |

---

## Notes for Debugging

- Use this table to validate formatter output quickly
- If output mismatch occurs:
  - Check formatter name
  - Verify input format
  - Confirm column configuration (`columnInfo`, `template`, etc.)

- Custom formatter (`method`) depends on implementation

---
