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
 * @interface IyzicoSubscriptionCommandsCreateCommandResult
 */
export interface IyzicoSubscriptionCommandsCreateCommandResult {
    /**
     * 
     * @type {number}
     * @memberof IyzicoSubscriptionCommandsCreateCommandResult
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof IyzicoSubscriptionCommandsCreateCommandResult
     */
    message?: string | null;
}

/**
 * Check if a given object implements the IyzicoSubscriptionCommandsCreateCommandResult interface.
 */
export function instanceOfIyzicoSubscriptionCommandsCreateCommandResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function IyzicoSubscriptionCommandsCreateCommandResultFromJSON(json: any): IyzicoSubscriptionCommandsCreateCommandResult {
    return IyzicoSubscriptionCommandsCreateCommandResultFromJSONTyped(json, false);
}

export function IyzicoSubscriptionCommandsCreateCommandResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): IyzicoSubscriptionCommandsCreateCommandResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function IyzicoSubscriptionCommandsCreateCommandResultToJSON(value?: IyzicoSubscriptionCommandsCreateCommandResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'message': value.message,
    };
}

