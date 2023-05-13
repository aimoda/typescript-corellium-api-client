# .TeamsApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddUserToTeam**](TeamsApi.md#v1AddUserToTeam) | **PUT** /v1/teams/{teamId}/users/{userId} | Add user to team
[**v1RemoveUserFromTeam**](TeamsApi.md#v1RemoveUserFromTeam) | **DELETE** /v1/teams/{teamId}/users/{userId} | Remove user from team
[**v1TeamChange**](TeamsApi.md#v1TeamChange) | **PATCH** /v1/teams/{teamId} | Update team
[**v1TeamCreate**](TeamsApi.md#v1TeamCreate) | **POST** /v1/teams | Create team
[**v1TeamDelete**](TeamsApi.md#v1TeamDelete) | **DELETE** /v1/teams/{teamId} | Delete team
[**v1Teams**](TeamsApi.md#v1Teams) | **GET** /v1/teams | Get teams


# **v1AddUserToTeam**
> void v1AddUserToTeam()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV1AddUserToTeamRequest = {
  // string | Team ID - uuid
  teamId: "teamId_example",
  // string | User ID - uuid
  userId: "userId_example",
};

apiInstance.v1AddUserToTeam(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | Team ID - uuid | defaults to undefined
 **userId** | [**string**] | User ID - uuid | defaults to undefined


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
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1RemoveUserFromTeam**
> void v1RemoveUserFromTeam()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV1RemoveUserFromTeamRequest = {
  // string | Team ID - uuid
  teamId: "teamId_example",
  // string | User ID - uuid
  userId: "userId_example",
};

apiInstance.v1RemoveUserFromTeam(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | Team ID - uuid | defaults to undefined
 **userId** | [**string**] | User ID - uuid | defaults to undefined


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
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TeamChange**
> void v1TeamChange(createTeam)

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV1TeamChangeRequest = {
  // string | Team ID - uuid
  teamId: "teamId_example",
  // CreateTeam | 
  createTeam: {
    name: "name_example",
  },
};

apiInstance.v1TeamChange(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeam** | **CreateTeam**|  |
 **teamId** | [**string**] | Team ID - uuid | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TeamCreate**
> TeamCreate v1TeamCreate(createTeam)

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV1TeamCreateRequest = {
  // CreateTeam | 
  createTeam: {
    name: "name_example",
  },
};

apiInstance.v1TeamCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeam** | **CreateTeam**|  |


### Return type

**TeamCreate**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TeamDelete**
> void v1TeamDelete()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV1TeamDeleteRequest = {
  // string | Team ID - uuid
  teamId: "teamId_example",
};

apiInstance.v1TeamDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | Team ID - uuid | defaults to undefined


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
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1Teams**
> Array<Team> v1Teams()

This endpoint is available for Enterprise accounts only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:any = {};

apiInstance.v1Teams(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Team>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Teams |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


