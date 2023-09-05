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
 * @interface ReferralCommandsUpdateCommand
 */
export interface ReferralCommandsUpdateCommand {
    /**
     * 
     * @type {number}
     * @memberof ReferralCommandsUpdateCommand
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ReferralCommandsUpdateCommand
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferralCommandsUpdateCommand
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReferralCommandsUpdateCommand
     */
    discount?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof ReferralCommandsUpdateCommand
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ReferralCommandsUpdateCommand
     */
    endDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof ReferralCommandsUpdateCommand
     */
    studentLimit?: number | null;
}

/**
 * Check if a given object implements the ReferralCommandsUpdateCommand interface.
 */
export function instanceOfReferralCommandsUpdateCommand(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferralCommandsUpdateCommandFromJSON(json: any): ReferralCommandsUpdateCommand {
    return ReferralCommandsUpdateCommandFromJSONTyped(json, false);
}

export function ReferralCommandsUpdateCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralCommandsUpdateCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discount': !exists(json, 'discount') ? undefined : json['discount'],
        'startDate': !exists(json, 'startDate') ? undefined : (json['startDate'] === null ? null : new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (json['endDate'] === null ? null : new Date(json['endDate'])),
        'studentLimit': !exists(json, 'studentLimit') ? undefined : json['studentLimit'],
    };
}

export function ReferralCommandsUpdateCommandToJSON(value?: ReferralCommandsUpdateCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'description': value.description,
        'discount': value.discount,
        'startDate': value.startDate === undefined ? undefined : (value.startDate === null ? null : value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate === null ? null : value.endDate.toISOString()),
        'studentLimit': value.studentLimit,
    };
}

