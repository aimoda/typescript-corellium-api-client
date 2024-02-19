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

import { HttpFile } from '../http/http';

/**
* 
*/
export class Model {
    /**
    * 
    */
    'type': string;
    /**
    * 
    */
    'name': string;
    /**
    * 
    */
    'flavor': string;
    /**
    * 
    */
    'description'?: string | null;
    /**
    * 
    */
    'model': string;
    /**
    * 
    */
    'boardConfig'?: string | null;
    /**
    * 
    */
    'platform'?: string | null;
    /**
    * 
    */
    'cpid'?: number | null;
    /**
    * 
    */
    'bdid'?: number | null;
    /**
    * 
    */
    'peripherals'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "flavor",
            "baseName": "flavor",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "boardConfig",
            "baseName": "boardConfig",
            "type": "string",
            "format": ""
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "string",
            "format": ""
        },
        {
            "name": "cpid",
            "baseName": "cpid",
            "type": "number",
            "format": ""
        },
        {
            "name": "bdid",
            "baseName": "bdid",
            "type": "number",
            "format": ""
        },
        {
            "name": "peripherals",
            "baseName": "peripherals",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Model.attributeTypeMap;
    }

    public constructor() {
    }
}

