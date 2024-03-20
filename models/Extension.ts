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
export class Extension {
    /**
    * Identifier
    */
    'identifier'?: string | null;
    /**
    * If true, instances requiring this extension can be created or started
    */
    'enabled'?: boolean | null;
    /**
    * Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'createdAt'?: string | null;
    /**
    * Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'updatedAt'?: string | null;
    /**
    * Image Id
    */
    'imageId'?: string | null;
    /**
    * State
    */
    'state'?: string | null;
    /**
    * Array of Flavor definitions
    */
    'flavors'?: Array<any> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageId",
            "baseName": "imageId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "flavors",
            "baseName": "flavors",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Extension.attributeTypeMap;
    }

    public constructor() {
    }
}

