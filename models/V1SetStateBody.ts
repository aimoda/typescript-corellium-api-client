/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 6.0.0-20323
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InstanceState } from '../models/InstanceState';
import { HttpFile } from '../http/http';

/**
* 
*/
export class V1SetStateBody {
    'state': InstanceState;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "state",
            "baseName": "state",
            "type": "InstanceState",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SetStateBody.attributeTypeMap;
    }

    public constructor() {
    }
}



