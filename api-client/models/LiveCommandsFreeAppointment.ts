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
import type { AdvancerModelsAppointmentAppointmentType } from './AdvancerModelsAppointmentAppointmentType';
import {
    AdvancerModelsAppointmentAppointmentTypeFromJSON,
    AdvancerModelsAppointmentAppointmentTypeFromJSONTyped,
    AdvancerModelsAppointmentAppointmentTypeToJSON,
} from './AdvancerModelsAppointmentAppointmentType';
import type { LiveCommandsStudentDetails } from './LiveCommandsStudentDetails';
import {
    LiveCommandsStudentDetailsFromJSON,
    LiveCommandsStudentDetailsFromJSONTyped,
    LiveCommandsStudentDetailsToJSON,
} from './LiveCommandsStudentDetails';
import type { LiveCommandsTeacherDetails } from './LiveCommandsTeacherDetails';
import {
    LiveCommandsTeacherDetailsFromJSON,
    LiveCommandsTeacherDetailsFromJSONTyped,
    LiveCommandsTeacherDetailsToJSON,
} from './LiveCommandsTeacherDetails';

/**
 * 
 * @export
 * @interface LiveCommandsFreeAppointment
 */
export interface LiveCommandsFreeAppointment {
    /**
     * 
     * @type {number}
     * @memberof LiveCommandsFreeAppointment
     */
    id?: number;
    /**
     * 
     * @type {AdvancerModelsAppointmentAppointmentType}
     * @memberof LiveCommandsFreeAppointment
     */
    appointmentType?: AdvancerModelsAppointmentAppointmentType;
    /**
     * 
     * @type {number}
     * @memberof LiveCommandsFreeAppointment
     */
    studentId?: number;
    /**
     * 
     * @type {number}
     * @memberof LiveCommandsFreeAppointment
     */
    teacherId?: number;
    /**
     * 
     * @type {LiveCommandsTeacherDetails}
     * @memberof LiveCommandsFreeAppointment
     */
    teacher?: LiveCommandsTeacherDetails;
    /**
     * 
     * @type {LiveCommandsStudentDetails}
     * @memberof LiveCommandsFreeAppointment
     */
    student?: LiveCommandsStudentDetails;
    /**
     * 
     * @type {Date}
     * @memberof LiveCommandsFreeAppointment
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof LiveCommandsFreeAppointment
     */
    endDate?: Date;
}

/**
 * Check if a given object implements the LiveCommandsFreeAppointment interface.
 */
export function instanceOfLiveCommandsFreeAppointment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LiveCommandsFreeAppointmentFromJSON(json: any): LiveCommandsFreeAppointment {
    return LiveCommandsFreeAppointmentFromJSONTyped(json, false);
}

export function LiveCommandsFreeAppointmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiveCommandsFreeAppointment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'appointmentType': !exists(json, 'appointmentType') ? undefined : AdvancerModelsAppointmentAppointmentTypeFromJSON(json['appointmentType']),
        'studentId': !exists(json, 'studentId') ? undefined : json['studentId'],
        'teacherId': !exists(json, 'teacherId') ? undefined : json['teacherId'],
        'teacher': !exists(json, 'teacher') ? undefined : LiveCommandsTeacherDetailsFromJSON(json['teacher']),
        'student': !exists(json, 'student') ? undefined : LiveCommandsStudentDetailsFromJSON(json['student']),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
    };
}

export function LiveCommandsFreeAppointmentToJSON(value?: LiveCommandsFreeAppointment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'appointmentType': AdvancerModelsAppointmentAppointmentTypeToJSON(value.appointmentType),
        'studentId': value.studentId,
        'teacherId': value.teacherId,
        'teacher': LiveCommandsTeacherDetailsToJSON(value.teacher),
        'student': LiveCommandsStudentDetailsToJSON(value.student),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
    };
}

