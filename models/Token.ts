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
export class Token {
    /**
    * 
    */
    'token': string;
    /**
    * Token expiration
    */
    'expiration'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Token.attributeTypeMap;
    }

    public constructor() {
    }
}

