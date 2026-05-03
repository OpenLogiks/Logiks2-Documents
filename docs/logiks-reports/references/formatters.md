---
id: formatters
title: Formatter References
---

# Formatters

Formatters control how data is displayed and **core formatter engine**

## Supported Formatters

### checkbox

### date

Formats date values. Accepts standard date formats or timestamps.

### month

Formats month values. Accepts month names, numbers, or timestamps.

### time

Formats time values. Accepts standard time formats or timestamps.

### datetime

Formats date and time values. Accepts standard datetime formats or timestamps.

### currency

Formats numeric values as currency. Accepts a currency code (e.g., "USD") or symbol (e.g., "$").

### number

Formats numeric values with optional decimal places and thousand separators.

### num

Formats numeric values with optional decimal places and thousand separators, without currency symbols.

### link

Enables clickable links. Accepts URLs, absolute paths, or relative paths. On relative paths, it will navigate within the app.

### url

Formats values as URLs. Similar to "link" but specifically for web addresses.

### email

Formats values as email addresses, making them clickable to open the default mail client.

### tel

Formats values as telephone numbers, making them clickable to initiate a call on supported devices.

### mob

Formats values as mobile phone numbers, making them clickable to initiate a call on supported devices.

### phone

Formats values as phone numbers, making them clickable to initiate a call on supported devices.

### mobile

Formats values as mobile phone numbers, making them clickable to initiate a call on supported devices.

### geoloc

Formats values as geolocation coordinates, making them clickable to open in a map application.

### geolocation

Formats values as geolocation coordinates, making them clickable to open in a map application.

### geoaddress

Formats values as geolocation addresses, making them clickable to open in a map application.

### color

Formats values as colors. Accepts color names, hex codes, or RGB values.

### avatar

Formats values as avatars. Accepts image URLs or user identifiers to fetch profile images.

### photo

Formats values as photos. Accepts image URLs to display as photos.

### picture

Formats values as pictures. Accepts image URLs to display as pictures.

### media

Formats values as media files. Accepts URLs to audio or video files.

### file

Formats values as files. Accepts URLs to downloadable files.

### attachment

Formats values as attachments. Accepts URLs to downloadable files.

### json

Formats values as JSON strings, making them easier to read.

### pretty

Formats values as pretty-printed JSON or html for better readability.

### uppercase

Formats text values to uppercase.

### lowercase

Formats text values to lowercase.

### html

Formats values as HTML, allowing for rich content display.

### mediafile

Formats values as media files. Accepts URLs to audio or video files.

### method

Formats values by calling a specified method. Accepts the method name as a string. Used for custom formatting logic defined in the report's methods. The method are defined in the report file which has same name as report but with .js extension. The method will receive the cell value and the entire row data as parameters, allowing for complex formatting based on the context.

### embed

Formats values as embedded content. Accepts URLs to embeddable content such as videos, maps, or social media posts.

### video

Formats values as videos. Accepts URLs to video files or embeddable video links.

### videoembed

Formats values as embedded videos. Accepts URLs to embeddable video links.

### iframe

Formats values as iframes. Accepts URLs to be embedded within an iframe.

### content

Formats values as content. Accepts raw content to be rendered directly.

### template

Formats values as templates. Accepts a template name to be rendered.

### edge

Formats values as edges in a graph. Accepts configuration for source, target, and label.

## Example

```json
"formatter": "currency"
```

## When to use

- currency → financial data
- avatar → user profile
- html → rich content

## Formatter Behavior

- All formatters are processed via `formatCellValue`
- Applied at rendering stage
- Works for both table and cards
