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
export class ApiInternalConsistencyError {
    /**
    * Error text
    */
    'error': string;
    /**
    * Error ID
    */
    'errorID': string;
    /**
    * Upstream error description
    */
    'originalError'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorID",
            "baseName": "errorID",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalError",
            "baseName": "originalError",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiInternalConsistencyError.attributeTypeMap;
    }

    public constructor() {
    }
}

