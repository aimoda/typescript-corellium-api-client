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

import { User } from '../models/User';
import { HttpFile } from '../http/http';

/**
* 
*/
export class Team {
    /**
    * Team ID
    */
    'id': string;
    /**
    * Team Label
    */
    'label': string;
    /**
    * Users
    */
    'users'?: Array<User> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<User>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Team.attributeTypeMap;
    }

    public constructor() {
    }
}

