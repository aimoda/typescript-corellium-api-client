# .SnapshotsApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CreateSnapshot**](SnapshotsApi.md#v1CreateSnapshot) | **POST** /v1/instances/{instanceId}/snapshots | Create Instance Snapshot
[**v1DeleteInstanceSnapshot**](SnapshotsApi.md#v1DeleteInstanceSnapshot) | **DELETE** /v1/instances/{instanceId}/snapshots/{snapshotId} | Delete a Snapshot
[**v1DeleteSnapshot**](SnapshotsApi.md#v1DeleteSnapshot) | **DELETE** /v1/snapshots/{snapshotId} | Delete a Snapshot
[**v1GetInstanceSnapshot**](SnapshotsApi.md#v1GetInstanceSnapshot) | **GET** /v1/instances/{instanceId}/snapshots/{snapshotId} | Get Instance Snapshot
[**v1GetInstanceSnapshots**](SnapshotsApi.md#v1GetInstanceSnapshots) | **GET** /v1/instances/{instanceId}/snapshots | Get Instance Snapshots
[**v1GetSnapshot**](SnapshotsApi.md#v1GetSnapshot) | **GET** /v1/snapshots/{snapshotId} | Get Snapshot
[**v1RenameInstanceSnapshot**](SnapshotsApi.md#v1RenameInstanceSnapshot) | **PATCH** /v1/instances/{instanceId}/snapshots/{snapshotId} | Rename a Snapshot
[**v1RestoreInstanceSnapshot**](SnapshotsApi.md#v1RestoreInstanceSnapshot) | **POST** /v1/instances/{instanceId}/snapshots/{snapshotId}/restore | Restore a Snapshot
[**v1SnapshotRename**](SnapshotsApi.md#v1SnapshotRename) | **PATCH** /v1/snapshots/{snapshotId} | Rename a Snapshot


# **v1CreateSnapshot**
> Snapshot v1CreateSnapshot(snapshotCreationOptions)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1CreateSnapshotRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // SnapshotCreationOptions | 
  snapshotCreationOptions: {
    name: "name_example",
  },
};

apiInstance.v1CreateSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotCreationOptions** | **SnapshotCreationOptions**|  |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**Snapshot**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DeleteInstanceSnapshot**
> void v1DeleteInstanceSnapshot()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1DeleteInstanceSnapshotRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
};

apiInstance.v1DeleteInstanceSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DeleteSnapshot**
> void v1DeleteSnapshot()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1DeleteSnapshotRequest = {
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
};

apiInstance.v1DeleteSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetInstanceSnapshot**
> Snapshot v1GetInstanceSnapshot()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1GetInstanceSnapshotRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
};

apiInstance.v1GetInstanceSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


### Return type

**Snapshot**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetInstanceSnapshots**
> Array<Snapshot> v1GetInstanceSnapshots()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1GetInstanceSnapshotsRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1GetInstanceSnapshots(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**Array<Snapshot>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetSnapshot**
> Snapshot v1GetSnapshot()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1GetSnapshotRequest = {
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
};

apiInstance.v1GetSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


### Return type

**Snapshot**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1RenameInstanceSnapshot**
> Snapshot v1RenameInstanceSnapshot(snapshotCreationOptions)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1RenameInstanceSnapshotRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
  // SnapshotCreationOptions | 
  snapshotCreationOptions: {
    name: "name_example",
  },
};

apiInstance.v1RenameInstanceSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotCreationOptions** | **SnapshotCreationOptions**|  |
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


### Return type

**Snapshot**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1RestoreInstanceSnapshot**
> void v1RestoreInstanceSnapshot()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1RestoreInstanceSnapshotRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
};

apiInstance.v1RestoreInstanceSnapshot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1SnapshotRename**
> Snapshot v1SnapshotRename(snapshotCreationOptions)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SnapshotsApi(configuration);

let body:.SnapshotsApiV1SnapshotRenameRequest = {
  // string | Snapshot ID - uuid
  snapshotId: "snapshotId_example",
  // SnapshotCreationOptions | 
  snapshotCreationOptions: {
    name: "name_example",
  },
};

apiInstance.v1SnapshotRename(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotCreationOptions** | **SnapshotCreationOptions**|  |
 **snapshotId** | [**string**] | Snapshot ID - uuid | defaults to undefined


### Return type

**Snapshot**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


