/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.0.0-17089
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
export class VolumeOptions {
    /**
    * GB
    */
    'allocate'?: number | null;
    /**
    * 
    */
    'partitions'?: Array<any> | null;
    /**
    * 
    */
    'computeNode'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allocate",
            "baseName": "allocate",
            "type": "number",
            "format": ""
        },
        {
            "name": "partitions",
            "baseName": "partitions",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "computeNode",
            "baseName": "computeNode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VolumeOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

