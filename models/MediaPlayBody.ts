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
export class MediaPlayBody {
    /**
    * Image ID
    */
    'imageId'?: string | null;
    /**
    * URL to a media file
    */
    'url'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "imageId",
            "baseName": "imageId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "string"
        }    ];

    static getAttributeTypeMap() {
        return MediaPlayBody.attributeTypeMap;
    }

    public constructor() {
    }
}

