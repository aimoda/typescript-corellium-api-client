# .AgentApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AgentAppReady**](AgentApi.md#v1AgentAppReady) | **GET** /v1/instances/{instanceId}/agent/v1/app/ready | Check if App subsystem is ready
[**v1AgentDeleteFile**](AgentApi.md#v1AgentDeleteFile) | **DELETE** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Delete a File on VM
[**v1AgentGetFile**](AgentApi.md#v1AgentGetFile) | **GET** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Download a File from VM
[**v1AgentGetTempFilename**](AgentApi.md#v1AgentGetTempFilename) | **POST** /v1/instances/{instanceId}/agent/v1/file/temp | Get the path for a new temp file
[**v1AgentInstallApp**](AgentApi.md#v1AgentInstallApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/install | Install App at path
[**v1AgentInstallProfile**](AgentApi.md#v1AgentInstallProfile) | **POST** /v1/instances/{instanceId}/agent/v1/profile/install | Install a Profile to VM
[**v1AgentKillApp**](AgentApi.md#v1AgentKillApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/kill | Kill an App
[**v1AgentListAppIcons**](AgentApi.md#v1AgentListAppIcons) | **GET** /v1/instances/{instanceId}/agent/v1/app/icons | List App Icons
[**v1AgentListApps**](AgentApi.md#v1AgentListApps) | **GET** /v1/instances/{instanceId}/agent/v1/app/apps | List Apps
[**v1AgentListAppsStatus**](AgentApi.md#v1AgentListAppsStatus) | **GET** /v1/instances/{instanceId}/agent/v1/app/apps/update | List Apps Status
[**v1AgentListProfiles**](AgentApi.md#v1AgentListProfiles) | **GET** /v1/instances/{instanceId}/agent/v1/profile/profiles | List Profiles
[**v1AgentRunApp**](AgentApi.md#v1AgentRunApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/run | Run an App
[**v1AgentSetFileAttributes**](AgentApi.md#v1AgentSetFileAttributes) | **PATCH** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Change Attrs of a File on VM
[**v1AgentSystemGetAdbAuth**](AgentApi.md#v1AgentSystemGetAdbAuth) | **GET** /v1/instances/{instanceId}/agent/v1/system/adbauth | Get ADB Auth Setting (AOSP only)
[**v1AgentSystemGetNetwork**](AgentApi.md#v1AgentSystemGetNetwork) | **GET** /v1/instances/{instanceId}/agent/v1/system/network | Get IP of eth0 (AOSP only)
[**v1AgentSystemGetProp**](AgentApi.md#v1AgentSystemGetProp) | **POST** /v1/instances/{instanceId}/agent/v1/system/getprop | Get System Property (AOSP only)
[**v1AgentSystemInstallOpenGApps**](AgentApi.md#v1AgentSystemInstallOpenGApps) | **POST** /v1/instances/{instanceId}/agent/v1/system/install-opengapps | Install OpenGApps (AOSP only)
[**v1AgentSystemLock**](AgentApi.md#v1AgentSystemLock) | **POST** /v1/instances/{instanceId}/agent/v1/system/lock | Lock Device (iOS Only)
[**v1AgentSystemSetAdbAuth**](AgentApi.md#v1AgentSystemSetAdbAuth) | **PUT** /v1/instances/{instanceId}/agent/v1/system/adbauth | Set ADB Auth Setting (AOSP only)
[**v1AgentSystemShutdown**](AgentApi.md#v1AgentSystemShutdown) | **POST** /v1/instances/{instanceId}/agent/v1/system/shutdown | Instruct VM to halt
[**v1AgentSystemUnlock**](AgentApi.md#v1AgentSystemUnlock) | **POST** /v1/instances/{instanceId}/agent/v1/system/unlock | Unlock Device (iOS Only)
[**v1AgentUninstallApp**](AgentApi.md#v1AgentUninstallApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/uninstall | Uninstall an App
[**v1AgentUninstallProfile**](AgentApi.md#v1AgentUninstallProfile) | **DELETE** /v1/instances/{instanceId}/agent/v1/profile/profiles/{profileId} | Uninstall a Profile from VM
[**v1AgentUploadFile**](AgentApi.md#v1AgentUploadFile) | **PUT** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Upload a file to VM


# **v1AgentAppReady**
> AgentAppReadyResponse v1AgentAppReady()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentAppReadyRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentAppReady(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentAppReadyResponse**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | App Agent State |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentDeleteFile**
> void v1AgentDeleteFile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentDeleteFileRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | File Path on VM
  filePath: "filePath_example",
};

apiInstance.v1AgentDeleteFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **filePath** | [**string**] | File Path on VM | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentGetFile**
> HttpFile v1AgentGetFile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentGetFileRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | File Path on VM
  filePath: "filePath_example",
};

apiInstance.v1AgentGetFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **filePath** | [**string**] | File Path on VM | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File Contents |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentGetTempFilename**
> string v1AgentGetTempFilename()

Returns a temporary random filename that is guranteed to be unique on the VMs filesystem at the time of invocation of this method.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentGetTempFilenameRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentGetTempFilename(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**string**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The temp file path |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentInstallApp**
> void v1AgentInstallApp(agentInstallBody)

Installs the app located at path which must be present on the VM filesystem

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentInstallAppRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // AgentInstallBody | App parameters
  agentInstallBody: {
    path: "path_example",
  },
};

apiInstance.v1AgentInstallApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentInstallBody** | **AgentInstallBody**| App parameters |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentInstallProfile**
> void v1AgentInstallProfile(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentInstallProfileRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // HttpFile | Profile to Install
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.v1AgentInstallProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**| Profile to Install |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentKillApp**
> any v1AgentKillApp()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentKillAppRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | App Bundle ID
  bundleId: "bundleId_example",
};

apiInstance.v1AgentKillApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **bundleId** | [**string**] | App Bundle ID | defaults to undefined


### Return type

**any**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentListAppIcons**
> Array<AgentIcons> v1AgentListAppIcons()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentListAppIconsRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // Array<string> | App Bundle ID
  bundleID: [
    "bundleID_example",
  ],
};

apiInstance.v1AgentListAppIcons(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **bundleID** | **Array&lt;string&gt;** | App Bundle ID | defaults to undefined


### Return type

**Array<AgentIcons>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Installed Apps Icons |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentListApps**
> AgentAppsList v1AgentListApps()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentListAppsRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentListApps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentAppsList**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Installed Apps Info |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentListAppsStatus**
> AgentAppsList v1AgentListAppsStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentListAppsStatusRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentListAppsStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentAppsList**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Installed Apps Status Info |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentListProfiles**
> AgentProfilesReturn v1AgentListProfiles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentListProfilesRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentListProfiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentProfilesReturn**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Installed Profiles |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentRunApp**
> any v1AgentRunApp()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentRunAppRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | App Bundle ID
  bundleId: "bundleId_example",
};

apiInstance.v1AgentRunApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **bundleId** | [**string**] | App Bundle ID | defaults to undefined


### Return type

**any**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSetFileAttributes**
> void v1AgentSetFileAttributes(fileChanges)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSetFileAttributesRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | File Path on VM
  filePath: "filePath_example",
  // FileChanges | New attrs
  fileChanges: {
    path: "path_example",
    mode: 3.14,
    uid: 3.14,
    gid: 3.14,
  },
};

apiInstance.v1AgentSetFileAttributes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileChanges** | **FileChanges**| New attrs |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **filePath** | [**string**] | File Path on VM | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemGetAdbAuth**
> AgentSystemAdbAuth v1AgentSystemGetAdbAuth()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemGetAdbAuthRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentSystemGetAdbAuth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentSystemAdbAuth**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current ADB Auth setting |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemGetNetwork**
> AgentValueReturn v1AgentSystemGetNetwork()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemGetNetworkRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentSystemGetNetwork(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentValueReturn**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | IP Address of eth0 |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemGetProp**
> AgentValueReturn v1AgentSystemGetProp(agentSystemGetPropBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemGetPropRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // AgentSystemGetPropBody | Parameters
  agentSystemGetPropBody: {
    property: "property_example",
  },
};

apiInstance.v1AgentSystemGetProp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentSystemGetPropBody** | **AgentSystemGetPropBody**| Parameters |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**AgentValueReturn**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Value of requested property |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemInstallOpenGApps**
> void v1AgentSystemInstallOpenGApps(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemInstallOpenGAppsRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // any | Installation parameters
  body: {},
};

apiInstance.v1AgentSystemInstallOpenGApps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**| Installation parameters |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Accepted |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemLock**
> void v1AgentSystemLock()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemLockRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentSystemLock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Accepted |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemSetAdbAuth**
> void v1AgentSystemSetAdbAuth(agentSystemAdbAuth)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemSetAdbAuthRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // AgentSystemAdbAuth | Desired ADB Auth Setting
  agentSystemAdbAuth: {
    enabled: true,
  },
};

apiInstance.v1AgentSystemSetAdbAuth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentSystemAdbAuth** | **AgentSystemAdbAuth**| Desired ADB Auth Setting |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Accepted |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemShutdown**
> void v1AgentSystemShutdown()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemShutdownRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentSystemShutdown(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Accepted |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentSystemUnlock**
> void v1AgentSystemUnlock()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentSystemUnlockRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1AgentSystemUnlock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Accepted |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentUninstallApp**
> any v1AgentUninstallApp()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentUninstallAppRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | App Bundle ID
  bundleId: "bundleId_example",
};

apiInstance.v1AgentUninstallApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **bundleId** | [**string**] | App Bundle ID | defaults to undefined


### Return type

**any**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentUninstallProfile**
> void v1AgentUninstallProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentUninstallProfileRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | Instance ID - uuid
  profileId: "profileId_example",
};

apiInstance.v1AgentUninstallProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **profileId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AgentUploadFile**
> void v1AgentUploadFile(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiV1AgentUploadFileRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | File Path on VM to write to
  filePath: "filePath_example",
  // HttpFile | Uploaded File Contents
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.v1AgentUploadFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**| Uploaded File Contents |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **filePath** | [**string**] | File Path on VM to write to | defaults to undefined


### Return type

**void**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**400** | Agent Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


