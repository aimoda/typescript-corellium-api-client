/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.0-18254
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* 
*/
export class Hook {
    /**
    * Identifier
    */
    'identifier'?: string | null;
    /**
    * Label
    */
    'label'?: string | null;
    /**
    * Address
    */
    'address'?: string | null;
    /**
    * Patch
    */
    'patch'?: string | null;
    /**
    * Patch Type
    */
    'patchType'?: HookPatchTypeEnum | null;
    /**
    * If true, instances can call required hooks
    */
    'enabled'?: boolean | null;
    /**
    * Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'createdAt'?: string | null;
    /**
    * Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'updatedAt'?: string | null;
    /**
    * Instance Id
    */
    'instanceId'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "patch",
            "baseName": "patch",
            "type": "string",
            "format": ""
        },
        {
            "name": "patchType",
            "baseName": "patchType",
            "type": "HookPatchTypeEnum",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "instanceId",
            "baseName": "instanceId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return Hook.attributeTypeMap;
    }

    public constructor() {
    }
}


export type HookPatchTypeEnum = "csmfcc" | "csmfvm" ;

