---
id: gmap
title: Google Map
---

# Google Map

Defines how data is displayed in map view using geolocation markers.

> **Note:** The `datagrid` object is required along with `gmap`, as map markers and details are derived from the data columns defined in the datagrid.

## Example

```json
"gmap": {
  "zoom": 4,
  "mapid": "terrain",

  "colmap": {
    "title": "name",
    "descs": "info",
    "geolocation": "geo"
  },

  "template": "<div>
      <h2>$title</h2>
      <p>$descs</p>
    </div>"
}
```

## Properties

## zoom

Defines the default map zoom level.

Example:

```json
"zoom": 4
```

Higher values zoom in closer.

Typical examples:

- `2` → World view
- `4` → Region / country view
- `10` → City view
- `15+` → Street level

---

## mapid

Defines the map display type or style.

Example:

```json
"mapid": "terrain"
```

Possible examples may include:

- `terrain`
- `roadmap`
- `satellite`
- `hybrid`

Supported values depend on the map renderer.

---

## colmap

Maps data columns from the `datagrid` to map marker data.

Each key represents a predefined map component, and the value should match a column key from the `datagrid`.

Supported mappings:

---

### title

Primary title shown for the map marker or popup.

```json
"title": "name"
```

---

### descs

Description or supporting details shown in marker info.

```json
"descs": "info"
```

---

### geolocation

Defines the column containing geographic coordinates.

```json
"geolocation": "geo"
```

Used to place markers on the map.

Expected data may include:

- Latitude / Longitude pairs
- Coordinates object
- Supported geo format required by the renderer

Example:

```json
"geo": "19.9975,73.7898"
```

---

## template

Defines a custom HTML template used for marker popups or info windows.

Example:

```html
<div>
  <h2>$title</h2>
  <p>$descs</p>
</div>
```

Supports placeholder variables mapped from `colmap`.

Example placeholders:

- `$title`
- `$descs`

Typical uses:

- Custom info windows
- Rich popup layouts
- Styled marker details

---

## Notes

- `gmap` uses values from the `datagrid` dataset and does not define independent data.
- `colmap` controls map marker content.
- `geolocation` is required for plotting markers.
- `template` is optional and allows custom popup rendering.
- `zoom` and `mapid` control initial map behavior.
- All `colmap` values must reference valid keys in the `datagrid`.

```

```
