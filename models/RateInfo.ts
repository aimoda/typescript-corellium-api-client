/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 4.3.1-16664
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
export class RateInfo {
    /**
    * The amount per second, in microcents (USD), that this instance charges to be running.
    */
    'onRateMicrocents'?: number | null;
    /**
    * The amount per second, in microcents (USD), that this instance charges to be stored.
    */
    'offRateMicrocents'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "onRateMicrocents",
            "baseName": "onRateMicrocents",
            "type": "number",
            "format": ""
        },
        {
            "name": "offRateMicrocents",
            "baseName": "offRateMicrocents",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RateInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

