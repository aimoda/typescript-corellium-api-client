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

import { HttpFile } from '../http/http';

/**
* 
*/
export class Image {
    /**
    * 
    */
    'status': string;
    /**
    * Image ID
    */
    'id'?: string | null;
    /**
    * 
    */
    'name'?: string | null;
    /**
    * Type of image
    */
    'type'?: ImageTypeEnum | null;
    /**
    * 
    */
    'filename'?: string | null;
    /**
    * 
    */
    'uniqueid'?: string | null;
    /**
    * 
    */
    'size'?: number | null;
    /**
    * project ID
    */
    'project'?: string | null;
    /**
    * When Image was created
    */
    'createdAt'?: Date | null;
    /**
    * When Image was last updated
    */
    'updatedAt'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ImageTypeEnum",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "uniqueid",
            "baseName": "uniqueid",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Image.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ImageTypeEnum = "fwbinary" | "kernel" | "devicetree" | "ramdisk" | "loaderfile" | "sepfw" | "seprom" | "bootrom" | "llb" | "iboot" | "ibootdata" | "fwpackage" | "partition" | "backup" ;

