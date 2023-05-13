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
export class PasswordChangeBody {
    /**
    * userId
    */
    'user': string;
    /**
    * old password
    */
    'oldPassword': string;
    /**
    * new password
    */
    'newPassword': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "oldPassword",
            "baseName": "old-password",
            "type": "string",
            "format": ""
        },
        {
            "name": "newPassword",
            "baseName": "new-password",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PasswordChangeBody.attributeTypeMap;
    }

    public constructor() {
    }
}

