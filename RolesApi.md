# .RolesApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddTeamRoleToProject**](RolesApi.md#v1AddTeamRoleToProject) | **PUT** /v1/roles/projects/{projectId}/teams/{teamId}/roles/{roleId} | Add team role to project
[**v1AddUserRoleToProject**](RolesApi.md#v1AddUserRoleToProject) | **PUT** /v1/roles/projects/{projectId}/users/{userId}/roles/{roleId} | Add user role to project
[**v1RemoveTeamRoleFromProject**](RolesApi.md#v1RemoveTeamRoleFromProject) | **DELETE** /v1/roles/projects/{projectId}/teams/{teamId}/roles/{roleId} | Remove team role from project
[**v1RemoveUserRoleFromProject**](RolesApi.md#v1RemoveUserRoleFromProject) | **DELETE** /v1/roles/projects/{projectId}/users/{userId}/roles/{roleId} | Remove user role from project
[**v1Roles**](RolesApi.md#v1Roles) | **GET** /v1/roles | Get all roles


# **v1AddTeamRoleToProject**
> void v1AddTeamRoleToProject()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RolesApi(configuration);

let body:.RolesApiV1AddTeamRoleToProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // string | Team ID - uuid
  teamId: "teamId_example",
  // string | Role ID - uuid
  roleId: "roleId_example",
};

apiInstance.v1AddTeamRoleToProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **teamId** | [**string**] | Team ID - uuid | defaults to undefined
 **roleId** | [**string**] | Role ID - uuid | defaults to undefined


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
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AddUserRoleToProject**
> void v1AddUserRoleToProject()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RolesApi(configuration);

let body:.RolesApiV1AddUserRoleToProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // string | User ID - uuid
  userId: "userId_example",
  // string | Role ID - uuid
  roleId: "roleId_example",
};

apiInstance.v1AddUserRoleToProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **userId** | [**string**] | User ID - uuid | defaults to undefined
 **roleId** | [**string**] | Role ID - uuid | defaults to undefined


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
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1RemoveTeamRoleFromProject**
> void v1RemoveTeamRoleFromProject()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RolesApi(configuration);

let body:.RolesApiV1RemoveTeamRoleFromProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // string | Team ID - uuid
  teamId: "teamId_example",
  // string | Role ID - uuid
  roleId: "roleId_example",
};

apiInstance.v1RemoveTeamRoleFromProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **teamId** | [**string**] | Team ID - uuid | defaults to undefined
 **roleId** | [**string**] | Role ID - uuid | defaults to undefined


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
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1RemoveUserRoleFromProject**
> void v1RemoveUserRoleFromProject()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RolesApi(configuration);

let body:.RolesApiV1RemoveUserRoleFromProjectRequest = {
  // string | Project ID - uuid
  projectId: "projectId_example",
  // string | User ID - uuid
  userId: "userId_example",
  // string | Role ID - uuid
  roleId: "roleId_example",
};

apiInstance.v1RemoveUserRoleFromProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID - uuid | defaults to undefined
 **userId** | [**string**] | User ID - uuid | defaults to undefined
 **roleId** | [**string**] | Role ID - uuid | defaults to undefined


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
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1Roles**
> Array<Role> v1Roles()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RolesApi(configuration);

let body:any = {};

apiInstance.v1Roles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Role>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


