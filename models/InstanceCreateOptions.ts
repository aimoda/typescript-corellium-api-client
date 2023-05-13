/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 4.3.1-16664
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InstanceBootOptions } from '../models/InstanceBootOptions';
import { Model } from '../models/Model';
import { VolumeOptions } from '../models/VolumeOptions';
import { HttpFile } from '../http/http';

/**
* 
*/
export class InstanceCreateOptions {
    /**
    * the name of the device
    */
    'name'?: string | null;
    /**
    * Key used to encrypt the Instance
    */
    'key'?: string | null;
    /**
    * the flavor id
    */
    'flavor': string;
    /**
    * project UUID
    */
    'project': string;
    /**
    * OS Version
    */
    'os': string;
    /**
    * OS Build
    */
    'osbuild'?: string | null;
    /**
    * list of patches to apply
    */
    'patches'?: Array<string> | null;
    /**
    * URL or image id
    */
    'fwpackage'?: string | null;
    /**
    * URL that firmware package used to create this instance is available at
    */
    'origFwPackageUrl'?: string | null;
    /**
    * 
    */
    'encrypt'?: boolean | null;
    /**
    * 
    */
    'overrideWifiMAC'?: string | null;
    'volume'?: VolumeOptions;
    /**
    * Snapshot ID for this instance to be cloned from if defined
    */
    'snapshot'?: string | null;
    'bootOptions'?: InstanceBootOptions;
    'device'?: Model;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "flavor",
            "baseName": "flavor",
            "type": "string",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": ""
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "string",
            "format": ""
        },
        {
            "name": "osbuild",
            "baseName": "osbuild",
            "type": "string",
            "format": ""
        },
        {
            "name": "patches",
            "baseName": "patches",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fwpackage",
            "baseName": "fwpackage",
            "type": "string",
            "format": ""
        },
        {
            "name": "origFwPackageUrl",
            "baseName": "origFwPackageUrl",
            "type": "string",
            "format": "url"
        },
        {
            "name": "encrypt",
            "baseName": "encrypt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "overrideWifiMAC",
            "baseName": "overrideWifiMAC",
            "type": "string",
            "format": ""
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "VolumeOptions",
            "format": ""
        },
        {
            "name": "snapshot",
            "baseName": "snapshot",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "bootOptions",
            "baseName": "bootOptions",
            "type": "InstanceBootOptions",
            "format": ""
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "Model",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InstanceCreateOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

