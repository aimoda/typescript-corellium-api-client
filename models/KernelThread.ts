/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.6.0-19122
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
export class KernelThread {
    /**
    * Kernel Thread ID
    */
    'kernelId'?: string | null;
    /**
    * Task ID
    */
    'tid'?: number | null;
    /**
    * Array of stack addresses
    */
    'stack'?: Array<string> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kernelId",
            "baseName": "kernelId",
            "type": "string",
            "format": "uint64_t"
        },
        {
            "name": "tid",
            "baseName": "tid",
            "type": "number",
            "format": ""
        },
        {
            "name": "stack",
            "baseName": "stack",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KernelThread.attributeTypeMap;
    }

    public constructor() {
    }
}

