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
export class AgentApp {
    /**
    * 
    */
    'tags'?: Array<string> | null;
    /**
    * 
    */
    'running'?: boolean | null;
    /**
    * 
    */
    'diskUsage'?: number | null;
    /**
    * 
    */
    'date'?: number | null;
    /**
    * 
    */
    'applicationType'?: string | null;
    /**
    * 
    */
    'name'?: string | null;
    /**
    * 
    */
    'bundleID'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "running",
            "baseName": "running",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "diskUsage",
            "baseName": "diskUsage",
            "type": "number",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "number",
            "format": ""
        },
        {
            "name": "applicationType",
            "baseName": "applicationType",
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
            "name": "bundleID",
            "baseName": "bundleID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentApp.attributeTypeMap;
    }

    public constructor() {
    }
}

