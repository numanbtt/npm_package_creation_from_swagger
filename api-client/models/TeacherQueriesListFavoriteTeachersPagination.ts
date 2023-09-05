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
 * @interface TeacherQueriesListFavoriteTeachersPagination
 */
export interface TeacherQueriesListFavoriteTeachersPagination {
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesListFavoriteTeachersPagination
     */
    isNextPageAvailable: boolean;
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesListFavoriteTeachersPagination
     */
    lastTeacherId?: number | null;
}

/**
 * Check if a given object implements the TeacherQueriesListFavoriteTeachersPagination interface.
 */
export function instanceOfTeacherQueriesListFavoriteTeachersPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isNextPageAvailable" in value;

    return isInstance;
}

export function TeacherQueriesListFavoriteTeachersPaginationFromJSON(json: any): TeacherQueriesListFavoriteTeachersPagination {
    return TeacherQueriesListFavoriteTeachersPaginationFromJSONTyped(json, false);
}

export function TeacherQueriesListFavoriteTeachersPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeacherQueriesListFavoriteTeachersPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isNextPageAvailable': json['isNextPageAvailable'],
        'lastTeacherId': !exists(json, 'lastTeacherId') ? undefined : json['lastTeacherId'],
    };
}

export function TeacherQueriesListFavoriteTeachersPaginationToJSON(value?: TeacherQueriesListFavoriteTeachersPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isNextPageAvailable': value.isNextPageAvailable,
        'lastTeacherId': value.lastTeacherId,
    };
}

