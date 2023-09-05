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
 * @interface TeacherAdministrationQueriesTeacherSalariesListItem
 */
export interface TeacherAdministrationQueriesTeacherSalariesListItem {
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    minutes?: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    earnedAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    hourlyRate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    hours?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    paymentStatus?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TeacherAdministrationQueriesTeacherSalariesListItem
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the TeacherAdministrationQueriesTeacherSalariesListItem interface.
 */
export function instanceOfTeacherAdministrationQueriesTeacherSalariesListItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TeacherAdministrationQueriesTeacherSalariesListItemFromJSON(json: any): TeacherAdministrationQueriesTeacherSalariesListItem {
    return TeacherAdministrationQueriesTeacherSalariesListItemFromJSONTyped(json, false);
}

export function TeacherAdministrationQueriesTeacherSalariesListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeacherAdministrationQueriesTeacherSalariesListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'minutes': !exists(json, 'minutes') ? undefined : json['minutes'],
        'earnedAmount': !exists(json, 'earnedAmount') ? undefined : json['earnedAmount'],
        'hourlyRate': !exists(json, 'hourlyRate') ? undefined : json['hourlyRate'],
        'hours': !exists(json, 'hours') ? undefined : json['hours'],
        'paymentStatus': !exists(json, 'paymentStatus') ? undefined : json['paymentStatus'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function TeacherAdministrationQueriesTeacherSalariesListItemToJSON(value?: TeacherAdministrationQueriesTeacherSalariesListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'minutes': value.minutes,
        'earnedAmount': value.earnedAmount,
        'hourlyRate': value.hourlyRate,
        'hours': value.hours,
        'paymentStatus': value.paymentStatus,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
    };
}

