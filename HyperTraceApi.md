# .HyperTraceApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1BtracePreauthorize**](HyperTraceApi.md#v1BtracePreauthorize) | **GET** /v1/instances/{instanceId}/btrace-authorize | Pre-authorize an btrace download
[**v1ClearHyperTrace**](HyperTraceApi.md#v1ClearHyperTrace) | **DELETE** /v1/instances/{instanceId}/btrace | Clear HyperTrace logs
[**v1Kcrange**](HyperTraceApi.md#v1Kcrange) | **GET** /v1/instances/{instanceId}/btrace-kcrange | Get Kernel extension ranges
[**v1StartHyperTrace**](HyperTraceApi.md#v1StartHyperTrace) | **POST** /v1/instances/{instanceId}/btrace/enable | Start HyperTrace on an instance
[**v1StopHyperTrace**](HyperTraceApi.md#v1StopHyperTrace) | **POST** /v1/instances/{instanceId}/btrace/disable | Stop HyperTrace on an instance.


# **v1BtracePreauthorize**
> any v1BtracePreauthorize()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HyperTraceApi(configuration);

let body:.HyperTraceApiV1BtracePreauthorizeRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1BtracePreauthorize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


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
**200** | Token |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ClearHyperTrace**
> void v1ClearHyperTrace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HyperTraceApi(configuration);

let body:.HyperTraceApiV1ClearHyperTraceRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1ClearHyperTrace(body).then((data:any) => {
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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1Kcrange**
> Array<Kcrange> v1Kcrange()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HyperTraceApi(configuration);

let body:.HyperTraceApiV1KcrangeRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1Kcrange(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**Array<Kcrange>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Kcranges |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StartHyperTrace**
> void v1StartHyperTrace(btraceEnableOptions)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HyperTraceApi(configuration);

let body:.HyperTraceApiV1StartHyperTraceRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // BtraceEnableOptions | 
  btraceEnableOptions: {
    ranges: [
      [
        "string_example",
      ],
    ],
  },
};

apiInstance.v1StartHyperTrace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **btraceEnableOptions** | **BtraceEnableOptions**|  |
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StopHyperTrace**
> void v1StopHyperTrace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HyperTraceApi(configuration);

let body:.HyperTraceApiV1StopHyperTraceRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1StopHyperTrace(body).then((data:any) => {
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


