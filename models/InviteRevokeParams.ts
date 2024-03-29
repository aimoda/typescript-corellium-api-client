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

import { InviteRevokeParamsIds } from '../models/InviteRevokeParamsIds';
import { HttpFile } from '../http/http';

/**
* 
*/
export class InviteRevokeParams {
    'ids'?: InviteRevokeParamsIds | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ids",
            "baseName": "ids",
            "type": "InviteRevokeParamsIds",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InviteRevokeParams.attributeTypeMap;
    }

    public constructor() {
    }
}

