/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.6.0-19122
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
export class AuthProvider {
    /**
    * Provider name for a given provider type
    */
    'name'?: string | null;
    /**
    * The identifier for the provider
    */
    'identifier'?: string | null;
    /**
    * Provider type
    */
    'providerType'?: string | null;
    /**
    * Denotes whether it\'s the default
    */
    '_default'?: boolean | null;
    /**
    * Provider label
    */
    'label'?: string | null;
    /**
    * Denotes whether they\'re enabled or not
    */
    'enabled'?: boolean | null;
    /**
    * URL for provider auth
    */
    'authorizationUrl'?: string | null;
    /**
    * The identifier for the provider
    */
    'id'?: string | null;
    /**
    * Auth provider
    */
    'provider'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "providerType",
            "baseName": "providerType",
            "type": "string",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "authorizationUrl",
            "baseName": "authorizationUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

