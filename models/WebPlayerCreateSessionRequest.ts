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

import { Features } from '../models/Features';
import { HttpFile } from '../http/http';

/**
* 
*/
export class WebPlayerCreateSessionRequest {
    /**
    * Project Identifier
    */
    'projectId': string;
    /**
    * VM Instance Identifier
    */
    'instanceId': string;
    /**
    * Number of seconds token remains valid
    */
    'expiresIn': number;
    'features': Features;
    /**
    * Optional string value supplied by client for tracking purposes
    */
    'clientId'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "instanceId",
            "baseName": "instanceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresIn",
            "baseName": "expiresIn",
            "type": "number",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Features",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebPlayerCreateSessionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

