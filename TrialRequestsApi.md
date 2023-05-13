# .TrialRequestsApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CreateSubscriberInvite**](TrialRequestsApi.md#v1CreateSubscriberInvite) | **POST** /v1/billing/invites | Create Subscriber Invite


# **v1CreateSubscriberInvite**
> SubscriberInvite v1CreateSubscriberInvite(subscriberInvite)

Create Subscriber Invite

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrialRequestsApi(configuration);

let body:.TrialRequestsApiV1CreateSubscriberInviteRequest = {
  // SubscriberInvite | Payload of Subscriber Invite
  subscriberInvite: {
    couponOptions: {
      type: "percent",
      amount: 3.14,
      used: true,
    },
    plan: {
      licenseType: "premium",
      cores: 1,
    },
    trial: {
      duration: 3.14,
    },
    name: "name_example",
    email: "email_example",
    couponCode: "couponCode_example",
    domain: "domain_example",
    aggregate: "aggregate_example",
    useBy: "useBy_example",
    active: true,
    reusable: true,
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
  },
};

apiInstance.v1CreateSubscriberInvite(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriberInvite** | **SubscriberInvite**| Payload of Subscriber Invite |


### Return type

**SubscriberInvite**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


