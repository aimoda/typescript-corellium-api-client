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
export class RotateBody {
    /**
    * Desired orientation
    */
    'orientation': RotateBodyOrientationEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orientation",
            "baseName": "orientation",
            "type": "RotateBodyOrientationEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RotateBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RotateBodyOrientationEnum = "1" | "2" | "3" | "4" ;

