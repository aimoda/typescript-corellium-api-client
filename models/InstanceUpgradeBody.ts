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
export class InstanceUpgradeBody {
    /**
    * iOS version
    */
    'os': string;
    /**
    * (optional) iOS build ID
    */
    'osbuild'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "os",
            "baseName": "os",
            "type": "string",
            "format": ""
        },
        {
            "name": "osbuild",
            "baseName": "osbuild",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InstanceUpgradeBody.attributeTypeMap;
    }

    public constructor() {
    }
}

