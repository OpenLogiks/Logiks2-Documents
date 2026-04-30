---
id: gallery
title: Gallery
---

# Gallery

Defines how data is displayed in gallery view.

> **Note:** The `datagrid` object is required along with `gallery`, as gallery items are derived from the data columns defined in the datagrid.

## Example

```json
"gallery": {
  "colmap": {
    "avatar": "persona_avatar",
    "title": "persona_name",
    "descs": "persona_desc",
    "due_date": "persona_code"
  }
}
```

## Properties

## colmap

Maps data columns from the `datagrid` to gallery item UI elements.

Each key represents a predefined gallery component, and the value should match a column key from the `datagrid`.

Supported mappings:

---

### avatar

Defines the image, thumbnail, or media displayed for the gallery item.

Example:

```json
"avatar": "persona_avatar"
```

Typically used for:

- Images
- Profile photos
- Product thumbnails
- Media previews

---

### title

Primary heading of the gallery item.

Example:

```json
"title": "persona_name"
```

Displayed as the main label or title.

---

### descs

Description or summary text shown for the gallery item.

Example:

```json
"descs": "persona_desc"
```

Used for supporting information or captions.

---

### due_date

Displays secondary metadata such as date, code, or identifier.

Example:

```json
"due_date": "persona_code"
```

Common uses:

- Codes or IDs
- Dates
- Reference values
- Additional labels

---

## Notes

- `gallery` uses values from the `datagrid` dataset and does not define independent data.
- `colmap` controls how each gallery item is rendered.
- All `colmap` values must reference valid keys in the `datagrid`.
- `avatar` is typically the primary visual element in gallery view.
- Additional mappings can be extended as supported by the UI renderer.

```

```
