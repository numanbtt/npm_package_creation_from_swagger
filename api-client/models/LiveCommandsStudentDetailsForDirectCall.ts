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
 * @interface LiveCommandsStudentDetailsForDirectCall
 */
export interface LiveCommandsStudentDetailsForDirectCall {
    /**
     * 
     * @type {number}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    metadataId?: number;
    /**
     * 
     * @type {string}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    avatar1X?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    avatar2X?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    avatar3X?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveCommandsStudentDetailsForDirectCall
     */
    avatar4X?: string | null;
}

/**
 * Check if a given object implements the LiveCommandsStudentDetailsForDirectCall interface.
 */
export function instanceOfLiveCommandsStudentDetailsForDirectCall(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LiveCommandsStudentDetailsForDirectCallFromJSON(json: any): LiveCommandsStudentDetailsForDirectCall {
    return LiveCommandsStudentDetailsForDirectCallFromJSONTyped(json, false);
}

export function LiveCommandsStudentDetailsForDirectCallFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiveCommandsStudentDetailsForDirectCall {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'metadataId': !exists(json, 'metadataId') ? undefined : json['metadataId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'avatar1X': !exists(json, 'avatar1X') ? undefined : json['avatar1X'],
        'avatar2X': !exists(json, 'avatar2X') ? undefined : json['avatar2X'],
        'avatar3X': !exists(json, 'avatar3X') ? undefined : json['avatar3X'],
        'avatar4X': !exists(json, 'avatar4X') ? undefined : json['avatar4X'],
    };
}

export function LiveCommandsStudentDetailsForDirectCallToJSON(value?: LiveCommandsStudentDetailsForDirectCall | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'metadataId': value.metadataId,
        'name': value.name,
        'avatar1X': value.avatar1X,
        'avatar2X': value.avatar2X,
        'avatar3X': value.avatar3X,
        'avatar4X': value.avatar4X,
    };
}

