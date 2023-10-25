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
export class TrialRequestMetadata {
    /**
    * 
    */
    'name'?: string | null;
    /**
    * provided company name
    */
    'company'?: string | null;
    /**
    * option from sign up form, interesting using for malware
    */
    'malware'?: boolean | null;
    /**
    * option from sign up form, interesting using for research
    */
    'research'?: boolean | null;
    /**
    * option from sign up form, interesting using for pentesting
    */
    'pentest'?: boolean | null;
    /**
    * option from sign up form, interesting using for other area added here
    */
    'other'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        },
        {
            "name": "malware",
            "baseName": "malware",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "research",
            "baseName": "research",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pentest",
            "baseName": "pentest",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "other",
            "baseName": "other",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TrialRequestMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

