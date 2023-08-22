/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.2.0-17376
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
export class ApiToken {
    /**
    * 
    */
    'apiToken': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiToken",
            "baseName": "apiToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiToken.attributeTypeMap;
    }

    public constructor() {
    }
}

