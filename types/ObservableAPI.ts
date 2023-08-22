import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";
export class ObservableAgentApi {
    private requestFactory: AgentApiRequestFactory;
    private responseProcessor: AgentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentApiResponseProcessor();
    }

    /**
     * Check if App subsystem is ready
     * @param instanceId Instance ID - uuid
     */
    public v1AgentAppReady(instanceId: string, _options?: Configuration): Observable<AgentAppReadyResponse> {
        const requestContextPromise = this.requestFactory.v1AgentAppReady(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentAppReady(rsp)));
            }));
    }

    /**
     * Delete a File on VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     */
    public v1AgentDeleteFile(instanceId: string, filePath: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentDeleteFile(instanceId, filePath, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentDeleteFile(rsp)));
            }));
    }

    /**
     * Download a File from VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     */
    public v1AgentGetFile(instanceId: string, filePath: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.v1AgentGetFile(instanceId, filePath, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentGetFile(rsp)));
            }));
    }

    /**
     * Returns a temporary random filename that is guranteed to be unique on the VMs filesystem at the time of invocation of this method.
     * Get the path for a new temp file
     * @param instanceId Instance ID - uuid
     */
    public v1AgentGetTempFilename(instanceId: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.v1AgentGetTempFilename(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentGetTempFilename(rsp)));
            }));
    }

    /**
     * Installs the app located at path which must be present on the VM filesystem
     * Install App at path
     * @param instanceId Instance ID - uuid
     * @param agentInstallBody App parameters
     */
    public v1AgentInstallApp(instanceId: string, agentInstallBody: AgentInstallBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentInstallApp(instanceId, agentInstallBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentInstallApp(rsp)));
            }));
    }

    /**
     * Install a Profile to VM
     * @param instanceId Instance ID - uuid
     * @param body Profile to Install
     */
    public v1AgentInstallProfile(instanceId: string, body: HttpFile, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentInstallProfile(instanceId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentInstallProfile(rsp)));
            }));
    }

    /**
     * Kill an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public v1AgentKillApp(instanceId: string, bundleId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1AgentKillApp(instanceId, bundleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentKillApp(rsp)));
            }));
    }

    /**
     * List App Icons
     * @param instanceId Instance ID - uuid
     * @param bundleID App Bundle ID
     */
    public v1AgentListAppIcons(instanceId: string, bundleID: Array<string>, _options?: Configuration): Observable<Array<AgentIcons>> {
        const requestContextPromise = this.requestFactory.v1AgentListAppIcons(instanceId, bundleID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentListAppIcons(rsp)));
            }));
    }

    /**
     * List Apps
     * @param instanceId Instance ID - uuid
     */
    public v1AgentListApps(instanceId: string, _options?: Configuration): Observable<AgentAppsList> {
        const requestContextPromise = this.requestFactory.v1AgentListApps(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentListApps(rsp)));
            }));
    }

    /**
     * List Apps Status
     * @param instanceId Instance ID - uuid
     */
    public v1AgentListAppsStatus(instanceId: string, _options?: Configuration): Observable<AgentAppsList> {
        const requestContextPromise = this.requestFactory.v1AgentListAppsStatus(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentListAppsStatus(rsp)));
            }));
    }

    /**
     * List Profiles
     * @param instanceId Instance ID - uuid
     */
    public v1AgentListProfiles(instanceId: string, _options?: Configuration): Observable<AgentProfilesReturn> {
        const requestContextPromise = this.requestFactory.v1AgentListProfiles(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentListProfiles(rsp)));
            }));
    }

    /**
     * Run an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public v1AgentRunApp(instanceId: string, bundleId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1AgentRunApp(instanceId, bundleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentRunApp(rsp)));
            }));
    }

    /**
     * Change Attrs of a File on VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM
     * @param fileChanges New attrs
     */
    public v1AgentSetFileAttributes(instanceId: string, filePath: string, fileChanges: FileChanges, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentSetFileAttributes(instanceId, filePath, fileChanges, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSetFileAttributes(rsp)));
            }));
    }

    /**
     * Get ADB Auth Setting (AOSP only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemGetAdbAuth(instanceId: string, _options?: Configuration): Observable<AgentSystemAdbAuth> {
        const requestContextPromise = this.requestFactory.v1AgentSystemGetAdbAuth(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemGetAdbAuth(rsp)));
            }));
    }

    /**
     * Get IP of eth0 (AOSP only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemGetNetwork(instanceId: string, _options?: Configuration): Observable<AgentValueReturn> {
        const requestContextPromise = this.requestFactory.v1AgentSystemGetNetwork(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemGetNetwork(rsp)));
            }));
    }

    /**
     * Get System Property (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param agentSystemGetPropBody Parameters
     */
    public v1AgentSystemGetProp(instanceId: string, agentSystemGetPropBody: AgentSystemGetPropBody, _options?: Configuration): Observable<AgentValueReturn> {
        const requestContextPromise = this.requestFactory.v1AgentSystemGetProp(instanceId, agentSystemGetPropBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemGetProp(rsp)));
            }));
    }

    /**
     * Install OpenGApps (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param body Installation parameters
     */
    public v1AgentSystemInstallOpenGApps(instanceId: string, body: any, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentSystemInstallOpenGApps(instanceId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemInstallOpenGApps(rsp)));
            }));
    }

    /**
     * Lock Device (iOS Only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemLock(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentSystemLock(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemLock(rsp)));
            }));
    }

    /**
     * Set ADB Auth Setting (AOSP only)
     * @param instanceId Instance ID - uuid
     * @param agentSystemAdbAuth Desired ADB Auth Setting
     */
    public v1AgentSystemSetAdbAuth(instanceId: string, agentSystemAdbAuth: AgentSystemAdbAuth, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentSystemSetAdbAuth(instanceId, agentSystemAdbAuth, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemSetAdbAuth(rsp)));
            }));
    }

    /**
     * Instruct VM to halt
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemShutdown(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentSystemShutdown(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemShutdown(rsp)));
            }));
    }

    /**
     * Unlock Device (iOS Only)
     * @param instanceId Instance ID - uuid
     */
    public v1AgentSystemUnlock(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentSystemUnlock(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentSystemUnlock(rsp)));
            }));
    }

    /**
     * Uninstall an App
     * @param instanceId Instance ID - uuid
     * @param bundleId App Bundle ID
     */
    public v1AgentUninstallApp(instanceId: string, bundleId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1AgentUninstallApp(instanceId, bundleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentUninstallApp(rsp)));
            }));
    }

    /**
     * Uninstall a Profile from VM
     * @param instanceId Instance ID - uuid
     * @param profileId Instance ID - uuid
     */
    public v1AgentUninstallProfile(instanceId: string, profileId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentUninstallProfile(instanceId, profileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentUninstallProfile(rsp)));
            }));
    }

    /**
     * Upload a file to VM
     * @param instanceId Instance ID - uuid
     * @param filePath File Path on VM to write to
     * @param body Uploaded File Contents
     */
    public v1AgentUploadFile(instanceId: string, filePath: string, body: HttpFile, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AgentUploadFile(instanceId, filePath, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AgentUploadFile(rsp)));
            }));
    }

}

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * Log In
     * @param body Authorization data ( Credentials|ApiToken )
     */
    public v1AuthLogin(body: any, _options?: Configuration): Observable<Token> {
        const requestContextPromise = this.requestFactory.v1AuthLogin(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AuthLogin(rsp)));
            }));
    }

}

import { CoreTraceApiRequestFactory, CoreTraceApiResponseProcessor} from "../apis/CoreTraceApi";
export class ObservableCoreTraceApi {
    private requestFactory: CoreTraceApiRequestFactory;
    private responseProcessor: CoreTraceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CoreTraceApiRequestFactory,
        responseProcessor?: CoreTraceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CoreTraceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CoreTraceApiResponseProcessor();
    }

    /**
     * Clear CoreTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearCoreTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearCoreTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearCoreTrace(rsp)));
            }));
    }

    /**
     * Get Running Threads (CoreTrace)
     * @param instanceId Instance ID - uuid
     */
    public v1ListThreads(instanceId: string, _options?: Configuration): Observable<Array<KernelTask>> {
        const requestContextPromise = this.requestFactory.v1ListThreads(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ListThreads(rsp)));
            }));
    }

    /**
     * Start CoreTrace on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1StartCoreTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartCoreTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartCoreTrace(rsp)));
            }));
    }

    /**
     * Stop CoreTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopCoreTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopCoreTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopCoreTrace(rsp)));
            }));
    }

}

import { DomainAuthProviderApiRequestFactory, DomainAuthProviderApiResponseProcessor} from "../apis/DomainAuthProviderApi";
export class ObservableDomainAuthProviderApi {
    private requestFactory: DomainAuthProviderApiRequestFactory;
    private responseProcessor: DomainAuthProviderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainAuthProviderApiRequestFactory,
        responseProcessor?: DomainAuthProviderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainAuthProviderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainAuthProviderApiResponseProcessor();
    }

    /**
     * Create a new auth provider for a domain
     * @param domainId Domain ID - uuid
     * @param domainAuthProviderRequest Request Data
     */
    public v1CreateDomainAuthProvider(domainId: string, domainAuthProviderRequest: DomainAuthProviderRequest, _options?: Configuration): Observable<DomainAuthProviderResponse> {
        const requestContextPromise = this.requestFactory.v1CreateDomainAuthProvider(domainId, domainAuthProviderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateDomainAuthProvider(rsp)));
            }));
    }

    /**
     * Delete an auth provider from a domain
     * @param domainId Domain ID - uuid
     * @param providerId Provider ID - uuid
     */
    public v1DeleteDomainAuthProvider(domainId: string, providerId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1DeleteDomainAuthProvider(domainId, providerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteDomainAuthProvider(rsp)));
            }));
    }

    /**
     * Return all configured auth providers for a domain (including globally configured providers)
     * @param domainId Domain ID - uuid
     */
    public v1GetDomainAuthProviders(domainId: string, _options?: Configuration): Observable<Array<DomainAuthProviderResponse>> {
        const requestContextPromise = this.requestFactory.v1GetDomainAuthProviders(domainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetDomainAuthProviders(rsp)));
            }));
    }

    /**
     * Update an auth provider for a domain
     * @param domainId Domain ID - uuid
     * @param providerId Provider ID - uuid
     * @param domainAuthProviderRequest Request Data
     */
    public v1UpdateDomainAuthProvider(domainId: string, providerId: string, domainAuthProviderRequest: DomainAuthProviderRequest, _options?: Configuration): Observable<DomainAuthProviderResponse> {
        const requestContextPromise = this.requestFactory.v1UpdateDomainAuthProvider(domainId, providerId, domainAuthProviderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UpdateDomainAuthProvider(rsp)));
            }));
    }

}

import { HyperTraceApiRequestFactory, HyperTraceApiResponseProcessor} from "../apis/HyperTraceApi";
export class ObservableHyperTraceApi {
    private requestFactory: HyperTraceApiRequestFactory;
    private responseProcessor: HyperTraceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HyperTraceApiRequestFactory,
        responseProcessor?: HyperTraceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HyperTraceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HyperTraceApiResponseProcessor();
    }

    /**
     * Pre-authorize an btrace download
     * @param instanceId Instance ID - uuid
     */
    public v1BtracePreauthorize(instanceId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1BtracePreauthorize(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BtracePreauthorize(rsp)));
            }));
    }

    /**
     * Clear HyperTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearHyperTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearHyperTrace(rsp)));
            }));
    }

    /**
     * Get Kernel extension ranges
     * @param instanceId Instance ID - uuid
     */
    public v1Kcrange(instanceId: string, _options?: Configuration): Observable<Array<Kcrange>> {
        const requestContextPromise = this.requestFactory.v1Kcrange(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1Kcrange(rsp)));
            }));
    }

    /**
     * Start HyperTrace on an instance
     * @param instanceId Instance ID - uuid
     * @param btraceEnableOptions 
     */
    public v1StartHyperTrace(instanceId: string, btraceEnableOptions: BtraceEnableOptions, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartHyperTrace(instanceId, btraceEnableOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartHyperTrace(rsp)));
            }));
    }

    /**
     * Stop HyperTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopHyperTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopHyperTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopHyperTrace(rsp)));
            }));
    }

}

import { HypervisorHooksApiRequestFactory, HypervisorHooksApiResponseProcessor} from "../apis/HypervisorHooksApi";
export class ObservableHypervisorHooksApi {
    private requestFactory: HypervisorHooksApiRequestFactory;
    private responseProcessor: HypervisorHooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HypervisorHooksApiRequestFactory,
        responseProcessor?: HypervisorHooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HypervisorHooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HypervisorHooksApiResponseProcessor();
    }

    /**
     * Clear Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTraceHooks(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearHyperTraceHooks(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearHyperTraceHooks(rsp)));
            }));
    }

    /**
     * Create hypervisor hook for Instance
     * @param instanceId Instance ID - uuid
     * @param v1CreateHookParameters application/json
     */
    public v1CreateHook(instanceId: string, v1CreateHookParameters: V1CreateHookParameters, _options?: Configuration): Observable<Hook> {
        const requestContextPromise = this.requestFactory.v1CreateHook(instanceId, v1CreateHookParameters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateHook(rsp)));
            }));
    }

    /**
     * Delete an existing hypervisor hook
     * @param hookId Hook ID
     */
    public v1DeleteHook(hookId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteHook(hookId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteHook(rsp)));
            }));
    }

    /**
     * Execute Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ExecuteHyperTraceHooks(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ExecuteHyperTraceHooks(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExecuteHyperTraceHooks(rsp)));
            }));
    }

    /**
     * Get hypervisor hook by id
     * @param hookId Hook Id
     */
    public v1GetHookById(hookId: string, _options?: Configuration): Observable<Hook> {
        const requestContextPromise = this.requestFactory.v1GetHookById(hookId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetHookById(rsp)));
            }));
    }

    /**
     * Get all hypervisor hooks for Instance
     * @param instanceId Instance ID - uuid
     * @param limit limit for pagination results, defaults to 20
     * @param offset offset for pagination results, defaults to 0
     * @param sort sort ASC or DESC, defaults to DESC
     */
    public v1GetHooks(instanceId: string, limit?: number, offset?: number, sort?: 'ASC' | 'DESC', _options?: Configuration): Observable<Array<Hook>> {
        const requestContextPromise = this.requestFactory.v1GetHooks(instanceId, limit, offset, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetHooks(rsp)));
            }));
    }

    /**
     * Update an existing hypervisor hook
     * @param hookId Hook ID
     * @param v1CreateHookParameters application/json
     */
    public v1UpdateHook(hookId: string, v1CreateHookParameters: V1CreateHookParameters, _options?: Configuration): Observable<Hook> {
        const requestContextPromise = this.requestFactory.v1UpdateHook(hookId, v1CreateHookParameters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UpdateHook(rsp)));
            }));
    }

}

import { ImagesApiRequestFactory, ImagesApiResponseProcessor} from "../apis/ImagesApi";
export class ObservableImagesApi {
    private requestFactory: ImagesApiRequestFactory;
    private responseProcessor: ImagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesApiRequestFactory,
        responseProcessor?: ImagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImagesApiResponseProcessor();
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
    public v1CreateImage(type: string, encoding: string, encapsulated?: boolean, name?: string, project?: string, instance?: string, file?: HttpFile, _options?: Configuration): Observable<Image> {
        const requestContextPromise = this.requestFactory.v1CreateImage(type, encoding, encapsulated, name, project, instance, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateImage(rsp)));
            }));
    }

    /**
     * Delete Image
     * @param imageId Image ID - uuid
     */
    public v1DeleteImage(imageId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteImage(imageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteImage(rsp)));
            }));
    }

    /**
     * Get Image Metadata
     * @param imageId Image ID - uuid
     */
    public v1GetImage(imageId: string, _options?: Configuration): Observable<Image> {
        const requestContextPromise = this.requestFactory.v1GetImage(imageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetImage(rsp)));
            }));
    }

    /**
     * Get all Images Metadata
     * @param project Optionally filter by project - uuid
     */
    public v1GetImages(project?: string, _options?: Configuration): Observable<Array<Image>> {
        const requestContextPromise = this.requestFactory.v1GetImages(project, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetImages(rsp)));
            }));
    }

    /**
     * If the active project has enough remaining quota, updates an Image with the contents of the request body.
     * Upload Image Data
     * @param imageId Image ID - uuid
     * @param body Uploaded Image
     */
    public v1UploadImageData(imageId: string, body: string, _options?: Configuration): Observable<Image> {
        const requestContextPromise = this.requestFactory.v1UploadImageData(imageId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UploadImageData(rsp)));
            }));
    }

}

import { InstancesApiRequestFactory, InstancesApiResponseProcessor} from "../apis/InstancesApi";
export class ObservableInstancesApi {
    private requestFactory: InstancesApiRequestFactory;
    private responseProcessor: InstancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InstancesApiRequestFactory,
        responseProcessor?: InstancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InstancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InstancesApiResponseProcessor();
    }

    /**
     * Pre-authorize an btrace download
     * @param instanceId Instance ID - uuid
     */
    public v1BtracePreauthorize(instanceId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1BtracePreauthorize(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BtracePreauthorize(rsp)));
            }));
    }

    /**
     * Clear CoreTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearCoreTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearCoreTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearCoreTrace(rsp)));
            }));
    }

    /**
     * Clear HyperTrace logs
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearHyperTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearHyperTrace(rsp)));
            }));
    }

    /**
     * Clear Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ClearHyperTraceHooks(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearHyperTraceHooks(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearHyperTraceHooks(rsp)));
            }));
    }

    /**
     * Clear Panics
     * @param instanceId Instance ID - uuid
     */
    public v1ClearInstancePanics(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ClearInstancePanics(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ClearInstancePanics(rsp)));
            }));
    }

    /**
     * Create Instance
     * @param instanceCreateOptions The vm definition to create
     */
    public v1CreateInstance(instanceCreateOptions: InstanceCreateOptions, _options?: Configuration): Observable<InstanceReturn> {
        const requestContextPromise = this.requestFactory.v1CreateInstance(instanceCreateOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateInstance(rsp)));
            }));
    }

    /**
     * Create Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1CreateSnapshot(instanceId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1CreateSnapshot(instanceId, snapshotCreationOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateSnapshot(rsp)));
            }));
    }

    /**
     * Remove Instance
     * @param instanceId Instance ID
     */
    public v1DeleteInstance(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteInstance(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteInstance(rsp)));
            }));
    }

    /**
     * Delete a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1DeleteInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteInstanceSnapshot(instanceId, snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Disable an exposed port on an instance for device access.
     * @param instanceId Instance ID - uuid
     */
    public v1DisableExposePort(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DisableExposePort(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DisableExposePort(rsp)));
            }));
    }

    /**
     * Enable an exposed port on an instance for device access.
     * @param instanceId Instance ID - uuid
     */
    public v1EnableExposePort(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1EnableExposePort(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EnableExposePort(rsp)));
            }));
    }

    /**
     * Execute Hooks on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1ExecuteHyperTraceHooks(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ExecuteHyperTraceHooks(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExecuteHyperTraceHooks(rsp)));
            }));
    }

    /**
     * Get Instance
     * @param instanceId Instance ID
     * @param returnAttr Attributes to include in instance return
     */
    public v1GetInstance(instanceId: string, returnAttr?: Array<string>, _options?: Configuration): Observable<Instance> {
        const requestContextPromise = this.requestFactory.v1GetInstance(instanceId, returnAttr, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstance(rsp)));
            }));
    }

    /**
     * Get console websocket URL
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceConsole(instanceId: string, _options?: Configuration): Observable<InstanceConsoleEndpoint> {
        const requestContextPromise = this.requestFactory.v1GetInstanceConsole(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceConsole(rsp)));
            }));
    }

    /**
     * Get Console Log
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceConsoleLog(instanceId: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.v1GetInstanceConsoleLog(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceConsoleLog(rsp)));
            }));
    }

    /**
     * Get Instance GPIOs
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceGpios(instanceId: string, _options?: Configuration): Observable<GpiosState> {
        const requestContextPromise = this.requestFactory.v1GetInstanceGpios(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceGpios(rsp)));
            }));
    }

    /**
     * Get Panics
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstancePanics(instanceId: string, _options?: Configuration): Observable<Array<any>> {
        const requestContextPromise = this.requestFactory.v1GetInstancePanics(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstancePanics(rsp)));
            }));
    }

    /**
     * Get Instance Peripherals
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstancePeripherals(instanceId: string, _options?: Configuration): Observable<PeripheralsData> {
        const requestContextPromise = this.requestFactory.v1GetInstancePeripherals(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstancePeripherals(rsp)));
            }));
    }

    /**
     * Returns the cost, in microcents, for the instance in the on and off state. Instances are charged $0.25 / day for storage (off) and $0.25 per core per hour (on).
     * Get rate information
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceRate(instanceId: string, _options?: Configuration): Observable<RateInfo> {
        const requestContextPromise = this.requestFactory.v1GetInstanceRate(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceRate(rsp)));
            }));
    }

    /**
     * Get Instance Screenshot
     * @param instanceId Instance ID - uuid
     * @param format New peripherals state
     * @param scale Screenshot scale 1:N
     */
    public v1GetInstanceScreenshot(instanceId: string, format: 'png' | 'jpeg', scale?: number, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.v1GetInstanceScreenshot(instanceId, format, scale, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceScreenshot(rsp)));
            }));
    }

    /**
     * Get Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1GetInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1GetInstanceSnapshot(instanceId, snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Get Instance Snapshots
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceSnapshots(instanceId: string, _options?: Configuration): Observable<Array<Snapshot>> {
        const requestContextPromise = this.requestFactory.v1GetInstanceSnapshots(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceSnapshots(rsp)));
            }));
    }

    /**
     * Get Instances
     * @param name Optionally filter by instance name
     * @param returnAttr Attributes to include in instance return
     */
    public v1GetInstances(name?: string, returnAttr?: Array<string>, _options?: Configuration): Observable<Array<Instance>> {
        const requestContextPromise = this.requestFactory.v1GetInstances(name, returnAttr, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstances(rsp)));
            }));
    }

    /**
     * Receive a message on an iOS vm
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdMessagePost(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1InstancesInstanceIdMessagePost(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InstancesInstanceIdMessagePost(rsp)));
            }));
    }

    /**
     * Download a netdump pcap file
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdNetdumpPcapGet(instanceId: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.v1InstancesInstanceIdNetdumpPcapGet(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InstancesInstanceIdNetdumpPcapGet(rsp)));
            }));
    }

    /**
     * Download a Network Monitor pcap file
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdNetworkMonitorPcapGet(instanceId: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.v1InstancesInstanceIdNetworkMonitorPcapGet(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InstancesInstanceIdNetworkMonitorPcapGet(rsp)));
            }));
    }

    /**
     * Get Kernel extension ranges
     * @param instanceId Instance ID - uuid
     */
    public v1Kcrange(instanceId: string, _options?: Configuration): Observable<Array<Kcrange>> {
        const requestContextPromise = this.requestFactory.v1Kcrange(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1Kcrange(rsp)));
            }));
    }

    /**
     * Get Running Threads (CoreTrace)
     * @param instanceId Instance ID - uuid
     */
    public v1ListThreads(instanceId: string, _options?: Configuration): Observable<Array<KernelTask>> {
        const requestContextPromise = this.requestFactory.v1ListThreads(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ListThreads(rsp)));
            }));
    }

    /**
     * Start playing media
     * @param instanceId Instance ID - uuid
     * @param mediaPlayBody Request Body
     */
    public v1MediaPlay(instanceId: string, mediaPlayBody: MediaPlayBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1MediaPlay(instanceId, mediaPlayBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MediaPlay(rsp)));
            }));
    }

    /**
     * Stop playing media
     * @param instanceId Instance ID - uuid
     */
    public v1MediaStop(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1MediaStop(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MediaStop(rsp)));
            }));
    }

    /**
     * Update Instance
     * @param instanceId Instance ID
     * @param patchInstanceOptions 
     */
    public v1PatchInstance(instanceId: string, patchInstanceOptions: PatchInstanceOptions, _options?: Configuration): Observable<Instance> {
        const requestContextPromise = this.requestFactory.v1PatchInstance(instanceId, patchInstanceOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PatchInstance(rsp)));
            }));
    }

    /**
     * Pause an Instance
     * @param instanceId Instance ID - uuid
     */
    public v1PauseInstance(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1PauseInstance(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PauseInstance(rsp)));
            }));
    }

    /**
     * Sends a touch or button event to the VM.  - Buttons (or keys) to be held during the input are specified as an array of strings, each string must be either a single ascii character or one of the following keywords:   - VM Buttons: finger, homeButton, holdButton, volumeUp, volumeDown, ringerSwitch, backButton, overviewButton   - Keyboard Buttons: again, alt, alterase, apostrophe, back, backslash, backspace, bassboost, bookmarks, bsp, calc, camera, cancel, caps, capslock, chat, close, closecd, comma, compose, computer, config, connect, copy, ctrl, cut, cyclewindows, dashboard, del, delete, deletefile, dot, down, edit, eject, ejectclose, email, end, enter, equal, esc, escape, exit, f1, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f2, f20, f21, f22, f23, f24, f3, f4, f5, f6, f7, f8, f9, fastfwd, file, finance, find, forward, front, grave, hangeul, hanja, help, henkan, home, homepage, hp, hrgn, ins, insert, iso, k102, kp0, kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8, kp9, kpasterisk, kpcomma, kpdot, kpenter, kpequal, kpjpcomma, kpleftparen, kpminus, kpplus, kpplusminus, kprightparen, kpslash, ktkn, ktknhrgn, left, leftalt, leftbrace, leftctrl, leftmeta, leftshift, linefeed, macro, mail, menu, meta, minus, move, msdos, muhenkan, mute, new, next, numlock, open, pagedown, pageup, paste, pause, pausecd, pgdn, pgup, phone, play, playcd, playpause, power, previous, print, prog1, prog2, prog3, prog4, props, question, record, redo, refresh, return, rewind, right, rightalt, rightbrace, rightctrl, rightmeta, rightshift, ro, rotate, scale, screenlock, scrolldown, scrolllock, scrollup, search, semicolon, sendfile, setup, shift, shop, slash, sleep, sound, space, sport, stop, stopcd, suspend, sysrq, tab, undo, up, voldown, volup, wakeup, www, xfer, yen, zkhk
     * Provide Instance Input
     * @param instanceId Instance ID - uuid
     * @param instanceInput The input to send to the VM
     */
    public v1PostInstanceInput(instanceId: string, instanceInput: Array<InstanceInput>, _options?: Configuration): Observable<number> {
        const requestContextPromise = this.requestFactory.v1PostInstanceInput(instanceId, instanceInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PostInstanceInput(rsp)));
            }));
    }

    /**
     * Reboot an Instance
     * @param instanceId Instance ID - uuid
     */
    public v1RebootInstance(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RebootInstance(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RebootInstance(rsp)));
            }));
    }

    /**
     * Rename a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1RenameInstanceSnapshot(instanceId: string, snapshotId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1RenameInstanceSnapshot(instanceId, snapshotId, snapshotCreationOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RenameInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Restore backup
     * @param instanceId Instance ID - uuid
     * @param body Restore backup data
     */
    public v1RestoreBackup(instanceId: string, body?: any, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RestoreBackup(instanceId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RestoreBackup(rsp)));
            }));
    }

    /**
     * Restore a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1RestoreInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RestoreInstanceSnapshot(instanceId, snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RestoreInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Rotate device to orientation.  Accepted orientations: 1. Portrait 2. Portrait vertically inverted (up-side-down) 3. Landscape with top of the device to the left 4. Landscape with top of the device to the right
     * Rotate device to specified orientation
     * @param instanceId 
     * @param rotateBody 
     */
    public v1RotateInstance(instanceId: string, rotateBody: RotateBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RotateInstance(instanceId, rotateBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RotateInstance(rsp)));
            }));
    }

    /**
     * Set Instance GPIOs
     * @param instanceId Instance ID - uuid
     * @param gpiosState New GPIO state
     */
    public v1SetInstanceGpios(instanceId: string, gpiosState: GpiosState, _options?: Configuration): Observable<GpiosState> {
        const requestContextPromise = this.requestFactory.v1SetInstanceGpios(instanceId, gpiosState, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SetInstanceGpios(rsp)));
            }));
    }

    /**
     * Set Instance Peripherals
     * @param instanceId Instance ID - uuid
     * @param peripheralsData New peripherals state
     */
    public v1SetInstancePeripherals(instanceId: string, peripheralsData: PeripheralsData, _options?: Configuration): Observable<PeripheralsData> {
        const requestContextPromise = this.requestFactory.v1SetInstancePeripherals(instanceId, peripheralsData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SetInstancePeripherals(rsp)));
            }));
    }

    /**
     * Set state of Instance
     * @param instanceId Instance ID - uuid
     * @param v1SetStateBody Desired State
     */
    public v1SetInstanceState(instanceId: string, v1SetStateBody: V1SetStateBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1SetInstanceState(instanceId, v1SetStateBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SetInstanceState(rsp)));
            }));
    }

    /**
     * Start CoreTrace on an instance
     * @param instanceId Instance ID - uuid
     */
    public v1StartCoreTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartCoreTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartCoreTrace(rsp)));
            }));
    }

    /**
     * Start HyperTrace on an instance
     * @param instanceId Instance ID - uuid
     * @param btraceEnableOptions 
     */
    public v1StartHyperTrace(instanceId: string, btraceEnableOptions: BtraceEnableOptions, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartHyperTrace(instanceId, btraceEnableOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartHyperTrace(rsp)));
            }));
    }

    /**
     * Start an Instance
     * @param instanceId Instance ID - uuid
     * @param instanceStartOptions Start options
     */
    public v1StartInstance(instanceId: string, instanceStartOptions?: InstanceStartOptions, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartInstance(instanceId, instanceStartOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartInstance(rsp)));
            }));
    }

    /**
     * Start Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     * @param netdumpFilter 
     */
    public v1StartNetdump(instanceId: string, netdumpFilter?: NetdumpFilter, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartNetdump(instanceId, netdumpFilter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartNetdump(rsp)));
            }));
    }

    /**
     * Start Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StartNetworkMonitor(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartNetworkMonitor(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartNetworkMonitor(rsp)));
            }));
    }

    /**
     * Stop CoreTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopCoreTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopCoreTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopCoreTrace(rsp)));
            }));
    }

    /**
     * Stop HyperTrace on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopHyperTrace(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopHyperTrace(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopHyperTrace(rsp)));
            }));
    }

    /**
     * Stop an Instance
     * @param instanceId Instance ID - uuid
     * @param instanceStopOptions Stop options
     */
    public v1StopInstance(instanceId: string, instanceStopOptions?: InstanceStopOptions, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopInstance(instanceId, instanceStopOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopInstance(rsp)));
            }));
    }

    /**
     * Stop Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopNetdump(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopNetdump(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopNetdump(rsp)));
            }));
    }

    /**
     * Stop Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopNetworkMonitor(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopNetworkMonitor(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopNetworkMonitor(rsp)));
            }));
    }

    /**
     * Unpause an Instance
     * @param instanceId Instance ID - uuid
     */
    public v1UnpauseInstance(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1UnpauseInstance(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UnpauseInstance(rsp)));
            }));
    }

    /**
     * Upgrade iOS version
     * @param instanceId 
     * @param instanceUpgradeBody 
     */
    public v1UpgradeInstance(instanceId: string, instanceUpgradeBody: InstanceUpgradeBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1UpgradeInstance(instanceId, instanceUpgradeBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UpgradeInstance(rsp)));
            }));
    }

    /**
     * Recommended SSH Command for Quick Connect
     * @param instanceId Instance ID - uuid
     */
    public v2GetInstanceQuickConnectCommand(instanceId: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.v2GetInstanceQuickConnectCommand(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GetInstanceQuickConnectCommand(rsp)));
            }));
    }

    /**
     * Get state of Instance
     * @param instanceId Instance ID - uuid
     * @param returnAttr The attributes to return.
     */
    public v2GetInstanceState(instanceId: string, returnAttr?: Array<string>, _options?: Configuration): Observable<InstanceState> {
        const requestContextPromise = this.requestFactory.v2GetInstanceState(instanceId, returnAttr, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GetInstanceState(rsp)));
            }));
    }

}

import { LicensingApiRequestFactory, LicensingApiResponseProcessor} from "../apis/LicensingApi";
export class ObservableLicensingApi {
    private requestFactory: LicensingApiRequestFactory;
    private responseProcessor: LicensingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LicensingApiRequestFactory,
        responseProcessor?: LicensingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LicensingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LicensingApiResponseProcessor();
    }

    /**
     * Get all supported features for user
     */
    public v1GetSupportedFeatures(_options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.v1GetSupportedFeatures(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetSupportedFeatures(rsp)));
            }));
    }

}

import { ModelsApiRequestFactory, ModelsApiResponseProcessor} from "../apis/ModelsApi";
export class ObservableModelsApi {
    private requestFactory: ModelsApiRequestFactory;
    private responseProcessor: ModelsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ModelsApiRequestFactory,
        responseProcessor?: ModelsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ModelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ModelsApiResponseProcessor();
    }

    /**
     * Get Software for Model
     * @param model Model to list available software for
     */
    public v1GetModelSoftware(model: string, _options?: Configuration): Observable<Array<Firmware>> {
        const requestContextPromise = this.requestFactory.v1GetModelSoftware(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetModelSoftware(rsp)));
            }));
    }

    /**
     * Get Supported Models
     */
    public v1GetModels(_options?: Configuration): Observable<Array<Model>> {
        const requestContextPromise = this.requestFactory.v1GetModels(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetModels(rsp)));
            }));
    }

}

import { NetdumpApiRequestFactory, NetdumpApiResponseProcessor} from "../apis/NetdumpApi";
export class ObservableNetdumpApi {
    private requestFactory: NetdumpApiRequestFactory;
    private responseProcessor: NetdumpApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NetdumpApiRequestFactory,
        responseProcessor?: NetdumpApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NetdumpApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NetdumpApiResponseProcessor();
    }

    /**
     * Download a netdump pcap file
     * @param instanceId Instance ID - uuid
     */
    public v1InstancesInstanceIdNetdumpPcapGet(instanceId: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.v1InstancesInstanceIdNetdumpPcapGet(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InstancesInstanceIdNetdumpPcapGet(rsp)));
            }));
    }

    /**
     * Start Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     * @param netdumpFilter 
     */
    public v1StartNetdump(instanceId: string, netdumpFilter?: NetdumpFilter, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StartNetdump(instanceId, netdumpFilter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StartNetdump(rsp)));
            }));
    }

    /**
     * Stop Enhanced Network Monitor on an instance.
     * @param instanceId Instance ID - uuid
     */
    public v1StopNetdump(instanceId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1StopNetdump(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1StopNetdump(rsp)));
            }));
    }

}

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class ObservableProjectsApi {
    private requestFactory: ProjectsApiRequestFactory;
    private responseProcessor: ProjectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectsApiResponseProcessor();
    }

    /**
     * Add Project Authorized Key
     * @param projectId Project ID - uuid
     * @param projectKey Key to add
     */
    public v1AddProjectKey(projectId: string, projectKey: ProjectKey, _options?: Configuration): Observable<ProjectKey> {
        const requestContextPromise = this.requestFactory.v1AddProjectKey(projectId, projectKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AddProjectKey(rsp)));
            }));
    }

    /**
     * Create a Project
     * @param project Project
     */
    public v1CreateProject(project: Project, _options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.v1CreateProject(project, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateProject(rsp)));
            }));
    }

    /**
     * Delete a Project
     * @param projectId Project ID - uuid
     */
    public v1DeleteProject(projectId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteProject(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteProject(rsp)));
            }));
    }

    /**
     * Get a Project
     * @param projectId Project ID - uuid
     */
    public v1GetProject(projectId: string, _options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.v1GetProject(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetProject(rsp)));
            }));
    }

    /**
     * Get Instances in Project
     * @param projectId Project ID - uuid
     * @param name Filter by project name
     * @param returnAttr Attributes to include in instance return
     */
    public v1GetProjectInstances(projectId: string, name?: string, returnAttr?: Array<string>, _options?: Configuration): Observable<Array<Instance>> {
        const requestContextPromise = this.requestFactory.v1GetProjectInstances(projectId, name, returnAttr, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetProjectInstances(rsp)));
            }));
    }

    /**
     * Get Project Authorized Keys
     * @param projectId Project ID - uuid
     */
    public v1GetProjectKeys(projectId: string, _options?: Configuration): Observable<Array<ProjectKey>> {
        const requestContextPromise = this.requestFactory.v1GetProjectKeys(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetProjectKeys(rsp)));
            }));
    }

    /**
     * Get Project VPN Configuration
     * @param projectId Project ID - uuid
     * @param format VPN Config format
     */
    public v1GetProjectVpnConfig(projectId: string, format: 'ovpn', _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.v1GetProjectVpnConfig(projectId, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetProjectVpnConfig(rsp)));
            }));
    }

    /**
     * Get Projects
     * @param name Filter by project name
     * @param idsOnly Only include id of project in results
     */
    public v1GetProjects(name?: string, idsOnly?: boolean, _options?: Configuration): Observable<Array<Project>> {
        const requestContextPromise = this.requestFactory.v1GetProjects(name, idsOnly, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetProjects(rsp)));
            }));
    }

    /**
     * Delete Project Authorized Key
     * @param projectId Project ID - uuid
     * @param keyId Key ID - uuid
     */
    public v1RemoveProjectKey(projectId: string, keyId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RemoveProjectKey(projectId, keyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RemoveProjectKey(rsp)));
            }));
    }

    /**
     * Update a Project
     * @param projectId Project ID - uuid
     * @param project Updated Project Settings
     */
    public v1UpdateProject(projectId: string, project: Project, _options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.v1UpdateProject(projectId, project, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UpdateProject(rsp)));
            }));
    }

    /**
     * Change Project Settings
     * @param projectId Project ID - uuid
     * @param projectSettings New settings
     */
    public v1UpdateProjectSettings(projectId: string, projectSettings: ProjectSettings, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1UpdateProjectSettings(projectId, projectSettings, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UpdateProjectSettings(rsp)));
            }));
    }

}

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class ObservableRolesApi {
    private requestFactory: RolesApiRequestFactory;
    private responseProcessor: RolesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RolesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RolesApiResponseProcessor();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add team role to project
     * @param projectId Project ID - uuid
     * @param teamId Team ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1AddTeamRoleToProject(projectId: string, teamId: string, roleId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AddTeamRoleToProject(projectId, teamId, roleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AddTeamRoleToProject(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add user role to project
     * @param projectId Project ID - uuid
     * @param userId User ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1AddUserRoleToProject(projectId: string, userId: string, roleId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AddUserRoleToProject(projectId, userId, roleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AddUserRoleToProject(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove team role from project
     * @param projectId Project ID - uuid
     * @param teamId Team ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1RemoveTeamRoleFromProject(projectId: string, teamId: string, roleId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RemoveTeamRoleFromProject(projectId, teamId, roleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RemoveTeamRoleFromProject(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove user role from project
     * @param projectId Project ID - uuid
     * @param userId User ID - uuid
     * @param roleId Role ID - uuid
     */
    public v1RemoveUserRoleFromProject(projectId: string, userId: string, roleId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RemoveUserRoleFromProject(projectId, userId, roleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RemoveUserRoleFromProject(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Get all roles
     */
    public v1Roles(_options?: Configuration): Observable<Array<Role>> {
        const requestContextPromise = this.requestFactory.v1Roles(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1Roles(rsp)));
            }));
    }

}

import { SnapshotsApiRequestFactory, SnapshotsApiResponseProcessor} from "../apis/SnapshotsApi";
export class ObservableSnapshotsApi {
    private requestFactory: SnapshotsApiRequestFactory;
    private responseProcessor: SnapshotsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SnapshotsApiRequestFactory,
        responseProcessor?: SnapshotsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SnapshotsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SnapshotsApiResponseProcessor();
    }

    /**
     * Create Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1CreateSnapshot(instanceId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1CreateSnapshot(instanceId, snapshotCreationOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateSnapshot(rsp)));
            }));
    }

    /**
     * Delete a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1DeleteInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteInstanceSnapshot(instanceId, snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Delete a Snapshot
     * @param snapshotId Snapshot ID - uuid
     */
    public v1DeleteSnapshot(snapshotId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DeleteSnapshot(snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteSnapshot(rsp)));
            }));
    }

    /**
     * Get Instance Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1GetInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1GetInstanceSnapshot(instanceId, snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Get Instance Snapshots
     * @param instanceId Instance ID - uuid
     */
    public v1GetInstanceSnapshots(instanceId: string, _options?: Configuration): Observable<Array<Snapshot>> {
        const requestContextPromise = this.requestFactory.v1GetInstanceSnapshots(instanceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetInstanceSnapshots(rsp)));
            }));
    }

    /**
     * Get Snapshot
     * @param snapshotId Snapshot ID - uuid
     */
    public v1GetSnapshot(snapshotId: string, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1GetSnapshot(snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetSnapshot(rsp)));
            }));
    }

    /**
     * Rename a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1RenameInstanceSnapshot(instanceId: string, snapshotId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1RenameInstanceSnapshot(instanceId, snapshotId, snapshotCreationOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RenameInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Restore a Snapshot
     * @param instanceId Instance ID - uuid
     * @param snapshotId Snapshot ID - uuid
     */
    public v1RestoreInstanceSnapshot(instanceId: string, snapshotId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RestoreInstanceSnapshot(instanceId, snapshotId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RestoreInstanceSnapshot(rsp)));
            }));
    }

    /**
     * Rename a Snapshot
     * @param snapshotId Snapshot ID - uuid
     * @param snapshotCreationOptions 
     */
    public v1SnapshotRename(snapshotId: string, snapshotCreationOptions: SnapshotCreationOptions, _options?: Configuration): Observable<Snapshot> {
        const requestContextPromise = this.requestFactory.v1SnapshotRename(snapshotId, snapshotCreationOptions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SnapshotRename(rsp)));
            }));
    }

}

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class ObservableStatusApi {
    private requestFactory: StatusApiRequestFactory;
    private responseProcessor: StatusApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusApiResponseProcessor();
    }

    /**
     * Check if  API is ready for queries
     * API Status
     */
    public v1Ready(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1Ready(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1Ready(rsp)));
            }));
    }

}

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class ObservableTeamsApi {
    private requestFactory: TeamsApiRequestFactory;
    private responseProcessor: TeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamsApiResponseProcessor();
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Add user to team
     * @param teamId Team ID - uuid
     * @param userId User ID - uuid
     */
    public v1AddUserToTeam(teamId: string, userId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1AddUserToTeam(teamId, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AddUserToTeam(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Remove user from team
     * @param teamId Team ID - uuid
     * @param userId User ID - uuid
     */
    public v1RemoveUserFromTeam(teamId: string, userId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1RemoveUserFromTeam(teamId, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RemoveUserFromTeam(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Update team
     * @param teamId Team ID - uuid
     * @param createTeam 
     */
    public v1TeamChange(teamId: string, createTeam: CreateTeam, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1TeamChange(teamId, createTeam, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TeamChange(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Create team
     * @param createTeam 
     */
    public v1TeamCreate(createTeam: CreateTeam, _options?: Configuration): Observable<TeamCreate> {
        const requestContextPromise = this.requestFactory.v1TeamCreate(createTeam, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TeamCreate(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Delete team
     * @param teamId Team ID - uuid
     */
    public v1TeamDelete(teamId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1TeamDelete(teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TeamDelete(rsp)));
            }));
    }

    /**
     * This endpoint is available for Enterprise accounts only
     * Get teams
     */
    public v1Teams(_options?: Configuration): Observable<Array<Team>> {
        const requestContextPromise = this.requestFactory.v1Teams(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1Teams(rsp)));
            }));
    }

}

import { TrialRequestsApiRequestFactory, TrialRequestsApiResponseProcessor} from "../apis/TrialRequestsApi";
export class ObservableTrialRequestsApi {
    private requestFactory: TrialRequestsApiRequestFactory;
    private responseProcessor: TrialRequestsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TrialRequestsApiRequestFactory,
        responseProcessor?: TrialRequestsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TrialRequestsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TrialRequestsApiResponseProcessor();
    }

    /**
     * Create Subscriber Invite
     * Create Subscriber Invite
     * @param subscriberInvite Payload of Subscriber Invite
     */
    public v1CreateSubscriberInvite(subscriberInvite: SubscriberInvite, _options?: Configuration): Observable<SubscriberInvite> {
        const requestContextPromise = this.requestFactory.v1CreateSubscriberInvite(subscriberInvite, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateSubscriberInvite(rsp)));
            }));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Create User
     * @param body User data
     */
    public v1CreateUser(body: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1CreateUser(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreateUser(rsp)));
            }));
    }

    /**
     * Delete User
     * @param userId userId - uuid
     */
    public v1DeleteUser(userId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1DeleteUser(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeleteUser(rsp)));
            }));
    }

    /**
     * Send Password Reset Link Info
     * @param token Reset token
     */
    public v1GetResetLinkInfo(token: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1GetResetLinkInfo(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetResetLinkInfo(rsp)));
            }));
    }

    /**
     * Reset User Password
     * @param passwordResetBody application/json
     */
    public v1ResetUserPassword(passwordResetBody: PasswordResetBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1ResetUserPassword(passwordResetBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ResetUserPassword(rsp)));
            }));
    }

    /**
     * Send Password Reset Link
     * @param resetLinkBody application/json
     */
    public v1SendUserResetLink(resetLinkBody: ResetLinkBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1SendUserResetLink(resetLinkBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SendUserResetLink(rsp)));
            }));
    }

    /**
     * Update User
     * @param userId userId - uuid
     * @param body User data
     */
    public v1UpdateUser(userId: string, body: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1UpdateUser(userId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UpdateUser(rsp)));
            }));
    }

    /**
     * Consent to the current terms and conditions
     */
    public v1UserAgreeTerms(_options?: Configuration): Observable<AgreedAck> {
        const requestContextPromise = this.requestFactory.v1UserAgreeTerms(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserAgreeTerms(rsp)));
            }));
    }

    /**
     * Authenticated solely by the old-password.
     * Change User Password
     * @param passwordChangeBody 
     */
    public v1UsersChangePasswordPost(passwordChangeBody: PasswordChangeBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1UsersChangePasswordPost(passwordChangeBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersChangePasswordPost(rsp)));
            }));
    }

    /**
     * Log In
     * @param credentials Authorization data
     */
    public v1UsersLogin(credentials: Credentials, _options?: Configuration): Observable<Token> {
        const requestContextPromise = this.requestFactory.v1UsersLogin(credentials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersLogin(rsp)));
            }));
    }

}
