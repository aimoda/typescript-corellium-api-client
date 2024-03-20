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
export class AgentError {
    /**
    * The error encountered by the agent
    */
    'error': string;
    /**
    * AgentError
    */
    'errorID': AgentErrorErrorIDEnum;
    /**
    * The full error encountered by the agent
    */
    'originalError'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorID",
            "baseName": "errorID",
            "type": "AgentErrorErrorIDEnum",
            "format": ""
        },
        {
            "name": "originalError",
            "baseName": "originalError",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentError.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AgentErrorErrorIDEnum = "AgentError" ;

