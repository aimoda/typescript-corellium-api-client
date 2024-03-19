/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 6.1.0-20784
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
export class TouchCurveInput {
    /**
    * Finger Positions
    */
    'start'?: any;
    /**
    * Finger Positions
    */
    'end'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "start",
            "baseName": "start",
            "type": "any",
            "format": "up to 10"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "any",
            "format": "up to 10"
        }    ];

    static getAttributeTypeMap() {
        return TouchCurveInput.attributeTypeMap;
    }

    public constructor() {
    }
}

