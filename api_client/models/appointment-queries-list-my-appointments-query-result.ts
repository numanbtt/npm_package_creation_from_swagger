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


// May contain unused imports in some cases
// @ts-ignore
import { AppointmentQueriesAppointmentListItem } from './appointment-queries-appointment-list-item';
// May contain unused imports in some cases
// @ts-ignore
import { AppointmentQueriesListAppointmentsPagination } from './appointment-queries-list-appointments-pagination';

/**
 * 
 * @export
 * @interface AppointmentQueriesListMyAppointmentsQueryResult
 */
export interface AppointmentQueriesListMyAppointmentsQueryResult {
    /**
     * 
     * @type {AppointmentQueriesListAppointmentsPagination}
     * @memberof AppointmentQueriesListMyAppointmentsQueryResult
     */
    'pagination': AppointmentQueriesListAppointmentsPagination;
    /**
     * 
     * @type {Array<AppointmentQueriesAppointmentListItem>}
     * @memberof AppointmentQueriesListMyAppointmentsQueryResult
     */
    'appointments': Array<AppointmentQueriesAppointmentListItem>;
}
