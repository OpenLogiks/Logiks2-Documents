---
id: mg-pages-intro
title: Pages
---

# Pages

This helps you understand what is a Logiks Page and how it can be used in your application.

## What is a Logiks Page?

A Logiks Page is a container for various UI components and features in your application. It allows you to create complex and interactive pages with ease, using a simple JSON configuration.
Think of it like defining the layout and structure of a webpage, where you can specify different sections (header, sidebar, content area) and bind components to those sections to create a dynamic user interface.

## Why use Logiks Pages?

Logiks Pages support slot binding, which allows you to bind custom components to specific slots in the page. This makes it easy to create dynamic and customizable pages that can be tailored to your application's requirements.

## Supporting slot binding

![Page Slot Binding](/img/pages/page-slot-binding.png)

### app-header

The app-header is the top section of the page, typically used for branding, navigation, and user profile information. You can bind components to the following slots in the app-header:

- brand

**Example**

```json
"app-header.brand": {
    "remote_component": "modules/common/component/header-brand-logo.js",
    "compiled_js": true
}
```

Loads the header-brand-logo component in the brand slot of the app-header from the modules/common/component folder.

- home-nav

**Example**
When no component is binded to the slot, it will be empty and not visible in the UI. The slot will only be visible when a component is binded to it.

```json
 "app-header.home-nav": ""
```

Reset the toolbar if it is already set by other pages or reports. This is useful when you want to open a page which doesn't require toolbar and the previous page had toolbar

**Example**

```json
"app-header.home-nav": {
    "remote_component": "modules/common/component/home-icon.js",
    "compiled_js": true
},
```

Loads the home-icon component in the home-nav slot of the app-header from the modules/common/component folder.

- admin-tools
  **Example**

```json
 "app-header.admin-tools": ""
```

Reset the admin-tools slot in the app-header. This is useful when you want to open a page which doesn't require admin-tools and the previous page had admin-tools.

- user-profile

**Example**

```json
"app-header.user-profile": {
    "remote_component": "modules/common/component/user-profile.js",
    "compiled_js": true
}
```

Loads the user-profile component in the user-profile slot of the app-header from the modules/common/component folder.

### app-sidebar

The app-sidebar is the left section of the page, typically used for navigation and sidebar components. You can bind components to the following slots in the app-sidebar:

- brand
- main-menu

### app-toolbar

The app-toolbar is the section below the header, typically used for page-specific controls and actions. You can bind components to the following slot in the app-toolbar:

- toolbar

### app-content

The app-content is the main content area of the page, where you can bind your application-specific components and content. You can bind components to the following slot in the app-content:

- page-body

**Example**

```json
"app-content.page-body": {
    "component": "Report",
    "source": {
        "type": "api",
        "method": "get",
        "endpoint": "modules/reports/vendor.allFiles"
    }
}
```

The above example shows how to bind a Report component to the page-body slot in the app-content section of the page. The Report component will loaded as get request to the api endpoint "modules/reports/vendor.allFiles". The report to be loaded is defined in vendor/reports/allFiles.json file.

### app-footer

The app-footer is the bottom section of the page, typically used for legal information and links. You can bind components to the following slot in the app-footer:

- legal
  **Example**

```json
"app-footer.legal": {
    "remote_component": "modules/common/component/footer.js",
    "compiled_js": true
}
```

### Full Example

When you want to bind multiple components to the same slot, you can use an object to specify the components and their configuration. Below is an example of how to bind multiple components to the app-toolbar slot:

```json
{
  "slotBindings": {
    "app-header.brand": "",
    "app-header.home-nav": {
      "remote_component": "modules/common/component/home-icon.js",
      "compiled_js": true
    },
    "app-header.user-profile": {
      "remote_component": "modules/common/component/user-profile.js",
      "compiled_js": true
    },
    "app-sidebar.brand": "",
    "app-toolbar.toolbar": {
      "component": "Toolbar",
      "content": {
        "className": "toolbar bg-white border-b border-gray-200",
        "left": [],
        "right": [
          {
            "type": "tabs",
            "className": "",
            "activeKey": "report@vendor.received",
            "items": {
              "report@vendor.received": {
                "label": "Received",
                "icon": "fa-solid fa-inbox"
              },
              "report@vendor.onholdInbox": {
                "label": "Hold",
                "icon": "fa-solid fa-pause"
              },
              "report@vendor.actedOn": {
                "label": "Acted On",
                "icon": "fa-solid fa-envelope-circle-check"
              }
            }
          }
        ]
      }
    },
    "app-sidebar.main-menu": {
      "component": "navigator",
      "params": {
        "ui_template": "list",
        "logo_url": "media/logo_white.png"
      },
      "source": {
        "type": "api",
        "method": "get",
        "endpoint": "navigator/vendor"
      }
    },
    "app-content.page-body": {
      "component": "Report",
      "source": {
        "type": "api",
        "method": "get",
        "endpoint": "modules/reports/vendor.received?recache=true&rebuild=true"
      }
    },
    "app-footer.legal": {
      "remote_component": "modules/common/component/footer.js",
      "compiled_js": true
    }
  }
}
```
