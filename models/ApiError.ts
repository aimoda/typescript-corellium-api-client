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
export class ApiError {
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
        return ApiError.attributeTypeMap;
    }

    public constructor() {
    }
}

