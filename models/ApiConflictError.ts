/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.5.0-18750
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
export class ApiConflictError {
    /**
    * Error text
    */
    'error': string;
    /**
    * Error ID
    */
    'errorID': ApiConflictErrorErrorIDEnum;
    /**
    * Object that is conflicted with
    */
    'object'?: any | null;

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
            "type": "ApiConflictErrorErrorIDEnum",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiConflictError.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiConflictErrorErrorIDEnum = "Conflict" ;

