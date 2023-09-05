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
 * @interface ReferralCommandsCreateCommandResult
 */
export interface ReferralCommandsCreateCommandResult {
    /**
     * 
     * @type {number}
     * @memberof ReferralCommandsCreateCommandResult
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ReferralCommandsCreateCommandResult
     */
    code?: string | null;
}

/**
 * Check if a given object implements the ReferralCommandsCreateCommandResult interface.
 */
export function instanceOfReferralCommandsCreateCommandResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReferralCommandsCreateCommandResultFromJSON(json: any): ReferralCommandsCreateCommandResult {
    return ReferralCommandsCreateCommandResultFromJSONTyped(json, false);
}

export function ReferralCommandsCreateCommandResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralCommandsCreateCommandResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function ReferralCommandsCreateCommandResultToJSON(value?: ReferralCommandsCreateCommandResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
    };
}

