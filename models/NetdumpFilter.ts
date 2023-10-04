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
* 
*/
export class NetdumpFilter {
    /**
    * 
    */
    'portRanges'?: Array<string> | null;
    /**
    * 
    */
    'srcPorts'?: Array<string> | null;
    /**
    * 
    */
    'dstPorts'?: Array<string> | null;
    /**
    * 
    */
    'ports'?: Array<string> | null;
    /**
    * 
    */
    'protocols'?: Array<string> | null;
    /**
    * 
    */
    'processes'?: Array<string> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "portRanges",
            "baseName": "portRanges",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "srcPorts",
            "baseName": "srcPorts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dstPorts",
            "baseName": "dstPorts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "protocols",
            "baseName": "protocols",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "processes",
            "baseName": "processes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NetdumpFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

