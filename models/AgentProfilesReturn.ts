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
export class AgentProfilesReturn {
    /**
    * 
    */
    'profiles': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentProfilesReturn.attributeTypeMap;
    }

    public constructor() {
    }
}

