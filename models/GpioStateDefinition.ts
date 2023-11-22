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

import { Bit } from '../models/Bit';
import { HttpFile } from '../http/http';

/**
* 
*/
export class GpioStateDefinition {
    /**
    * count of bits in members of this bank
    */
    'bitCount': number;
    /**
    * bits for each bank of this name as an array of arrays
    */
    'banks': Array<Array<Bit>>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bitCount",
            "baseName": "bitCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "banks",
            "baseName": "banks",
            "type": "Array<Array<Bit>>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GpioStateDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

