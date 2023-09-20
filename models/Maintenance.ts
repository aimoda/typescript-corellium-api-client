/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.1-18421
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
export class Maintenance {
    /**
    * Maintenance message
    */
    'message'?: string | null;
    /**
    * Maintenance header
    */
    'header'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Maintenance.attributeTypeMap;
    }

    public constructor() {
    }
}
