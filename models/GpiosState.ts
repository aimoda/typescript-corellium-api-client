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

import { GpioStateDefinition } from '../models/GpioStateDefinition';
import { HttpFile } from '../http/http';

/**
* Current state of GPIOs
*/
export class GpiosState {
    'led'?: GpioStateDefinition;
    'button'?: GpioStateDefinition;
    '_switch'?: GpioStateDefinition;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "led",
            "baseName": "led",
            "type": "GpioStateDefinition",
            "format": ""
        },
        {
            "name": "button",
            "baseName": "button",
            "type": "GpioStateDefinition",
            "format": ""
        },
        {
            "name": "_switch",
            "baseName": "switch",
            "type": "GpioStateDefinition",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GpiosState.attributeTypeMap;
    }

    public constructor() {
    }
}

