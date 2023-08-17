/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.2.0-17376
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Coupon options
*/
export class CouponOptions {
    /**
    * 
    */
    'type': CouponOptionsTypeEnum;
    /**
    * Amount
    */
    'amount': number;
    /**
    * Is Used. If true, this coupon has been used and cannot be used again
    */
    'used': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CouponOptionsTypeEnum",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CouponOptions.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CouponOptionsTypeEnum = "percent" | "discount" | "absolute" ;

