import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Address } from '../models/Address';
import { AgentApp } from '../models/AgentApp';
import { AgentAppReadyResponse } from '../models/AgentAppReadyResponse';
import { AgentAppStatus } from '../models/AgentAppStatus';
import { AgentAppsList } from '../models/AgentAppsList';
import { AgentAppsStatusList } from '../models/AgentAppsStatusList';
import { AgentError } from '../models/AgentError';
import { AgentIcons } from '../models/AgentIcons';
import { AgentInstallBody } from '../models/AgentInstallBody';
import { AgentProfilesReturn } from '../models/AgentProfilesReturn';
import { AgentSystemAdbAuth } from '../models/AgentSystemAdbAuth';
import { AgentSystemGetPropBody } from '../models/AgentSystemGetPropBody';
import { AgentSystemSetHostnameBody } from '../models/AgentSystemSetHostnameBody';
import { AgentValueReturn } from '../models/AgentValueReturn';
import { AgreedAck } from '../models/AgreedAck';
import { ApiConflictError } from '../models/ApiConflictError';
import { ApiError } from '../models/ApiError';
import { ApiInternalConsistencyError } from '../models/ApiInternalConsistencyError';
import { ApiNotFoundError } from '../models/ApiNotFoundError';
import { ApiToken } from '../models/ApiToken';
import { AuthProvider } from '../models/AuthProvider';
import { Bit } from '../models/Bit';
import { BtraceEnableOptions } from '../models/BtraceEnableOptions';
import { Button } from '../models/Button';
import { ConfigResponse } from '../models/ConfigResponse';
import { ConfigResponseMaintenance } from '../models/ConfigResponseMaintenance';
import { CouponOptions } from '../models/CouponOptions';
import { CreateTeam } from '../models/CreateTeam';
import { CreatedBy } from '../models/CreatedBy';
import { Credentials } from '../models/Credentials';
import { DomainAuthProviderRequest } from '../models/DomainAuthProviderRequest';
import { DomainAuthProviderResponse } from '../models/DomainAuthProviderResponse';
import { DomainOptions } from '../models/DomainOptions';
import { Extension } from '../models/Extension';
import { Features } from '../models/Features';
import { FileChanges } from '../models/FileChanges';
import { Firmware } from '../models/Firmware';
import { GpioStateDefinition } from '../models/GpioStateDefinition';
import { GpiosState } from '../models/GpiosState';
import { GrantTrialRequestResponse } from '../models/GrantTrialRequestResponse';
import { Hook } from '../models/Hook';
import { Image } from '../models/Image';
import { Instance } from '../models/Instance';
import { InstanceAgentState } from '../models/InstanceAgentState';
import { InstanceBootOptions } from '../models/InstanceBootOptions';
import { InstanceBootOptionsAdditionalTag } from '../models/InstanceBootOptionsAdditionalTag';
import { InstanceConsoleEndpoint } from '../models/InstanceConsoleEndpoint';
import { InstanceCreateOptions } from '../models/InstanceCreateOptions';
import { InstanceInput } from '../models/InstanceInput';
import { InstanceNetdumpState } from '../models/InstanceNetdumpState';
import { InstanceNetmonState } from '../models/InstanceNetmonState';
import { InstanceReturn } from '../models/InstanceReturn';
import { InstanceServices } from '../models/InstanceServices';
import { InstanceStartOptions } from '../models/InstanceStartOptions';
import { InstanceState } from '../models/InstanceState';
import { InstanceStopOptions } from '../models/InstanceStopOptions';
import { InstanceUpgradeBody } from '../models/InstanceUpgradeBody';
import { Invitation } from '../models/Invitation';
import { InviteRevokeParams } from '../models/InviteRevokeParams';
import { InviteRevokeParamsIds } from '../models/InviteRevokeParamsIds';
import { Kcrange } from '../models/Kcrange';
import { KernelTask } from '../models/KernelTask';
import { KernelThread } from '../models/KernelThread';
import { Logging } from '../models/Logging';
import { Maintenance } from '../models/Maintenance';
import { MediaPlayBody } from '../models/MediaPlayBody';
import { Model } from '../models/Model';
import { ModelSoftware } from '../models/ModelSoftware';
import { NetdumpFilter } from '../models/NetdumpFilter';
import { OpenIDConfig } from '../models/OpenIDConfig';
import { PasswordChangeBody } from '../models/PasswordChangeBody';
import { PasswordResetBody } from '../models/PasswordResetBody';
import { PatchInstanceOptions } from '../models/PatchInstanceOptions';
import { PeripheralsData } from '../models/PeripheralsData';
import { Plan } from '../models/Plan';
import { Project } from '../models/Project';
import { ProjectKey } from '../models/ProjectKey';
import { ProjectQuota } from '../models/ProjectQuota';
import { ProjectSettings } from '../models/ProjectSettings';
import { ProjectUsage } from '../models/ProjectUsage';
import { ProxyConfig } from '../models/ProxyConfig';
import { RateInfo } from '../models/RateInfo';
import { ResetLinkBody } from '../models/ResetLinkBody';
import { Role } from '../models/Role';
import { RotateBody } from '../models/RotateBody';
import { Snapshot } from '../models/Snapshot';
import { SnapshotCreationOptions } from '../models/SnapshotCreationOptions';
import { SnapshotStatus } from '../models/SnapshotStatus';
import { SubscriberInvite } from '../models/SubscriberInvite';
import { Team } from '../models/Team';
import { TeamCreate } from '../models/TeamCreate';
import { TextInput } from '../models/TextInput';
import { Token } from '../models/Token';
import { TouchCurveInput } from '../models/TouchCurveInput';
import { TouchInput } from '../models/TouchInput';
import { Trial } from '../models/Trial';
import { TrialExtension } from '../models/TrialExtension';
import { TrialRequestMetadata } from '../models/TrialRequestMetadata';
import { TrialRequestOptions } from '../models/TrialRequestOptions';
import { UpdateExtension } from '../models/UpdateExtension';
import { User } from '../models/User';
import { UserError } from '../models/UserError';
import { V1CreateHookParameters } from '../models/V1CreateHookParameters';
import { V1LoadExtensionParameters } from '../models/V1LoadExtensionParameters';
import { V1SetStateBody } from '../models/V1SetStateBody';
import { ValidationError } from '../models/ValidationError';
import { VolumeOptions } from '../models/VolumeOptions';
import { VpnDefinition } from '../models/VpnDefinition';
import { WebPlayerCreateSessionRequest } from '../models/WebPlayerCreateSessionRequest';
import { WebPlayerSession } from '../models/WebPlayerSession';

import { ObservableAgentApi } from "./ObservableAPI";
import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";

export interface AgentApiV1AgentAppReadyRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentAppReady
     */
    instanceId: string
}

export interface AgentApiV1AgentDeleteFileRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentDeleteFile
     */
    instanceId: string
    /**
     * File Path on VM
     * @type string
     * @memberof AgentApiv1AgentDeleteFile
     */
    filePath: string
}

export interface AgentApiV1AgentGetFileRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentGetFile
     */
    instanceId: string
    /**
     * File Path on VM
     * @type string
     * @memberof AgentApiv1AgentGetFile
     */
    filePath: string
}

export interface AgentApiV1AgentGetTempFilenameRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentGetTempFilename
     */
    instanceId: string
}

export interface AgentApiV1AgentInstallAppRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentInstallApp
     */
    instanceId: string
    /**
     * App parameters
     * @type AgentInstallBody
     * @memberof AgentApiv1AgentInstallApp
     */
    agentInstallBody: AgentInstallBody
}

export interface AgentApiV1AgentInstallProfileRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentInstallProfile
     */
    instanceId: string
    /**
     * Profile to Install
     * @type HttpFile
     * @memberof AgentApiv1AgentInstallProfile
     */
    body: HttpFile
}

export interface AgentApiV1AgentKillAppRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentKillApp
     */
    instanceId: string
    /**
     * App Bundle ID
     * @type string
     * @memberof AgentApiv1AgentKillApp
     */
    bundleId: string
}

export interface AgentApiV1AgentListAppIconsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentListAppIcons
     */
    instanceId: string
    /**
     * App Bundle ID
     * @type Array&lt;string&gt;
     * @memberof AgentApiv1AgentListAppIcons
     */
    bundleID: Array<string>
}

export interface AgentApiV1AgentListAppsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentListApps
     */
    instanceId: string
}

export interface AgentApiV1AgentListAppsStatusRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentListAppsStatus
     */
    instanceId: string
}

export interface AgentApiV1AgentListProfilesRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentListProfiles
     */
    instanceId: string
}

export interface AgentApiV1AgentRunAppRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentRunApp
     */
    instanceId: string
    /**
     * App Bundle ID
     * @type string
     * @memberof AgentApiv1AgentRunApp
     */
    bundleId: string
}

export interface AgentApiV1AgentSetFileAttributesRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSetFileAttributes
     */
    instanceId: string
    /**
     * File Path on VM
     * @type string
     * @memberof AgentApiv1AgentSetFileAttributes
     */
    filePath: string
    /**
     * New attrs
     * @type FileChanges
     * @memberof AgentApiv1AgentSetFileAttributes
     */
    fileChanges: FileChanges
}

export interface AgentApiV1AgentSystemGetAdbAuthRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemGetAdbAuth
     */
    instanceId: string
}

export interface AgentApiV1AgentSystemGetNetworkRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemGetNetwork
     */
    instanceId: string
}

export interface AgentApiV1AgentSystemGetPropRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemGetProp
     */
    instanceId: string
    /**
     * Parameters
     * @type AgentSystemGetPropBody
     * @memberof AgentApiv1AgentSystemGetProp
     */
    agentSystemGetPropBody: AgentSystemGetPropBody
}

export interface AgentApiV1AgentSystemInstallOpenGAppsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemInstallOpenGApps
     */
    instanceId: string
    /**
     * Installation parameters
     * @type any
     * @memberof AgentApiv1AgentSystemInstallOpenGApps
     */
    body: any
}

export interface AgentApiV1AgentSystemLockRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemLock
     */
    instanceId: string
}

export interface AgentApiV1AgentSystemSetAdbAuthRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemSetAdbAuth
     */
    instanceId: string
    /**
     * Desired ADB Auth Setting
     * @type AgentSystemAdbAuth
     * @memberof AgentApiv1AgentSystemSetAdbAuth
     */
    agentSystemAdbAuth: AgentSystemAdbAuth
}

export interface AgentApiV1AgentSystemSetHostnameRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemSetHostname
     */
    instanceId: string
    /**
     * New hostname
     * @type AgentSystemSetHostnameBody
     * @memberof AgentApiv1AgentSystemSetHostname
     */
    agentSystemSetHostnameBody: AgentSystemSetHostnameBody
}

export interface AgentApiV1AgentSystemShutdownRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemShutdown
     */
    instanceId: string
}

export interface AgentApiV1AgentSystemUnlockRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentSystemUnlock
     */
    instanceId: string
}

export interface AgentApiV1AgentUninstallAppRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentUninstallApp
     */
    instanceId: string
    /**
     * App Bundle ID
     * @type string
     * @memberof AgentApiv1AgentUninstallApp
     */
    bundleId: string
}

export interface AgentApiV1AgentUninstallProfileRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentUninstallProfile
     */
    instanceId: string
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentUninstallProfile
     */
    profileId: string
}

export interface AgentApiV1AgentUploadFileRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof AgentApiv1AgentUploadFile
     */
    instanceId: string
    /**
     * File Path on VM to write to
     * @type string
     * @memberof AgentApiv1AgentUploadFile
     */
    filePath: string
    /**
     * Uploaded File Contents
     * @type HttpFile
     * @memberof AgentApiv1AgentUploadFile
     */
    body: HttpFile
}

export class ObjectAgentApi {
    private api: ObservableAgentApi

    public constructor(configuration: Configuration, requestFactory?: AgentApiRequestFactory, responseProcessor?: AgentApiResponseProcessor) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if App subsystem is ready
     * @param param the request object
     */
    public v1AgentAppReady(param: AgentApiV1AgentAppReadyRequest, options?: Configuration): Promise<AgentAppReadyResponse> {
        return this.api.v1AgentAppReady(param.instanceId,  options).toPromise();
    }

    /**
     * Delete a File on VM
     * @param param the request object
     */
    public v1AgentDeleteFile(param: AgentApiV1AgentDeleteFileRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentDeleteFile(param.instanceId, param.filePath,  options).toPromise();
    }

    /**
     * Download a File from VM
     * @param param the request object
     */
    public v1AgentGetFile(param: AgentApiV1AgentGetFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.v1AgentGetFile(param.instanceId, param.filePath,  options).toPromise();
    }

    /**
     * Returns a temporary random filename that is guranteed to be unique on the VMs filesystem at the time of invocation of this method.
     * Get the path for a new temp file
     * @param param the request object
     */
    public v1AgentGetTempFilename(param: AgentApiV1AgentGetTempFilenameRequest, options?: Configuration): Promise<string> {
        return this.api.v1AgentGetTempFilename(param.instanceId,  options).toPromise();
    }

    /**
     * Installs the app located at path which must be present on the VM filesystem
     * Install App at path
     * @param param the request object
     */
    public v1AgentInstallApp(param: AgentApiV1AgentInstallAppRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentInstallApp(param.instanceId, param.agentInstallBody,  options).toPromise();
    }

    /**
     * Install a Profile to VM
     * @param param the request object
     */
    public v1AgentInstallProfile(param: AgentApiV1AgentInstallProfileRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentInstallProfile(param.instanceId, param.body,  options).toPromise();
    }

    /**
     * Kill an App
     * @param param the request object
     */
    public v1AgentKillApp(param: AgentApiV1AgentKillAppRequest, options?: Configuration): Promise<any> {
        return this.api.v1AgentKillApp(param.instanceId, param.bundleId,  options).toPromise();
    }

    /**
     * List App Icons
     * @param param the request object
     */
    public v1AgentListAppIcons(param: AgentApiV1AgentListAppIconsRequest, options?: Configuration): Promise<Array<AgentIcons>> {
        return this.api.v1AgentListAppIcons(param.instanceId, param.bundleID,  options).toPromise();
    }

    /**
     * List Apps
     * @param param the request object
     */
    public v1AgentListApps(param: AgentApiV1AgentListAppsRequest, options?: Configuration): Promise<AgentAppsList> {
        return this.api.v1AgentListApps(param.instanceId,  options).toPromise();
    }

    /**
     * List Apps Status
     * @param param the request object
     */
    public v1AgentListAppsStatus(param: AgentApiV1AgentListAppsStatusRequest, options?: Configuration): Promise<AgentAppsList> {
        return this.api.v1AgentListAppsStatus(param.instanceId,  options).toPromise();
    }

    /**
     * List Profiles
     * @param param the request object
     */
    public v1AgentListProfiles(param: AgentApiV1AgentListProfilesRequest, options?: Configuration): Promise<AgentProfilesReturn> {
        return this.api.v1AgentListProfiles(param.instanceId,  options).toPromise();
    }

    /**
     * Run an App
     * @param param the request object
     */
    public v1AgentRunApp(param: AgentApiV1AgentRunAppRequest, options?: Configuration): Promise<any> {
        return this.api.v1AgentRunApp(param.instanceId, param.bundleId,  options).toPromise();
    }

    /**
     * Change Attrs of a File on VM
     * @param param the request object
     */
    public v1AgentSetFileAttributes(param: AgentApiV1AgentSetFileAttributesRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSetFileAttributes(param.instanceId, param.filePath, param.fileChanges,  options).toPromise();
    }

    /**
     * Get ADB Auth Setting (AOSP only)
     * @param param the request object
     */
    public v1AgentSystemGetAdbAuth(param: AgentApiV1AgentSystemGetAdbAuthRequest, options?: Configuration): Promise<AgentSystemAdbAuth> {
        return this.api.v1AgentSystemGetAdbAuth(param.instanceId,  options).toPromise();
    }

    /**
     * Get IP of eth0 (AOSP only)
     * @param param the request object
     */
    public v1AgentSystemGetNetwork(param: AgentApiV1AgentSystemGetNetworkRequest, options?: Configuration): Promise<AgentValueReturn> {
        return this.api.v1AgentSystemGetNetwork(param.instanceId,  options).toPromise();
    }

    /**
     * Get System Property (AOSP only)
     * @param param the request object
     */
    public v1AgentSystemGetProp(param: AgentApiV1AgentSystemGetPropRequest, options?: Configuration): Promise<AgentValueReturn> {
        return this.api.v1AgentSystemGetProp(param.instanceId, param.agentSystemGetPropBody,  options).toPromise();
    }

    /**
     * Install OpenGApps (AOSP only)
     * @param param the request object
     */
    public v1AgentSystemInstallOpenGApps(param: AgentApiV1AgentSystemInstallOpenGAppsRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSystemInstallOpenGApps(param.instanceId, param.body,  options).toPromise();
    }

    /**
     * Lock Device (iOS Only)
     * @param param the request object
     */
    public v1AgentSystemLock(param: AgentApiV1AgentSystemLockRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSystemLock(param.instanceId,  options).toPromise();
    }

    /**
     * Set ADB Auth Setting (AOSP only)
     * @param param the request object
     */
    public v1AgentSystemSetAdbAuth(param: AgentApiV1AgentSystemSetAdbAuthRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSystemSetAdbAuth(param.instanceId, param.agentSystemAdbAuth,  options).toPromise();
    }

    /**
     * Set Hostname of instance
     * @param param the request object
     */
    public v1AgentSystemSetHostname(param: AgentApiV1AgentSystemSetHostnameRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSystemSetHostname(param.instanceId, param.agentSystemSetHostnameBody,  options).toPromise();
    }

    /**
     * Instruct VM to halt
     * @param param the request object
     */
    public v1AgentSystemShutdown(param: AgentApiV1AgentSystemShutdownRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSystemShutdown(param.instanceId,  options).toPromise();
    }

    /**
     * Unlock Device (iOS Only)
     * @param param the request object
     */
    public v1AgentSystemUnlock(param: AgentApiV1AgentSystemUnlockRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentSystemUnlock(param.instanceId,  options).toPromise();
    }

    /**
     * Uninstall an App
     * @param param the request object
     */
    public v1AgentUninstallApp(param: AgentApiV1AgentUninstallAppRequest, options?: Configuration): Promise<any> {
        return this.api.v1AgentUninstallApp(param.instanceId, param.bundleId,  options).toPromise();
    }

    /**
     * Uninstall a Profile from VM
     * @param param the request object
     */
    public v1AgentUninstallProfile(param: AgentApiV1AgentUninstallProfileRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentUninstallProfile(param.instanceId, param.profileId,  options).toPromise();
    }

    /**
     * Upload a file to VM
     * @param param the request object
     */
    public v1AgentUploadFile(param: AgentApiV1AgentUploadFileRequest, options?: Configuration): Promise<void> {
        return this.api.v1AgentUploadFile(param.instanceId, param.filePath, param.body,  options).toPromise();
    }

}

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiV1AuthLoginRequest {
    /**
     * Authorization data ( Credentials|ApiToken )
     * @type any
     * @memberof AuthenticationApiv1AuthLogin
     */
    body: any
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Log In
     * @param param the request object
     */
    public v1AuthLogin(param: AuthenticationApiV1AuthLoginRequest, options?: Configuration): Promise<Token> {
        return this.api.v1AuthLogin(param.body,  options).toPromise();
    }

}

import { ObservableConfigApi } from "./ObservableAPI";
import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";

export interface ConfigApiV1GetConfigRequest {
}

export class ObjectConfigApi {
    private api: ObservableConfigApi

    public constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all configs
     * @param param the request object
     */
    public v1GetConfig(param: ConfigApiV1GetConfigRequest = {}, options?: Configuration): Promise<ConfigResponse> {
        return this.api.v1GetConfig( options).toPromise();
    }

}

import { ObservableCoreTraceApi } from "./ObservableAPI";
import { CoreTraceApiRequestFactory, CoreTraceApiResponseProcessor} from "../apis/CoreTraceApi";

export interface CoreTraceApiV1ClearCoreTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof CoreTraceApiv1ClearCoreTrace
     */
    instanceId: string
}

export interface CoreTraceApiV1ListThreadsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof CoreTraceApiv1ListThreads
     */
    instanceId: string
}

export interface CoreTraceApiV1StartCoreTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof CoreTraceApiv1StartCoreTrace
     */
    instanceId: string
}

export interface CoreTraceApiV1StopCoreTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof CoreTraceApiv1StopCoreTrace
     */
    instanceId: string
}

export class ObjectCoreTraceApi {
    private api: ObservableCoreTraceApi

    public constructor(configuration: Configuration, requestFactory?: CoreTraceApiRequestFactory, responseProcessor?: CoreTraceApiResponseProcessor) {
        this.api = new ObservableCoreTraceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clear CoreTrace logs
     * @param param the request object
     */
    public v1ClearCoreTrace(param: CoreTraceApiV1ClearCoreTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearCoreTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Get Running Threads (CoreTrace)
     * @param param the request object
     */
    public v1ListThreads(param: CoreTraceApiV1ListThreadsRequest, options?: Configuration): Promise<Array<KernelTask>> {
        return this.api.v1ListThreads(param.instanceId,  options).toPromise();
    }

    /**
     * Start CoreTrace on an instance
     * @param param the request object
     */
    public v1StartCoreTrace(param: CoreTraceApiV1StartCoreTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartCoreTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Stop CoreTrace on an instance.
     * @param param the request object
     */
    public v1StopCoreTrace(param: CoreTraceApiV1StopCoreTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopCoreTrace(param.instanceId,  options).toPromise();
    }

}

import { ObservableDomainAuthProviderApi } from "./ObservableAPI";
import { DomainAuthProviderApiRequestFactory, DomainAuthProviderApiResponseProcessor} from "../apis/DomainAuthProviderApi";

export interface DomainAuthProviderApiV1CreateDomainAuthProviderRequest {
    /**
     * Domain ID - uuid
     * @type string
     * @memberof DomainAuthProviderApiv1CreateDomainAuthProvider
     */
    domainId: string
    /**
     * Request Data
     * @type DomainAuthProviderRequest
     * @memberof DomainAuthProviderApiv1CreateDomainAuthProvider
     */
    domainAuthProviderRequest: DomainAuthProviderRequest
}

export interface DomainAuthProviderApiV1DeleteDomainAuthProviderRequest {
    /**
     * Domain ID - uuid
     * @type string
     * @memberof DomainAuthProviderApiv1DeleteDomainAuthProvider
     */
    domainId: string
    /**
     * Provider ID - uuid
     * @type string
     * @memberof DomainAuthProviderApiv1DeleteDomainAuthProvider
     */
    providerId: string
}

export interface DomainAuthProviderApiV1GetDomainAuthProvidersRequest {
    /**
     * Domain ID - uuid
     * @type string
     * @memberof DomainAuthProviderApiv1GetDomainAuthProviders
     */
    domainId: string
}

export interface DomainAuthProviderApiV1UpdateDomainAuthProviderRequest {
    /**
     * Domain ID - uuid
     * @type string
     * @memberof DomainAuthProviderApiv1UpdateDomainAuthProvider
     */
    domainId: string
    /**
     * Provider ID - uuid
     * @type string
     * @memberof DomainAuthProviderApiv1UpdateDomainAuthProvider
     */
    providerId: string
    /**
     * Request Data
     * @type DomainAuthProviderRequest
     * @memberof DomainAuthProviderApiv1UpdateDomainAuthProvider
     */
    domainAuthProviderRequest: DomainAuthProviderRequest
}

export class ObjectDomainAuthProviderApi {
    private api: ObservableDomainAuthProviderApi

    public constructor(configuration: Configuration, requestFactory?: DomainAuthProviderApiRequestFactory, responseProcessor?: DomainAuthProviderApiResponseProcessor) {
        this.api = new ObservableDomainAuthProviderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new auth provider for a domain
     * @param param the request object
     */
    public v1CreateDomainAuthProvider(param: DomainAuthProviderApiV1CreateDomainAuthProviderRequest, options?: Configuration): Promise<DomainAuthProviderResponse> {
        return this.api.v1CreateDomainAuthProvider(param.domainId, param.domainAuthProviderRequest,  options).toPromise();
    }

    /**
     * Delete an auth provider from a domain
     * @param param the request object
     */
    public v1DeleteDomainAuthProvider(param: DomainAuthProviderApiV1DeleteDomainAuthProviderRequest, options?: Configuration): Promise<any> {
        return this.api.v1DeleteDomainAuthProvider(param.domainId, param.providerId,  options).toPromise();
    }

    /**
     * Return all configured auth providers for a domain (including globally configured providers)
     * @param param the request object
     */
    public v1GetDomainAuthProviders(param: DomainAuthProviderApiV1GetDomainAuthProvidersRequest, options?: Configuration): Promise<Array<DomainAuthProviderResponse>> {
        return this.api.v1GetDomainAuthProviders(param.domainId,  options).toPromise();
    }

    /**
     * Update an auth provider for a domain
     * @param param the request object
     */
    public v1UpdateDomainAuthProvider(param: DomainAuthProviderApiV1UpdateDomainAuthProviderRequest, options?: Configuration): Promise<DomainAuthProviderResponse> {
        return this.api.v1UpdateDomainAuthProvider(param.domainId, param.providerId, param.domainAuthProviderRequest,  options).toPromise();
    }

}

import { ObservableHyperTraceApi } from "./ObservableAPI";
import { HyperTraceApiRequestFactory, HyperTraceApiResponseProcessor} from "../apis/HyperTraceApi";

export interface HyperTraceApiV1BtracePreauthorizeRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HyperTraceApiv1BtracePreauthorize
     */
    instanceId: string
}

export interface HyperTraceApiV1ClearHyperTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HyperTraceApiv1ClearHyperTrace
     */
    instanceId: string
}

export interface HyperTraceApiV1KcrangeRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HyperTraceApiv1Kcrange
     */
    instanceId: string
}

export interface HyperTraceApiV1StartHyperTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HyperTraceApiv1StartHyperTrace
     */
    instanceId: string
    /**
     * 
     * @type BtraceEnableOptions
     * @memberof HyperTraceApiv1StartHyperTrace
     */
    btraceEnableOptions: BtraceEnableOptions
}

export interface HyperTraceApiV1StopHyperTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HyperTraceApiv1StopHyperTrace
     */
    instanceId: string
}

export class ObjectHyperTraceApi {
    private api: ObservableHyperTraceApi

    public constructor(configuration: Configuration, requestFactory?: HyperTraceApiRequestFactory, responseProcessor?: HyperTraceApiResponseProcessor) {
        this.api = new ObservableHyperTraceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pre-authorize an btrace download
     * @param param the request object
     */
    public v1BtracePreauthorize(param: HyperTraceApiV1BtracePreauthorizeRequest, options?: Configuration): Promise<any> {
        return this.api.v1BtracePreauthorize(param.instanceId,  options).toPromise();
    }

    /**
     * Clear HyperTrace logs
     * @param param the request object
     */
    public v1ClearHyperTrace(param: HyperTraceApiV1ClearHyperTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearHyperTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Get Kernel extension ranges
     * @param param the request object
     */
    public v1Kcrange(param: HyperTraceApiV1KcrangeRequest, options?: Configuration): Promise<Array<Kcrange>> {
        return this.api.v1Kcrange(param.instanceId,  options).toPromise();
    }

    /**
     * Start HyperTrace on an instance
     * @param param the request object
     */
    public v1StartHyperTrace(param: HyperTraceApiV1StartHyperTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartHyperTrace(param.instanceId, param.btraceEnableOptions,  options).toPromise();
    }

    /**
     * Stop HyperTrace on an instance.
     * @param param the request object
     */
    public v1StopHyperTrace(param: HyperTraceApiV1StopHyperTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopHyperTrace(param.instanceId,  options).toPromise();
    }

}

import { ObservableHypervisorHooksApi } from "./ObservableAPI";
import { HypervisorHooksApiRequestFactory, HypervisorHooksApiResponseProcessor} from "../apis/HypervisorHooksApi";

export interface HypervisorHooksApiV1ClearHyperTraceHooksRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HypervisorHooksApiv1ClearHyperTraceHooks
     */
    instanceId: string
}

export interface HypervisorHooksApiV1CreateHookRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HypervisorHooksApiv1CreateHook
     */
    instanceId: string
    /**
     * application/json
     * @type V1CreateHookParameters
     * @memberof HypervisorHooksApiv1CreateHook
     */
    v1CreateHookParameters: V1CreateHookParameters
}

export interface HypervisorHooksApiV1DeleteHookRequest {
    /**
     * Hook ID
     * @type string
     * @memberof HypervisorHooksApiv1DeleteHook
     */
    hookId: string
}

export interface HypervisorHooksApiV1ExecuteHyperTraceHooksRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HypervisorHooksApiv1ExecuteHyperTraceHooks
     */
    instanceId: string
}

export interface HypervisorHooksApiV1GetHookByIdRequest {
    /**
     * Hook Id
     * @type string
     * @memberof HypervisorHooksApiv1GetHookById
     */
    hookId: string
}

export interface HypervisorHooksApiV1GetHooksRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof HypervisorHooksApiv1GetHooks
     */
    instanceId: string
    /**
     * limit for pagination results, defaults to 20
     * @type number
     * @memberof HypervisorHooksApiv1GetHooks
     */
    limit?: number
    /**
     * offset for pagination results, defaults to 0
     * @type number
     * @memberof HypervisorHooksApiv1GetHooks
     */
    offset?: number
    /**
     * sort ASC or DESC, defaults to DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof HypervisorHooksApiv1GetHooks
     */
    sort?: 'ASC' | 'DESC'
}

export interface HypervisorHooksApiV1UpdateHookRequest {
    /**
     * Hook ID
     * @type string
     * @memberof HypervisorHooksApiv1UpdateHook
     */
    hookId: string
    /**
     * application/json
     * @type V1CreateHookParameters
     * @memberof HypervisorHooksApiv1UpdateHook
     */
    v1CreateHookParameters: V1CreateHookParameters
}

export class ObjectHypervisorHooksApi {
    private api: ObservableHypervisorHooksApi

    public constructor(configuration: Configuration, requestFactory?: HypervisorHooksApiRequestFactory, responseProcessor?: HypervisorHooksApiResponseProcessor) {
        this.api = new ObservableHypervisorHooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clear Hooks on an instance
     * @param param the request object
     */
    public v1ClearHyperTraceHooks(param: HypervisorHooksApiV1ClearHyperTraceHooksRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearHyperTraceHooks(param.instanceId,  options).toPromise();
    }

    /**
     * Create hypervisor hook for Instance
     * @param param the request object
     */
    public v1CreateHook(param: HypervisorHooksApiV1CreateHookRequest, options?: Configuration): Promise<Hook> {
        return this.api.v1CreateHook(param.instanceId, param.v1CreateHookParameters,  options).toPromise();
    }

    /**
     * Delete an existing hypervisor hook
     * @param param the request object
     */
    public v1DeleteHook(param: HypervisorHooksApiV1DeleteHookRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteHook(param.hookId,  options).toPromise();
    }

    /**
     * Execute Hooks on an instance
     * @param param the request object
     */
    public v1ExecuteHyperTraceHooks(param: HypervisorHooksApiV1ExecuteHyperTraceHooksRequest, options?: Configuration): Promise<void> {
        return this.api.v1ExecuteHyperTraceHooks(param.instanceId,  options).toPromise();
    }

    /**
     * Get hypervisor hook by id
     * @param param the request object
     */
    public v1GetHookById(param: HypervisorHooksApiV1GetHookByIdRequest, options?: Configuration): Promise<Hook> {
        return this.api.v1GetHookById(param.hookId,  options).toPromise();
    }

    /**
     * Get all hypervisor hooks for Instance
     * @param param the request object
     */
    public v1GetHooks(param: HypervisorHooksApiV1GetHooksRequest, options?: Configuration): Promise<Array<Hook>> {
        return this.api.v1GetHooks(param.instanceId, param.limit, param.offset, param.sort,  options).toPromise();
    }

    /**
     * Update an existing hypervisor hook
     * @param param the request object
     */
    public v1UpdateHook(param: HypervisorHooksApiV1UpdateHookRequest, options?: Configuration): Promise<Hook> {
        return this.api.v1UpdateHook(param.hookId, param.v1CreateHookParameters,  options).toPromise();
    }

}

import { ObservableImagesApi } from "./ObservableAPI";
import { ImagesApiRequestFactory, ImagesApiResponseProcessor} from "../apis/ImagesApi";

export interface ImagesApiV1CreateImageRequest {
    /**
     * Image type
     * @type string
     * @memberof ImagesApiv1CreateImage
     */
    type: string
    /**
     * How the file is stored
     * @type string
     * @memberof ImagesApiv1CreateImage
     */
    encoding: string
    /**
     * set to false if the uploaded file is not encapsulated inside an outer zipfile
     * @type boolean
     * @memberof ImagesApiv1CreateImage
     */
    encapsulated?: boolean
    /**
     * Image name
     * @type string
     * @memberof ImagesApiv1CreateImage
     */
    name?: string
    /**
     * Project ID
     * @type string
     * @memberof ImagesApiv1CreateImage
     */
    project?: string
    /**
     * Instance ID
     * @type string
     * @memberof ImagesApiv1CreateImage
     */
    instance?: string
    /**
     * Optionally the actual file
     * @type HttpFile
     * @memberof ImagesApiv1CreateImage
     */
    file?: HttpFile
}

export interface ImagesApiV1DeleteImageRequest {
    /**
     * Image ID - uuid
     * @type string
     * @memberof ImagesApiv1DeleteImage
     */
    imageId: string
}

export interface ImagesApiV1GetImageRequest {
    /**
     * Image ID - uuid
     * @type string
     * @memberof ImagesApiv1GetImage
     */
    imageId: string
}

export interface ImagesApiV1GetImagesRequest {
    /**
     * Optionally filter by project - uuid
     * @type string
     * @memberof ImagesApiv1GetImages
     */
    project?: string
}

export interface ImagesApiV1UploadImageDataRequest {
    /**
     * Image ID - uuid
     * @type string
     * @memberof ImagesApiv1UploadImageData
     */
    imageId: string
    /**
     * Uploaded Image
     * @type string
     * @memberof ImagesApiv1UploadImageData
     */
    body: string
}

export class ObjectImagesApi {
    private api: ObservableImagesApi

    public constructor(configuration: Configuration, requestFactory?: ImagesApiRequestFactory, responseProcessor?: ImagesApiResponseProcessor) {
        this.api = new ObservableImagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Image
     * @param param the request object
     */
    public v1CreateImage(param: ImagesApiV1CreateImageRequest, options?: Configuration): Promise<Image> {
        return this.api.v1CreateImage(param.type, param.encoding, param.encapsulated, param.name, param.project, param.instance, param.file,  options).toPromise();
    }

    /**
     * Delete Image
     * @param param the request object
     */
    public v1DeleteImage(param: ImagesApiV1DeleteImageRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteImage(param.imageId,  options).toPromise();
    }

    /**
     * Get Image Metadata
     * @param param the request object
     */
    public v1GetImage(param: ImagesApiV1GetImageRequest, options?: Configuration): Promise<Image> {
        return this.api.v1GetImage(param.imageId,  options).toPromise();
    }

    /**
     * Get all Images Metadata
     * @param param the request object
     */
    public v1GetImages(param: ImagesApiV1GetImagesRequest = {}, options?: Configuration): Promise<Array<Image>> {
        return this.api.v1GetImages(param.project,  options).toPromise();
    }

    /**
     * If the active project has enough remaining quota, updates an Image with the contents of the request body.
     * Upload Image Data
     * @param param the request object
     */
    public v1UploadImageData(param: ImagesApiV1UploadImageDataRequest, options?: Configuration): Promise<Image> {
        return this.api.v1UploadImageData(param.imageId, param.body,  options).toPromise();
    }

}

import { ObservableInstancesApi } from "./ObservableAPI";
import { InstancesApiRequestFactory, InstancesApiResponseProcessor} from "../apis/InstancesApi";

export interface InstancesApiV1BtracePreauthorizeRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1BtracePreauthorize
     */
    instanceId: string
}

export interface InstancesApiV1ClearCoreTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1ClearCoreTrace
     */
    instanceId: string
}

export interface InstancesApiV1ClearHyperTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1ClearHyperTrace
     */
    instanceId: string
}

export interface InstancesApiV1ClearHyperTraceHooksRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1ClearHyperTraceHooks
     */
    instanceId: string
}

export interface InstancesApiV1ClearInstancePanicsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1ClearInstancePanics
     */
    instanceId: string
}

export interface InstancesApiV1CreateInstanceRequest {
    /**
     * The vm definition to create
     * @type InstanceCreateOptions
     * @memberof InstancesApiv1CreateInstance
     */
    instanceCreateOptions: InstanceCreateOptions
}

export interface InstancesApiV1CreateSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1CreateSnapshot
     */
    instanceId: string
    /**
     * 
     * @type SnapshotCreationOptions
     * @memberof InstancesApiv1CreateSnapshot
     */
    snapshotCreationOptions: SnapshotCreationOptions
}

export interface InstancesApiV1DeleteInstanceRequest {
    /**
     * Instance ID
     * @type string
     * @memberof InstancesApiv1DeleteInstance
     */
    instanceId: string
}

export interface InstancesApiV1DeleteInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1DeleteInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof InstancesApiv1DeleteInstanceSnapshot
     */
    snapshotId: string
}

export interface InstancesApiV1DisableExposePortRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1DisableExposePort
     */
    instanceId: string
}

export interface InstancesApiV1EnableExposePortRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1EnableExposePort
     */
    instanceId: string
}

export interface InstancesApiV1ExecuteHyperTraceHooksRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1ExecuteHyperTraceHooks
     */
    instanceId: string
}

export interface InstancesApiV1GetInstanceRequest {
    /**
     * Instance ID
     * @type string
     * @memberof InstancesApiv1GetInstance
     */
    instanceId: string
    /**
     * Attributes to include in instance return
     * @type Array&lt;string&gt;
     * @memberof InstancesApiv1GetInstance
     */
    returnAttr?: Array<string>
}

export interface InstancesApiV1GetInstanceConsoleRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceConsole
     */
    instanceId: string
}

export interface InstancesApiV1GetInstanceConsoleLogRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceConsoleLog
     */
    instanceId: string
}

export interface InstancesApiV1GetInstanceGpiosRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceGpios
     */
    instanceId: string
}

export interface InstancesApiV1GetInstancePanicsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstancePanics
     */
    instanceId: string
}

export interface InstancesApiV1GetInstancePeripheralsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstancePeripherals
     */
    instanceId: string
}

export interface InstancesApiV1GetInstanceRateRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceRate
     */
    instanceId: string
}

export interface InstancesApiV1GetInstanceScreenshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceScreenshot
     */
    instanceId: string
    /**
     * New peripherals state
     * @type &#39;png&#39; | &#39;jpeg&#39;
     * @memberof InstancesApiv1GetInstanceScreenshot
     */
    format: 'png' | 'jpeg'
    /**
     * Screenshot scale 1:N
     * @type number
     * @memberof InstancesApiv1GetInstanceScreenshot
     */
    scale?: number
}

export interface InstancesApiV1GetInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceSnapshot
     */
    snapshotId: string
}

export interface InstancesApiV1GetInstanceSnapshotsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1GetInstanceSnapshots
     */
    instanceId: string
}

export interface InstancesApiV1GetInstancesRequest {
    /**
     * Optionally filter by instance name
     * @type string
     * @memberof InstancesApiv1GetInstances
     */
    name?: string
    /**
     * Attributes to include in instance return
     * @type Array&lt;string&gt;
     * @memberof InstancesApiv1GetInstances
     */
    returnAttr?: Array<string>
}

export interface InstancesApiV1InstancesInstanceIdMessagePostRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1InstancesInstanceIdMessagePost
     */
    instanceId: string
}

export interface InstancesApiV1InstancesInstanceIdNetdumpPcapGetRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1InstancesInstanceIdNetdumpPcapGet
     */
    instanceId: string
}

export interface InstancesApiV1InstancesInstanceIdNetworkMonitorPcapGetRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1InstancesInstanceIdNetworkMonitorPcapGet
     */
    instanceId: string
}

export interface InstancesApiV1KcrangeRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1Kcrange
     */
    instanceId: string
}

export interface InstancesApiV1ListThreadsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1ListThreads
     */
    instanceId: string
}

export interface InstancesApiV1MediaPlayRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1MediaPlay
     */
    instanceId: string
    /**
     * Request Body
     * @type MediaPlayBody
     * @memberof InstancesApiv1MediaPlay
     */
    mediaPlayBody: MediaPlayBody
}

export interface InstancesApiV1MediaStopRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1MediaStop
     */
    instanceId: string
}

export interface InstancesApiV1PatchInstanceRequest {
    /**
     * Instance ID
     * @type string
     * @memberof InstancesApiv1PatchInstance
     */
    instanceId: string
    /**
     * 
     * @type PatchInstanceOptions
     * @memberof InstancesApiv1PatchInstance
     */
    patchInstanceOptions: PatchInstanceOptions
}

export interface InstancesApiV1PauseInstanceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1PauseInstance
     */
    instanceId: string
}

export interface InstancesApiV1PostInstanceInputRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1PostInstanceInput
     */
    instanceId: string
    /**
     * The input to send to the VM
     * @type Array&lt;InstanceInput&gt;
     * @memberof InstancesApiv1PostInstanceInput
     */
    instanceInput: Array<InstanceInput>
}

export interface InstancesApiV1RebootInstanceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1RebootInstance
     */
    instanceId: string
}

export interface InstancesApiV1RenameInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1RenameInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof InstancesApiv1RenameInstanceSnapshot
     */
    snapshotId: string
    /**
     * 
     * @type SnapshotCreationOptions
     * @memberof InstancesApiv1RenameInstanceSnapshot
     */
    snapshotCreationOptions: SnapshotCreationOptions
}

export interface InstancesApiV1RestoreBackupRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1RestoreBackup
     */
    instanceId: string
    /**
     * Restore backup data
     * @type any
     * @memberof InstancesApiv1RestoreBackup
     */
    body?: any
}

export interface InstancesApiV1RestoreInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1RestoreInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof InstancesApiv1RestoreInstanceSnapshot
     */
    snapshotId: string
}

export interface InstancesApiV1RotateInstanceRequest {
    /**
     * 
     * @type string
     * @memberof InstancesApiv1RotateInstance
     */
    instanceId: string
    /**
     * 
     * @type RotateBody
     * @memberof InstancesApiv1RotateInstance
     */
    rotateBody: RotateBody
}

export interface InstancesApiV1SetInstanceGpiosRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1SetInstanceGpios
     */
    instanceId: string
    /**
     * New GPIO state
     * @type GpiosState
     * @memberof InstancesApiv1SetInstanceGpios
     */
    gpiosState: GpiosState
}

export interface InstancesApiV1SetInstancePeripheralsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1SetInstancePeripherals
     */
    instanceId: string
    /**
     * New peripherals state
     * @type PeripheralsData
     * @memberof InstancesApiv1SetInstancePeripherals
     */
    peripheralsData: PeripheralsData
}

export interface InstancesApiV1SetInstanceStateRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1SetInstanceState
     */
    instanceId: string
    /**
     * Desired State
     * @type V1SetStateBody
     * @memberof InstancesApiv1SetInstanceState
     */
    v1SetStateBody: V1SetStateBody
}

export interface InstancesApiV1StartCoreTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StartCoreTrace
     */
    instanceId: string
}

export interface InstancesApiV1StartHyperTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StartHyperTrace
     */
    instanceId: string
    /**
     * 
     * @type BtraceEnableOptions
     * @memberof InstancesApiv1StartHyperTrace
     */
    btraceEnableOptions: BtraceEnableOptions
}

export interface InstancesApiV1StartInstanceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StartInstance
     */
    instanceId: string
    /**
     * Start options
     * @type InstanceStartOptions
     * @memberof InstancesApiv1StartInstance
     */
    instanceStartOptions?: InstanceStartOptions
}

export interface InstancesApiV1StartNetdumpRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StartNetdump
     */
    instanceId: string
    /**
     * 
     * @type NetdumpFilter
     * @memberof InstancesApiv1StartNetdump
     */
    netdumpFilter?: NetdumpFilter
}

export interface InstancesApiV1StartNetworkMonitorRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StartNetworkMonitor
     */
    instanceId: string
}

export interface InstancesApiV1StopCoreTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StopCoreTrace
     */
    instanceId: string
}

export interface InstancesApiV1StopHyperTraceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StopHyperTrace
     */
    instanceId: string
}

export interface InstancesApiV1StopInstanceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StopInstance
     */
    instanceId: string
    /**
     * Stop options
     * @type InstanceStopOptions
     * @memberof InstancesApiv1StopInstance
     */
    instanceStopOptions?: InstanceStopOptions
}

export interface InstancesApiV1StopNetdumpRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StopNetdump
     */
    instanceId: string
}

export interface InstancesApiV1StopNetworkMonitorRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1StopNetworkMonitor
     */
    instanceId: string
}

export interface InstancesApiV1UnpauseInstanceRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv1UnpauseInstance
     */
    instanceId: string
}

export interface InstancesApiV1UpgradeInstanceRequest {
    /**
     * 
     * @type string
     * @memberof InstancesApiv1UpgradeInstance
     */
    instanceId: string
    /**
     * 
     * @type InstanceUpgradeBody
     * @memberof InstancesApiv1UpgradeInstance
     */
    instanceUpgradeBody: InstanceUpgradeBody
}

export interface InstancesApiV2GetInstanceQuickConnectCommandRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv2GetInstanceQuickConnectCommand
     */
    instanceId: string
}

export interface InstancesApiV2GetInstanceStateRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof InstancesApiv2GetInstanceState
     */
    instanceId: string
    /**
     * The attributes to return.
     * @type Array&lt;string&gt;
     * @memberof InstancesApiv2GetInstanceState
     */
    returnAttr?: Array<string>
}

export class ObjectInstancesApi {
    private api: ObservableInstancesApi

    public constructor(configuration: Configuration, requestFactory?: InstancesApiRequestFactory, responseProcessor?: InstancesApiResponseProcessor) {
        this.api = new ObservableInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pre-authorize an btrace download
     * @param param the request object
     */
    public v1BtracePreauthorize(param: InstancesApiV1BtracePreauthorizeRequest, options?: Configuration): Promise<any> {
        return this.api.v1BtracePreauthorize(param.instanceId,  options).toPromise();
    }

    /**
     * Clear CoreTrace logs
     * @param param the request object
     */
    public v1ClearCoreTrace(param: InstancesApiV1ClearCoreTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearCoreTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Clear HyperTrace logs
     * @param param the request object
     */
    public v1ClearHyperTrace(param: InstancesApiV1ClearHyperTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearHyperTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Clear Hooks on an instance
     * @param param the request object
     */
    public v1ClearHyperTraceHooks(param: InstancesApiV1ClearHyperTraceHooksRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearHyperTraceHooks(param.instanceId,  options).toPromise();
    }

    /**
     * Clear Panics
     * @param param the request object
     */
    public v1ClearInstancePanics(param: InstancesApiV1ClearInstancePanicsRequest, options?: Configuration): Promise<void> {
        return this.api.v1ClearInstancePanics(param.instanceId,  options).toPromise();
    }

    /**
     * Create Instance
     * @param param the request object
     */
    public v1CreateInstance(param: InstancesApiV1CreateInstanceRequest, options?: Configuration): Promise<InstanceReturn> {
        return this.api.v1CreateInstance(param.instanceCreateOptions,  options).toPromise();
    }

    /**
     * Create Instance Snapshot
     * @param param the request object
     */
    public v1CreateSnapshot(param: InstancesApiV1CreateSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1CreateSnapshot(param.instanceId, param.snapshotCreationOptions,  options).toPromise();
    }

    /**
     * Remove Instance
     * @param param the request object
     */
    public v1DeleteInstance(param: InstancesApiV1DeleteInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteInstance(param.instanceId,  options).toPromise();
    }

    /**
     * Delete a Snapshot
     * @param param the request object
     */
    public v1DeleteInstanceSnapshot(param: InstancesApiV1DeleteInstanceSnapshotRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteInstanceSnapshot(param.instanceId, param.snapshotId,  options).toPromise();
    }

    /**
     * Disable an exposed port on an instance for device access.
     * @param param the request object
     */
    public v1DisableExposePort(param: InstancesApiV1DisableExposePortRequest, options?: Configuration): Promise<void> {
        return this.api.v1DisableExposePort(param.instanceId,  options).toPromise();
    }

    /**
     * Enable an exposed port on an instance for device access.
     * @param param the request object
     */
    public v1EnableExposePort(param: InstancesApiV1EnableExposePortRequest, options?: Configuration): Promise<void> {
        return this.api.v1EnableExposePort(param.instanceId,  options).toPromise();
    }

    /**
     * Execute Hooks on an instance
     * @param param the request object
     */
    public v1ExecuteHyperTraceHooks(param: InstancesApiV1ExecuteHyperTraceHooksRequest, options?: Configuration): Promise<void> {
        return this.api.v1ExecuteHyperTraceHooks(param.instanceId,  options).toPromise();
    }

    /**
     * Get Instance
     * @param param the request object
     */
    public v1GetInstance(param: InstancesApiV1GetInstanceRequest, options?: Configuration): Promise<Instance> {
        return this.api.v1GetInstance(param.instanceId, param.returnAttr,  options).toPromise();
    }

    /**
     * Get console websocket URL
     * @param param the request object
     */
    public v1GetInstanceConsole(param: InstancesApiV1GetInstanceConsoleRequest, options?: Configuration): Promise<InstanceConsoleEndpoint> {
        return this.api.v1GetInstanceConsole(param.instanceId,  options).toPromise();
    }

    /**
     * Get Console Log
     * @param param the request object
     */
    public v1GetInstanceConsoleLog(param: InstancesApiV1GetInstanceConsoleLogRequest, options?: Configuration): Promise<string> {
        return this.api.v1GetInstanceConsoleLog(param.instanceId,  options).toPromise();
    }

    /**
     * Get Instance GPIOs
     * @param param the request object
     */
    public v1GetInstanceGpios(param: InstancesApiV1GetInstanceGpiosRequest, options?: Configuration): Promise<GpiosState> {
        return this.api.v1GetInstanceGpios(param.instanceId,  options).toPromise();
    }

    /**
     * Get Panics
     * @param param the request object
     */
    public v1GetInstancePanics(param: InstancesApiV1GetInstancePanicsRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.v1GetInstancePanics(param.instanceId,  options).toPromise();
    }

    /**
     * Get Instance Peripherals
     * @param param the request object
     */
    public v1GetInstancePeripherals(param: InstancesApiV1GetInstancePeripheralsRequest, options?: Configuration): Promise<PeripheralsData> {
        return this.api.v1GetInstancePeripherals(param.instanceId,  options).toPromise();
    }

    /**
     * Returns the cost, in microcents, for the instance in the on and off state. Instances are charged $0.25 / day for storage (off) and $0.25 per core per hour (on).
     * Get rate information
     * @param param the request object
     */
    public v1GetInstanceRate(param: InstancesApiV1GetInstanceRateRequest, options?: Configuration): Promise<RateInfo> {
        return this.api.v1GetInstanceRate(param.instanceId,  options).toPromise();
    }

    /**
     * Get Instance Screenshot
     * @param param the request object
     */
    public v1GetInstanceScreenshot(param: InstancesApiV1GetInstanceScreenshotRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.v1GetInstanceScreenshot(param.instanceId, param.format, param.scale,  options).toPromise();
    }

    /**
     * Get Instance Snapshot
     * @param param the request object
     */
    public v1GetInstanceSnapshot(param: InstancesApiV1GetInstanceSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1GetInstanceSnapshot(param.instanceId, param.snapshotId,  options).toPromise();
    }

    /**
     * Get Instance Snapshots
     * @param param the request object
     */
    public v1GetInstanceSnapshots(param: InstancesApiV1GetInstanceSnapshotsRequest, options?: Configuration): Promise<Array<Snapshot>> {
        return this.api.v1GetInstanceSnapshots(param.instanceId,  options).toPromise();
    }

    /**
     * Get Instances
     * @param param the request object
     */
    public v1GetInstances(param: InstancesApiV1GetInstancesRequest = {}, options?: Configuration): Promise<Array<Instance>> {
        return this.api.v1GetInstances(param.name, param.returnAttr,  options).toPromise();
    }

    /**
     * Receive a message on an iOS vm
     * @param param the request object
     */
    public v1InstancesInstanceIdMessagePost(param: InstancesApiV1InstancesInstanceIdMessagePostRequest, options?: Configuration): Promise<void> {
        return this.api.v1InstancesInstanceIdMessagePost(param.instanceId,  options).toPromise();
    }

    /**
     * Download a netdump pcap file
     * @param param the request object
     */
    public v1InstancesInstanceIdNetdumpPcapGet(param: InstancesApiV1InstancesInstanceIdNetdumpPcapGetRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.v1InstancesInstanceIdNetdumpPcapGet(param.instanceId,  options).toPromise();
    }

    /**
     * Download a Network Monitor pcap file
     * @param param the request object
     */
    public v1InstancesInstanceIdNetworkMonitorPcapGet(param: InstancesApiV1InstancesInstanceIdNetworkMonitorPcapGetRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.v1InstancesInstanceIdNetworkMonitorPcapGet(param.instanceId,  options).toPromise();
    }

    /**
     * Get Kernel extension ranges
     * @param param the request object
     */
    public v1Kcrange(param: InstancesApiV1KcrangeRequest, options?: Configuration): Promise<Array<Kcrange>> {
        return this.api.v1Kcrange(param.instanceId,  options).toPromise();
    }

    /**
     * Get Running Threads (CoreTrace)
     * @param param the request object
     */
    public v1ListThreads(param: InstancesApiV1ListThreadsRequest, options?: Configuration): Promise<Array<KernelTask>> {
        return this.api.v1ListThreads(param.instanceId,  options).toPromise();
    }

    /**
     * Start playing media
     * @param param the request object
     */
    public v1MediaPlay(param: InstancesApiV1MediaPlayRequest, options?: Configuration): Promise<void> {
        return this.api.v1MediaPlay(param.instanceId, param.mediaPlayBody,  options).toPromise();
    }

    /**
     * Stop playing media
     * @param param the request object
     */
    public v1MediaStop(param: InstancesApiV1MediaStopRequest, options?: Configuration): Promise<void> {
        return this.api.v1MediaStop(param.instanceId,  options).toPromise();
    }

    /**
     * Update Instance
     * @param param the request object
     */
    public v1PatchInstance(param: InstancesApiV1PatchInstanceRequest, options?: Configuration): Promise<Instance> {
        return this.api.v1PatchInstance(param.instanceId, param.patchInstanceOptions,  options).toPromise();
    }

    /**
     * Pause an Instance
     * @param param the request object
     */
    public v1PauseInstance(param: InstancesApiV1PauseInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1PauseInstance(param.instanceId,  options).toPromise();
    }

    /**
     * Sends a touch or button event to the VM.  - Buttons (or keys) to be held during the input are specified as an array of strings, each string must be either a single ascii character or one of the following keywords:   - VM Buttons: finger, homeButton, holdButton, volumeUp, volumeDown, ringerSwitch, backButton, overviewButton   - Keyboard Buttons: again, alt, alterase, apostrophe, back, backslash, backspace, bassboost, bookmarks, bsp, calc, camera, cancel, caps, capslock, chat, close, closecd, comma, compose, computer, config, connect, copy, ctrl, cut, cyclewindows, dashboard, del, delete, deletefile, dot, down, edit, eject, ejectclose, email, end, enter, equal, esc, escape, exit, f1, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f2, f20, f21, f22, f23, f24, f3, f4, f5, f6, f7, f8, f9, fastfwd, file, finance, find, forward, front, grave, hangeul, hanja, help, henkan, home, homepage, hp, hrgn, ins, insert, iso, k102, kp0, kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8, kp9, kpasterisk, kpcomma, kpdot, kpenter, kpequal, kpjpcomma, kpleftparen, kpminus, kpplus, kpplusminus, kprightparen, kpslash, ktkn, ktknhrgn, left, leftalt, leftbrace, leftctrl, leftmeta, leftshift, linefeed, macro, mail, menu, meta, minus, move, msdos, muhenkan, mute, new, next, numlock, open, pagedown, pageup, paste, pause, pausecd, pgdn, pgup, phone, play, playcd, playpause, power, previous, print, prog1, prog2, prog3, prog4, props, question, record, redo, refresh, return, rewind, right, rightalt, rightbrace, rightctrl, rightmeta, rightshift, ro, rotate, scale, screenlock, scrolldown, scrolllock, scrollup, search, semicolon, sendfile, setup, shift, shop, slash, sleep, sound, space, sport, stop, stopcd, suspend, sysrq, tab, undo, up, voldown, volup, wakeup, www, xfer, yen, zkhk
     * Provide Instance Input
     * @param param the request object
     */
    public v1PostInstanceInput(param: InstancesApiV1PostInstanceInputRequest, options?: Configuration): Promise<number> {
        return this.api.v1PostInstanceInput(param.instanceId, param.instanceInput,  options).toPromise();
    }

    /**
     * Reboot an Instance
     * @param param the request object
     */
    public v1RebootInstance(param: InstancesApiV1RebootInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1RebootInstance(param.instanceId,  options).toPromise();
    }

    /**
     * Rename a Snapshot
     * @param param the request object
     */
    public v1RenameInstanceSnapshot(param: InstancesApiV1RenameInstanceSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1RenameInstanceSnapshot(param.instanceId, param.snapshotId, param.snapshotCreationOptions,  options).toPromise();
    }

    /**
     * Restore backup
     * @param param the request object
     */
    public v1RestoreBackup(param: InstancesApiV1RestoreBackupRequest, options?: Configuration): Promise<void> {
        return this.api.v1RestoreBackup(param.instanceId, param.body,  options).toPromise();
    }

    /**
     * Restore a Snapshot
     * @param param the request object
     */
    public v1RestoreInstanceSnapshot(param: InstancesApiV1RestoreInstanceSnapshotRequest, options?: Configuration): Promise<void> {
        return this.api.v1RestoreInstanceSnapshot(param.instanceId, param.snapshotId,  options).toPromise();
    }

    /**
     * Rotate device to orientation.  Accepted orientations: 1. Portrait 2. Portrait vertically inverted (up-side-down) 3. Landscape with top of the device to the left 4. Landscape with top of the device to the right
     * Rotate device to specified orientation
     * @param param the request object
     */
    public v1RotateInstance(param: InstancesApiV1RotateInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1RotateInstance(param.instanceId, param.rotateBody,  options).toPromise();
    }

    /**
     * Set Instance GPIOs
     * @param param the request object
     */
    public v1SetInstanceGpios(param: InstancesApiV1SetInstanceGpiosRequest, options?: Configuration): Promise<GpiosState> {
        return this.api.v1SetInstanceGpios(param.instanceId, param.gpiosState,  options).toPromise();
    }

    /**
     * Set Instance Peripherals
     * @param param the request object
     */
    public v1SetInstancePeripherals(param: InstancesApiV1SetInstancePeripheralsRequest, options?: Configuration): Promise<PeripheralsData> {
        return this.api.v1SetInstancePeripherals(param.instanceId, param.peripheralsData,  options).toPromise();
    }

    /**
     * Set state of Instance
     * @param param the request object
     */
    public v1SetInstanceState(param: InstancesApiV1SetInstanceStateRequest, options?: Configuration): Promise<void> {
        return this.api.v1SetInstanceState(param.instanceId, param.v1SetStateBody,  options).toPromise();
    }

    /**
     * Start CoreTrace on an instance
     * @param param the request object
     */
    public v1StartCoreTrace(param: InstancesApiV1StartCoreTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartCoreTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Start HyperTrace on an instance
     * @param param the request object
     */
    public v1StartHyperTrace(param: InstancesApiV1StartHyperTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartHyperTrace(param.instanceId, param.btraceEnableOptions,  options).toPromise();
    }

    /**
     * Start an Instance
     * @param param the request object
     */
    public v1StartInstance(param: InstancesApiV1StartInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartInstance(param.instanceId, param.instanceStartOptions,  options).toPromise();
    }

    /**
     * Start Enhanced Network Monitor on an instance.
     * @param param the request object
     */
    public v1StartNetdump(param: InstancesApiV1StartNetdumpRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartNetdump(param.instanceId, param.netdumpFilter,  options).toPromise();
    }

    /**
     * Start Network Monitor on an instance.
     * @param param the request object
     */
    public v1StartNetworkMonitor(param: InstancesApiV1StartNetworkMonitorRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartNetworkMonitor(param.instanceId,  options).toPromise();
    }

    /**
     * Stop CoreTrace on an instance.
     * @param param the request object
     */
    public v1StopCoreTrace(param: InstancesApiV1StopCoreTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopCoreTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Stop HyperTrace on an instance.
     * @param param the request object
     */
    public v1StopHyperTrace(param: InstancesApiV1StopHyperTraceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopHyperTrace(param.instanceId,  options).toPromise();
    }

    /**
     * Stop an Instance
     * @param param the request object
     */
    public v1StopInstance(param: InstancesApiV1StopInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopInstance(param.instanceId, param.instanceStopOptions,  options).toPromise();
    }

    /**
     * Stop Enhanced Network Monitor on an instance.
     * @param param the request object
     */
    public v1StopNetdump(param: InstancesApiV1StopNetdumpRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopNetdump(param.instanceId,  options).toPromise();
    }

    /**
     * Stop Network Monitor on an instance.
     * @param param the request object
     */
    public v1StopNetworkMonitor(param: InstancesApiV1StopNetworkMonitorRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopNetworkMonitor(param.instanceId,  options).toPromise();
    }

    /**
     * Unpause an Instance
     * @param param the request object
     */
    public v1UnpauseInstance(param: InstancesApiV1UnpauseInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1UnpauseInstance(param.instanceId,  options).toPromise();
    }

    /**
     * Upgrade iOS version
     * @param param the request object
     */
    public v1UpgradeInstance(param: InstancesApiV1UpgradeInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.v1UpgradeInstance(param.instanceId, param.instanceUpgradeBody,  options).toPromise();
    }

    /**
     * Recommended SSH Command for Quick Connect
     * @param param the request object
     */
    public v2GetInstanceQuickConnectCommand(param: InstancesApiV2GetInstanceQuickConnectCommandRequest, options?: Configuration): Promise<string> {
        return this.api.v2GetInstanceQuickConnectCommand(param.instanceId,  options).toPromise();
    }

    /**
     * Get state of Instance
     * @param param the request object
     */
    public v2GetInstanceState(param: InstancesApiV2GetInstanceStateRequest, options?: Configuration): Promise<InstanceState> {
        return this.api.v2GetInstanceState(param.instanceId, param.returnAttr,  options).toPromise();
    }

}

import { ObservableLicensingApi } from "./ObservableAPI";
import { LicensingApiRequestFactory, LicensingApiResponseProcessor} from "../apis/LicensingApi";

export interface LicensingApiV1GetSupportedFeaturesRequest {
}

export class ObjectLicensingApi {
    private api: ObservableLicensingApi

    public constructor(configuration: Configuration, requestFactory?: LicensingApiRequestFactory, responseProcessor?: LicensingApiResponseProcessor) {
        this.api = new ObservableLicensingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all supported features for user
     * @param param the request object
     */
    public v1GetSupportedFeatures(param: LicensingApiV1GetSupportedFeaturesRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.v1GetSupportedFeatures( options).toPromise();
    }

}

import { ObservableModelsApi } from "./ObservableAPI";
import { ModelsApiRequestFactory, ModelsApiResponseProcessor} from "../apis/ModelsApi";

export interface ModelsApiV1GetModelSoftwareRequest {
    /**
     * Model to list available software for
     * @type string
     * @memberof ModelsApiv1GetModelSoftware
     */
    model: string
}

export interface ModelsApiV1GetModelsRequest {
}

export class ObjectModelsApi {
    private api: ObservableModelsApi

    public constructor(configuration: Configuration, requestFactory?: ModelsApiRequestFactory, responseProcessor?: ModelsApiResponseProcessor) {
        this.api = new ObservableModelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Software for Model
     * @param param the request object
     */
    public v1GetModelSoftware(param: ModelsApiV1GetModelSoftwareRequest, options?: Configuration): Promise<Array<Firmware>> {
        return this.api.v1GetModelSoftware(param.model,  options).toPromise();
    }

    /**
     * Get Supported Models
     * @param param the request object
     */
    public v1GetModels(param: ModelsApiV1GetModelsRequest = {}, options?: Configuration): Promise<Array<Model>> {
        return this.api.v1GetModels( options).toPromise();
    }

}

import { ObservableNetdumpApi } from "./ObservableAPI";
import { NetdumpApiRequestFactory, NetdumpApiResponseProcessor} from "../apis/NetdumpApi";

export interface NetdumpApiV1InstancesInstanceIdNetdumpPcapGetRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof NetdumpApiv1InstancesInstanceIdNetdumpPcapGet
     */
    instanceId: string
}

export interface NetdumpApiV1StartNetdumpRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof NetdumpApiv1StartNetdump
     */
    instanceId: string
    /**
     * 
     * @type NetdumpFilter
     * @memberof NetdumpApiv1StartNetdump
     */
    netdumpFilter?: NetdumpFilter
}

export interface NetdumpApiV1StopNetdumpRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof NetdumpApiv1StopNetdump
     */
    instanceId: string
}

export class ObjectNetdumpApi {
    private api: ObservableNetdumpApi

    public constructor(configuration: Configuration, requestFactory?: NetdumpApiRequestFactory, responseProcessor?: NetdumpApiResponseProcessor) {
        this.api = new ObservableNetdumpApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Download a netdump pcap file
     * @param param the request object
     */
    public v1InstancesInstanceIdNetdumpPcapGet(param: NetdumpApiV1InstancesInstanceIdNetdumpPcapGetRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.v1InstancesInstanceIdNetdumpPcapGet(param.instanceId,  options).toPromise();
    }

    /**
     * Start Enhanced Network Monitor on an instance.
     * @param param the request object
     */
    public v1StartNetdump(param: NetdumpApiV1StartNetdumpRequest, options?: Configuration): Promise<void> {
        return this.api.v1StartNetdump(param.instanceId, param.netdumpFilter,  options).toPromise();
    }

    /**
     * Stop Enhanced Network Monitor on an instance.
     * @param param the request object
     */
    public v1StopNetdump(param: NetdumpApiV1StopNetdumpRequest, options?: Configuration): Promise<void> {
        return this.api.v1StopNetdump(param.instanceId,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiV1AddProjectKeyRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1AddProjectKey
     */
    projectId: string
    /**
     * Key to add
     * @type ProjectKey
     * @memberof ProjectsApiv1AddProjectKey
     */
    projectKey: ProjectKey
}

export interface ProjectsApiV1CreateProjectRequest {
    /**
     * Project
     * @type Project
     * @memberof ProjectsApiv1CreateProject
     */
    project: Project
}

export interface ProjectsApiV1DeleteProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1DeleteProject
     */
    projectId: string
}

export interface ProjectsApiV1GetProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1GetProject
     */
    projectId: string
}

export interface ProjectsApiV1GetProjectInstancesRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1GetProjectInstances
     */
    projectId: string
    /**
     * Filter by project name
     * @type string
     * @memberof ProjectsApiv1GetProjectInstances
     */
    name?: string
    /**
     * Attributes to include in instance return
     * @type Array&lt;string&gt;
     * @memberof ProjectsApiv1GetProjectInstances
     */
    returnAttr?: Array<string>
}

export interface ProjectsApiV1GetProjectKeysRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1GetProjectKeys
     */
    projectId: string
}

export interface ProjectsApiV1GetProjectVpnConfigRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1GetProjectVpnConfig
     */
    projectId: string
    /**
     * VPN Config format
     * @type &#39;ovpn&#39;
     * @memberof ProjectsApiv1GetProjectVpnConfig
     */
    format: 'ovpn'
}

export interface ProjectsApiV1GetProjectsRequest {
    /**
     * Filter by project name
     * @type string
     * @memberof ProjectsApiv1GetProjects
     */
    name?: string
    /**
     * Only include id of project in results
     * @type boolean
     * @memberof ProjectsApiv1GetProjects
     */
    idsOnly?: boolean
}

export interface ProjectsApiV1RemoveProjectKeyRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1RemoveProjectKey
     */
    projectId: string
    /**
     * Key ID - uuid
     * @type string
     * @memberof ProjectsApiv1RemoveProjectKey
     */
    keyId: string
}

export interface ProjectsApiV1UpdateProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1UpdateProject
     */
    projectId: string
    /**
     * Updated Project Settings
     * @type Project
     * @memberof ProjectsApiv1UpdateProject
     */
    project: Project
}

export interface ProjectsApiV1UpdateProjectSettingsRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof ProjectsApiv1UpdateProjectSettings
     */
    projectId: string
    /**
     * New settings
     * @type ProjectSettings
     * @memberof ProjectsApiv1UpdateProjectSettings
     */
    projectSettings: ProjectSettings
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Project Authorized Key
     * @param param the request object
     */
    public v1AddProjectKey(param: ProjectsApiV1AddProjectKeyRequest, options?: Configuration): Promise<ProjectKey> {
        return this.api.v1AddProjectKey(param.projectId, param.projectKey,  options).toPromise();
    }

    /**
     * Create a Project
     * @param param the request object
     */
    public v1CreateProject(param: ProjectsApiV1CreateProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.v1CreateProject(param.project,  options).toPromise();
    }

    /**
     * Delete a Project
     * @param param the request object
     */
    public v1DeleteProject(param: ProjectsApiV1DeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteProject(param.projectId,  options).toPromise();
    }

    /**
     * Get a Project
     * @param param the request object
     */
    public v1GetProject(param: ProjectsApiV1GetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.v1GetProject(param.projectId,  options).toPromise();
    }

    /**
     * Get Instances in Project
     * @param param the request object
     */
    public v1GetProjectInstances(param: ProjectsApiV1GetProjectInstancesRequest, options?: Configuration): Promise<Array<Instance>> {
        return this.api.v1GetProjectInstances(param.projectId, param.name, param.returnAttr,  options).toPromise();
    }

    /**
     * Get Project Authorized Keys
     * @param param the request object
     */
    public v1GetProjectKeys(param: ProjectsApiV1GetProjectKeysRequest, options?: Configuration): Promise<Array<ProjectKey>> {
        return this.api.v1GetProjectKeys(param.projectId,  options).toPromise();
    }

    /**
     * Get Project VPN Configuration
     * @param param the request object
     */
    public v1GetProjectVpnConfig(param: ProjectsApiV1GetProjectVpnConfigRequest, options?: Configuration): Promise<string> {
        return this.api.v1GetProjectVpnConfig(param.projectId, param.format,  options).toPromise();
    }

    /**
     * Get Projects
     * @param param the request object
     */
    public v1GetProjects(param: ProjectsApiV1GetProjectsRequest = {}, options?: Configuration): Promise<Array<Project>> {
        return this.api.v1GetProjects(param.name, param.idsOnly,  options).toPromise();
    }

    /**
     * Delete Project Authorized Key
     * @param param the request object
     */
    public v1RemoveProjectKey(param: ProjectsApiV1RemoveProjectKeyRequest, options?: Configuration): Promise<void> {
        return this.api.v1RemoveProjectKey(param.projectId, param.keyId,  options).toPromise();
    }

    /**
     * Update a Project
     * @param param the request object
     */
    public v1UpdateProject(param: ProjectsApiV1UpdateProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.v1UpdateProject(param.projectId, param.project,  options).toPromise();
    }

    /**
     * Change Project Settings
     * @param param the request object
     */
    public v1UpdateProjectSettings(param: ProjectsApiV1UpdateProjectSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.v1UpdateProjectSettings(param.projectId, param.projectSettings,  options).toPromise();
    }

}

import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiV1AddTeamRoleToProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof RolesApiv1AddTeamRoleToProject
     */
    projectId: string
    /**
     * Team ID - uuid
     * @type string
     * @memberof RolesApiv1AddTeamRoleToProject
     */
    teamId: string
    /**
     * Role ID - uuid
     * @type string
     * @memberof RolesApiv1AddTeamRoleToProject
     */
    roleId: string
}

export interface RolesApiV1AddUserRoleToProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof RolesApiv1AddUserRoleToProject
     */
    projectId: string
    /**
     * User ID - uuid
     * @type string
     * @memberof RolesApiv1AddUserRoleToProject
     */
    userId: string
    /**
     * Role ID - uuid
     * @type string
     * @memberof RolesApiv1AddUserRoleToProject
     */
    roleId: string
}

export interface RolesApiV1RemoveTeamRoleFromProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof RolesApiv1RemoveTeamRoleFromProject
     */
    projectId: string
    /**
     * Team ID - uuid
     * @type string
     * @memberof RolesApiv1RemoveTeamRoleFromProject
     */
    teamId: string
    /**
     * Role ID - uuid
     * @type string
     * @memberof RolesApiv1RemoveTeamRoleFromProject
     */
    roleId: string
}

export interface RolesApiV1RemoveUserRoleFromProjectRequest {
    /**
     * Project ID - uuid
     * @type string
     * @memberof RolesApiv1RemoveUserRoleFromProject
     */
    projectId: string
    /**
     * User ID - uuid
     * @type string
     * @memberof RolesApiv1RemoveUserRoleFromProject
     */
    userId: string
    /**
     * Role ID - uuid
     * @type string
     * @memberof RolesApiv1RemoveUserRoleFromProject
     */
    roleId: string
}

export interface RolesApiV1RolesRequest {
}

export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add team role to project
     * @param param the request object
     */
    public v1AddTeamRoleToProject(param: RolesApiV1AddTeamRoleToProjectRequest, options?: Configuration): Promise<void> {
        return this.api.v1AddTeamRoleToProject(param.projectId, param.teamId, param.roleId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add user role to project
     * @param param the request object
     */
    public v1AddUserRoleToProject(param: RolesApiV1AddUserRoleToProjectRequest, options?: Configuration): Promise<void> {
        return this.api.v1AddUserRoleToProject(param.projectId, param.userId, param.roleId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove team role from project
     * @param param the request object
     */
    public v1RemoveTeamRoleFromProject(param: RolesApiV1RemoveTeamRoleFromProjectRequest, options?: Configuration): Promise<void> {
        return this.api.v1RemoveTeamRoleFromProject(param.projectId, param.teamId, param.roleId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove user role from project
     * @param param the request object
     */
    public v1RemoveUserRoleFromProject(param: RolesApiV1RemoveUserRoleFromProjectRequest, options?: Configuration): Promise<void> {
        return this.api.v1RemoveUserRoleFromProject(param.projectId, param.userId, param.roleId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Get all roles
     * @param param the request object
     */
    public v1Roles(param: RolesApiV1RolesRequest = {}, options?: Configuration): Promise<Array<Role>> {
        return this.api.v1Roles( options).toPromise();
    }

}

import { ObservableSnapshotsApi } from "./ObservableAPI";
import { SnapshotsApiRequestFactory, SnapshotsApiResponseProcessor} from "../apis/SnapshotsApi";

export interface SnapshotsApiV1CreateSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof SnapshotsApiv1CreateSnapshot
     */
    instanceId: string
    /**
     * 
     * @type SnapshotCreationOptions
     * @memberof SnapshotsApiv1CreateSnapshot
     */
    snapshotCreationOptions: SnapshotCreationOptions
}

export interface SnapshotsApiV1DeleteInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof SnapshotsApiv1DeleteInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1DeleteInstanceSnapshot
     */
    snapshotId: string
}

export interface SnapshotsApiV1DeleteSnapshotRequest {
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1DeleteSnapshot
     */
    snapshotId: string
}

export interface SnapshotsApiV1GetInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof SnapshotsApiv1GetInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1GetInstanceSnapshot
     */
    snapshotId: string
}

export interface SnapshotsApiV1GetInstanceSnapshotsRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof SnapshotsApiv1GetInstanceSnapshots
     */
    instanceId: string
}

export interface SnapshotsApiV1GetSnapshotRequest {
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1GetSnapshot
     */
    snapshotId: string
}

export interface SnapshotsApiV1RenameInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof SnapshotsApiv1RenameInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1RenameInstanceSnapshot
     */
    snapshotId: string
    /**
     * 
     * @type SnapshotCreationOptions
     * @memberof SnapshotsApiv1RenameInstanceSnapshot
     */
    snapshotCreationOptions: SnapshotCreationOptions
}

export interface SnapshotsApiV1RestoreInstanceSnapshotRequest {
    /**
     * Instance ID - uuid
     * @type string
     * @memberof SnapshotsApiv1RestoreInstanceSnapshot
     */
    instanceId: string
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1RestoreInstanceSnapshot
     */
    snapshotId: string
}

export interface SnapshotsApiV1SnapshotRenameRequest {
    /**
     * Snapshot ID - uuid
     * @type string
     * @memberof SnapshotsApiv1SnapshotRename
     */
    snapshotId: string
    /**
     * 
     * @type SnapshotCreationOptions
     * @memberof SnapshotsApiv1SnapshotRename
     */
    snapshotCreationOptions: SnapshotCreationOptions
}

export class ObjectSnapshotsApi {
    private api: ObservableSnapshotsApi

    public constructor(configuration: Configuration, requestFactory?: SnapshotsApiRequestFactory, responseProcessor?: SnapshotsApiResponseProcessor) {
        this.api = new ObservableSnapshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Instance Snapshot
     * @param param the request object
     */
    public v1CreateSnapshot(param: SnapshotsApiV1CreateSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1CreateSnapshot(param.instanceId, param.snapshotCreationOptions,  options).toPromise();
    }

    /**
     * Delete a Snapshot
     * @param param the request object
     */
    public v1DeleteInstanceSnapshot(param: SnapshotsApiV1DeleteInstanceSnapshotRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteInstanceSnapshot(param.instanceId, param.snapshotId,  options).toPromise();
    }

    /**
     * Delete a Snapshot
     * @param param the request object
     */
    public v1DeleteSnapshot(param: SnapshotsApiV1DeleteSnapshotRequest, options?: Configuration): Promise<void> {
        return this.api.v1DeleteSnapshot(param.snapshotId,  options).toPromise();
    }

    /**
     * Get Instance Snapshot
     * @param param the request object
     */
    public v1GetInstanceSnapshot(param: SnapshotsApiV1GetInstanceSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1GetInstanceSnapshot(param.instanceId, param.snapshotId,  options).toPromise();
    }

    /**
     * Get Instance Snapshots
     * @param param the request object
     */
    public v1GetInstanceSnapshots(param: SnapshotsApiV1GetInstanceSnapshotsRequest, options?: Configuration): Promise<Array<Snapshot>> {
        return this.api.v1GetInstanceSnapshots(param.instanceId,  options).toPromise();
    }

    /**
     * Get Snapshot
     * @param param the request object
     */
    public v1GetSnapshot(param: SnapshotsApiV1GetSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1GetSnapshot(param.snapshotId,  options).toPromise();
    }

    /**
     * Rename a Snapshot
     * @param param the request object
     */
    public v1RenameInstanceSnapshot(param: SnapshotsApiV1RenameInstanceSnapshotRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1RenameInstanceSnapshot(param.instanceId, param.snapshotId, param.snapshotCreationOptions,  options).toPromise();
    }

    /**
     * Restore a Snapshot
     * @param param the request object
     */
    public v1RestoreInstanceSnapshot(param: SnapshotsApiV1RestoreInstanceSnapshotRequest, options?: Configuration): Promise<void> {
        return this.api.v1RestoreInstanceSnapshot(param.instanceId, param.snapshotId,  options).toPromise();
    }

    /**
     * Rename a Snapshot
     * @param param the request object
     */
    public v1SnapshotRename(param: SnapshotsApiV1SnapshotRenameRequest, options?: Configuration): Promise<Snapshot> {
        return this.api.v1SnapshotRename(param.snapshotId, param.snapshotCreationOptions,  options).toPromise();
    }

}

import { ObservableStatusApi } from "./ObservableAPI";
import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";

export interface StatusApiV1ReadyRequest {
}

export class ObjectStatusApi {
    private api: ObservableStatusApi

    public constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if  API is ready for queries
     * API Status
     * @param param the request object
     */
    public v1Ready(param: StatusApiV1ReadyRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1Ready( options).toPromise();
    }

}

import { ObservableTeamsApi } from "./ObservableAPI";
import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";

export interface TeamsApiV1AddUserToTeamRequest {
    /**
     * Team ID - uuid
     * @type string
     * @memberof TeamsApiv1AddUserToTeam
     */
    teamId: string
    /**
     * User ID - uuid
     * @type string
     * @memberof TeamsApiv1AddUserToTeam
     */
    userId: string
}

export interface TeamsApiV1RemoveUserFromTeamRequest {
    /**
     * Team ID - uuid
     * @type string
     * @memberof TeamsApiv1RemoveUserFromTeam
     */
    teamId: string
    /**
     * User ID - uuid
     * @type string
     * @memberof TeamsApiv1RemoveUserFromTeam
     */
    userId: string
}

export interface TeamsApiV1TeamChangeRequest {
    /**
     * Team ID - uuid
     * @type string
     * @memberof TeamsApiv1TeamChange
     */
    teamId: string
    /**
     * 
     * @type CreateTeam
     * @memberof TeamsApiv1TeamChange
     */
    createTeam: CreateTeam
}

export interface TeamsApiV1TeamCreateRequest {
    /**
     * 
     * @type CreateTeam
     * @memberof TeamsApiv1TeamCreate
     */
    createTeam: CreateTeam
}

export interface TeamsApiV1TeamDeleteRequest {
    /**
     * Team ID - uuid
     * @type string
     * @memberof TeamsApiv1TeamDelete
     */
    teamId: string
}

export interface TeamsApiV1TeamsRequest {
}

export class ObjectTeamsApi {
    private api: ObservableTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add user to team
     * @param param the request object
     */
    public v1AddUserToTeam(param: TeamsApiV1AddUserToTeamRequest, options?: Configuration): Promise<void> {
        return this.api.v1AddUserToTeam(param.teamId, param.userId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove user from team
     * @param param the request object
     */
    public v1RemoveUserFromTeam(param: TeamsApiV1RemoveUserFromTeamRequest, options?: Configuration): Promise<void> {
        return this.api.v1RemoveUserFromTeam(param.teamId, param.userId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Update team
     * @param param the request object
     */
    public v1TeamChange(param: TeamsApiV1TeamChangeRequest, options?: Configuration): Promise<void> {
        return this.api.v1TeamChange(param.teamId, param.createTeam,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Create team
     * @param param the request object
     */
    public v1TeamCreate(param: TeamsApiV1TeamCreateRequest, options?: Configuration): Promise<TeamCreate> {
        return this.api.v1TeamCreate(param.createTeam,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Delete team
     * @param param the request object
     */
    public v1TeamDelete(param: TeamsApiV1TeamDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v1TeamDelete(param.teamId,  options).toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Get teams
     * @param param the request object
     */
    public v1Teams(param: TeamsApiV1TeamsRequest = {}, options?: Configuration): Promise<Array<Team>> {
        return this.api.v1Teams( options).toPromise();
    }

}

import { ObservableTrialRequestsApi } from "./ObservableAPI";
import { TrialRequestsApiRequestFactory, TrialRequestsApiResponseProcessor} from "../apis/TrialRequestsApi";

export interface TrialRequestsApiV1CreateSubscriberInviteRequest {
    /**
     * Payload of Subscriber Invite
     * @type SubscriberInvite
     * @memberof TrialRequestsApiv1CreateSubscriberInvite
     */
    subscriberInvite: SubscriberInvite
}

export class ObjectTrialRequestsApi {
    private api: ObservableTrialRequestsApi

    public constructor(configuration: Configuration, requestFactory?: TrialRequestsApiRequestFactory, responseProcessor?: TrialRequestsApiResponseProcessor) {
        this.api = new ObservableTrialRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Subscriber Invite
     * Create Subscriber Invite
     * @param param the request object
     */
    public v1CreateSubscriberInvite(param: TrialRequestsApiV1CreateSubscriberInviteRequest, options?: Configuration): Promise<SubscriberInvite> {
        return this.api.v1CreateSubscriberInvite(param.subscriberInvite,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiV1CreateUserRequest {
    /**
     * User data
     * @type any
     * @memberof UsersApiv1CreateUser
     */
    body: any
}

export interface UsersApiV1DeleteUserRequest {
    /**
     * userId - uuid
     * @type string
     * @memberof UsersApiv1DeleteUser
     */
    userId: string
}

export interface UsersApiV1GetResetLinkInfoRequest {
    /**
     * Reset token
     * @type string
     * @memberof UsersApiv1GetResetLinkInfo
     */
    token: string
}

export interface UsersApiV1ResetUserPasswordRequest {
    /**
     * application/json
     * @type PasswordResetBody
     * @memberof UsersApiv1ResetUserPassword
     */
    passwordResetBody: PasswordResetBody
}

export interface UsersApiV1SendUserResetLinkRequest {
    /**
     * application/json
     * @type ResetLinkBody
     * @memberof UsersApiv1SendUserResetLink
     */
    resetLinkBody: ResetLinkBody
}

export interface UsersApiV1UpdateUserRequest {
    /**
     * userId - uuid
     * @type string
     * @memberof UsersApiv1UpdateUser
     */
    userId: string
    /**
     * User data
     * @type any
     * @memberof UsersApiv1UpdateUser
     */
    body: any
}

export interface UsersApiV1UserAgreeTermsRequest {
}

export interface UsersApiV1UsersChangePasswordPostRequest {
    /**
     * 
     * @type PasswordChangeBody
     * @memberof UsersApiv1UsersChangePasswordPost
     */
    passwordChangeBody: PasswordChangeBody
}

export interface UsersApiV1UsersLoginRequest {
    /**
     * Authorization data
     * @type Credentials
     * @memberof UsersApiv1UsersLogin
     */
    credentials: Credentials
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create User
     * @param param the request object
     */
    public v1CreateUser(param: UsersApiV1CreateUserRequest, options?: Configuration): Promise<any> {
        return this.api.v1CreateUser(param.body,  options).toPromise();
    }

    /**
     * Delete User
     * @param param the request object
     */
    public v1DeleteUser(param: UsersApiV1DeleteUserRequest, options?: Configuration): Promise<any> {
        return this.api.v1DeleteUser(param.userId,  options).toPromise();
    }

    /**
     * Send Password Reset Link Info
     * @param param the request object
     */
    public v1GetResetLinkInfo(param: UsersApiV1GetResetLinkInfoRequest, options?: Configuration): Promise<any> {
        return this.api.v1GetResetLinkInfo(param.token,  options).toPromise();
    }

    /**
     * Reset User Password
     * @param param the request object
     */
    public v1ResetUserPassword(param: UsersApiV1ResetUserPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.v1ResetUserPassword(param.passwordResetBody,  options).toPromise();
    }

    /**
     * Send Password Reset Link
     * @param param the request object
     */
    public v1SendUserResetLink(param: UsersApiV1SendUserResetLinkRequest, options?: Configuration): Promise<void> {
        return this.api.v1SendUserResetLink(param.resetLinkBody,  options).toPromise();
    }

    /**
     * Update User
     * @param param the request object
     */
    public v1UpdateUser(param: UsersApiV1UpdateUserRequest, options?: Configuration): Promise<any> {
        return this.api.v1UpdateUser(param.userId, param.body,  options).toPromise();
    }

    /**
     * Consent to the current terms and conditions
     * @param param the request object
     */
    public v1UserAgreeTerms(param: UsersApiV1UserAgreeTermsRequest = {}, options?: Configuration): Promise<AgreedAck> {
        return this.api.v1UserAgreeTerms( options).toPromise();
    }

    /**
     * Authenticated solely by the old-password.
     * Change User Password
     * @param param the request object
     */
    public v1UsersChangePasswordPost(param: UsersApiV1UsersChangePasswordPostRequest, options?: Configuration): Promise<void> {
        return this.api.v1UsersChangePasswordPost(param.passwordChangeBody,  options).toPromise();
    }

    /**
     * Log In
     * @param param the request object
     */
    public v1UsersLogin(param: UsersApiV1UsersLoginRequest, options?: Configuration): Promise<Token> {
        return this.api.v1UsersLogin(param.credentials,  options).toPromise();
    }

}
