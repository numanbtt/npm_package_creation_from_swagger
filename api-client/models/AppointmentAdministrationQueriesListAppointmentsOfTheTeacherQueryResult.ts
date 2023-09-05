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
import type { AppointmentAdministrationQueriesAppointmentListItem } from './AppointmentAdministrationQueriesAppointmentListItem';
import {
    AppointmentAdministrationQueriesAppointmentListItemFromJSON,
    AppointmentAdministrationQueriesAppointmentListItemFromJSONTyped,
    AppointmentAdministrationQueriesAppointmentListItemToJSON,
} from './AppointmentAdministrationQueriesAppointmentListItem';
import type { AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination } from './AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination';
import {
    AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPaginationFromJSON,
    AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPaginationFromJSONTyped,
    AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPaginationToJSON,
} from './AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination';

/**
 * 
 * @export
 * @interface AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult
 */
export interface AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult {
    /**
     * 
     * @type {AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination}
     * @memberof AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult
     */
    pagination: AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPagination;
    /**
     * 
     * @type {Array<AppointmentAdministrationQueriesAppointmentListItem>}
     * @memberof AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult
     */
    appointments: Array<AppointmentAdministrationQueriesAppointmentListItem>;
}

/**
 * Check if a given object implements the AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult interface.
 */
export function instanceOfAppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pagination" in value;
    isInstance = isInstance && "appointments" in value;

    return isInstance;
}

export function AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResultFromJSON(json: any): AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult {
    return AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResultFromJSONTyped(json, false);
}

export function AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPaginationFromJSON(json['pagination']),
        'appointments': ((json['appointments'] as Array<any>).map(AppointmentAdministrationQueriesAppointmentListItemFromJSON)),
    };
}

export function AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResultToJSON(value?: AppointmentAdministrationQueriesListAppointmentsOfTheTeacherQueryResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': AppointmentAdministrationQueriesListAppointmentsOfTheTeacherPaginationToJSON(value.pagination),
        'appointments': ((value.appointments as Array<any>).map(AppointmentAdministrationQueriesAppointmentListItemToJSON)),
    };
}

