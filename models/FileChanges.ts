/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.0-18254
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
export class FileChanges {
    /**
    * Optional New path
    */
    'path'?: string | null;
    /**
    * Optional New Mode
    */
    'mode'?: number | null;
    /**
    * Optional New Owner UID
    */
    'uid'?: number | null;
    /**
    * Optional New Group GID
    */
    'gid'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "number",
            "format": ""
        },
        {
            "name": "gid",
            "baseName": "gid",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FileChanges.attributeTypeMap;
    }

    public constructor() {
    }
}

