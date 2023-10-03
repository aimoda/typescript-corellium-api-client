/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.4.1-18421
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Address } from '../models/Address';
import { TrialRequestMetadata } from '../models/TrialRequestMetadata';
import { HttpFile } from '../http/http';

/**
* 
*/
export class TrialRequestOptions {
    'address'?: Address;
    /**
    * The user\'s email address.
    */
    'email'?: string | null;
    /**
    * The user\'s full name.
    */
    'name'?: string | null;
    'metadata'?: TrialRequestMetadata;
    /**
    * If true, create an enterprise domain.
    */
    'enterprise'?: boolean | null;
    /**
    * Stripe payment token.
    */
    'token'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "TrialRequestMetadata",
            "format": ""
        },
        {
            "name": "enterprise",
            "baseName": "enterprise",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TrialRequestOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

