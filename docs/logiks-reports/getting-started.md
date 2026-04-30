---
id: getting-started
title: Getting Started
---

# Logiks Reports

Logiks Reports is a React library to generate dynamic reports using JSON configuration.

## Installation

```bash
npm install git+https://github.com/LogiksReactPlugins/LogiksReports.git
```

### To install a specific version

```bash
npm install git+https://github.com/LogiksReactPlugins/LogiksReports.git#dev
```

### Updated the existing version

**Remove old version first**

```bash
 npm uninstall logiks-reports
```

**Install the required version**

```bash
npm install git+https://github.com/LogiksReactPlugins/LogiksReports.git#<Version>
```

## Basic Usage

```js
import { Reports } from "logiks-reports";
import "logiks-reports/index.css"; //optional

const reportJson = {
  title: "Users",
  datagrid: {
    name: { label: "Name" },
    email: { label: "Email" },
  },
};

export default function App() {
  <Reports
    methods={{ ...apiMethods }}
    report={reportJson}
    onButtonClick={handleAction}
    api={api}
  />;
}
```

## Supporting Props

### Essential Props

1. onButtonClick: Required
   - This function is used to handle all button triggers and find what action to do . get (buttonKey, data) in return
1. report: Required
   - JSON config object that defines the report structure
1. methods: Optional
   - Custom methods
1. api: Optional
   - Holds API interface methods

### Advanced documentation

1. style: optional
   - Custom styling for the report

### Up coming

1. api
