---
id: helper-functions
title: Helper Functions
---

# Helper Functions

## Below is the list of commonly used helper functions in Logiks modules:

### GEOFENCES

```
GEOFENCES.function(guid, geolocation, groupid='general', fenceType = "polygon", limit = 10, max_distance = 1, geoTable = "lgks_geofences");//max_distance = km
GEOFENCES.listGeofences(guid, geolocation, groupid='general', limit = 10, geoTable = "lgks_geofences");
```

### FILE OPEN URL

```
const fileOpenUrl = await FILES.publishFile(
    "guid",
    fileidFromUploadAPI,
    expiresOn,
    ctx,
);
```

### Send Mail

```
MESSAGING.sendMessage(
    "email",
    {
        sendTo: "sendTo@gmail.com",
        data: {
            "user_name": "userName",
            "company_name": "Smart Info logiks",
            "attachment": attachment

        },
        cc: "projects@smartinfologiks.com",
        topic: "quality_observation"

    },
    ctx
);
```

### Show Log

```
writeLog("To show console log");
```

### registerPolicies

```
RBAC.registerPolicies(appid, guid, policyObj, ctx)

{
                site: appid,
                category: "Imported",
                policystr: policyStr.toLowerCase(),
                module: policyArr[0],
                activity: policyArr[1],
                action: policyArr[2],
                remarks: policyRemarks,
                allowed_roles: policyObj[policyStr] || "",
                role_type: "auto",
                rolehash: await ENCRYPTER.generateHash(${ctx.meta.appInfo.appid}${ctx.meta.user.guid}${policyStr}),
            }
Example for policyObj:

{"security.permission_manager.create": true, "security.permission_manager.access": false}
```

### For Stored Log Activities in custom page

```
 ctx.emit("logs.activity", {
    "subject": `record_created`,
    "category": `record_created_${sqlTable}`,
    "ref_id": insertId,
    "ref_src": decodeURIComponent(dbOpsID),
    "userid": ctx.meta.user.userId,
    "guid": ctx.meta.user.guid,
    "appid": ctx.meta.appInfo.appid,
    "post_data": dataFields
});
```

### For Stored Error Log

```
ctx.emit("logs.error", {
    "error_key": "",
    "entity_type": "",
    "error_code": "",
    "error_message": "",
    "stack_trace": "",
    "request_id": "",
    "severity": "",
    "userid": ctx.meta.user.userId,
    "guid": ctx.meta.user.guid,
    "appid": ctx.meta.appInfo.appid
});
```
