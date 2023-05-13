# .HypervisorHooksApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ClearHyperTraceHooks**](HypervisorHooksApi.md#v1ClearHyperTraceHooks) | **POST** /v1/instances/{instanceId}/hooks/clear | Clear Hooks on an instance
[**v1CreateHook**](HypervisorHooksApi.md#v1CreateHook) | **POST** /v1/instances/{instanceId}/hooks | Create hypervisor hook for Instance
[**v1DeleteHook**](HypervisorHooksApi.md#v1DeleteHook) | **DELETE** /v1/hooks/{hookId} | Delete an existing hypervisor hook
[**v1ExecuteHyperTraceHooks**](HypervisorHooksApi.md#v1ExecuteHyperTraceHooks) | **POST** /v1/instances/{instanceId}/hooks/execute | Execute Hooks on an instance
[**v1GetHookById**](HypervisorHooksApi.md#v1GetHookById) | **GET** /v1/hooks/{hookId} | Get hypervisor hook by id
[**v1GetHooks**](HypervisorHooksApi.md#v1GetHooks) | **GET** /v1/instances/{instanceId}/hooks | Get all hypervisor hooks for Instance
[**v1UpdateHook**](HypervisorHooksApi.md#v1UpdateHook) | **PUT** /v1/hooks/{hookId} | Update an existing hypervisor hook


# **v1ClearHyperTraceHooks**
> void v1ClearHyperTraceHooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1ClearHyperTraceHooksRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1ClearHyperTraceHooks(body).then((data:any) => {
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1CreateHook**
> Hook v1CreateHook(v1CreateHookParameters)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1CreateHookRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // V1CreateHookParameters | application/json
  v1CreateHookParameters: {
    label: "label_example",
    address: "address_example",
    patch: "patch_example",
    patchType: "csmfcc",
  },
};

apiInstance.v1CreateHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v1CreateHookParameters** | **V1CreateHookParameters**| application/json |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**Hook**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Hook |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DeleteHook**
> void v1DeleteHook()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1DeleteHookRequest = {
  // string | Hook ID
  hookId: "hookId_example",
};

apiInstance.v1DeleteHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | [**string**] | Hook ID | defaults to undefined


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
**200** | Accepted |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ExecuteHyperTraceHooks**
> void v1ExecuteHyperTraceHooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1ExecuteHyperTraceHooksRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1ExecuteHyperTraceHooks(body).then((data:any) => {
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetHookById**
> Hook v1GetHookById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1GetHookByIdRequest = {
  // string | Hook Id
  hookId: "hookId_example",
};

apiInstance.v1GetHookById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | [**string**] | Hook Id | defaults to undefined


### Return type

**Hook**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hook |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetHooks**
> Array<Hook> v1GetHooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1GetHooksRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // number | limit for pagination results, defaults to 20 (optional)
  limit: 3.14,
  // number | offset for pagination results, defaults to 0 (optional)
  offset: 3.14,
  // 'ASC' | 'DESC' | sort ASC or DESC, defaults to DESC (optional)
  sort: "ASC",
};

apiInstance.v1GetHooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **limit** | [**number**] | limit for pagination results, defaults to 20 | (optional) defaults to undefined
 **offset** | [**number**] | offset for pagination results, defaults to 0 | (optional) defaults to undefined
 **sort** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | sort ASC or DESC, defaults to DESC | (optional) defaults to undefined


### Return type

**Array<Hook>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hooks |  -  |
**304** | No changes |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UpdateHook**
> Hook v1UpdateHook(v1CreateHookParameters)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HypervisorHooksApi(configuration);

let body:.HypervisorHooksApiV1UpdateHookRequest = {
  // string | Hook ID
  hookId: "hookId_example",
  // V1CreateHookParameters | application/json
  v1CreateHookParameters: {
    label: "label_example",
    address: "address_example",
    patch: "patch_example",
    patchType: "csmfcc",
  },
};

apiInstance.v1UpdateHook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v1CreateHookParameters** | **V1CreateHookParameters**| application/json |
 **hookId** | [**string**] | Hook ID | defaults to undefined


### Return type

**Hook**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hook |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


