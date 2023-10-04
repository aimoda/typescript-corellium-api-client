/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.1-18421
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InstanceBootOptionsAdditionalTag } from '../models/InstanceBootOptionsAdditionalTag';
import { HttpFile } from '../http/http';

/**
* 
*/
export class InstanceBootOptions {
    /**
    * 
    */
    'bootArgs'?: string | null;
    /**
    * 
    */
    'restoreBootArgs'?: string | null;
    /**
    * Boot udid
    */
    'udid'?: string | null;
    /**
    * Assigned ECID
    */
    'ecid'?: string | null;
    /**
    * Random seed to provide to boot if any
    */
    'randomSeed'?: string | null;
    /**
    * Enable PAC
    */
    'pac'?: boolean | null;
    /**
    * Enable APRR
    */
    'aprr'?: boolean | null;
    /**
    * 
    */
    'additionalTags'?: Array<InstanceBootOptionsAdditionalTag> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bootArgs",
            "baseName": "bootArgs",
            "type": "string",
            "format": ""
        },
        {
            "name": "restoreBootArgs",
            "baseName": "restoreBootArgs",
            "type": "string",
            "format": ""
        },
        {
            "name": "udid",
            "baseName": "udid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "ecid",
            "baseName": "ecid",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "randomSeed",
            "baseName": "randomSeed",
            "type": "string",
            "format": ""
        },
        {
            "name": "pac",
            "baseName": "pac",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "aprr",
            "baseName": "aprr",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "additionalTags",
            "baseName": "additionalTags",
            "type": "Array<InstanceBootOptionsAdditionalTag>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InstanceBootOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

