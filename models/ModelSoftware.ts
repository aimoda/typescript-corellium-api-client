/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.1-18421
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Firmware } from '../models/Firmware';
import { HttpFile } from '../http/http';

/**
* 
*/
export class ModelSoftware {
    /**
    * 
    */
    'name'?: string | null;
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
    'firmwares'?: Array<Firmware> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "firmwares",
            "baseName": "firmwares",
            "type": "Array<Firmware>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelSoftware.attributeTypeMap;
    }

    public constructor() {
    }
}

