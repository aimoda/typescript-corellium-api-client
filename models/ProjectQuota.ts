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
export class ProjectQuota {
    /**
    * 
    */
    'cores'?: number | null;
    /**
    * 
    */
    'instances'?: number | null;
    /**
    * 
    */
    'ram'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cores",
            "baseName": "cores",
            "type": "number",
            "format": ""
        },
        {
            "name": "instances",
            "baseName": "instances",
            "type": "number",
            "format": ""
        },
        {
            "name": "ram",
            "baseName": "ram",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProjectQuota.attributeTypeMap;
    }

    public constructor() {
    }
}

