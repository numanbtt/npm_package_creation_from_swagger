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
import type { TeacherAdministrationQueriesTeacherListItem } from './TeacherAdministrationQueriesTeacherListItem';
import {
    TeacherAdministrationQueriesTeacherListItemFromJSON,
    TeacherAdministrationQueriesTeacherListItemFromJSONTyped,
    TeacherAdministrationQueriesTeacherListItemToJSON,
} from './TeacherAdministrationQueriesTeacherListItem';
import type { TeacherAdministrationQueriesTeachersPagination } from './TeacherAdministrationQueriesTeachersPagination';
import {
    TeacherAdministrationQueriesTeachersPaginationFromJSON,
    TeacherAdministrationQueriesTeachersPaginationFromJSONTyped,
    TeacherAdministrationQueriesTeachersPaginationToJSON,
} from './TeacherAdministrationQueriesTeachersPagination';

/**
 * 
 * @export
 * @interface TeacherAdministrationQueriesListQueryResult
 */
export interface TeacherAdministrationQueriesListQueryResult {
    /**
     * 
     * @type {TeacherAdministrationQueriesTeachersPagination}
     * @memberof TeacherAdministrationQueriesListQueryResult
     */
    pagination: TeacherAdministrationQueriesTeachersPagination;
    /**
     * 
     * @type {Array<TeacherAdministrationQueriesTeacherListItem>}
     * @memberof TeacherAdministrationQueriesListQueryResult
     */
    teachers: Array<TeacherAdministrationQueriesTeacherListItem>;
}

/**
 * Check if a given object implements the TeacherAdministrationQueriesListQueryResult interface.
 */
export function instanceOfTeacherAdministrationQueriesListQueryResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pagination" in value;
    isInstance = isInstance && "teachers" in value;

    return isInstance;
}

export function TeacherAdministrationQueriesListQueryResultFromJSON(json: any): TeacherAdministrationQueriesListQueryResult {
    return TeacherAdministrationQueriesListQueryResultFromJSONTyped(json, false);
}

export function TeacherAdministrationQueriesListQueryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeacherAdministrationQueriesListQueryResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': TeacherAdministrationQueriesTeachersPaginationFromJSON(json['pagination']),
        'teachers': ((json['teachers'] as Array<any>).map(TeacherAdministrationQueriesTeacherListItemFromJSON)),
    };
}

export function TeacherAdministrationQueriesListQueryResultToJSON(value?: TeacherAdministrationQueriesListQueryResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': TeacherAdministrationQueriesTeachersPaginationToJSON(value.pagination),
        'teachers': ((value.teachers as Array<any>).map(TeacherAdministrationQueriesTeacherListItemToJSON)),
    };
}

