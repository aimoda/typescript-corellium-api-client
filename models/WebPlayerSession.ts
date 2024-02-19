/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 6.0.0-20323
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
export class WebPlayerSession {
    /**
    * New Session Identifier
    */
    'identifier': string;
    /**
    * Session Token
    */
    'token': string;
    /**
    * Expiration in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'expiration': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebPlayerSession.attributeTypeMap;
    }

    public constructor() {
    }
}

