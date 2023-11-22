// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AgentAppReadyResponse } from '../models/AgentAppReadyResponse';
import { AgentAppsList } from '../models/AgentAppsList';
import { AgentError } from '../models/AgentError';
import { AgentIcons } from '../models/AgentIcons';
import { AgentInstallBody } from '../models/AgentInstallBody';
import { AgentProfilesReturn } from '../models/AgentProfilesReturn';
import { AgentSystemAdbAuth } from '../models/AgentSystemAdbAuth';
import { AgentSystemGetPropBody } from '../models/AgentSystemGetPropBody';
import { AgentSystemSetHostnameBody } from '../models/AgentSystemSetHostnameBody';
import { AgentValueReturn } from '../models/AgentValueReturn';
import { FileChanges } from '../models/FileChanges';

/**
 * no description
 */
export class AgentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Check if App subsystem is ready
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentAppReady(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentAppReady", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/ready'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

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
     * Delete a File on VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     */
    public async v1AgentDeleteFile(instanceId: string, filePath: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentDeleteFile", "instanceId");
        }


        // verify required parameter 'filePath' is not null or undefined
        if (filePath === null || filePath === undefined) {
            throw new RequiredError("AgentApi", "v1AgentDeleteFile", "filePath");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/file/device/{filePath}'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'filePath' + '}', encodeURIComponent(String(filePath)));

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
     * Download a File from VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     */
    public async v1AgentGetFile(instanceId: string, filePath: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentGetFile", "instanceId");
        }


        // verify required parameter 'filePath' is not null or undefined
        if (filePath === null || filePath === undefined) {
            throw new RequiredError("AgentApi", "v1AgentGetFile", "filePath");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/file/device/{filePath}'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'filePath' + '}', encodeURIComponent(String(filePath)));

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
     * Returns a temporary random filename that is guranteed to be unique on the VMs filesystem at the time of invocation of this method.
     * Get the path for a new temp file
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentGetTempFilename(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentGetTempFilename", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/file/temp'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Installs the app located at path which must be present on the VM filesystem
     * Install App at path
     * @param instanceId Instance ID - uuid
     * @param agentInstallBody App parameters
     */
    public async v1AgentInstallApp(instanceId: string, agentInstallBody: AgentInstallBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentInstallApp", "instanceId");
        }


        // verify required parameter 'agentInstallBody' is not null or undefined
        if (agentInstallBody === null || agentInstallBody === undefined) {
            throw new RequiredError("AgentApi", "v1AgentInstallApp", "agentInstallBody");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/install'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(agentInstallBody, "AgentInstallBody", ""),
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
     * Install a Profile to VM
     * @param instanceId Instance ID - uuid
     * @param body Profile to Install
     */
    public async v1AgentInstallProfile(instanceId: string, body: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentInstallProfile", "instanceId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("AgentApi", "v1AgentInstallProfile", "body");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/profile/install'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/octet-stream"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "HttpFile", ""),
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
     * Kill an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public async v1AgentKillApp(instanceId: string, bundleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentKillApp", "instanceId");
        }


        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentKillApp", "bundleId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/kill'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * List App Icons
     * @param instanceId Instance ID - uuid
     * @param bundleID App Bundle ID
     */
    public async v1AgentListAppIcons(instanceId: string, bundleID: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentListAppIcons", "instanceId");
        }


        // verify required parameter 'bundleID' is not null or undefined
        if (bundleID === null || bundleID === undefined) {
            throw new RequiredError("AgentApi", "v1AgentListAppIcons", "bundleID");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/icons'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (bundleID !== undefined) {
            requestContext.setQueryParam("bundleID", ObjectSerializer.serialize(bundleID, "Array<string>", ""));
        }


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
     * List Apps
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentListApps(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentListApps", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/apps'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

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
     * List Apps Status
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentListAppsStatus(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentListAppsStatus", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/apps/update'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

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
     * List Profiles
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentListProfiles(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentListProfiles", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/profile/profiles'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

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
     * Run an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public async v1AgentRunApp(instanceId: string, bundleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentRunApp", "instanceId");
        }


        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentRunApp", "bundleId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/run'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Change Attrs of a File on VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     * @param fileChanges New attrs
     */
    public async v1AgentSetFileAttributes(instanceId: string, filePath: string, fileChanges: FileChanges, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSetFileAttributes", "instanceId");
        }


        // verify required parameter 'filePath' is not null or undefined
        if (filePath === null || filePath === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSetFileAttributes", "filePath");
        }


        // verify required parameter 'fileChanges' is not null or undefined
        if (fileChanges === null || fileChanges === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSetFileAttributes", "fileChanges");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/file/device/{filePath}'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'filePath' + '}', encodeURIComponent(String(filePath)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(fileChanges, "FileChanges", ""),
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
     * Get ADB Auth Setting (AOSP only)
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentSystemGetAdbAuth(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemGetAdbAuth", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/adbauth'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

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
     * Get IP of eth0 (AOSP only)
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentSystemGetNetwork(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemGetNetwork", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/network'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

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
     * Get System Property (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param agentSystemGetPropBody Parameters
     */
    public async v1AgentSystemGetProp(instanceId: string, agentSystemGetPropBody: AgentSystemGetPropBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemGetProp", "instanceId");
        }


        // verify required parameter 'agentSystemGetPropBody' is not null or undefined
        if (agentSystemGetPropBody === null || agentSystemGetPropBody === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemGetProp", "agentSystemGetPropBody");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/getprop'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(agentSystemGetPropBody, "AgentSystemGetPropBody", ""),
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
     * Install OpenGApps (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param body Installation parameters
     */
    public async v1AgentSystemInstallOpenGApps(instanceId: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemInstallOpenGApps", "instanceId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemInstallOpenGApps", "body");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/install-opengapps'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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
     * Lock Device (iOS Only)
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentSystemLock(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemLock", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/lock'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Set ADB Auth Setting (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param agentSystemAdbAuth Desired ADB Auth Setting
     */
    public async v1AgentSystemSetAdbAuth(instanceId: string, agentSystemAdbAuth: AgentSystemAdbAuth, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemSetAdbAuth", "instanceId");
        }


        // verify required parameter 'agentSystemAdbAuth' is not null or undefined
        if (agentSystemAdbAuth === null || agentSystemAdbAuth === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemSetAdbAuth", "agentSystemAdbAuth");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/adbauth'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(agentSystemAdbAuth, "AgentSystemAdbAuth", ""),
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
     * Set Hostname of instance
     * @param instanceId Instance ID - uuid
     * @param agentSystemSetHostnameBody New hostname
     */
    public async v1AgentSystemSetHostname(instanceId: string, agentSystemSetHostnameBody: AgentSystemSetHostnameBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemSetHostname", "instanceId");
        }


        // verify required parameter 'agentSystemSetHostnameBody' is not null or undefined
        if (agentSystemSetHostnameBody === null || agentSystemSetHostnameBody === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemSetHostname", "agentSystemSetHostnameBody");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/setHostname'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(agentSystemSetHostnameBody, "AgentSystemSetHostnameBody", ""),
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
     * Instruct VM to halt
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentSystemShutdown(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemShutdown", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/shutdown'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Unlock Device (iOS Only)
     * @param instanceId Instance ID - uuid
     */
    public async v1AgentSystemUnlock(instanceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentSystemUnlock", "instanceId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/system/unlock'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Uninstall an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public async v1AgentUninstallApp(instanceId: string, bundleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUninstallApp", "instanceId");
        }


        // verify required parameter 'bundleId' is not null or undefined
        if (bundleId === null || bundleId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUninstallApp", "bundleId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/uninstall'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'bundleId' + '}', encodeURIComponent(String(bundleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Uninstall a Profile from VM
     * @param instanceId Instance ID - uuid
     * @param profileId Instance ID - uuid
     */
    public async v1AgentUninstallProfile(instanceId: string, profileId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUninstallProfile", "instanceId");
        }


        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUninstallProfile", "profileId");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/profile/profiles/{profileId}'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'profileId' + '}', encodeURIComponent(String(profileId)));

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
     * Upload a file to VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM to write to
     * @param body Uploaded File Contents
     */
    public async v1AgentUploadFile(instanceId: string, filePath: string, body: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'instanceId' is not null or undefined
        if (instanceId === null || instanceId === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUploadFile", "instanceId");
        }


        // verify required parameter 'filePath' is not null or undefined
        if (filePath === null || filePath === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUploadFile", "filePath");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("AgentApi", "v1AgentUploadFile", "body");
        }


        // Path Params
        const localVarPath = '/v1/instances/{instanceId}/agent/v1/file/device/{filePath}'
            .replace('{' + 'instanceId' + '}', encodeURIComponent(String(instanceId)))
            .replace('{' + 'filePath' + '}', encodeURIComponent(String(filePath)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/octet-stream"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "HttpFile", ""),
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

export class AgentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentAppReady
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentAppReady(response: ResponseContext): Promise<AgentAppReadyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentAppReadyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAppReadyResponse", ""
            ) as AgentAppReadyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentAppReadyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAppReadyResponse", ""
            ) as AgentAppReadyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentDeleteFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentDeleteFile(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentGetFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentGetFile(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", "binary"
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentGetTempFilename
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentGetTempFilename(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentInstallApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentInstallApp(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentInstallProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentInstallProfile(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentKillApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentKillApp(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
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
     * @params response Response returned by the server for a request to v1AgentListAppIcons
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentListAppIcons(response: ResponseContext): Promise<Array<AgentIcons> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AgentIcons> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AgentIcons>", ""
            ) as Array<AgentIcons>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AgentIcons> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AgentIcons>", ""
            ) as Array<AgentIcons>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentListApps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentListApps(response: ResponseContext): Promise<AgentAppsList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentAppsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAppsList", ""
            ) as AgentAppsList;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentAppsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAppsList", ""
            ) as AgentAppsList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentListAppsStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentListAppsStatus(response: ResponseContext): Promise<AgentAppsList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentAppsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAppsList", ""
            ) as AgentAppsList;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentAppsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAppsList", ""
            ) as AgentAppsList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentListProfiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentListProfiles(response: ResponseContext): Promise<AgentProfilesReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentProfilesReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentProfilesReturn", ""
            ) as AgentProfilesReturn;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentProfilesReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentProfilesReturn", ""
            ) as AgentProfilesReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentRunApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentRunApp(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
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
     * @params response Response returned by the server for a request to v1AgentSetFileAttributes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSetFileAttributes(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemGetAdbAuth
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemGetAdbAuth(response: ResponseContext): Promise<AgentSystemAdbAuth > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentSystemAdbAuth = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentSystemAdbAuth", ""
            ) as AgentSystemAdbAuth;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentSystemAdbAuth = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentSystemAdbAuth", ""
            ) as AgentSystemAdbAuth;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemGetNetwork
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemGetNetwork(response: ResponseContext): Promise<AgentValueReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentValueReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentValueReturn", ""
            ) as AgentValueReturn;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentValueReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentValueReturn", ""
            ) as AgentValueReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemGetProp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemGetProp(response: ResponseContext): Promise<AgentValueReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentValueReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentValueReturn", ""
            ) as AgentValueReturn;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentValueReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentValueReturn", ""
            ) as AgentValueReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemInstallOpenGApps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemInstallOpenGApps(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemLock
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemLock(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemSetAdbAuth
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemSetAdbAuth(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemSetHostname
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemSetHostname(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemShutdown
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemShutdown(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentSystemUnlock
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentSystemUnlock(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentUninstallApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentUninstallApp(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
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
     * @params response Response returned by the server for a request to v1AgentUninstallProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentUninstallProfile(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AgentUploadFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AgentUploadFile(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: AgentError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentError", ""
            ) as AgentError;
            throw new ApiException<AgentError>(response.httpStatusCode, "Agent Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
