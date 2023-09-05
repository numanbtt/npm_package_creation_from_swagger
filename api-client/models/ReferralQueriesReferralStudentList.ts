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
 * @interface ReferralQueriesReferralStudentList
 */
export interface ReferralQueriesReferralStudentList {
    /**
     * 
     * @type {number}
     * @memberof ReferralQueriesReferralStudentList
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralStudentList
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferralQueriesReferralStudentList
     */
    code?: string | null;
}

/**
 * Check if a given object implements the ReferralQueriesReferralStudentList interface.
 */
export function instanceOfReferralQueriesReferralStudentList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferralQueriesReferralStudentListFromJSON(json: any): ReferralQueriesReferralStudentList {
    return ReferralQueriesReferralStudentListFromJSONTyped(json, false);
}

export function ReferralQueriesReferralStudentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralQueriesReferralStudentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function ReferralQueriesReferralStudentListToJSON(value?: ReferralQueriesReferralStudentList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
    };
}

