// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { DomainAuthProviderRequest } from '../models/DomainAuthProviderRequest';
import { DomainAuthProviderResponse } from '../models/DomainAuthProviderResponse';

/**
 * no description
 */
export class DomainAuthProviderApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new auth provider for a domain
     * @param domainId Domain ID - uuid
     * @param domainAuthProviderRequest Request Data
     */
    public async v1CreateDomainAuthProvider(domainId: string, domainAuthProviderRequest: DomainAuthProviderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1CreateDomainAuthProvider", "domainId");
        }


        // verify required parameter 'domainAuthProviderRequest' is not null or undefined
        if (domainAuthProviderRequest === null || domainAuthProviderRequest === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1CreateDomainAuthProvider", "domainAuthProviderRequest");
        }


        // Path Params
        const localVarPath = '/v1/domain/{domainId}/auth'
            .replace('{' + 'domainId' + '}', encodeURIComponent(String(domainId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(domainAuthProviderRequest, "DomainAuthProviderRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete an auth provider from a domain
     * @param domainId Domain ID - uuid
     * @param providerId Provider ID - uuid
     */
    public async v1DeleteDomainAuthProvider(domainId: string, providerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1DeleteDomainAuthProvider", "domainId");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1DeleteDomainAuthProvider", "providerId");
        }


        // Path Params
        const localVarPath = '/v1/domain/{domainId}/auth/{providerId}'
            .replace('{' + 'domainId' + '}', encodeURIComponent(String(domainId)))
            .replace('{' + 'providerId' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return all configured auth providers for a domain (including globally configured providers)
     * @param domainId Domain ID - uuid
     */
    public async v1GetDomainAuthProviders(domainId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1GetDomainAuthProviders", "domainId");
        }


        // Path Params
        const localVarPath = '/v1/domain/{domainId}/auth'
            .replace('{' + 'domainId' + '}', encodeURIComponent(String(domainId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an auth provider for a domain
     * @param domainId Domain ID - uuid
     * @param providerId Provider ID - uuid
     * @param domainAuthProviderRequest Request Data
     */
    public async v1UpdateDomainAuthProvider(domainId: string, providerId: string, domainAuthProviderRequest: DomainAuthProviderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1UpdateDomainAuthProvider", "domainId");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1UpdateDomainAuthProvider", "providerId");
        }


        // verify required parameter 'domainAuthProviderRequest' is not null or undefined
        if (domainAuthProviderRequest === null || domainAuthProviderRequest === undefined) {
            throw new RequiredError("DomainAuthProviderApi", "v1UpdateDomainAuthProvider", "domainAuthProviderRequest");
        }


        // Path Params
        const localVarPath = '/v1/domain/{domainId}/auth/{providerId}'
            .replace('{' + 'domainId' + '}', encodeURIComponent(String(domainId)))
            .replace('{' + 'providerId' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(domainAuthProviderRequest, "DomainAuthProviderRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DomainAuthProviderApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CreateDomainAuthProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CreateDomainAuthProvider(response: ResponseContext): Promise<DomainAuthProviderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainAuthProviderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainAuthProviderResponse", ""
            ) as DomainAuthProviderResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainAuthProviderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainAuthProviderResponse", ""
            ) as DomainAuthProviderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1DeleteDomainAuthProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1DeleteDomainAuthProvider(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GetDomainAuthProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GetDomainAuthProviders(response: ResponseContext): Promise<Array<DomainAuthProviderResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DomainAuthProviderResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainAuthProviderResponse>", ""
            ) as Array<DomainAuthProviderResponse>;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DomainAuthProviderResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainAuthProviderResponse>", ""
            ) as Array<DomainAuthProviderResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UpdateDomainAuthProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UpdateDomainAuthProvider(response: ResponseContext): Promise<DomainAuthProviderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainAuthProviderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainAuthProviderResponse", ""
            ) as DomainAuthProviderResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainAuthProviderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainAuthProviderResponse", ""
            ) as DomainAuthProviderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
