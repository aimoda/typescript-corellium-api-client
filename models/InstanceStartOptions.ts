/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 4.3.1-16664
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
export class InstanceStartOptions {
    /**
    * Start device paused
    */
    'paused'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InstanceStartOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

