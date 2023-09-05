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
import type { TeacherAdministrationCommandsSpecalities } from './TeacherAdministrationCommandsSpecalities';
import {
    TeacherAdministrationCommandsSpecalitiesFromJSON,
    TeacherAdministrationCommandsSpecalitiesFromJSONTyped,
    TeacherAdministrationCommandsSpecalitiesToJSON,
} from './TeacherAdministrationCommandsSpecalities';

/**
 * 
 * @export
 * @interface TeacherAdministrationQueriesGetDetailsQueryResult
 */
export interface TeacherAdministrationQueriesGetDetailsQueryResult {
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    metadataId: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    teacherId: number;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    hourlyRate: number;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    teacherGuid: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    phoneNumber: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    youtubeVideoUrl: string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    isBankAccountSet: boolean;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    bankName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    bankAccountHolderName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    bankIban?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    rate: number;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    accentType: string;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    isOnline: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    isAvatarApproved: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    isAccountApproved: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    isBanned: boolean;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    banReason?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    bannedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    banHeldReason?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    banHeldAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    avatar1X: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    avatar2X: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    avatar3X: string;
    /**
     * 
     * @type {string}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    avatar4X: string;
    /**
     * 
     * @type {TeacherAdministrationCommandsSpecalities}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    specalities: TeacherAdministrationCommandsSpecalities;
    /**
     * 
     * @type {boolean}
     * @memberof TeacherAdministrationQueriesGetDetailsQueryResult
     */
    isZoomCreated?: boolean | null;
}

/**
 * Check if a given object implements the TeacherAdministrationQueriesGetDetailsQueryResult interface.
 */
export function instanceOfTeacherAdministrationQueriesGetDetailsQueryResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadataId" in value;
    isInstance = isInstance && "teacherId" in value;
    isInstance = isInstance && "hourlyRate" in value;
    isInstance = isInstance && "teacherGuid" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "phoneNumber" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "youtubeVideoUrl" in value;
    isInstance = isInstance && "isBankAccountSet" in value;
    isInstance = isInstance && "rate" in value;
    isInstance = isInstance && "accentType" in value;
    isInstance = isInstance && "isOnline" in value;
    isInstance = isInstance && "isAvatarApproved" in value;
    isInstance = isInstance && "isAccountApproved" in value;
    isInstance = isInstance && "isBanned" in value;
    isInstance = isInstance && "avatar1X" in value;
    isInstance = isInstance && "avatar2X" in value;
    isInstance = isInstance && "avatar3X" in value;
    isInstance = isInstance && "avatar4X" in value;
    isInstance = isInstance && "specalities" in value;

    return isInstance;
}

export function TeacherAdministrationQueriesGetDetailsQueryResultFromJSON(json: any): TeacherAdministrationQueriesGetDetailsQueryResult {
    return TeacherAdministrationQueriesGetDetailsQueryResultFromJSONTyped(json, false);
}

export function TeacherAdministrationQueriesGetDetailsQueryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeacherAdministrationQueriesGetDetailsQueryResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadataId': json['metadataId'],
        'teacherId': json['teacherId'],
        'hourlyRate': json['hourlyRate'],
        'teacherGuid': json['teacherGuid'],
        'name': json['name'],
        'phoneNumber': json['phoneNumber'],
        'email': json['email'],
        'description': json['description'],
        'youtubeVideoUrl': json['youtubeVideoUrl'],
        'isBankAccountSet': json['isBankAccountSet'],
        'bankName': !exists(json, 'bankName') ? undefined : json['bankName'],
        'bankAccountHolderName': !exists(json, 'bankAccountHolderName') ? undefined : json['bankAccountHolderName'],
        'bankIban': !exists(json, 'bankIban') ? undefined : json['bankIban'],
        'rate': json['rate'],
        'accentType': json['accentType'],
        'isOnline': json['isOnline'],
        'isAvatarApproved': json['isAvatarApproved'],
        'isAccountApproved': json['isAccountApproved'],
        'isBanned': json['isBanned'],
        'banReason': !exists(json, 'banReason') ? undefined : json['banReason'],
        'bannedAt': !exists(json, 'bannedAt') ? undefined : (json['bannedAt'] === null ? null : new Date(json['bannedAt'])),
        'banHeldReason': !exists(json, 'banHeldReason') ? undefined : json['banHeldReason'],
        'banHeldAt': !exists(json, 'banHeldAt') ? undefined : (json['banHeldAt'] === null ? null : new Date(json['banHeldAt'])),
        'avatar1X': json['avatar1X'],
        'avatar2X': json['avatar2X'],
        'avatar3X': json['avatar3X'],
        'avatar4X': json['avatar4X'],
        'specalities': TeacherAdministrationCommandsSpecalitiesFromJSON(json['specalities']),
        'isZoomCreated': !exists(json, 'isZoomCreated') ? undefined : json['isZoomCreated'],
    };
}

export function TeacherAdministrationQueriesGetDetailsQueryResultToJSON(value?: TeacherAdministrationQueriesGetDetailsQueryResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadataId': value.metadataId,
        'teacherId': value.teacherId,
        'hourlyRate': value.hourlyRate,
        'teacherGuid': value.teacherGuid,
        'name': value.name,
        'phoneNumber': value.phoneNumber,
        'email': value.email,
        'description': value.description,
        'youtubeVideoUrl': value.youtubeVideoUrl,
        'isBankAccountSet': value.isBankAccountSet,
        'bankName': value.bankName,
        'bankAccountHolderName': value.bankAccountHolderName,
        'bankIban': value.bankIban,
        'rate': value.rate,
        'accentType': value.accentType,
        'isOnline': value.isOnline,
        'isAvatarApproved': value.isAvatarApproved,
        'isAccountApproved': value.isAccountApproved,
        'isBanned': value.isBanned,
        'banReason': value.banReason,
        'bannedAt': value.bannedAt === undefined ? undefined : (value.bannedAt === null ? null : value.bannedAt.toISOString()),
        'banHeldReason': value.banHeldReason,
        'banHeldAt': value.banHeldAt === undefined ? undefined : (value.banHeldAt === null ? null : value.banHeldAt.toISOString()),
        'avatar1X': value.avatar1X,
        'avatar2X': value.avatar2X,
        'avatar3X': value.avatar3X,
        'avatar4X': value.avatar4X,
        'specalities': TeacherAdministrationCommandsSpecalitiesToJSON(value.specalities),
        'isZoomCreated': value.isZoomCreated,
    };
}

