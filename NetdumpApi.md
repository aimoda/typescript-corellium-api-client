# .NetdumpApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InstancesInstanceIdNetdumpPcapGet**](NetdumpApi.md#v1InstancesInstanceIdNetdumpPcapGet) | **GET** /v1/instances/{instanceId}/netdump.pcap | Download a netdump pcap file
[**v1StartNetdump**](NetdumpApi.md#v1StartNetdump) | **POST** /v1/instances/{instanceId}/netdump/enable | Start Enhanced Network Monitor on an instance.
[**v1StopNetdump**](NetdumpApi.md#v1StopNetdump) | **POST** /v1/instances/{instanceId}/netdump/disable | Stop Enhanced Network Monitor on an instance.


# **v1InstancesInstanceIdNetdumpPcapGet**
> HttpFile v1InstancesInstanceIdNetdumpPcapGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetdumpApi(configuration);

let body:.NetdumpApiV1InstancesInstanceIdNetdumpPcapGetRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1InstancesInstanceIdNetdumpPcapGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | [**string**] | Instance ID - uuid | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tcpdump.pcap, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | pcapng file |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StartNetdump**
> void v1StartNetdump()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetdumpApi(configuration);

let body:.NetdumpApiV1StartNetdumpRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
  // NetdumpFilter |  (optional)
  netdumpFilter: {
    portRanges: [
      "portRanges_example",
    ],
    srcPorts: [
      "srcPorts_example",
    ],
    dstPorts: [
      "dstPorts_example",
    ],
    ports: [
      "ports_example",
    ],
    protocols: [
      "protocols_example",
    ],
    processes: [
      "processes_example",
    ],
  },
};

apiInstance.v1StartNetdump(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netdumpFilter** | **NetdumpFilter**|  |
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

# **v1StopNetdump**
> void v1StopNetdump()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetdumpApi(configuration);

let body:.NetdumpApiV1StopNetdumpRequest = {
  // string | Instance ID - uuid
  instanceId: "instanceId_example",
};

apiInstance.v1StopNetdump(body).then((data:any) => {
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


