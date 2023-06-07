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
export class UserError {
    /**
    * Error text
    */
    'error': string;
    /**
    * Error ID
    */
    'errorID': UserErrorErrorIDEnum;
    /**
    * Field associated with error
    */
    'field'?: string | null;

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
            "type": "UserErrorErrorIDEnum",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserError.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UserErrorErrorIDEnum = "UserError" ;

