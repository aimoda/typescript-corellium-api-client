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
export class Features {
    /**
    * 
    */
    'apps'?: boolean | null;
    /**
    * 
    */
    'connect'?: boolean | null;
    /**
    * 
    */
    'console'?: boolean | null;
    /**
    * 
    */
    'coretrace'?: boolean | null;
    /**
    * 
    */
    'deviceControl'?: boolean | null;
    /**
    * 
    */
    'deviceDelete'?: boolean | null;
    /**
    * 
    */
    'files'?: boolean | null;
    /**
    * 
    */
    'frida'?: boolean | null;
    /**
    * 
    */
    'images'?: boolean | null;
    /**
    * 
    */
    'messaging'?: boolean | null;
    /**
    * 
    */
    'netmon'?: boolean | null;
    /**
    * 
    */
    'network'?: boolean | null;
    /**
    * 
    */
    'portForwarding'?: boolean | null;
    /**
    * 
    */
    'powerManagement'?: boolean | null;
    /**
    * 
    */
    'profile'?: boolean | null;
    /**
    * 
    */
    'sensors'?: boolean | null;
    /**
    * 
    */
    'settings'?: boolean | null;
    /**
    * 
    */
    'snapshots'?: boolean | null;
    /**
    * 
    */
    'strace'?: boolean | null;
    /**
    * 
    */
    'system'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apps",
            "baseName": "apps",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "connect",
            "baseName": "connect",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "console",
            "baseName": "console",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "coretrace",
            "baseName": "coretrace",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deviceControl",
            "baseName": "deviceControl",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deviceDelete",
            "baseName": "deviceDelete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "frida",
            "baseName": "frida",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "messaging",
            "baseName": "messaging",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "netmon",
            "baseName": "netmon",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "portForwarding",
            "baseName": "portForwarding",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "powerManagement",
            "baseName": "powerManagement",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sensors",
            "baseName": "sensors",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "snapshots",
            "baseName": "snapshots",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "strace",
            "baseName": "strace",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Features.attributeTypeMap;
    }

    public constructor() {
    }
}

