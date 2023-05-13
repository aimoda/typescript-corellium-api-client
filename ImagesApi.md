# .ImagesApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CreateImage**](ImagesApi.md#v1CreateImage) | **POST** /v1/images | Create a new Image
[**v1DeleteImage**](ImagesApi.md#v1DeleteImage) | **DELETE** /v2/images/{imageId} | Delete Image
[**v1GetImage**](ImagesApi.md#v1GetImage) | **GET** /v1/images/{imageId} | Get Image Metadata
[**v1GetImages**](ImagesApi.md#v1GetImages) | **GET** /v1/images | Get all Images Metadata
[**v1UploadImageData**](ImagesApi.md#v1UploadImageData) | **POST** /v1/images/{imageId} | Upload Image Data


# **v1CreateImage**
> Image v1CreateImage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiV1CreateImageRequest = {
  // string | Image type
  type: "type_example",
  // string | How the file is stored
  encoding: "plain",
  // boolean | set to false if the uploaded file is not encapsulated inside an outer zipfile (optional)
  encapsulated: true,
  // string | Image name (optional)
  name: "name_example",
  // string | Project ID (optional)
  project: "project_example",
  // string | Instance ID (optional)
  instance: "instance_example",
  // HttpFile | Optionally the actual file (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.v1CreateImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] | Image type | defaults to undefined
 **encoding** | [**string**]**Array<&#39;plain&#39;>** | How the file is stored | defaults to undefined
 **encapsulated** | [**boolean**] | set to false if the uploaded file is not encapsulated inside an outer zipfile | (optional) defaults to undefined
 **name** | [**string**] | Image name | (optional) defaults to undefined
 **project** | [**string**] | Project ID | (optional) defaults to undefined
 **instance** | [**string**] | Instance ID | (optional) defaults to undefined
 **file** | [**HttpFile**] | Optionally the actual file | (optional) defaults to undefined


### Return type

**Image**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**404** | application/json |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DeleteImage**
> void v1DeleteImage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiV1DeleteImageRequest = {
  // string | Image ID - uuid
  imageId: "imageId_example",
};

apiInstance.v1DeleteImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | [**string**] | Image ID - uuid | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetImage**
> Image v1GetImage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiV1GetImageRequest = {
  // string | Image ID - uuid
  imageId: "imageId_example",
};

apiInstance.v1GetImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | [**string**] | Image ID - uuid | defaults to undefined


### Return type

**Image**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**404** | application/json |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1GetImages**
> Array<Image> v1GetImages()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiV1GetImagesRequest = {
  // string | Optionally filter by project - uuid (optional)
  project: "project_example",
};

apiInstance.v1GetImages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | Optionally filter by project - uuid | (optional) defaults to undefined


### Return type

**Array<Image>**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UploadImageData**
> Image v1UploadImageData(body)

If the active project has enough remaining quota, updates an Image with the contents of the request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiV1UploadImageDataRequest = {
  // string | Image ID - uuid
  imageId: "imageId_example",
  // string | Uploaded Image
  body: "body_example",
};

apiInstance.v1UploadImageData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| Uploaded Image |
 **imageId** | [**string**] | Image ID - uuid | defaults to undefined


### Return type

**Image**

### Authorization

[BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: binary
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | application/json |  -  |
**404** | application/json |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


