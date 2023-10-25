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
export class OpenIDConfig {
    /**
    * Service Discovery URL
    */
    'discoveryUrl'?: string | null;
    /**
    * Service Client ID
    */
    'clientId'?: string | null;
    /**
    * Service Client Secret
    */
    'clientSecret'?: string | null;
    /**
    * Only accept individuals with invitations
    */
    'invitedOnly'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discoveryUrl",
            "baseName": "discoveryUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "invitedOnly",
            "baseName": "invitedOnly",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OpenIDConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

