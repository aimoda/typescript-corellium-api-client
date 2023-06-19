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
import { AgentValueReturn } from '../models/AgentValueReturn';
import { AgreedAck } from '../models/AgreedAck';
import { ApiConflictError } from '../models/ApiConflictError';
import { ApiError } from '../models/ApiError';
import { ApiInternalConsistencyError } from '../models/ApiInternalConsistencyError';
import { ApiNotFoundError } from '../models/ApiNotFoundError';
import { ApiToken } from '../models/ApiToken';
import { Bit } from '../models/Bit';
import { BtraceEnableOptions } from '../models/BtraceEnableOptions';
import { Button } from '../models/Button';
import { CouponOptions } from '../models/CouponOptions';
import { CreateTeam } from '../models/CreateTeam';
import { CreatedBy } from '../models/CreatedBy';
import { Credentials } from '../models/Credentials';
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
import { MediaPlayBody } from '../models/MediaPlayBody';
import { Model } from '../models/Model';
import { ModelSoftware } from '../models/ModelSoftware';
import { NetdumpFilter } from '../models/NetdumpFilter';
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
import { ObservableAgentApi } from './ObservableAPI';

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";
export class PromiseAgentApi {
    private api: ObservableAgentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if App subsystem is ready
     * @param instanceId Instance ID - uuid
     */
    public v1AgentAppReady(instanceId: string, _options?: Configuration): Promise<AgentAppReadyResponse> {
        const result = this.api.v1AgentAppReady(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Delete a File on VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     */
    public v1AgentDeleteFile(instanceId: string, filePath: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentDeleteFile(instanceId, filePath, _options);
        return result.toPromise();
    }

    /**
     * Download a File from VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     */
    public v1AgentGetFile(instanceId: string, filePath: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.v1AgentGetFile(instanceId, filePath, _options);
        return result.toPromise();
    }

    /**
     * Returns a temporary random filename that is guranteed to be unique on the VMs filesystem at the time of invocation of this method.
     * Get the path for a new temp file
     * @param instanceId Instance ID - uuid
     */
    public v1AgentGetTempFilename(instanceId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1AgentGetTempFilename(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Installs the app located at path which must be present on the VM filesystem
     * Install App at path
     * @param instanceId Instance ID - uuid
     * @param agentInstallBody App parameters
     */
    public v1AgentInstallApp(instanceId: string, agentInstallBody: AgentInstallBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentInstallApp(instanceId, agentInstallBody, _options);
        return result.toPromise();
    }

    /**
     * Install a Profile to VM
     * @param instanceId Instance ID - uuid
     * @param body Profile to Install
     */
    public v1AgentInstallProfile(instanceId: string, body: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentInstallProfile(instanceId, body, _options);
        return result.toPromise();
    }

    /**
     * Kill an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public v1AgentKillApp(instanceId: string, bundleId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1AgentKillApp(instanceId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * List App Icons
     * @param instanceId Instance ID - uuid
     * @param bundleID App Bundle ID
     */
    public v1AgentListAppIcons(instanceId: string, bundleID: Array<string>, _options?: Configuration): Promise<Array<AgentIcons>> {
        const result = this.api.v1AgentListAppIcons(instanceId, bundleID, _options);
        return result.toPromise();
    }

    /**
     * List Apps
     * @param instanceId Instance ID - uuid
     */
    public v1AgentListApps(instanceId: string, _options?: Configuration): Promise<AgentAppsList> {
        const result = this.api.v1AgentListApps(instanceId, _options);
        return result.toPromise();
    }

    /**
     * List Apps Status
     * @param instanceId Instance ID - uuid
     */
    public v1AgentListAppsStatus(instanceId: string, _options?: Configuration): Promise<AgentAppsList> {
        const result = this.api.v1AgentListAppsStatus(instanceId, _options);
        return result.toPromise();
    }

    /**
     * List Profiles
     * @param instanceId Instance ID - uuid
     */
    public v1AgentListProfiles(instanceId: string, _options?: Configuration): Promise<AgentProfilesReturn> {
        const result = this.api.v1AgentListProfiles(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Run an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public v1AgentRunApp(instanceId: string, bundleId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1AgentRunApp(instanceId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Change Attrs of a File on VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     * @param fileChanges New attrs
     */
    public v1AgentSetFileAttributes(instanceId: string, filePath: string, fileChanges: FileChanges, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentSetFileAttributes(instanceId, filePath, fileChanges, _options);
        return result.toPromise();
    }

    /**
     * Get ADB Auth Setting (AOSP only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemGetAdbAuth(instanceId: string, _options?: Configuration): Promise<AgentSystemAdbAuth> {
        const result = this.api.v1AgentSystemGetAdbAuth(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get IP of eth0 (AOSP only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemGetNetwork(instanceId: string, _options?: Configuration): Promise<AgentValueReturn> {
        const result = this.api.v1AgentSystemGetNetwork(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get System Property (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param agentSystemGetPropBody Parameters
     */
    public v1AgentSystemGetProp(instanceId: string, agentSystemGetPropBody: AgentSystemGetPropBody, _options?: Configuration): Promise<AgentValueReturn> {
        const result = this.api.v1AgentSystemGetProp(instanceId, agentSystemGetPropBody, _options);
        return result.toPromise();
    }

    /**
     * Install OpenGApps (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param body Installation parameters
     */
    public v1AgentSystemInstallOpenGApps(instanceId: string, body: any, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentSystemInstallOpenGApps(instanceId, body, _options);
        return result.toPromise();
    }

    /**
     * Lock Device (iOS Only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemLock(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentSystemLock(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Set ADB Auth Setting (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param agentSystemAdbAuth Desired ADB Auth Setting
     */
    public v1AgentSystemSetAdbAuth(instanceId: string, agentSystemAdbAuth: AgentSystemAdbAuth, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentSystemSetAdbAuth(instanceId, agentSystemAdbAuth, _options);
        return result.toPromise();
    }

    /**
     * Instruct VM to halt
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemShutdown(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentSystemShutdown(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Unlock Device (iOS Only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemUnlock(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentSystemUnlock(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Uninstall an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public v1AgentUninstallApp(instanceId: string, bundleId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1AgentUninstallApp(instanceId, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Uninstall a Profile from VM
     * @param instanceId Instance ID - uuid
     * @param profileId Instance ID - uuid
     */
    public v1AgentUninstallProfile(instanceId: string, profileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentUninstallProfile(instanceId, profileId, _options);
        return result.toPromise();
    }

    /**
     * Upload a file to VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM to write to
     * @param body Uploaded File Contents
     */
    public v1AgentUploadFile(instanceId: string, filePath: string, body: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.v1AgentUploadFile(instanceId, filePath, body, _options);
        return result.toPromise();
    }


}



import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Log In
     * @param body Authorization data ( Credentials|ApiToken )
     */
    public v1AuthLogin(body: any, _options?: Configuration): Promise<Token> {
        const result = this.api.v1AuthLogin(body, _options);
        return result.toPromise();
    }


}



import { ObservableCoreTraceApi } from './ObservableAPI';

import { CoreTraceApiRequestFactory, CoreTraceApiResponseProcessor} from "../apis/CoreTraceApi";
export class PromiseCoreTraceApi {
    private api: ObservableCoreTraceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CoreTraceApiRequestFactory,
        responseProcessor?: CoreTraceApiResponseProcessor
    ) {
        this.api = new ObservableCoreTraceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clear CoreTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearCoreTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearCoreTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Running Threads (CoreTrace)
     * @param instanceId Instance ID - uuid
     */
    public v1ListThreads(instanceId: string, _options?: Configuration): Promise<Array<KernelTask>> {
        const result = this.api.v1ListThreads(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Start CoreTrace on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1StartCoreTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartCoreTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Stop CoreTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopCoreTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopCoreTrace(instanceId, _options);
        return result.toPromise();
    }


}



import { ObservableHyperTraceApi } from './ObservableAPI';

import { HyperTraceApiRequestFactory, HyperTraceApiResponseProcessor} from "../apis/HyperTraceApi";
export class PromiseHyperTraceApi {
    private api: ObservableHyperTraceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HyperTraceApiRequestFactory,
        responseProcessor?: HyperTraceApiResponseProcessor
    ) {
        this.api = new ObservableHyperTraceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pre-authorize an btrace download
     * @param instanceId Instance ID - uuid
     */
    public v1BtracePreauthorize(instanceId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1BtracePreauthorize(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Clear HyperTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearHyperTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Kernel extension ranges
     * @param instanceId Instance ID - uuid
     */
    public v1Kcrange(instanceId: string, _options?: Configuration): Promise<Array<Kcrange>> {
        const result = this.api.v1Kcrange(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Start HyperTrace on an instance
     * @param instanceId Instance ID - uuid
     * @param btraceEnableOptions 
     */
    public v1StartHyperTrace(instanceId: string, btraceEnableOptions: BtraceEnableOptions, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartHyperTrace(instanceId, btraceEnableOptions, _options);
        return result.toPromise();
    }

    /**
     * Stop HyperTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopHyperTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopHyperTrace(instanceId, _options);
        return result.toPromise();
    }


}



import { ObservableHypervisorHooksApi } from './ObservableAPI';

import { HypervisorHooksApiRequestFactory, HypervisorHooksApiResponseProcessor} from "../apis/HypervisorHooksApi";
export class PromiseHypervisorHooksApi {
    private api: ObservableHypervisorHooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HypervisorHooksApiRequestFactory,
        responseProcessor?: HypervisorHooksApiResponseProcessor
    ) {
        this.api = new ObservableHypervisorHooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clear Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTraceHooks(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearHyperTraceHooks(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Create hypervisor hook for Instance
     * @param instanceId Instance ID - uuid
     * @param v1CreateHookParameters application/json
     */
    public v1CreateHook(instanceId: string, v1CreateHookParameters: V1CreateHookParameters, _options?: Configuration): Promise<Hook> {
        const result = this.api.v1CreateHook(instanceId, v1CreateHookParameters, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing hypervisor hook
     * @param hookId Hook ID
     */
    public v1DeleteHook(hookId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteHook(hookId, _options);
        return result.toPromise();
    }

    /**
     * Execute Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ExecuteHyperTraceHooks(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ExecuteHyperTraceHooks(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get hypervisor hook by id
     * @param hookId Hook Id
     */
    public v1GetHookById(hookId: string, _options?: Configuration): Promise<Hook> {
        const result = this.api.v1GetHookById(hookId, _options);
        return result.toPromise();
    }

    /**
     * Get all hypervisor hooks for Instance
     * @param instanceId Instance ID - uuid
     * @param limit limit for pagination results, defaults to 20
     * @param offset offset for pagination results, defaults to 0
     * @param sort sort ASC or DESC, defaults to DESC
     */
    public v1GetHooks(instanceId: string, limit?: number, offset?: number, sort?: 'ASC' | 'DESC', _options?: Configuration): Promise<Array<Hook>> {
        const result = this.api.v1GetHooks(instanceId, limit, offset, sort, _options);
        return result.toPromise();
    }

    /**
     * Update an existing hypervisor hook
     * @param hookId Hook ID
     * @param v1CreateHookParameters application/json
     */
    public v1UpdateHook(hookId: string, v1CreateHookParameters: V1CreateHookParameters, _options?: Configuration): Promise<Hook> {
        const result = this.api.v1UpdateHook(hookId, v1CreateHookParameters, _options);
        return result.toPromise();
    }


}



import { ObservableImagesApi } from './ObservableAPI';

import { ImagesApiRequestFactory, ImagesApiResponseProcessor} from "../apis/ImagesApi";
export class PromiseImagesApi {
    private api: ObservableImagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesApiRequestFactory,
        responseProcessor?: ImagesApiResponseProcessor
    ) {
        this.api = new ObservableImagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Image
     * @param type Image type
     * @param encoding How the file is stored
     * @param encapsulated set to false if the uploaded file is not encapsulated inside an outer zipfile
     * @param name Image name
     * @param project Project ID
     * @param instance Instance ID
     * @param file Optionally the actual file
     */
    public v1CreateImage(type: string, encoding: string, encapsulated?: boolean, name?: string, project?: string, instance?: string, file?: HttpFile, _options?: Configuration): Promise<Image> {
        const result = this.api.v1CreateImage(type, encoding, encapsulated, name, project, instance, file, _options);
        return result.toPromise();
    }

    /**
     * Delete Image
     * @param imageId Image ID - uuid
     */
    public v1DeleteImage(imageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteImage(imageId, _options);
        return result.toPromise();
    }

    /**
     * Get Image Metadata
     * @param imageId Image ID - uuid
     */
    public v1GetImage(imageId: string, _options?: Configuration): Promise<Image> {
        const result = this.api.v1GetImage(imageId, _options);
        return result.toPromise();
    }

    /**
     * Get all Images Metadata
     * @param project Optionally filter by project - uuid
     */
    public v1GetImages(project?: string, _options?: Configuration): Promise<Array<Image>> {
        const result = this.api.v1GetImages(project, _options);
        return result.toPromise();
    }

    /**
     * If the active project has enough remaining quota, updates an Image with the contents of the request body.
     * Upload Image Data
     * @param imageId Image ID - uuid
     * @param body Uploaded Image
     */
    public v1UploadImageData(imageId: string, body: string, _options?: Configuration): Promise<Image> {
        const result = this.api.v1UploadImageData(imageId, body, _options);
        return result.toPromise();
    }


}



import { ObservableInstancesApi } from './ObservableAPI';

import { InstancesApiRequestFactory, InstancesApiResponseProcessor} from "../apis/InstancesApi";
export class PromiseInstancesApi {
    private api: ObservableInstancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InstancesApiRequestFactory,
        responseProcessor?: InstancesApiResponseProcessor
    ) {
        this.api = new ObservableInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pre-authorize an btrace download
     * @param instanceId Instance ID - uuid
     */
    public v1BtracePreauthorize(instanceId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1BtracePreauthorize(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Clear CoreTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearCoreTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearCoreTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Clear HyperTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearHyperTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Clear Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTraceHooks(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearHyperTraceHooks(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Clear Panics
     * @param instanceId Instance ID - uuid
     */
    public v1ClearInstancePanics(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ClearInstancePanics(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Create Instance
     * @param instanceCreateOptions The vm definition to create
     */
    public v1CreateInstance(instanceCreateOptions: InstanceCreateOptions, _options?: Configuration): Promise<InstanceReturn> {
        const result = this.api.v1CreateInstance(instanceCreateOptions, _options);
        return result.toPromise();
    }

    /**
     * Create Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1CreateSnapshot(instanceId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1CreateSnapshot(instanceId, snapshotCreationOptions, _options);
        return result.toPromise();
    }

    /**
     * Remove Instance
     * @param instanceId Instance ID
     */
    public v1DeleteInstance(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteInstance(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1DeleteInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteInstanceSnapshot(instanceId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Disable an exposed port on an instance for device access.
     * @param instanceId Instance ID - uuid
     */
    public v1DisableExposePort(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DisableExposePort(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Enable an exposed port on an instance for device access.
     * @param instanceId Instance ID - uuid
     */
    public v1EnableExposePort(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1EnableExposePort(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Execute Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ExecuteHyperTraceHooks(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1ExecuteHyperTraceHooks(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance
     * @param instanceId Instance ID
     * @param returnAttr Attributes to include in instance return
     */
    public v1GetInstance(instanceId: string, returnAttr?: Array<string>, _options?: Configuration): Promise<Instance> {
        const result = this.api.v1GetInstance(instanceId, returnAttr, _options);
        return result.toPromise();
    }

    /**
     * Get console websocket URL
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceConsole(instanceId: string, _options?: Configuration): Promise<InstanceConsoleEndpoint> {
        const result = this.api.v1GetInstanceConsole(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Console Log
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceConsoleLog(instanceId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1GetInstanceConsoleLog(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance GPIOs
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceGpios(instanceId: string, _options?: Configuration): Promise<GpiosState> {
        const result = this.api.v1GetInstanceGpios(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Panics
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstancePanics(instanceId: string, _options?: Configuration): Promise<Array<any>> {
        const result = this.api.v1GetInstancePanics(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance Peripherals
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstancePeripherals(instanceId: string, _options?: Configuration): Promise<PeripheralsData> {
        const result = this.api.v1GetInstancePeripherals(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Returns the cost, in microcents, for the instance in the on and off state. Instances are charged $0.25 / day for storage (off) and $0.25 per core per hour (on).
     * Get rate information
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceRate(instanceId: string, _options?: Configuration): Promise<RateInfo> {
        const result = this.api.v1GetInstanceRate(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance Screenshot
     * @param instanceId Instance ID - uuid
     * @param format New peripherals state
     * @param scale Screenshot scale 1:N
     */
    public v1GetInstanceScreenshot(instanceId: string, format: 'png' | 'jpeg', scale?: number, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.v1GetInstanceScreenshot(instanceId, format, scale, _options);
        return result.toPromise();
    }

    /**
     * Get Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1GetInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1GetInstanceSnapshot(instanceId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance Snapshots
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceSnapshots(instanceId: string, _options?: Configuration): Promise<Array<Snapshot>> {
        const result = this.api.v1GetInstanceSnapshots(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Instances
     * @param name Optionally filter by instance name
     * @param returnAttr Attributes to include in instance return
     */
    public v1GetInstances(name?: string, returnAttr?: Array<string>, _options?: Configuration): Promise<Array<Instance>> {
        const result = this.api.v1GetInstances(name, returnAttr, _options);
        return result.toPromise();
    }

    /**
     * Receive a message on an iOS vm
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdMessagePost(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1InstancesInstanceIdMessagePost(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Download a netdump pcap file
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdNetdumpPcapGet(instanceId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.v1InstancesInstanceIdNetdumpPcapGet(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Download a Network Monitor pcap file
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdNetworkMonitorPcapGet(instanceId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.v1InstancesInstanceIdNetworkMonitorPcapGet(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Kernel extension ranges
     * @param instanceId Instance ID - uuid
     */
    public v1Kcrange(instanceId: string, _options?: Configuration): Promise<Array<Kcrange>> {
        const result = this.api.v1Kcrange(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Running Threads (CoreTrace)
     * @param instanceId Instance ID - uuid
     */
    public v1ListThreads(instanceId: string, _options?: Configuration): Promise<Array<KernelTask>> {
        const result = this.api.v1ListThreads(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Start playing media
     * @param instanceId Instance ID - uuid
     * @param mediaPlayBody Request Body
     */
    public v1MediaPlay(instanceId: string, mediaPlayBody: MediaPlayBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1MediaPlay(instanceId, mediaPlayBody, _options);
        return result.toPromise();
    }

    /**
     * Stop playing media
     * @param instanceId Instance ID - uuid
     */
    public v1MediaStop(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1MediaStop(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Update Instance
     * @param instanceId Instance ID
     * @param patchInstanceOptions 
     */
    public v1PatchInstance(instanceId: string, patchInstanceOptions: PatchInstanceOptions, _options?: Configuration): Promise<Instance> {
        const result = this.api.v1PatchInstance(instanceId, patchInstanceOptions, _options);
        return result.toPromise();
    }

    /**
     * Pause an Instance
     * @param instanceId Instance ID - uuid
     */
    public v1PauseInstance(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1PauseInstance(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Sends a touch or button event to the VM.  - Buttons (or keys) to be held during the input are specified as an array of strings, each string must be either a single ascii character or one of the following keywords:   - VM Buttons: finger, homeButton, holdButton, volumeUp, volumeDown, ringerSwitch, backButton, overviewButton   - Keyboard Buttons: again, alt, alterase, apostrophe, back, backslash, backspace, bassboost, bookmarks, bsp, calc, camera, cancel, caps, capslock, chat, close, closecd, comma, compose, computer, config, connect, copy, ctrl, cut, cyclewindows, dashboard, del, delete, deletefile, dot, down, edit, eject, ejectclose, email, end, enter, equal, esc, escape, exit, f1, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f2, f20, f21, f22, f23, f24, f3, f4, f5, f6, f7, f8, f9, fastfwd, file, finance, find, forward, front, grave, hangeul, hanja, help, henkan, home, homepage, hp, hrgn, ins, insert, iso, k102, kp0, kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8, kp9, kpasterisk, kpcomma, kpdot, kpenter, kpequal, kpjpcomma, kpleftparen, kpminus, kpplus, kpplusminus, kprightparen, kpslash, ktkn, ktknhrgn, left, leftalt, leftbrace, leftctrl, leftmeta, leftshift, linefeed, macro, mail, menu, meta, minus, move, msdos, muhenkan, mute, new, next, numlock, open, pagedown, pageup, paste, pause, pausecd, pgdn, pgup, phone, play, playcd, playpause, power, previous, print, prog1, prog2, prog3, prog4, props, question, record, redo, refresh, return, rewind, right, rightalt, rightbrace, rightctrl, rightmeta, rightshift, ro, rotate, scale, screenlock, scrolldown, scrolllock, scrollup, search, semicolon, sendfile, setup, shift, shop, slash, sleep, sound, space, sport, stop, stopcd, suspend, sysrq, tab, undo, up, voldown, volup, wakeup, www, xfer, yen, zkhk
     * Provide Instance Input
     * @param instanceId Instance ID - uuid
     * @param instanceInput The input to send to the VM
     */
    public v1PostInstanceInput(instanceId: string, instanceInput: Array<InstanceInput>, _options?: Configuration): Promise<number> {
        const result = this.api.v1PostInstanceInput(instanceId, instanceInput, _options);
        return result.toPromise();
    }

    /**
     * Reboot an Instance
     * @param instanceId Instance ID - uuid
     */
    public v1RebootInstance(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RebootInstance(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Rename a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1RenameInstanceSnapshot(instanceId: string, snapshotId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1RenameInstanceSnapshot(instanceId, snapshotId, snapshotCreationOptions, _options);
        return result.toPromise();
    }

    /**
     * Restore backup
     * @param instanceId Instance ID - uuid
     */
    public v1RestoreBackup(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RestoreBackup(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Restore a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1RestoreInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RestoreInstanceSnapshot(instanceId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Rotate device to orientation.  Accepted orientations: 1. Portrait 2. Portrait vertically inverted (up-side-down) 3. Landscape with top of the device to the left 4. Landscape with top of the device to the right
     * Rotate device to specified orientation
     * @param instanceId 
     * @param rotateBody 
     */
    public v1RotateInstance(instanceId: string, rotateBody: RotateBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1RotateInstance(instanceId, rotateBody, _options);
        return result.toPromise();
    }

    /**
     * Set Instance GPIOs
     * @param instanceId Instance ID - uuid
     * @param gpiosState New GPIO state
     */
    public v1SetInstanceGpios(instanceId: string, gpiosState: GpiosState, _options?: Configuration): Promise<GpiosState> {
        const result = this.api.v1SetInstanceGpios(instanceId, gpiosState, _options);
        return result.toPromise();
    }

    /**
     * Set Instance Peripherals
     * @param instanceId Instance ID - uuid
     * @param peripheralsData New peripherals state
     */
    public v1SetInstancePeripherals(instanceId: string, peripheralsData: PeripheralsData, _options?: Configuration): Promise<PeripheralsData> {
        const result = this.api.v1SetInstancePeripherals(instanceId, peripheralsData, _options);
        return result.toPromise();
    }

    /**
     * Set state of Instance
     * @param instanceId Instance ID - uuid
     * @param v1SetStateBody Desired State
     */
    public v1SetInstanceState(instanceId: string, v1SetStateBody: V1SetStateBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1SetInstanceState(instanceId, v1SetStateBody, _options);
        return result.toPromise();
    }

    /**
     * Start CoreTrace on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1StartCoreTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartCoreTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Start HyperTrace on an instance
     * @param instanceId Instance ID - uuid
     * @param btraceEnableOptions 
     */
    public v1StartHyperTrace(instanceId: string, btraceEnableOptions: BtraceEnableOptions, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartHyperTrace(instanceId, btraceEnableOptions, _options);
        return result.toPromise();
    }

    /**
     * Start an Instance
     * @param instanceId Instance ID - uuid
     * @param instanceStartOptions Start options
     */
    public v1StartInstance(instanceId: string, instanceStartOptions?: InstanceStartOptions, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartInstance(instanceId, instanceStartOptions, _options);
        return result.toPromise();
    }

    /**
     * Start Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     * @param netdumpFilter 
     */
    public v1StartNetdump(instanceId: string, netdumpFilter?: NetdumpFilter, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartNetdump(instanceId, netdumpFilter, _options);
        return result.toPromise();
    }

    /**
     * Start Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StartNetworkMonitor(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartNetworkMonitor(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Stop CoreTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopCoreTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopCoreTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Stop HyperTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopHyperTrace(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopHyperTrace(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Stop an Instance
     * @param instanceId Instance ID - uuid
     * @param instanceStopOptions Stop options
     */
    public v1StopInstance(instanceId: string, instanceStopOptions?: InstanceStopOptions, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopInstance(instanceId, instanceStopOptions, _options);
        return result.toPromise();
    }

    /**
     * Stop Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopNetdump(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopNetdump(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Stop Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopNetworkMonitor(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopNetworkMonitor(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Unpause an Instance
     * @param instanceId Instance ID - uuid
     */
    public v1UnpauseInstance(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1UnpauseInstance(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Upgrade iOS version
     * @param instanceId 
     * @param instanceUpgradeBody 
     */
    public v1UpgradeInstance(instanceId: string, instanceUpgradeBody: InstanceUpgradeBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1UpgradeInstance(instanceId, instanceUpgradeBody, _options);
        return result.toPromise();
    }

    /**
     * Recommended SSH Command for Quick Connect
     * @param instanceId Instance ID - uuid
     */
    public v2GetInstanceQuickConnectCommand(instanceId: string, _options?: Configuration): Promise<string> {
        const result = this.api.v2GetInstanceQuickConnectCommand(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get state of Instance
     * @param instanceId Instance ID - uuid
     * @param returnAttr The attributes to return.
     */
    public v2GetInstanceState(instanceId: string, returnAttr?: Array<string>, _options?: Configuration): Promise<InstanceState> {
        const result = this.api.v2GetInstanceState(instanceId, returnAttr, _options);
        return result.toPromise();
    }


}



import { ObservableModelsApi } from './ObservableAPI';

import { ModelsApiRequestFactory, ModelsApiResponseProcessor} from "../apis/ModelsApi";
export class PromiseModelsApi {
    private api: ObservableModelsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ModelsApiRequestFactory,
        responseProcessor?: ModelsApiResponseProcessor
    ) {
        this.api = new ObservableModelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Software for Model
     * @param model Model to list available software for
     */
    public v1GetModelSoftware(model: string, _options?: Configuration): Promise<Array<Firmware>> {
        const result = this.api.v1GetModelSoftware(model, _options);
        return result.toPromise();
    }

    /**
     * Get Supported Models
     */
    public v1GetModels(_options?: Configuration): Promise<Array<Model>> {
        const result = this.api.v1GetModels(_options);
        return result.toPromise();
    }


}



import { ObservableNetdumpApi } from './ObservableAPI';

import { NetdumpApiRequestFactory, NetdumpApiResponseProcessor} from "../apis/NetdumpApi";
export class PromiseNetdumpApi {
    private api: ObservableNetdumpApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetdumpApiRequestFactory,
        responseProcessor?: NetdumpApiResponseProcessor
    ) {
        this.api = new ObservableNetdumpApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Download a netdump pcap file
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdNetdumpPcapGet(instanceId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.v1InstancesInstanceIdNetdumpPcapGet(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Start Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     * @param netdumpFilter 
     */
    public v1StartNetdump(instanceId: string, netdumpFilter?: NetdumpFilter, _options?: Configuration): Promise<void> {
        const result = this.api.v1StartNetdump(instanceId, netdumpFilter, _options);
        return result.toPromise();
    }

    /**
     * Stop Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopNetdump(instanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StopNetdump(instanceId, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Project Authorized Key
     * @param projectId Project ID - uuid
     * @param projectKey Key to add
     */
    public v1AddProjectKey(projectId: string, projectKey: ProjectKey, _options?: Configuration): Promise<ProjectKey> {
        const result = this.api.v1AddProjectKey(projectId, projectKey, _options);
        return result.toPromise();
    }

    /**
     * Create a Project
     * @param project Project
     */
    public v1CreateProject(project: Project, _options?: Configuration): Promise<Project> {
        const result = this.api.v1CreateProject(project, _options);
        return result.toPromise();
    }

    /**
     * Delete a Project
     * @param projectId Project ID - uuid
     */
    public v1DeleteProject(projectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * Get a Project
     * @param projectId Project ID - uuid
     */
    public v1GetProject(projectId: string, _options?: Configuration): Promise<Project> {
        const result = this.api.v1GetProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * Get Instances in Project
     * @param projectId Project ID - uuid
     * @param name Filter by project name
     * @param returnAttr Attributes to include in instance return
     */
    public v1GetProjectInstances(projectId: string, name?: string, returnAttr?: Array<string>, _options?: Configuration): Promise<Array<Instance>> {
        const result = this.api.v1GetProjectInstances(projectId, name, returnAttr, _options);
        return result.toPromise();
    }

    /**
     * Get Project Authorized Keys
     * @param projectId Project ID - uuid
     */
    public v1GetProjectKeys(projectId: string, _options?: Configuration): Promise<Array<ProjectKey>> {
        const result = this.api.v1GetProjectKeys(projectId, _options);
        return result.toPromise();
    }

    /**
     * Get Project VPN Configuration
     * @param projectId Project ID - uuid
     * @param format VPN Config format
     */
    public v1GetProjectVpnConfig(projectId: string, format: 'ovpn', _options?: Configuration): Promise<string> {
        const result = this.api.v1GetProjectVpnConfig(projectId, format, _options);
        return result.toPromise();
    }

    /**
     * Get Projects
     * @param name Filter by project name
     * @param idsOnly Only include id of project in results
     */
    public v1GetProjects(name?: string, idsOnly?: boolean, _options?: Configuration): Promise<Array<Project>> {
        const result = this.api.v1GetProjects(name, idsOnly, _options);
        return result.toPromise();
    }

    /**
     * Delete Project Authorized Key
     * @param projectId Project ID - uuid
     * @param keyId Key ID - uuid
     */
    public v1RemoveProjectKey(projectId: string, keyId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RemoveProjectKey(projectId, keyId, _options);
        return result.toPromise();
    }

    /**
     * Update a Project
     * @param projectId Project ID - uuid
     * @param project Updated Project Settings
     */
    public v1UpdateProject(projectId: string, project: Project, _options?: Configuration): Promise<Project> {
        const result = this.api.v1UpdateProject(projectId, project, _options);
        return result.toPromise();
    }

    /**
     * Change Project Settings
     * @param projectId Project ID - uuid
     * @param projectSettings New settings
     */
    public v1UpdateProjectSettings(projectId: string, projectSettings: ProjectSettings, _options?: Configuration): Promise<void> {
        const result = this.api.v1UpdateProjectSettings(projectId, projectSettings, _options);
        return result.toPromise();
    }


}



import { ObservableRolesApi } from './ObservableAPI';

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class PromiseRolesApi {
    private api: ObservableRolesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add team role to project
     * @param projectId Project ID - uuid
     * @param teamId Team ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1AddTeamRoleToProject(projectId: string, teamId: string, roleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AddTeamRoleToProject(projectId, teamId, roleId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add user role to project
     * @param projectId Project ID - uuid
     * @param userId User ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1AddUserRoleToProject(projectId: string, userId: string, roleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AddUserRoleToProject(projectId, userId, roleId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove team role from project
     * @param projectId Project ID - uuid
     * @param teamId Team ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1RemoveTeamRoleFromProject(projectId: string, teamId: string, roleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RemoveTeamRoleFromProject(projectId, teamId, roleId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove user role from project
     * @param projectId Project ID - uuid
     * @param userId User ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1RemoveUserRoleFromProject(projectId: string, userId: string, roleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RemoveUserRoleFromProject(projectId, userId, roleId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Get all roles
     */
    public v1Roles(_options?: Configuration): Promise<Array<Role>> {
        const result = this.api.v1Roles(_options);
        return result.toPromise();
    }


}



import { ObservableSnapshotsApi } from './ObservableAPI';

import { SnapshotsApiRequestFactory, SnapshotsApiResponseProcessor} from "../apis/SnapshotsApi";
export class PromiseSnapshotsApi {
    private api: ObservableSnapshotsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SnapshotsApiRequestFactory,
        responseProcessor?: SnapshotsApiResponseProcessor
    ) {
        this.api = new ObservableSnapshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1CreateSnapshot(instanceId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1CreateSnapshot(instanceId, snapshotCreationOptions, _options);
        return result.toPromise();
    }

    /**
     * Delete a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1DeleteInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteInstanceSnapshot(instanceId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Snapshot
     * @param snapshotId Snapshot ID - uuid
     */
    public v1DeleteSnapshot(snapshotId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DeleteSnapshot(snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1GetInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1GetInstanceSnapshot(instanceId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Get Instance Snapshots
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceSnapshots(instanceId: string, _options?: Configuration): Promise<Array<Snapshot>> {
        const result = this.api.v1GetInstanceSnapshots(instanceId, _options);
        return result.toPromise();
    }

    /**
     * Get Snapshot
     * @param snapshotId Snapshot ID - uuid
     */
    public v1GetSnapshot(snapshotId: string, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1GetSnapshot(snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Rename a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1RenameInstanceSnapshot(instanceId: string, snapshotId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1RenameInstanceSnapshot(instanceId, snapshotId, snapshotCreationOptions, _options);
        return result.toPromise();
    }

    /**
     * Restore a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1RestoreInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RestoreInstanceSnapshot(instanceId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Rename a Snapshot
     * @param snapshotId Snapshot ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1SnapshotRename(snapshotId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Promise<Snapshot> {
        const result = this.api.v1SnapshotRename(snapshotId, snapshotCreationOptions, _options);
        return result.toPromise();
    }


}



import { ObservableStatusApi } from './ObservableAPI';

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class PromiseStatusApi {
    private api: ObservableStatusApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check if  API is ready for queries
     * API Status
     */
    public v1Ready(_options?: Configuration): Promise<void> {
        const result = this.api.v1Ready(_options);
        return result.toPromise();
    }


}



import { ObservableTeamsApi } from './ObservableAPI';

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class PromiseTeamsApi {
    private api: ObservableTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add user to team
     * @param teamId Team ID - uuid
     * @param userId User ID - uuid
     */
    public v1AddUserToTeam(teamId: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1AddUserToTeam(teamId, userId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove user from team
     * @param teamId Team ID - uuid
     * @param userId User ID - uuid
     */
    public v1RemoveUserFromTeam(teamId: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1RemoveUserFromTeam(teamId, userId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Update team
     * @param teamId Team ID - uuid
     * @param createTeam 
     */
    public v1TeamChange(teamId: string, createTeam: CreateTeam, _options?: Configuration): Promise<void> {
        const result = this.api.v1TeamChange(teamId, createTeam, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Create team
     * @param createTeam 
     */
    public v1TeamCreate(createTeam: CreateTeam, _options?: Configuration): Promise<TeamCreate> {
        const result = this.api.v1TeamCreate(createTeam, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Delete team
     * @param teamId Team ID - uuid
     */
    public v1TeamDelete(teamId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1TeamDelete(teamId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Get teams
     */
    public v1Teams(_options?: Configuration): Promise<Array<Team>> {
        const result = this.api.v1Teams(_options);
        return result.toPromise();
    }


}



import { ObservableTrialRequestsApi } from './ObservableAPI';

import { TrialRequestsApiRequestFactory, TrialRequestsApiResponseProcessor} from "../apis/TrialRequestsApi";
export class PromiseTrialRequestsApi {
    private api: ObservableTrialRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrialRequestsApiRequestFactory,
        responseProcessor?: TrialRequestsApiResponseProcessor
    ) {
        this.api = new ObservableTrialRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Subscriber Invite
     * Create Subscriber Invite
     * @param subscriberInvite Payload of Subscriber Invite
     */
    public v1CreateSubscriberInvite(subscriberInvite: SubscriberInvite, _options?: Configuration): Promise<SubscriberInvite> {
        const result = this.api.v1CreateSubscriberInvite(subscriberInvite, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create User
     * @param body User data
     */
    public v1CreateUser(body: any, _options?: Configuration): Promise<any> {
        const result = this.api.v1CreateUser(body, _options);
        return result.toPromise();
    }

    /**
     * Delete User
     * @param userId userId - uuid
     */
    public v1DeleteUser(userId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1DeleteUser(userId, _options);
        return result.toPromise();
    }

    /**
     * Send Password Reset Link Info
     * @param token Reset token
     */
    public v1GetResetLinkInfo(token: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1GetResetLinkInfo(token, _options);
        return result.toPromise();
    }

    /**
     * Reset User Password
     * @param passwordResetBody application/json
     */
    public v1ResetUserPassword(passwordResetBody: PasswordResetBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1ResetUserPassword(passwordResetBody, _options);
        return result.toPromise();
    }

    /**
     * Send Password Reset Link
     * @param resetLinkBody application/json
     */
    public v1SendUserResetLink(resetLinkBody: ResetLinkBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1SendUserResetLink(resetLinkBody, _options);
        return result.toPromise();
    }

    /**
     * Update User
     * @param userId userId - uuid
     * @param body User data
     */
    public v1UpdateUser(userId: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.v1UpdateUser(userId, body, _options);
        return result.toPromise();
    }

    /**
     * Consent to the current terms and conditions
     */
    public v1UserAgreeTerms(_options?: Configuration): Promise<AgreedAck> {
        const result = this.api.v1UserAgreeTerms(_options);
        return result.toPromise();
    }

    /**
     * Authenticated solely by the old-password.
     * Change User Password
     * @param passwordChangeBody 
     */
    public v1UsersChangePasswordPost(passwordChangeBody: PasswordChangeBody, _options?: Configuration): Promise<void> {
        const result = this.api.v1UsersChangePasswordPost(passwordChangeBody, _options);
        return result.toPromise();
    }

    /**
     * Log In
     * @param credentials Authorization data
     */
    public v1UsersLogin(credentials: Credentials, _options?: Configuration): Promise<Token> {
        const result = this.api.v1UsersLogin(credentials, _options);
        return result.toPromise();
    }


}



import { ObservableWebPlayerApi } from './ObservableAPI';

import { WebPlayerApiRequestFactory, WebPlayerApiResponseProcessor} from "../apis/WebPlayerApi";
export class PromiseWebPlayerApi {
    private api: ObservableWebPlayerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebPlayerApiRequestFactory,
        responseProcessor?: WebPlayerApiResponseProcessor
    ) {
        this.api = new ObservableWebPlayerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the list of allowed domains for all Webplayer sessions
     */
    public v1WebPlayerAllowedDomains(_options?: Configuration): Promise<WebPlayerSession> {
        const result = this.api.v1WebPlayerAllowedDomains(_options);
        return result.toPromise();
    }

    /**
     * Create a new Webplayer Session
     * @param webPlayerCreateSessionRequest Request Data
     */
    public v1WebPlayerCreateSession(webPlayerCreateSessionRequest: WebPlayerCreateSessionRequest, _options?: Configuration): Promise<WebPlayerSession> {
        const result = this.api.v1WebPlayerCreateSession(webPlayerCreateSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * Tear down a Webplayer Session
     * @param sessionId Webplayer Session identifier
     */
    public v1WebPlayerDestroySession(sessionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1WebPlayerDestroySession(sessionId, _options);
        return result.toPromise();
    }

    /**
     * List all Webplayer sessions
     */
    public v1WebPlayerListSessions(_options?: Configuration): Promise<Array<WebPlayerSession>> {
        const result = this.api.v1WebPlayerListSessions(_options);
        return result.toPromise();
    }

    /**
     * Retrieve Webplayer Session Information
     * @param sessionId Webplayer Session identifier
     */
    public v1WebPlayerSessionInfo(sessionId: string, _options?: Configuration): Promise<WebPlayerSession> {
        const result = this.api.v1WebPlayerSessionInfo(sessionId, _options);
        return result.toPromise();
    }


}



