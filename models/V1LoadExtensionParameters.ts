/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.2.0-17376
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
export class V1LoadExtensionParameters {
    /**
    * The uuid of the image to load
    */
    'imageId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "imageId",
            "baseName": "imageId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return V1LoadExtensionParameters.attributeTypeMap;
    }

    public constructor() {
    }
}

