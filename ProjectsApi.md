# .ProjectsApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddProjectKey**](ProjectsApi.md#v1AddProjectKey) | **POST** /v1/projects/{projectId}/keys | Add Project Authorized Key
[**v1CreateProject**](ProjectsApi.md#v1CreateProject) | **POST** /v1/projects | Create a Project
[**v1DeleteProject**](ProjectsApi.md#v1DeleteProject) | **DELETE** /v1/projects/{projectId} | Delete a Project
[**v1GetProject**](ProjectsApi.md#v1GetProject) | **GET** /v1/projects/{projectId} | Get a Project
[**v1GetProjectInstances**](ProjectsApi.md#v1GetProjectInstances) | **GET** /v1/projects/{projectId}/instances | Get Instances in Project
[**v1GetProjectKeys**](ProjectsApi.md#v1GetProjectKeys) | **GET** /v1/projects/{projectId}/keys | Get Project Authorized Keys
[**v1GetProjectVpnConfig**](ProjectsApi.md#v1GetProjectVpnConfig) | **GET** /v1/projects/{projectId}/vpnconfig/{format} | Get Project VPN Configuration
[**v1GetProjects**](ProjectsApi.md#v1GetProjects) | **GET** /v1/projects | Get Projects
[**v1RemoveProjectKey**](ProjectsApi.md#v1RemoveProjectKey) | **DELETE** /v1/projects/{projectId}/keys/{keyId} | Delete Project Authorized Key
[**v1UpdateProject**](ProjectsApi.md#v1UpdateProject) | **PATCH** /v1/projects/{projectId} | Update a Project
[**v1UpdateProjectSettings**](ProjectsApi.md#v1UpdateProjectSettings) | **PATCH** /v1/projects/{projectId}/settings | Change Project Settings


# **v1AddProjectKey**
> ProjectKey v1AddProjectKey(projectKey)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1AddProjectKeyRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // ProjectKey | Key to add
  projectKey: {
    identifier: "identifier_example",
    kind: "ssh",
    project: "project_example",
    key: "key_example",
    fingerprint: "fingerprint_example",
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.v1AddProjectKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **ProjectKey**| Key to add |
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined


### Return type

**ProjectKey**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorized Key |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1CreateProject**
> Project v1CreateProject(project)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1CreateProjectRequest = {
  // Project | Project
  project: {
    id: "id_example",
    name: "name_example",
    settings: {
      version: 3.14,
      internetAccess: true,
      dhcp: true,
    },
    quotas: {
      cores: 3.14,
      instances: 3.14,
      ram: 3.14,
    },
    quotasUsed: {
      cores: 3.14,
      instances: 3.14,
      ram: 3.14,
      gpu: 3.14,
    },
  },
};

apiInstance.v1CreateProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Project**| Project |


### Return type

**Project**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DeleteProject**
> void v1DeleteProject()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1DeleteProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
};

apiInstance.v1DeleteProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined


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
**204** | OK |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetProject**
> Project v1GetProject()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1GetProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
};

apiInstance.v1GetProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined


### Return type

**Project**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetProjectInstances**
> Array<Instance> v1GetProjectInstances()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1GetProjectInstancesRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // string | Filter by project name (optional)
  name: "name_example",
  // Array<string> | Attributes to include in instance return (optional)
  returnAttr: [
    "returnAttr_example",
  ],
};

apiInstance.v1GetProjectInstances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **name** | [**string**] | Filter by project name | (optional) defaults to undefined
 **returnAttr** | **Array&lt;string&gt;** | Attributes to include in instance return | (optional) defaults to undefined


### Return type

**Array<Instance>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetProjectKeys**
> Array<ProjectKey> v1GetProjectKeys()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1GetProjectKeysRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
};

apiInstance.v1GetProjectKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined


### Return type

**Array<ProjectKey>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorized Keys |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetProjectVpnConfig**
> string v1GetProjectVpnConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1GetProjectVpnConfigRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // 'ovpn' | VPN Config format
  format: "ovpn",
};

apiInstance.v1GetProjectVpnConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **format** | [**&#39;ovpn&#39;**]**Array<&#39;ovpn&#39;>** | VPN Config format | defaults to undefined


### Return type

**string**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-openvpn-profile, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OpenVPN Configuration |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetProjects**
> Array<Project> v1GetProjects()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1GetProjectsRequest = {
  // string | Filter by project name (optional)
  name: "name_example",
  // boolean | Only include id of project in results (optional)
  idsOnly: true,
};

apiInstance.v1GetProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Filter by project name | (optional) defaults to undefined
 **idsOnly** | [**boolean**] | Only include id of project in results | (optional) defaults to undefined


### Return type

**Array<Project>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Projects |  -  |
**403** | Forbidden |  -  |
**404** | No Projects Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1RemoveProjectKey**
> void v1RemoveProjectKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1RemoveProjectKeyRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // string | Key ID - uuid
  keyId: "keyId_example",
};

apiInstance.v1RemoveProjectKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **keyId** | [**string**] | Key ID - uuid | defaults to undefined


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
**204** | Deleted |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UpdateProject**
> Project v1UpdateProject(project)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1UpdateProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // Project | Updated Project Settings
  project: {
    id: "id_example",
    name: "name_example",
    settings: {
      version: 3.14,
      internetAccess: true,
      dhcp: true,
    },
    quotas: {
      cores: 3.14,
      instances: 3.14,
      ram: 3.14,
    },
    quotasUsed: {
      cores: 3.14,
      instances: 3.14,
      ram: 3.14,
      gpu: 3.14,
    },
  },
};

apiInstance.v1UpdateProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Project**| Updated Project Settings |
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined


### Return type

**Project**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UpdateProjectSettings**
> void v1UpdateProjectSettings(projectSettings)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiV1UpdateProjectSettingsRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // ProjectSettings | New settings
  projectSettings: {
    version: 3.14,
    internetAccess: true,
    dhcp: true,
  },
};

apiInstance.v1UpdateProjectSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectSettings** | **ProjectSettings**| New settings |
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined


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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


