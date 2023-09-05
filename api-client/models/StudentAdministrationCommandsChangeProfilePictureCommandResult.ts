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
import type { StudentAdministrationCommandsCreatedPhotoInfo } from './StudentAdministrationCommandsCreatedPhotoInfo';
import {
    StudentAdministrationCommandsCreatedPhotoInfoFromJSON,
    StudentAdministrationCommandsCreatedPhotoInfoFromJSONTyped,
    StudentAdministrationCommandsCreatedPhotoInfoToJSON,
} from './StudentAdministrationCommandsCreatedPhotoInfo';

/**
 * 
 * @export
 * @interface StudentAdministrationCommandsChangeProfilePictureCommandResult
 */
export interface StudentAdministrationCommandsChangeProfilePictureCommandResult {
    /**
     * 
     * @type {StudentAdministrationCommandsCreatedPhotoInfo}
     * @memberof StudentAdministrationCommandsChangeProfilePictureCommandResult
     */
    createdPhotoInfo: StudentAdministrationCommandsCreatedPhotoInfo;
}

/**
 * Check if a given object implements the StudentAdministrationCommandsChangeProfilePictureCommandResult interface.
 */
export function instanceOfStudentAdministrationCommandsChangeProfilePictureCommandResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdPhotoInfo" in value;

    return isInstance;
}

export function StudentAdministrationCommandsChangeProfilePictureCommandResultFromJSON(json: any): StudentAdministrationCommandsChangeProfilePictureCommandResult {
    return StudentAdministrationCommandsChangeProfilePictureCommandResultFromJSONTyped(json, false);
}

export function StudentAdministrationCommandsChangeProfilePictureCommandResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudentAdministrationCommandsChangeProfilePictureCommandResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdPhotoInfo': StudentAdministrationCommandsCreatedPhotoInfoFromJSON(json['createdPhotoInfo']),
    };
}

export function StudentAdministrationCommandsChangeProfilePictureCommandResultToJSON(value?: StudentAdministrationCommandsChangeProfilePictureCommandResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdPhotoInfo': StudentAdministrationCommandsCreatedPhotoInfoToJSON(value.createdPhotoInfo),
    };
}

