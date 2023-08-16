/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.2.0-17376
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
export class V1CreateHookParameters {
    /**
    * Label
    */
    'label': string;
    /**
    * Address
    */
    'address': string;
    /**
    * Patch
    */
    'patch': string;
    /**
    * Patch Type
    */
    'patchType': V1CreateHookParametersPatchTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "patch",
            "baseName": "patch",
            "type": "string",
            "format": ""
        },
        {
            "name": "patchType",
            "baseName": "patchType",
            "type": "V1CreateHookParametersPatchTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CreateHookParameters.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V1CreateHookParametersPatchTypeEnum = "csmfcc" | "csmfvm" ;

