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
 * @interface TeacherAdministrationQueriesTeachersSalariesPagination
 */
export interface TeacherAdministrationQueriesTeachersSalariesPagination {
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeachersSalariesPagination
     */
    totalPages: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeachersSalariesPagination
     */
    recordsPerPage: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeachersSalariesPagination
     */
    currentPage: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesTeachersSalariesPagination
     */
    totalRecords: number;
}

/**
 * Check if a given object implements the TeacherAdministrationQueriesTeachersSalariesPagination interface.
 */
export function instanceOfTeacherAdministrationQueriesTeachersSalariesPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalPages" in value;
    isInstance = isInstance && "recordsPerPage" in value;
    isInstance = isInstance && "currentPage" in value;
    isInstance = isInstance && "totalRecords" in value;

    return isInstance;
}

export function TeacherAdministrationQueriesTeachersSalariesPaginationFromJSON(json: any): TeacherAdministrationQueriesTeachersSalariesPagination {
    return TeacherAdministrationQueriesTeachersSalariesPaginationFromJSONTyped(json, false);
}

export function TeacherAdministrationQueriesTeachersSalariesPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeacherAdministrationQueriesTeachersSalariesPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalPages': json['totalPages'],
        'recordsPerPage': json['recordsPerPage'],
        'currentPage': json['currentPage'],
        'totalRecords': json['totalRecords'],
    };
}

export function TeacherAdministrationQueriesTeachersSalariesPaginationToJSON(value?: TeacherAdministrationQueriesTeachersSalariesPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalPages': value.totalPages,
        'recordsPerPage': value.recordsPerPage,
        'currentPage': value.currentPage,
        'totalRecords': value.totalRecords,
    };
}

