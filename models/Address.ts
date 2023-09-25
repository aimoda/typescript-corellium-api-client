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

import { HttpFile } from '../http/http';

/**
* The user\'s address
*/
export class Address {
    /**
    * Address line 1 (e.g., street, PO Box, or company name).
    */
    'address1'?: string | null;
    /**
    * Address line 2 (e.g., apartment, suite, unit, or building).
    */
    'address2'?: string | null;
    /**
    * City, district, suburb, town, or village.
    */
    'city'?: string | null;
    /**
    * Two-letter country code (ISO 3166-1 alpha-2).
    */
    'country'?: string | null;
    /**
    * ZIP or postal code.
    */
    'postalCode'?: string | null;
    /**
    * State, county, province, or region.
    */
    'state'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string",
            "format": ""
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }

    public constructor() {
    }
}

