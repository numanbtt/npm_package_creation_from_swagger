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
 * @interface LiveQueriesRoomInfoStudent
 */
export interface LiveQueriesRoomInfoStudent {
    /**
     * 
     * @type {number}
     * @memberof LiveQueriesRoomInfoStudent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof LiveQueriesRoomInfoStudent
     */
    guid?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveQueriesRoomInfoStudent
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveQueriesRoomInfoStudent
     */
    avatar1X?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveQueriesRoomInfoStudent
     */
    avatar2X?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveQueriesRoomInfoStudent
     */
    avatar3X?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveQueriesRoomInfoStudent
     */
    avatar4X?: string | null;
}

/**
 * Check if a given object implements the LiveQueriesRoomInfoStudent interface.
 */
export function instanceOfLiveQueriesRoomInfoStudent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LiveQueriesRoomInfoStudentFromJSON(json: any): LiveQueriesRoomInfoStudent {
    return LiveQueriesRoomInfoStudentFromJSONTyped(json, false);
}

export function LiveQueriesRoomInfoStudentFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiveQueriesRoomInfoStudent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'avatar1X': !exists(json, 'avatar1X') ? undefined : json['avatar1X'],
        'avatar2X': !exists(json, 'avatar2X') ? undefined : json['avatar2X'],
        'avatar3X': !exists(json, 'avatar3X') ? undefined : json['avatar3X'],
        'avatar4X': !exists(json, 'avatar4X') ? undefined : json['avatar4X'],
    };
}

export function LiveQueriesRoomInfoStudentToJSON(value?: LiveQueriesRoomInfoStudent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'guid': value.guid,
        'name': value.name,
        'avatar1X': value.avatar1X,
        'avatar2X': value.avatar2X,
        'avatar3X': value.avatar3X,
        'avatar4X': value.avatar4X,
    };
}

