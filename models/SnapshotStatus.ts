/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.5.0-18750
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
export class SnapshotStatus {
    /**
    * 
    */
    'task'?: string | null;
    /**
    * 
    */
    'created'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "task",
            "baseName": "task",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SnapshotStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

