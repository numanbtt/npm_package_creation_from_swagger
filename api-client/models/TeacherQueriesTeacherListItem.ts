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
import type { TeacherQueriesTrailerVideo } from './TeacherQueriesTrailerVideo';
import {
    TeacherQueriesTrailerVideoFromJSON,
    TeacherQueriesTrailerVideoFromJSONTyped,
    TeacherQueriesTrailerVideoToJSON,
} from './TeacherQueriesTrailerVideo';

/**
 * 
 * @export
 * @interface TeacherQueriesTeacherListItem
 */
export interface TeacherQueriesTeacherListItem {
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesTeacherListItem
     */
    teacherId: number;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    teacherGuid?: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    avatar1X: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    avatar2X: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    avatar3X: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    avatar4X: string;
    /**
     * Girilebilecek değerler:
     * NATIVE_US,
     * NATIVE_BRITISH,
     * TURKISH,
     * OTHER
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    accentType: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesTeacherListItem
     */
    isOnline: boolean;
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesTeacherListItem
     */
    rate: number;
    /**
     * 
     * @type {string}
     * @memberof TeacherQueriesTeacherListItem
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesTeacherListItem
     */
    availableForFreeCall: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherQueriesTeacherListItem
     */
    hasFreeAppointmentRanges: boolean;
    /**
     * 
     * @type {TeacherQueriesTrailerVideo}
     * @memberof TeacherQueriesTeacherListItem
     */
    trailerVideo: TeacherQueriesTrailerVideo;
    /**
     * 
     * @type {number}
     * @memberof TeacherQueriesTeacherListItem
     */
    totalLessonCount?: number | null;
}

/**
 * Check if a given object implements the TeacherQueriesTeacherListItem interface.
 */
export function instanceOfTeacherQueriesTeacherListItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "teacherId" in value;
    isInstance = isInstance && "avatar1X" in value;
    isInstance = isInstance && "avatar2X" in value;
    isInstance = isInstance && "avatar3X" in value;
    isInstance = isInstance && "avatar4X" in value;
    isInstance = isInstance && "accentType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "isOnline" in value;
    isInstance = isInstance && "rate" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "availableForFreeCall" in value;
    isInstance = isInstance && "hasFreeAppointmentRanges" in value;
    isInstance = isInstance && "trailerVideo" in value;

    return isInstance;
}

export function TeacherQueriesTeacherListItemFromJSON(json: any): TeacherQueriesTeacherListItem {
    return TeacherQueriesTeacherListItemFromJSONTyped(json, false);
}

export function TeacherQueriesTeacherListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeacherQueriesTeacherListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teacherId': json['teacherId'],
        'teacherGuid': !exists(json, 'teacherGuid') ? undefined : json['teacherGuid'],
        'avatar1X': json['avatar1X'],
        'avatar2X': json['avatar2X'],
        'avatar3X': json['avatar3X'],
        'avatar4X': json['avatar4X'],
        'accentType': json['accentType'],
        'name': json['name'],
        'isOnline': json['isOnline'],
        'rate': json['rate'],
        'description': json['description'],
        'availableForFreeCall': json['availableForFreeCall'],
        'hasFreeAppointmentRanges': json['hasFreeAppointmentRanges'],
        'trailerVideo': TeacherQueriesTrailerVideoFromJSON(json['trailerVideo']),
        'totalLessonCount': !exists(json, 'totalLessonCount') ? undefined : json['totalLessonCount'],
    };
}

export function TeacherQueriesTeacherListItemToJSON(value?: TeacherQueriesTeacherListItem | null): any {
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
        'description': value.description,
        'availableForFreeCall': value.availableForFreeCall,
        'hasFreeAppointmentRanges': value.hasFreeAppointmentRanges,
        'trailerVideo': TeacherQueriesTrailerVideoToJSON(value.trailerVideo),
        'totalLessonCount': value.totalLessonCount,
    };
}

