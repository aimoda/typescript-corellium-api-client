export * from '../models/Address';
export * from '../models/AgentApp';
export * from '../models/AgentAppReadyResponse';
export * from '../models/AgentAppStatus';
export * from '../models/AgentAppsList';
export * from '../models/AgentAppsStatusList';
export * from '../models/AgentError';
export * from '../models/AgentIcons';
export * from '../models/AgentInstallBody';
export * from '../models/AgentProfilesReturn';
export * from '../models/AgentSystemAdbAuth';
export * from '../models/AgentSystemGetPropBody';
export * from '../models/AgentValueReturn';
export * from '../models/AgreedAck';
export * from '../models/ApiConflictError';
export * from '../models/ApiError';
export * from '../models/ApiInternalConsistencyError';
export * from '../models/ApiNotFoundError';
export * from '../models/ApiToken';
export * from '../models/Bit';
export * from '../models/BtraceEnableOptions';
export * from '../models/Button';
export * from '../models/CouponOptions';
export * from '../models/CreateTeam';
export * from '../models/CreatedBy';
export * from '../models/Credentials';
export * from '../models/DomainOptions';
export * from '../models/Extension';
export * from '../models/Features';
export * from '../models/FileChanges';
export * from '../models/Firmware';
export * from '../models/GpioStateDefinition';
export * from '../models/GpiosState';
export * from '../models/GrantTrialRequestResponse';
export * from '../models/Hook';
export * from '../models/Image';
export * from '../models/Instance';
export * from '../models/InstanceAgentState';
export * from '../models/InstanceBootOptions';
export * from '../models/InstanceBootOptionsAdditionalTag';
export * from '../models/InstanceConsoleEndpoint';
export * from '../models/InstanceCreateOptions';
export * from '../models/InstanceInput';
export * from '../models/InstanceNetdumpState';
export * from '../models/InstanceNetmonState';
export * from '../models/InstanceReturn';
export * from '../models/InstanceServices';
export * from '../models/InstanceStartOptions';
export * from '../models/InstanceState';
export * from '../models/InstanceStopOptions';
export * from '../models/InstanceUpgradeBody';
export * from '../models/Invitation';
export * from '../models/InviteRevokeParams';
export * from '../models/InviteRevokeParamsIds';
export * from '../models/Kcrange';
export * from '../models/KernelTask';
export * from '../models/KernelThread';
export * from '../models/MediaPlayBody';
export * from '../models/Model';
export * from '../models/ModelSoftware';
export * from '../models/NetdumpFilter';
export * from '../models/PasswordChangeBody';
export * from '../models/PasswordResetBody';
export * from '../models/PatchInstanceOptions';
export * from '../models/PeripheralsData';
export * from '../models/Plan';
export * from '../models/Project';
export * from '../models/ProjectKey';
export * from '../models/ProjectQuota';
export * from '../models/ProjectSettings';
export * from '../models/ProjectUsage';
export * from '../models/ProxyConfig';
export * from '../models/RateInfo';
export * from '../models/ResetLinkBody';
export * from '../models/Role';
export * from '../models/RotateBody';
export * from '../models/Snapshot';
export * from '../models/SnapshotCreationOptions';
export * from '../models/SnapshotStatus';
export * from '../models/SubscriberInvite';
export * from '../models/Team';
export * from '../models/TeamCreate';
export * from '../models/TextInput';
export * from '../models/Token';
export * from '../models/TouchCurveInput';
export * from '../models/TouchInput';
export * from '../models/Trial';
export * from '../models/TrialExtension';
export * from '../models/TrialRequestMetadata';
export * from '../models/TrialRequestOptions';
export * from '../models/UpdateExtension';
export * from '../models/User';
export * from '../models/UserError';
export * from '../models/V1CreateHookParameters';
export * from '../models/V1LoadExtensionParameters';
export * from '../models/V1SetStateBody';
export * from '../models/ValidationError';
export * from '../models/VolumeOptions';
export * from '../models/VpnDefinition';
export * from '../models/WebPlayerCreateSessionRequest';
export * from '../models/WebPlayerSession';

import { Address } from '../models/Address';
import { AgentApp } from '../models/AgentApp';
import { AgentAppReadyResponse } from '../models/AgentAppReadyResponse';
import { AgentAppStatus } from '../models/AgentAppStatus';
import { AgentAppsList } from '../models/AgentAppsList';
import { AgentAppsStatusList } from '../models/AgentAppsStatusList';
import { AgentError , AgentErrorErrorIDEnum    } from '../models/AgentError';
import { AgentIcons } from '../models/AgentIcons';
import { AgentInstallBody } from '../models/AgentInstallBody';
import { AgentProfilesReturn } from '../models/AgentProfilesReturn';
import { AgentSystemAdbAuth } from '../models/AgentSystemAdbAuth';
import { AgentSystemGetPropBody } from '../models/AgentSystemGetPropBody';
import { AgentValueReturn } from '../models/AgentValueReturn';
import { AgreedAck } from '../models/AgreedAck';
import { ApiConflictError , ApiConflictErrorErrorIDEnum    } from '../models/ApiConflictError';
import { ApiError } from '../models/ApiError';
import { ApiInternalConsistencyError } from '../models/ApiInternalConsistencyError';
import { ApiNotFoundError } from '../models/ApiNotFoundError';
import { ApiToken } from '../models/ApiToken';
import { Bit } from '../models/Bit';
import { BtraceEnableOptions } from '../models/BtraceEnableOptions';
import { Button } from '../models/Button';
import { CouponOptions, CouponOptionsTypeEnum     } from '../models/CouponOptions';
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
import { Hook    , HookPatchTypeEnum       } from '../models/Hook';
import { Image   , ImageTypeEnum         } from '../models/Image';
import { Instance                              } from '../models/Instance';
import { InstanceAgentState } from '../models/InstanceAgentState';
import { InstanceBootOptions } from '../models/InstanceBootOptions';
import { InstanceBootOptionsAdditionalTag } from '../models/InstanceBootOptionsAdditionalTag';
import { InstanceConsoleEndpoint } from '../models/InstanceConsoleEndpoint';
import { InstanceCreateOptions } from '../models/InstanceCreateOptions';
import { InstanceInput } from '../models/InstanceInput';
import { InstanceNetdumpState } from '../models/InstanceNetdumpState';
import { InstanceNetmonState } from '../models/InstanceNetmonState';
import { InstanceReturn   } from '../models/InstanceReturn';
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
import { PatchInstanceOptions , PatchInstanceOptionsStateEnum     } from '../models/PatchInstanceOptions';
import { PeripheralsData } from '../models/PeripheralsData';
import { Plan } from '../models/Plan';
import { Project } from '../models/Project';
import { ProjectKey , ProjectKeyKindEnum        } from '../models/ProjectKey';
import { ProjectQuota } from '../models/ProjectQuota';
import { ProjectSettings } from '../models/ProjectSettings';
import { ProjectUsage } from '../models/ProjectUsage';
import { ProxyConfig } from '../models/ProxyConfig';
import { RateInfo } from '../models/RateInfo';
import { ResetLinkBody } from '../models/ResetLinkBody';
import { Role, RoleRoleEnum     } from '../models/Role';
import { RotateBody, RotateBodyOrientationEnum   } from '../models/RotateBody';
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
import { UserError , UserErrorErrorIDEnum    } from '../models/UserError';
import { V1CreateHookParameters   , V1CreateHookParametersPatchTypeEnum   } from '../models/V1CreateHookParameters';
import { V1LoadExtensionParameters } from '../models/V1LoadExtensionParameters';
import { V1SetStateBody  } from '../models/V1SetStateBody';
import { ValidationError , ValidationErrorErrorIDEnum    } from '../models/ValidationError';
import { VolumeOptions } from '../models/VolumeOptions';
import { VpnDefinition } from '../models/VpnDefinition';
import { WebPlayerCreateSessionRequest } from '../models/WebPlayerCreateSessionRequest';
import { WebPlayerSession } from '../models/WebPlayerSession';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AgentErrorErrorIDEnum",
    "ApiConflictErrorErrorIDEnum",
    "Bit",
    "Button",
    "CouponOptionsTypeEnum",
    "HookPatchTypeEnum",
    "ImageTypeEnum",
    "InstanceBootOptionsAdditionalTag",
    "InstanceState",
    "PatchInstanceOptionsStateEnum",
    "ProjectKeyKindEnum",
    "RoleRoleEnum",
    "RotateBodyOrientationEnum",
    "UserErrorErrorIDEnum",
    "V1CreateHookParametersPatchTypeEnum",
    "ValidationErrorErrorIDEnum",
]);

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AgentApp": AgentApp,
    "AgentAppReadyResponse": AgentAppReadyResponse,
    "AgentAppStatus": AgentAppStatus,
    "AgentAppsList": AgentAppsList,
    "AgentAppsStatusList": AgentAppsStatusList,
    "AgentError": AgentError,
    "AgentIcons": AgentIcons,
    "AgentInstallBody": AgentInstallBody,
    "AgentProfilesReturn": AgentProfilesReturn,
    "AgentSystemAdbAuth": AgentSystemAdbAuth,
    "AgentSystemGetPropBody": AgentSystemGetPropBody,
    "AgentValueReturn": AgentValueReturn,
    "AgreedAck": AgreedAck,
    "ApiConflictError": ApiConflictError,
    "ApiError": ApiError,
    "ApiInternalConsistencyError": ApiInternalConsistencyError,
    "ApiNotFoundError": ApiNotFoundError,
    "ApiToken": ApiToken,
    "BtraceEnableOptions": BtraceEnableOptions,
    "CouponOptions": CouponOptions,
    "CreateTeam": CreateTeam,
    "CreatedBy": CreatedBy,
    "Credentials": Credentials,
    "DomainOptions": DomainOptions,
    "Extension": Extension,
    "Features": Features,
    "FileChanges": FileChanges,
    "Firmware": Firmware,
    "GpioStateDefinition": GpioStateDefinition,
    "GpiosState": GpiosState,
    "GrantTrialRequestResponse": GrantTrialRequestResponse,
    "Hook": Hook,
    "Image": Image,
    "Instance": Instance,
    "InstanceAgentState": InstanceAgentState,
    "InstanceBootOptions": InstanceBootOptions,
    "InstanceConsoleEndpoint": InstanceConsoleEndpoint,
    "InstanceCreateOptions": InstanceCreateOptions,
    "InstanceInput": InstanceInput,
    "InstanceNetdumpState": InstanceNetdumpState,
    "InstanceNetmonState": InstanceNetmonState,
    "InstanceReturn": InstanceReturn,
    "InstanceServices": InstanceServices,
    "InstanceStartOptions": InstanceStartOptions,
    "InstanceStopOptions": InstanceStopOptions,
    "InstanceUpgradeBody": InstanceUpgradeBody,
    "Invitation": Invitation,
    "InviteRevokeParams": InviteRevokeParams,
    "InviteRevokeParamsIds": InviteRevokeParamsIds,
    "Kcrange": Kcrange,
    "KernelTask": KernelTask,
    "KernelThread": KernelThread,
    "MediaPlayBody": MediaPlayBody,
    "Model": Model,
    "ModelSoftware": ModelSoftware,
    "NetdumpFilter": NetdumpFilter,
    "PasswordChangeBody": PasswordChangeBody,
    "PasswordResetBody": PasswordResetBody,
    "PatchInstanceOptions": PatchInstanceOptions,
    "PeripheralsData": PeripheralsData,
    "Plan": Plan,
    "Project": Project,
    "ProjectKey": ProjectKey,
    "ProjectQuota": ProjectQuota,
    "ProjectSettings": ProjectSettings,
    "ProjectUsage": ProjectUsage,
    "ProxyConfig": ProxyConfig,
    "RateInfo": RateInfo,
    "ResetLinkBody": ResetLinkBody,
    "Role": Role,
    "RotateBody": RotateBody,
    "Snapshot": Snapshot,
    "SnapshotCreationOptions": SnapshotCreationOptions,
    "SnapshotStatus": SnapshotStatus,
    "SubscriberInvite": SubscriberInvite,
    "Team": Team,
    "TeamCreate": TeamCreate,
    "TextInput": TextInput,
    "Token": Token,
    "TouchCurveInput": TouchCurveInput,
    "TouchInput": TouchInput,
    "Trial": Trial,
    "TrialExtension": TrialExtension,
    "TrialRequestMetadata": TrialRequestMetadata,
    "TrialRequestOptions": TrialRequestOptions,
    "UpdateExtension": UpdateExtension,
    "User": User,
    "UserError": UserError,
    "V1CreateHookParameters": V1CreateHookParameters,
    "V1LoadExtensionParameters": V1LoadExtensionParameters,
    "V1SetStateBody": V1SetStateBody,
    "ValidationError": ValidationError,
    "VolumeOptions": VolumeOptions,
    "VpnDefinition": VpnDefinition,
    "WebPlayerCreateSessionRequest": WebPlayerCreateSessionRequest,
    "WebPlayerSession": WebPlayerSession,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
