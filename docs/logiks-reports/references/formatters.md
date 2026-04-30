---
id: formatters
title: Formatter References
---

# Formatters

Formatters control how data is displayed and **core formatter engine**

## Supported Formatters

### checkbox

### date

### month

### time

### datetime

### currency

### number

### num

### link

### url

### email

### tel

### mob

### phone

### mobile

### geoloc

### geolocation

### geoaddress

### color

### avatar

### photo

### picture

### media

### file

### attachment

### json

### pretty

### uppercase

### lowercase

### html

### mediafile

### method

### embed

### video

### videoembed

### iframe

### content

### template

### edge

(⚠️ mark as “details needs to be added for each formatter with example”)

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
