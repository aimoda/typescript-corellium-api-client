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
export class SnapshotUser {
    /**
    * The email of the user.
    */
    'email': string;
    /**
    * The date when the invite was sent.
    */
    'inviteSentAt': number;
    /**
    * The timestamp.
    */
    'timestamp': number;
    /**
    * The user ID.
    */
    'userId': string;
    /**
    * The label.
    */
    'label': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "inviteSentAt",
            "baseName": "inviteSentAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SnapshotUser.attributeTypeMap;
    }

    public constructor() {
    }
}
