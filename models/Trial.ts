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
export class Trial {
    /**
    * Maintenance message
    */
    'defaultDuration'?: number | null;
    /**
    * Maintenance header
    */
    'defaultHours'?: number | null;
    /**
    * Maintenance header
    */
    'defaultDevices'?: number | null;
    /**
    * Maintenance header
    */
    'defaultCores'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultDuration",
            "baseName": "defaultDuration",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultHours",
            "baseName": "defaultHours",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultDevices",
            "baseName": "defaultDevices",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultCores",
            "baseName": "defaultCores",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Trial.attributeTypeMap;
    }

    public constructor() {
    }
}

