/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.0-18254
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AgentApp } from '../models/AgentApp';
import { HttpFile } from '../http/http';

/**
* 
*/
export class AgentAppsList {
    /**
    * 
    */
    'apps'?: Array<AgentApp> | null;
    /**
    * bundleID of frontmost app or empty string if none are frontmost
    */
    'frontmost'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apps",
            "baseName": "apps",
            "type": "Array<AgentApp>",
            "format": ""
        },
        {
            "name": "frontmost",
            "baseName": "frontmost",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentAppsList.attributeTypeMap;
    }

    public constructor() {
    }
}

