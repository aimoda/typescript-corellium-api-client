/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.7.1-19698
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
export class Kcrange {
    /**
    * Kernel Extension
    */
    'kext'?: string | null;
    /**
    * Range
    */
    'range'?: Array<string> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kext",
            "baseName": "kext",
            "type": "string",
            "format": ""
        },
        {
            "name": "range",
            "baseName": "range",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Kcrange.attributeTypeMap;
    }

    public constructor() {
    }
}

