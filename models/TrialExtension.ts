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
export class TrialExtension {
    /**
    * how many additional days?
    */
    'duration'?: number | null;
    /**
    * why does the user want more time?
    */
    'reason'?: string | null;
    /**
    * 
    */
    'denied'?: boolean | null;
    /**
    * explanation for why the request was denied
    */
    'deniedReason'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "denied",
            "baseName": "denied",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deniedReason",
            "baseName": "deniedReason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TrialExtension.attributeTypeMap;
    }

    public constructor() {
    }
}

