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
export class ProjectKey {
    /**
    * keyId
    */
    'identifier'?: string | null;
    /**
    * kind of key
    */
    'kind': ProjectKeyKindEnum;
    /**
    * projectId
    */
    'project'?: string | null;
    /**
    * The public key
    */
    'key': string;
    /**
    * Key fingerprint
    */
    'fingerprint'?: string | null;
    /**
    * Time of last update
    */
    'updatedAt'?: Date | null;
    /**
    * Time of creation
    */
    'createdAt'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "ProjectKeyKindEnum",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ProjectKey.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ProjectKeyKindEnum = "ssh" | "adb" ;

