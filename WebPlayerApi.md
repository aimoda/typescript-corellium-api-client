# .WebPlayerApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebPlayerAllowedDomains**](WebPlayerApi.md#v1WebPlayerAllowedDomains) | **GET** /v1/webplayer/allowedDomains | Retrieve the list of allowed domains for all Webplayer sessions
[**v1WebPlayerCreateSession**](WebPlayerApi.md#v1WebPlayerCreateSession) | **POST** /v1/webplayer | Create a new Webplayer Session
[**v1WebPlayerDestroySession**](WebPlayerApi.md#v1WebPlayerDestroySession) | **DELETE** /v1/webplayer/{sessionId} | Tear down a Webplayer Session
[**v1WebPlayerListSessions**](WebPlayerApi.md#v1WebPlayerListSessions) | **GET** /v1/webplayer | List all Webplayer sessions
[**v1WebPlayerSessionInfo**](WebPlayerApi.md#v1WebPlayerSessionInfo) | **GET** /v1/webplayer/{sessionId} | Retrieve Webplayer Session Information


# **v1WebPlayerAllowedDomains**
> WebPlayerSession v1WebPlayerAllowedDomains()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebPlayerApi(configuration);

let body:any = {};

apiInstance.v1WebPlayerAllowedDomains(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WebPlayerSession**

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

# **v1WebPlayerCreateSession**
> WebPlayerSession v1WebPlayerCreateSession(webPlayerCreateSessionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebPlayerApi(configuration);

let body:.WebPlayerApiV1WebPlayerCreateSessionRequest = {
  // WebPlayerCreateSessionRequest | Request Data
  webPlayerCreateSessionRequest: {
    projectId: "projectId_example",
    instanceId: "instanceId_example",
    expiresIn: 3.14,
    features: {
      apps: true,
      connect: true,
      console: true,
      coretrace: true,
      deviceControl: true,
      deviceDelete: true,
      files: true,
      frida: true,
      images: true,
      messaging: true,
      netmon: true,
      network: true,
      portForwarding: true,
      powerManagement: true,
      profile: true,
      sensors: true,
      settings: true,
      snapshots: true,
      strace: true,
      system: true,
    },
    clientId: "clientId_example",
  },
};

apiInstance.v1WebPlayerCreateSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webPlayerCreateSessionRequest** | **WebPlayerCreateSessionRequest**| Request Data |


### Return type

**WebPlayerSession**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WebPlayerDestroySession**
> v1WebPlayerDestroySession()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebPlayerApi(configuration);

let body:.WebPlayerApiV1WebPlayerDestroySessionRequest = {
  // string | Webplayer Session identifier
  sessionId: "sessionId_example",
};

apiInstance.v1WebPlayerDestroySession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | [**string**] | Webplayer Session identifier | defaults to undefined


### Return type

void (empty response body)

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WebPlayerListSessions**
> Array<WebPlayerSession> v1WebPlayerListSessions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebPlayerApi(configuration);

let body:any = {};

apiInstance.v1WebPlayerListSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<WebPlayerSession>**

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

# **v1WebPlayerSessionInfo**
> WebPlayerSession v1WebPlayerSessionInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebPlayerApi(configuration);

let body:.WebPlayerApiV1WebPlayerSessionInfoRequest = {
  // string | Webplayer Session identifier
  sessionId: "sessionId_example",
};

apiInstance.v1WebPlayerSessionInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | [**string**] | Webplayer Session identifier | defaults to undefined


### Return type

**WebPlayerSession**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


