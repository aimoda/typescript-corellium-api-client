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
export class AgentSystemGetPropBody {
    /**
    * 
    */
    'property': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "property",
            "baseName": "property",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentSystemGetPropBody.attributeTypeMap;
    }

    public constructor() {
    }
}

