/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 5.7.1-19698
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CouponOptions } from '../models/CouponOptions';
import { Plan } from '../models/Plan';
import { Trial } from '../models/Trial';
import { HttpFile } from '../http/http';

/**
* Subscriber Invite
*/
export class SubscriberInvite {
    'couponOptions'?: CouponOptions;
    'plan'?: Plan;
    'trial'?: Trial;
    /**
    * Name
    */
    'name'?: string | null;
    /**
    * Email
    */
    'email'?: string | null;
    /**
    * Coupon code
    */
    'couponCode': string;
    /**
    * Domain
    */
    'domain'?: string | null;
    /**
    * Aggregate
    */
    'aggregate': string;
    /**
    * Used By
    */
    'useBy'?: string | null;
    /**
    * Is Active flag
    */
    'active': boolean;
    /**
    * Is reusable flag
    */
    'reusable': boolean;
    /**
    * Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'createdAt': string;
    /**
    * Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
    */
    'updatedAt': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "couponOptions",
            "baseName": "coupon_options",
            "type": "CouponOptions",
            "format": ""
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Plan",
            "format": ""
        },
        {
            "name": "trial",
            "baseName": "trial",
            "type": "Trial",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "couponCode",
            "baseName": "coupon_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "aggregate",
            "baseName": "aggregate",
            "type": "string",
            "format": ""
        },
        {
            "name": "useBy",
            "baseName": "use_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reusable",
            "baseName": "reusable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriberInvite.attributeTypeMap;
    }

    public constructor() {
    }
}

