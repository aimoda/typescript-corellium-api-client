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
export class Logging {
    /**
    * Denotes whether it\'s in development
    */
    'development'?: boolean | null;
    /**
    * Denotes whether to throw warnings
    */
    'throwWarnings'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "development",
            "baseName": "development",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "throwWarnings",
            "baseName": "throwWarnings",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Logging.attributeTypeMap;
    }

    public constructor() {
    }
}

