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

import { ProjectQuota } from '../models/ProjectQuota';
import { ProjectSettings } from '../models/ProjectSettings';
import { ProjectUsage } from '../models/ProjectUsage';
import { HttpFile } from '../http/http';

/**
* 
*/
export class Project {
    /**
    * Project Identifier
    */
    'id': string;
    /**
    * Project Name
    */
    'name'?: string | null;
    'settings'?: ProjectSettings;
    'quotas'?: ProjectQuota;
    'quotasUsed'?: ProjectUsage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "settings",
            "baseName": "settings",
            "type": "ProjectSettings",
            "format": ""
        },
        {
            "name": "quotas",
            "baseName": "quotas",
            "type": "ProjectQuota",
            "format": ""
        },
        {
            "name": "quotasUsed",
            "baseName": "quotasUsed",
            "type": "ProjectUsage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }

    public constructor() {
    }
}

