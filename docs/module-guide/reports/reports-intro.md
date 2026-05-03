---
id: mg-reports-intro
title: Reports
---

# Reports

This helps you understand what is a Logiks Report and how it can be used in your application.
One can directly open the report from navigation instead of opening from Pages, which means the navigation/menus can directly point to the report instead of a page which then opens the report. This is useful when you want to create a dashboard with multiple reports and you want to open the report directly from the navigation.

## What is a Logiks Report?

A Logiks Report is a powerful and flexible way to display data in your application. It allows you to create complex and interactive reports with ease, using a simple JSON configuration.
Logiks Reports support a wide range of features, including:

- Multiple templates (grid, cards, kanban, calendar, gallery, gantt, gmap)
- Custom data sources (API, SQL, static data)
- Custom actions and buttons
- Custom toolbars
- Custom formatters
- Slot binding for custom components
- Rules for conditional formatting and behavior

## Why use Logiks Reports?

Logiks Reports provide a wide range of features and capabilities that make it an ideal choice for displaying data in your application. Some of the key benefits of using Logiks Reports include:

- **Flexibility**: Logiks Reports can be easily customized to meet your specific needs, allowing you to create reports that are tailored to your application's requirements.
- **Interactivity**: Logiks Reports support a variety of interactive features, such as sorting, filtering, and pagination, which can help users explore and analyze data more effectively.
- **Ease of Use**: Logiks Reports provide a simple and intuitive interface, making it easy for users to create and manage reports, even if they are not technically proficient.

## Features of Logiks Reports

![Report Configurations](/img/reports/Reports.png)

- Settings for configuring the report's behavior and appearance
- Support for multiple templates, including grid, cards, kanban, calendar, gallery, gantt, and gmap with single JSON configuration
- Remember the last used template and settings for each report
- Support options for custom report builders for each modules which is retained on local storage.
- Support Filter, search, sort, pagination.
- Inline filter for the grid template.
- Support filters on date and date range.
- Supports wide range of export options (CSV, Excel, PDF, etc.)
- Support for custom formatters to customize the display of data in the report.
- Support for slot binding to allow users to bind custom components to specific slots in the report. Refers to [slot-binding](/module-guide/pages/pages-intro#slot-binding) for more details.
- Supports custom formatter in a separate file with same name as report but with `.js` extension. For example, if your report is `sales-report.json`, you can create a custom formatter in `sales-report.js` and it will be automatically used by the report.

Refers to the [link](/logiks-reports/getting-started) for more details on Reports
