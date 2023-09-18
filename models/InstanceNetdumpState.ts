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
export class InstanceNetdumpState {
    /**
    * 
    */
    'hash'?: string | null;
    /**
    * 
    */
    'info'?: string | null;
    /**
    * 
    */
    'enabled'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InstanceNetdumpState.attributeTypeMap;
    }

    public constructor() {
    }
}

