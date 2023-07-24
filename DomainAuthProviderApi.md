# .DomainAuthProviderApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CreateDomainAuthProvider**](DomainAuthProviderApi.md#v1CreateDomainAuthProvider) | **POST** /v1/domain/{domainId}/auth | Create a new auth provider for a domain
[**v1DeleteDomainAuthProvider**](DomainAuthProviderApi.md#v1DeleteDomainAuthProvider) | **DELETE** /v1/domain/{domainId}/auth/{providerId} | Delete an auth provider from a domain
[**v1GetDomainAuthProviders**](DomainAuthProviderApi.md#v1GetDomainAuthProviders) | **GET** /v1/domain/{domainId}/auth | Return all configured auth providers for a domain (including globally configured providers)
[**v1UpdateDomainAuthProvider**](DomainAuthProviderApi.md#v1UpdateDomainAuthProvider) | **PUT** /v1/domain/{domainId}/auth/{providerId} | Update an auth provider for a domain


# **v1CreateDomainAuthProvider**
> DomainAuthProviderResponse v1CreateDomainAuthProvider(domainAuthProviderRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DomainAuthProviderApi(configuration);

let body:.DomainAuthProviderApiV1CreateDomainAuthProviderRequest = {
  // string | Domain ID - uuid
  domainId: "domainId_example",
  // DomainAuthProviderRequest | Request Data
  domainAuthProviderRequest: {
    providerType: "providerType_example",
    enabled: true,
    label: "label_example",
    config: {
      discoveryUrl: "discoveryUrl_example",
      clientId: "clientId_example",
      clientSecret: "clientSecret_example",
      invitedOnly: true,
    },
  },
};

apiInstance.v1CreateDomainAuthProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainAuthProviderRequest** | **DomainAuthProviderRequest**| Request Data |
 **domainId** | [**string**] | Domain ID - uuid | defaults to undefined


### Return type

**DomainAuthProviderResponse**

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

# **v1DeleteDomainAuthProvider**
> any v1DeleteDomainAuthProvider()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DomainAuthProviderApi(configuration);

let body:.DomainAuthProviderApiV1DeleteDomainAuthProviderRequest = {
  // string | Domain ID - uuid
  domainId: "domainId_example",
  // string | Provider ID - uuid
  providerId: "providerId_example",
};

apiInstance.v1DeleteDomainAuthProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] | Domain ID - uuid | defaults to undefined
 **providerId** | [**string**] | Provider ID - uuid | defaults to undefined


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
**200** | OK |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetDomainAuthProviders**
> Array<DomainAuthProviderResponse> v1GetDomainAuthProviders()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DomainAuthProviderApi(configuration);

let body:.DomainAuthProviderApiV1GetDomainAuthProvidersRequest = {
  // string | Domain ID - uuid
  domainId: "domainId_example",
};

apiInstance.v1GetDomainAuthProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] | Domain ID - uuid | defaults to undefined


### Return type

**Array<DomainAuthProviderResponse>**

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

# **v1UpdateDomainAuthProvider**
> DomainAuthProviderResponse v1UpdateDomainAuthProvider(domainAuthProviderRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DomainAuthProviderApi(configuration);

let body:.DomainAuthProviderApiV1UpdateDomainAuthProviderRequest = {
  // string | Domain ID - uuid
  domainId: "domainId_example",
  // string | Provider ID - uuid
  providerId: "providerId_example",
  // DomainAuthProviderRequest | Request Data
  domainAuthProviderRequest: {
    providerType: "providerType_example",
    enabled: true,
    label: "label_example",
    config: {
      discoveryUrl: "discoveryUrl_example",
      clientId: "clientId_example",
      clientSecret: "clientSecret_example",
      invitedOnly: true,
    },
  },
};

apiInstance.v1UpdateDomainAuthProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainAuthProviderRequest** | **DomainAuthProviderRequest**| Request Data |
 **domainId** | [**string**] | Domain ID - uuid | defaults to undefined
 **providerId** | [**string**] | Provider ID - uuid | defaults to undefined


### Return type

**DomainAuthProviderResponse**

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


