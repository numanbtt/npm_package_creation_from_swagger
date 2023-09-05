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
 * @interface AppointmentCommandsSelectedTimeRange
 */
export interface AppointmentCommandsSelectedTimeRange {
    /**
     * 
     * @type {Date}
     * @memberof AppointmentCommandsSelectedTimeRange
     */
    startDateTime: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppointmentCommandsSelectedTimeRange
     */
    endDateTime: Date;
}

/**
 * Check if a given object implements the AppointmentCommandsSelectedTimeRange interface.
 */
export function instanceOfAppointmentCommandsSelectedTimeRange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "startDateTime" in value;
    isInstance = isInstance && "endDateTime" in value;

    return isInstance;
}

export function AppointmentCommandsSelectedTimeRangeFromJSON(json: any): AppointmentCommandsSelectedTimeRange {
    return AppointmentCommandsSelectedTimeRangeFromJSONTyped(json, false);
}

export function AppointmentCommandsSelectedTimeRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppointmentCommandsSelectedTimeRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startDateTime': (new Date(json['startDateTime'])),
        'endDateTime': (new Date(json['endDateTime'])),
    };
}

export function AppointmentCommandsSelectedTimeRangeToJSON(value?: AppointmentCommandsSelectedTimeRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startDateTime': (value.startDateTime.toISOString()),
        'endDateTime': (value.endDateTime.toISOString()),
    };
}

