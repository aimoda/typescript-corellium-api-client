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
export class PeripheralsData {
    /**
    * 
    */
    'acceleration'?: Array<number> | null;
    /**
    * 
    */
    'gyroscope'?: Array<number> | null;
    /**
    * 
    */
    'magnetic'?: Array<number> | null;
    /**
    * 
    */
    'orientation'?: Array<number> | null;
    /**
    * 
    */
    'temperature'?: number | null;
    /**
    * 
    */
    'proximity'?: number | null;
    /**
    * 
    */
    'light'?: number | null;
    /**
    * 
    */
    'pressure'?: number | null;
    /**
    * 
    */
    'humidity'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceleration",
            "baseName": "acceleration",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "gyroscope",
            "baseName": "gyroscope",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "magnetic",
            "baseName": "magnetic",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "orientation",
            "baseName": "orientation",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "temperature",
            "baseName": "temperature",
            "type": "number",
            "format": ""
        },
        {
            "name": "proximity",
            "baseName": "proximity",
            "type": "number",
            "format": ""
        },
        {
            "name": "light",
            "baseName": "light",
            "type": "number",
            "format": ""
        },
        {
            "name": "pressure",
            "baseName": "pressure",
            "type": "number",
            "format": ""
        },
        {
            "name": "humidity",
            "baseName": "humidity",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PeripheralsData.attributeTypeMap;
    }

    public constructor() {
    }
}

