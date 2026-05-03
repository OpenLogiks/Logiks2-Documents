---
id: validation
title: Validation
---

# Validation

Perfect — this is exactly what was missing: **Validation Documentation**
I’ll convert your JSON into a clean, production-ready doc section.

---

## Validation in Logiks Forms

Validation in Logiks Forms is defined using the `validate` property inside each field.

It ensures that user input meets specific rules before submission.

---

## Basic Syntax

```json
"field_name": {
  "type": "text",
  "validate": {
    "rule": value
  }
}
```

---

## Example (Reference)

From your sample config :

```json
{
  "name": "email",
  "type": "email",
  "validate": { "email": true }
}
```

---

# Supported Validation Rules

## 1. Email Validation

```json
"validate": {
  "email": true
}
```

- Ensures valid email format

---

## 2. Numeric Validation

```json
"validate": {
  "numeric": true
}
```

- Allows only numbers

---

## 3. Decimal Validation

```json
"validate": {
  "decimal": 2
}
```

- Allows decimal values
- Limits decimal places (e.g., 2 → 12.34)

---

## 4. Mobile Validation

```json
"validate": {
  "mobile": true
}
```

- Validates mobile number format

---

## 5. Regex Validation

```json
"validate": {
  "regex": "^[A-Z]+$"
}
```

- Custom validation rule
- Example: only uppercase letters

---

## 6. Alphabet Only

```json
"validate": {
  "alpha": true
}
```

- Only letters allowed

---

## 7. Alphanumeric

```json
"validate": {
  "alphanumeric": true
}
```

- Letters + numbers only

---

## 8. Uppercase Enforcement

```json
"validate": {
  "upper": true
}
```

- Converts or validates uppercase input

---

## 9. Lowercase Enforcement

```json
"validate": {
  "lower": true
}
```

- Converts or validates lowercase input

---

## 10. Length Validation

```json
"validate": {
  "length-min": 3,
  "length-max": 10
}
```

- Minimum and maximum character length

---

# Combining Multiple Validations

You can apply multiple rules together:

```json
"validate": {
  "alphanumeric": true,
  "length-min": 5,
  "length-max": 12
}
```

---

# Validation Behavior

- Applied **on input / submit**
- Prevents submission if invalid
- Can be combined with `required: true`

---

# Best Practices

- Use `regex` for custom logic
- Prefer built-in validators where possible
- Always combine with `required` when needed
- Keep validation consistent with backend rules

---

# Example Form Snippet

```json
{
  "name": "username",
  "type": "text",
  "label": "Username",
  "required": true,
  "validate": {
    "alphanumeric": true,
    "length-min": 5,
    "length-max": 12
  }
}
```

---

# Where This Fits

Add this file to your docs:

```bash
forms/validation.md
```

And link it from:

- `field-types.md`, refer [Validation Section](/logiks-forms/validation/)
- `getting-started.md`, refer [Getting Started](/logiks-forms/getting-started/)

---
