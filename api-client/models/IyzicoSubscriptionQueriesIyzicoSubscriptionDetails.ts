/* tslint:disable */
/* eslint-disable */
/**
 * Advancer
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.104
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
 */
export interface IyzicoSubscriptionQueriesIyzicoSubscriptionDetails {
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    dayOptionId?: number;
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    minutesPerDayOptionId?: number;
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    packageDurationOptionId?: number;
    /**
     * 
     * @type {string}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    iyzicoPlanId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionQueriesIyzicoSubscriptionDetails
     */
    referralId?: number | null;
}

/**
 * Check if a given object implements the IyzicoSubscriptionQueriesIyzicoSubscriptionDetails interface.
 */
export function instanceOfIyzicoSubscriptionQueriesIyzicoSubscriptionDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IyzicoSubscriptionQueriesIyzicoSubscriptionDetailsFromJSON(json: any): IyzicoSubscriptionQueriesIyzicoSubscriptionDetails {
    return IyzicoSubscriptionQueriesIyzicoSubscriptionDetailsFromJSONTyped(json, false);
}

export function IyzicoSubscriptionQueriesIyzicoSubscriptionDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IyzicoSubscriptionQueriesIyzicoSubscriptionDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'dayOptionId': !exists(json, 'dayOptionId') ? undefined : json['dayOptionId'],
        'minutesPerDayOptionId': !exists(json, 'minutesPerDayOptionId') ? undefined : json['minutesPerDayOptionId'],
        'packageDurationOptionId': !exists(json, 'packageDurationOptionId') ? undefined : json['packageDurationOptionId'],
        'iyzicoPlanId': !exists(json, 'iyzicoPlanId') ? undefined : json['iyzicoPlanId'],
        'referralId': !exists(json, 'referralId') ? undefined : json['referralId'],
    };
}

export function IyzicoSubscriptionQueriesIyzicoSubscriptionDetailsToJSON(value?: IyzicoSubscriptionQueriesIyzicoSubscriptionDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'price': value.price,
        'dayOptionId': value.dayOptionId,
        'minutesPerDayOptionId': value.minutesPerDayOptionId,
        'packageDurationOptionId': value.packageDurationOptionId,
        'iyzicoPlanId': value.iyzicoPlanId,
        'referralId': value.referralId,
    };
}

