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
 * @interface AppointmentAdministrationQueriesTeacherInAppointment
 */
export interface AppointmentAdministrationQueriesTeacherInAppointment {
    /**
     * 
     * @type {number}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    teacherId: number;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    teacherGuid: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    avatar1X: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    avatar2X: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    avatar3X: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    avatar4X: string;
    /**
     * Girilebilecek değerler:
     * NATIVE_US,
     * NATIVE_BRITISH,
     * TURKISH,
     * OTHER
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    accentType: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    isOnline: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppointmentAdministrationQueriesTeacherInAppointment
     */
    rate: number;
}

/**
 * Check if a given object implements the AppointmentAdministrationQueriesTeacherInAppointment interface.
 */
export function instanceOfAppointmentAdministrationQueriesTeacherInAppointment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "teacherId" in value;
    isInstance = isInstance && "teacherGuid" in value;
    isInstance = isInstance && "avatar1X" in value;
    isInstance = isInstance && "avatar2X" in value;
    isInstance = isInstance && "avatar3X" in value;
    isInstance = isInstance && "avatar4X" in value;
    isInstance = isInstance && "accentType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "isOnline" in value;
    isInstance = isInstance && "rate" in value;

    return isInstance;
}

export function AppointmentAdministrationQueriesTeacherInAppointmentFromJSON(json: any): AppointmentAdministrationQueriesTeacherInAppointment {
    return AppointmentAdministrationQueriesTeacherInAppointmentFromJSONTyped(json, false);
}

export function AppointmentAdministrationQueriesTeacherInAppointmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppointmentAdministrationQueriesTeacherInAppointment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teacherId': json['teacherId'],
        'teacherGuid': json['teacherGuid'],
        'avatar1X': json['avatar1X'],
        'avatar2X': json['avatar2X'],
        'avatar3X': json['avatar3X'],
        'avatar4X': json['avatar4X'],
        'accentType': json['accentType'],
        'name': json['name'],
        'isOnline': json['isOnline'],
        'rate': json['rate'],
    };
}

export function AppointmentAdministrationQueriesTeacherInAppointmentToJSON(value?: AppointmentAdministrationQueriesTeacherInAppointment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teacherId': value.teacherId,
        'teacherGuid': value.teacherGuid,
        'avatar1X': value.avatar1X,
        'avatar2X': value.avatar2X,
        'avatar3X': value.avatar3X,
        'avatar4X': value.avatar4X,
        'accentType': value.accentType,
        'name': value.name,
        'isOnline': value.isOnline,
        'rate': value.rate,
    };
}

